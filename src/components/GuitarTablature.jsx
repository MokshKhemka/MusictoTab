import React from 'react';
import styled from 'styled-components';

const TabContainer = styled.pre`
  font-family: monospace;
  background: #f5f5f5;
  padding: 1rem;
  border-radius: 4px;
  line-height: 1.2;
  font-size: 1.2rem;
  color: #333;
`;

const GuitarTablature = ({ tabs }) => {
  // Default empty tab structure
  const stringNames = ['e', 'B', 'G', 'D', 'A', 'E'];

  if (!tabs || !tabs.notes || tabs.notes.length === 0) {
    return (
      <TabContainer>
        e|-----------------|
        B|----------------|
        G|----------------|
        D|----------------|
        A|----------------|
        E|----------------|
      </TabContainer>
    );
  }

  // Build tab lines
  // Each note gets 3 dashes of spacing
  const spacing = 3;
  const tabLines = {
    e: 'e|',
    B: 'B|',
    G: 'G|',
    D: 'D|',
    A: 'A|',
    E: 'E|',
  };

  tabs.notes.forEach(noteObj => {
    // For each string, add either the fret or dashes
    for (let i = 0; i < stringNames.length; i++) {
      const string = stringNames[i];
      // Map string number to string name
      // 1: e, 2: B, 3: G, 4: D, 5: A, 6: E
      const stringNum = 6 - i;
      if (noteObj.string === stringNum) {
        // Place the fret number, pad with dashes if needed
        const fret = String(noteObj.fret);
        // If fret is more than 1 char, adjust spacing
        const pad = '-'.repeat(Math.max(0, spacing - fret.length));
        tabLines[string] += fret + pad;
      } else {
        tabLines[string] += '-'.repeat(spacing);
      }
    }
  });

  // End each line with |
  for (let s of stringNames) {
    tabLines[s] += '|';
  }

  return (
    <TabContainer>
      {stringNames.map(s => tabLines[s]).join('\n')}
    </TabContainer>
  );
};

export default GuitarTablature; 