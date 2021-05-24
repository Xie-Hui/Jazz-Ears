import Layout from './layout';
import { chord as Chord, note as Note } from 'sharp11';
import { useEffect, useState } from 'react';
import { pickRandomly } from '../utils/utils';
import * as Tone from 'tone';
import { SEVENTH_CHORDS } from '../constants/chords';
import styles from '../styles/Chords.module.scss';
import layout from '../styles/Layout.module.scss';
import { FLAT, HALF_STEPS_TO_SCALE_DEGREE, RANGE } from '../constants/notes';

const ASC = 'ASC';
const DSC = 'DSC';
const RANDOM = 'RANDOM';

const getRandomNoteWithinRange = (range = RANGE) => {
  const note = Note.random([Note.create(range[0]), Note.create(range[1])]);
  return note.flat().clean();
};

// Rotate in place
const arrayRotate = (arr, n) => {
  for (let i = 0; i < n; i++) {
    arr.push(arr.shift());
  }
};

const getRandomChordWithRoot = (root, voicing_config) => {
  const chordId = pickRandomly(SEVENTH_CHORDS.keys);
  const chord = Chord.create(root.name + chordId, root.octave);
  switch (pickRandomly(voicing_config)) {
    case DSC:
      chord.chord.reverse();
      break;
    case RANDOM:
      arrayRotate(chord.chord, pickRandomly(chord.chord.length) + 1);
      break;
    case ASC:
      break;
    default:
      break;
  }
  return chord;
};

const getScaleDegree = (root, note) => {
  let rootObj = root;
  let noteObj = note;
  const halfSteps = rootObj.getHalfSteps(noteObj);
  return HALF_STEPS_TO_SCALE_DEGREE[halfSteps];
};

const renderChordTones = (chord) => {
  return (
    <div className={styles.chordTones}>
      {chord.chord.map((note, index) => (
        <div className={styles.tone} key={index}>
          {getScaleDegree(chord.root, note)}
        </div>
      ))}
    </div>
  );
};

function Chords() {
  //create a synth and connect it to the main output (your speakers)
  const synth = new Tone.Synth().toDestination();

  const [chord, setChord] = useState(null);
  const [voicingConfig, setVoicingConfig] = useState([ASC, DSC]);

  useEffect(() => {
    if (!chord) {
      getRandomChord();
    }
  }, []);

  const getRandomChord = () => {
    const root = getRandomNoteWithinRange();
    setChord(getRandomChordWithRoot(root, voicingConfig));
  };

  const handleCheckRoot = () => {
    const {
      root: { name, octave },
    } = chord;
    synth.triggerAttackRelease(name + octave, '0.3s', '+0.0', 0.5);
  };

  const handleCheckVoicing = (e, type) => {
    if (e.target.checked) {
      setVoicingConfig([...voicingConfig, type]);
    } else {
      setVoicingConfig(voicingConfig.filter((item) => item !== type));
    }
  };

  const handleCheckChord = () => {
    const DURATION = 0.5;
    const GAP = 0.1;
    chord.chord.forEach((note, index) => {
      synth.triggerAttackRelease(
        note.fullName,
        `${DURATION}s`,
        `+${index * DURATION + GAP}'`,
        0.5
      );
    });
  };

  const handleNext = () => {
    getRandomChord();
  };

  return (
    chord && (
      <Layout>
        <div className={styles.chordName}>
          {chord.root.name}
          <sup>{SEVENTH_CHORDS[chord.symbol]['symbol']}</sup>
        </div>
        <div className={styles.chordTones}>{renderChordTones(chord)}</div>
        <div className={styles.controlPanel}>
          <button onClick={() => handleCheckRoot()} className={layout.button}>
            Root
          </button>
          <button onClick={() => handleCheckChord()} className={layout.button}>
            Check
          </button>
          <button onClick={() => handleNext()} className={layout.button}>
            Next
          </button>
        </div>
        <div className={styles.settingPanel}>
          <div className={styles.settingItem}>
            <input
              type="checkbox"
              id="voicing_asc"
              name="voicing_asc"
              onChange={(e) => handleCheckVoicing(e, ASC)}
              defaultChecked
            />
            <label htmlFor="voicing_asc">ascending</label>
          </div>
          <div className={styles.settingItem}>
            <input
              type="checkbox"
              id="voicing_dsc"
              name="voicing_dsc"
              onChange={(e) => handleCheckVoicing(e, DSC)}
              defaultChecked
            />
            <label htmlFor="voicing_dsc">descending</label>
          </div>
          <div className={styles.settingItem}>
            <input
              type="checkbox"
              id="voicing_random"
              name="voicing_random"
              onChange={(e) => handleCheckVoicing(e, RANDOM)}
            />
            <label htmlFor="voicing_random">all inversions</label>
          </div>
        </div>
      </Layout>
    )
  );
}

export default Chords;
