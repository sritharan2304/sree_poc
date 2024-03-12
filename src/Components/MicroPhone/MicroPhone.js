import React, { useState } from 'react';

function DataPagination() {
  const [transcript, setTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);

  const startListening = () => {
    setIsListening(true);
    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onresult = (event) => {
      let interimTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          setTranscript(transcript);
        } else {
          interimTranscript += transcript;
        }
      }
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error detected: ', event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  const stopListening = () => {
    setIsListening(false);
    window.webkitSpeechRecognition.stop();
  };

  return (
    <div>
      <h2>Speech to Text</h2>
      <button onClick={startListening} disabled={isListening}>Start Listening</button>
      <button onClick={stopListening} disabled={!isListening}>Stop Listening</button>
      <p>Transcript: {transcript}</p>
    </div>
  );
}

export default DataPagination;