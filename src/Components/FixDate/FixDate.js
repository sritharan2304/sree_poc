import React, { useState, useRef, useEffect } from "react";

const DataPagination = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Message 1", date: "2024-01-01" },
    { id: 2, text: "Message 2", date: "2024-01-01" },
    { id: 3, text: "Message 3", date: "2024-01-01 " },
    { id: 4, text: "Message 4", date: "2023-01-05" },
    { id: 5, text: "Message 5", date: "2023-01-05" },
    { id: 6, text: "Message 6", date: "2023-01-06" },
    { id: 7, text: "Message 7", date: "2023-01-06" },
    { id: 8, text: "Message 8", date: "2023-01-06" },
    { id: 9, text: "Message 9", date: "2023-01-08" },
    { id: 10, text: "Message 10", date: "2023-01-08" },
    { id: 11, text: "Message 11", date: "2023-01-08" },
    { id: 12, text: "Message 12", date: "2023-01-08" },
    { id: 13, text: "Message 13", date: "2023-01-10" },
    { id: 14, text: "Message 14", date: "2023-01-12" },
    { id: 15, text: "Message 15", date: "2023-01-12" },
    { id: 16, text: "Message 16", date: "2023-01-12" },
    { id: 17, text: "Message 17", date: "2023-01-13" },
  ]);

  const dateRef = useRef(null);

  useEffect(() => {
    // Initialize container scroll position to the bottom
    handleScroll();
  }, []);

  const handleScroll = () => {
    const dateElement = dateRef.current;

    // Set the initial fixed date based on the first message's date
    const initialFixedDate = messages.length > 0 ? messages[0].date : "";
    dateElement.textContent =
      initialFixedDate +
      " " +
      messages.filter((x) => x.date === initialFixedDate).length;

    // Handle scrolling logic here
    const datePosition = dateElement.getBoundingClientRect().top;

    let fixedDateIndex = 0;
    for (let i = 0; i < messages.length; i++) {
      const message = messages[i];
      const messageElement = document.getElementById(`message-${message.id}`);
      const messagePosition = messageElement.getBoundingClientRect().top;

      if (messagePosition > datePosition) {
        break;
      }

      fixedDateIndex = i;
    }

    const newDate = messages[fixedDateIndex].date;
    dateElement.textContent =
      newDate +
      " " +
      messages.filter((x) => x.date === messages[fixedDateIndex].date).length;

    if (datePosition < 0) {
      dateElement.style.position = "fixed";
      dateElement.style.top = "0";
    } else {
      dateElement.style.position = "static";
    }
  };

  return (
    <div>
      <div ref={dateRef}></div>
      <div
        onScroll={handleScroll}
        style={{ maxHeight: "200px", overflowY: "auto" }}
      >
        {messages.map((message, index) => (
          <div id={`message-${message.id}`} key={message.id}>
            {index > 0 && message.date !== messages[index - 1]?.date && (
              <div style={{ marginTop: "20px" }}>
                {message.date} &nbsp;
                {messages.filter((x) => x.date === message.date).length}
              </div>
            )}
            <div>{message.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataPagination;
