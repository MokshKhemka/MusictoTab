import React, { useState } from 'react';
import styled from 'styled-components';
import GuitarTablature from './components/GuitarTablature';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 2rem;
`;

const MainContent = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Section = styled.section`
  background: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: monospace;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  background: #4a90e2;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 0.5rem;
  &:hover {
    background: #357abd;
  }
`;

// Map notes to string/fret (lowest possible position, standard tuning)
const noteToTab = {
  'E2': { string: 6, fret: 0 }, 'F2': { string: 6, fret: 1 }, 'F#2': { string: 6, fret: 2 }, 'G2': { string: 6, fret: 3 },
  'A2': { string: 5, fret: 0 }, 'A#2': { string: 5, fret: 1 }, 'B2': { string: 5, fret: 2 }, 'C3': { string: 5, fret: 3 },
  'D3': { string: 4, fret: 0 }, 'D#3': { string: 4, fret: 1 }, 'E3': { string: 4, fret: 2 }, 'F3': { string: 4, fret: 3 },
  'G3': { string: 3, fret: 0 }, 'G#3': { string: 3, fret: 1 }, 'A3': { string: 3, fret: 2 }, 'B3': { string: 3, fret: 4 },
  'C4': { string: 2, fret: 1 }, 'D4': { string: 2, fret: 3 }, 'E4': { string: 1, fret: 0 }, 'F4': { string: 1, fret: 1 },
  'G4': { string: 1, fret: 3 },
};

// Map single-letter notes to common open-position frets
const simpleNoteToTab = {
  'E': { string: 1, fret: 0 }, // high E string open
  'F': { string: 1, fret: 1 },
  'G': { string: 1, fret: 3 },
  'A': { string: 3, fret: 2 }, // G string, fret 2
  'B': { string: 2, fret: 0 },
  'C': { string: 2, fret: 1 },
  'D': { string: 2, fret: 3 },
};

function App() {
  const [noteInput, setNoteInput] = useState('E4 G4 B3 A');
  const [tabs, setTabs] = useState(null);

  const handleConvert = () => {
    const notes = noteInput.split(/\s+/).map(n => n.trim()).filter(Boolean);
    const tabNotes = notes.map(note => {
      if (noteToTab[note]) return { note, ...noteToTab[note] };
      if (simpleNoteToTab[note.toUpperCase()]) return { note, ...simpleNoteToTab[note.toUpperCase()] };
      return null;
    }).filter(Boolean);
    setTabs({ notes: tabNotes });
  };

  return (
    <Container>
      <Header>
        <h1>Text to Guitar Tab Converter</h1>
        <p>Enter notes (e.g., E4 G4 B3 A) and convert them to guitar tabs</p>
      </Header>
      <MainContent>
        <Section>
          <h2>Enter Notes</h2>
          <TextArea
            value={noteInput}
            onChange={e => setNoteInput(e.target.value)}
            placeholder="E4 G4 B3 A"
          />
          <Button onClick={handleConvert}>Convert to Tabs</Button>
        </Section>
        <Section>
          <h2>Guitar Tabs</h2>
          <GuitarTablature tabs={tabs} />
        </Section>
      </MainContent>
    </Container>
  );
}

export default App; 