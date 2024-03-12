import React, { useState, useEffect } from 'react';

const YourComponent = () => {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Fetch data from your first API
    const fetchData1 = async () => {
      try {
        const response = await fetch('your_first_api_endpoint');
        const result = await response.json();
        setData1(result);
      } catch (error) {
        console.error('Error fetching data from the first API:', error);
      }
    };

    // Fetch data from your second API
    const fetchData2 = async () => {
      try {
        const response = await fetch('your_second_api_endpoint');
        const result = await response.json();
        setData2(result);
      } catch (error) {
        console.error('Error fetching data from the second API:', error);
      }
    };

    fetchData1();
    fetchData2();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter the data based on the search query for both datasets
  const filteredData1 = data1.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredData2 = data2.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearch}
      />

      <div>
        <h2>Data from API 1</h2>
        <ul>
          {filteredData1.map((item) => (
            <li key={item.id}>{item.name}</li>
            // Adjust this based on your API response structure
          ))}
        </ul>
      </div>

      <div>
        <h2>Data from API 2</h2>
        <ul>
          {filteredData2.map((item) => (
            <li key={item.id}>{item.name}</li>
            // Adjust this based on your API response structure
          ))}
        </ul>
      </div>
    </div>
  );
};

export default YourComponent;
