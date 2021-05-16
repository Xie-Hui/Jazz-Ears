import Layout from './layout';
import layout from '../styles/Layout.module.scss';
import styles from '../styles/Intervals.module.scss';
import { useEffect, useState } from 'react';
import { interval as Interval, note as Note } from 'sharp11';
import * as Tone from 'tone';
import { pickRandomly } from './utils/utils';
import { INTERVALS } from './constants/intervals';
import { RANGE } from './constants/notes';

const MAX_NOTES_COUNT = 5;
const ASC = '↑';
const DSC = '↓';

const getRandomInterval = () => {
  const interval = pickRandomly([ASC, DSC]) + pickRandomly(INTERVALS['keys']);
  console.log(interval);
  return interval;
};

const isDesc = (interval) => {
  if (interval[0] === DSC) {
    return true;
  } else {
    return false;
  }
};

const isNoteWithinRange = (note) => {
  return note.lowerThan(RANGE[1]) && note.higherThan(RANGE[0]);
};

export default function Intervals() {
  //create a synth and connect it to the main output (your speakers)
  const synth = new Tone.Synth().toDestination();
  const [notes, setNotes] = useState(['C4']);
  const [intervals, setIntervals] = useState([]);
  const [keyPressed, setKeyPressed] = useState(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    switch (keyPressed) {
      case 13: // space
      case 32: // enter, play sound
        handleCheck();
        break;
      case 39: // right arrow
        handleNext();
        break;
      case 37:
        // left arrow, go back
        handlePrev();
        break;
      default:
        break;
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [keyPressed]);

  const handlePrev = () => {
    console.log('prev');
    setOffset(offset + 1);
  };

  const handleNext = () => {
    if (offset !== 0) {
      setOffset(offset - 1);
      return null;
    }
    const interval = getRandomInterval();
    const nextNote = Note.create(notes[notes.length - 1])
      .transpose(interval.substring(1), isDesc(interval))
      .clean();
    if (isNoteWithinRange(nextNote)) {
      setNotes([
        ...notes.slice(Math.max(0, notes.length - MAX_NOTES_COUNT + 1)),
        nextNote.fullName,
      ]);
      setIntervals([
        ...intervals.slice(Math.max(0, intervals.length - MAX_NOTES_COUNT + 2)),
        interval,
      ]);
      setOffset(0);
      return null;
    } else {
      return handleNext();
    }
  };

  const handleCheck = () => {
    console.log('check');
    synth.triggerAttack(
      notes[Math.max(0, notes.length - offset - 1)],
      '+0.0',
      0.5
    );
  };
  const handleKeyDown = ({ keyCode }) => {
    console.log('keyDown', keyCode);
    if (!keyPressed) {
      setKeyPressed(keyCode);
    }
  };
  const handleKeyUp = () => {
    console.log('keyUp');
    if (keyPressed) {
      setKeyPressed(null);
    }
    synth.triggerRelease();
  };
  const showIntervalOrNotes = () => {
    if (notes.length - offset - 1 <= 0 || keyPressed === 13) {
      return notes[Math.max(0, notes.length - offset - 1)];
    } else {
      return intervals[Math.max(0, intervals.length - offset - 1)];
    }
  };

  return (
    <Layout>
      <div className={styles.viewPanel}>{showIntervalOrNotes()}</div>
      <div className={styles.controlPanel}>
        <button onClick={() => handlePrev()} className={layout.button}>
          Previous
        </button>
        <button
          onMouseDown={() => handleCheck(notes[notes.length - 1])}
          onMouseUp={() => handleKeyUp()}
          className={layout.button}
        >
          Check
        </button>
        <button onClick={() => handleNext()} className={layout.button}>
          Next
        </button>
      </div>
    </Layout>
  );
}
