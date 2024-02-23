import React, { useState } from 'react';

function DraftMessageTextarea() {
  // State to manage the value of the textarea
  const [draftMessage, setDraftMessage] = useState('');

  // Event handler to update the draft message as the user types
  const handleDraftChange = (e) => {
    setDraftMessage(e.target.value);
  };

  // Function to handle submitting the form (you can customize this based on your needs)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission logic (e.g., sending the message)
    console.log('Draft Message Submitted:', draftMessage);
    // Reset the draft message after submission if needed
    setDraftMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Draft Message:
        <textarea
          value={draftMessage}
          onChange={handleDraftChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default DraftMessageTextarea;
