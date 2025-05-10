import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';
import { Factory } from 'vexflow';

const DropzoneContainer = styled.div`
  border: 2px dashed #4a90e2;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  margin-bottom: 1rem;
  
  &:hover {
    background-color: rgba(74, 144, 226, 0.1);
  }
`;

const Preview = styled.img`
  max-width: 100%;
  margin-top: 1rem;
  border-radius: 4px;
`;

const ProcessingMessage = styled.div`
  color: #4a90e2;
  margin-top: 1rem;
  font-style: italic;
`;

const ErrorMessage = styled.div`
  color: #e74c3c;
  margin-top: 1rem;
  font-style: italic;
`;

const ImageUploader = ({ onNotesDetected }) => {
  const [image, setImage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);

  const processImage = async (imageFile) => {
    setIsProcessing(true);
    setError(null);

    try {
      // For demonstration purposes, we'll return a sample chord progression
      // In a real implementation, this would analyze the image
      const sampleNotes = {
        notes: [
          // First measure - E major chord
          { note: 'E4', string: 1, fret: 0 },
          { note: 'B3', string: 2, fret: 0 },
          { note: 'G3', string: 3, fret: 1 },
          { note: 'D3', string: 4, fret: 2 },
          { note: 'A2', string: 5, fret: 2 },
          { note: 'E2', string: 6, fret: 0 },
          // Second measure - A major chord
          { note: 'E4', string: 1, fret: 0 },
          { note: 'C4', string: 2, fret: 1 },
          { note: 'A3', string: 3, fret: 2 },
          { note: 'E3', string: 4, fret: 2 },
          { note: 'A2', string: 5, fret: 0 },
          { note: 'E2', string: 6, fret: 0 }
        ],
        measures: [
          {
            notes: ['E4', 'B3', 'G3', 'D3', 'A2', 'E2'],
            timeSignature: '4/4'
          },
          {
            notes: ['E4', 'C4', 'A3', 'E3', 'A2', 'E2'],
            timeSignature: '4/4'
          }
        ]
      };

      // Simulate processing delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      onNotesDetected(sampleNotes);
    } catch (error) {
      console.error('Error processing image:', error);
      setError('Failed to process the image. Please try a different image or try again later.');
    }
    
    setIsProcessing(false);
  };

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
        processImage(file);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg']
    },
    multiple: false
  });

  return (
    <div>
      <DropzoneContainer {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the image here...</p>
        ) : (
          <p>Drag and drop a sheet music image, or click to select one</p>
        )}
      </DropzoneContainer>
      
      {image && <Preview src={image} alt="Sheet music preview" />}
      
      {isProcessing && (
        <ProcessingMessage>
          Processing image... This may take a few moments.
        </ProcessingMessage>
      )}

      {error && (
        <ErrorMessage>
          {error}
        </ErrorMessage>
      )}
    </div>
  );
};

export default ImageUploader; 