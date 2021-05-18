import Layout from './layout';
import layout from '../styles/Layout.module.scss';
import styles from '../styles/Intervals.module.scss';
import { useEffect, useState } from 'react';
import { note as Note } from 'sharp11';
import * as Tone from 'tone';
import { pickRandomly } from '../utils/utils';
import { ASC, DSC, INTERVALS } from '../constants/intervals';
import { HALF_STEPS_TO_SCALE_DEGREE, RANGE } from '../constants/notes';

const MAX_NOTES_COUNT = 5;

const getRandomInterval = () => {
  const interval = pickRandomly([ASC, DSC]) + pickRandomly(INTERVALS['keys']);
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
    synth.triggerAttack(
      notes[Math.max(0, notes.length - offset - 1)],
      '+0.0',
      0.5
    );
  };
  const handleKeyDown = ({ keyCode }) => {
    if (!keyPressed) {
      setKeyPressed(keyCode);
    }
  };
  const handleKeyUp = () => {
    if (keyPressed) {
      setKeyPressed(null);
    }
    synth.triggerRelease();
  };
  const showIntervalOrNotes = () => {
    const note =
      notes.length - offset - 1 <= 0 || keyPressed === 13 || keyPressed === 32
        ? notes[Math.max(0, notes.length - offset - 1)]
        : intervals[Math.max(0, intervals.length - offset - 1)];

    return `${note}`;
  };

  const getScaleDegree = () => {
    if (intervals.length === 0) {
      return '1';
    }

    const signedInterval =
      intervals[Math.max(0, intervals.length - offset - 1)];
    const direction = signedInterval.slice(0, 1);
    const interval = signedInterval.slice(1);
    //console.log(signedInterval, direction, interval);
    const scaleDegree = INTERVALS[interval]['degree'][direction];

    return direction + ' ' + scaleDegree;
  };

  return (
    <Layout>
      <div className={styles.viewPanel}>
        <div className={styles.interval}>{showIntervalOrNotes()}</div>
        <div className={styles.scaleDegree}>{getScaleDegree()}</div>
      </div>
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
