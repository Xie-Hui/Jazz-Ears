import Layout from './layout';
import { chord as Chord } from 'sharp11';
import { useState } from 'react';
import { pickRandomly } from '../utils/utils';
import { SEVENTH_CHORDS } from '../constants/chords';
import styles from '../styles/Chords.module.scss';
import { FLAT } from '../constants/notes';

function Chords() {
  const [chords, setChords] = useState([]);
  const chordId = pickRandomly(SEVENTH_CHORDS.keys);
  const root = 'Db';
  const chord = Chord.create(root + chordId);
  return (
    <Layout>
      <div className={styles.chordName}>
        {root}
        <sup>{SEVENTH_CHORDS[chordId]['symbol']}</sup>
      </div>
      <div className={styles.chordTones}>
        {chord.chord.map((note) => {
          return <div className={styles.tone}>{note.clean().name}</div>;
        })}
      </div>
    </Layout>
  );
}

export default Chords;
