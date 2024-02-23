import React, { useState } from 'react';

const YourComponent = () => {
  const [selectedOption, setSelectedOption] = useState('One Time');

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <div className='d-flex align-items-center justify-content-center gap-4'>
        <span className='d-flex align-items-center gap-3'>
          <input
            type="radio"
            id="One Time"
            name="fav_language"
            value="One Time"
            checked={selectedOption === 'One Time'}
            onChange={handleRadioChange}
          />
          <label htmlFor="One Time">One Time</label>
        </span>
        <span className="d-flex align-items-center gap-3">
          <input
            type="radio"
            id="Repeated"
            name="fav_language"
            value="Repeated"
            checked={selectedOption === 'Repeated'}
            onChange={handleRadioChange}
          />
          <label htmlFor="Repeated">Repeated</label>
        </span>
      </div>
      <div className='d-flex col-md-12 gap-2'>
        <div className='col-md-6'>
          {/* Rest of your code for One Time */}
          {selectedOption === 'One Time' && (
            <>
              <input
                label={"Meeting Title"}
                placeholder={"Enter the Contact Name"}
                labelClassName={"Select_label"}
                className={"input-size p-2"}
              />
              {/* Rest of your code for One Time */}
            </>
          )}

          {/* Rest of your code for Repeated */}
          {selectedOption === 'Repeated' && (
            <>
              <input
                label={"Meeting Title"}
                placeholder={"Enter the Contact Name for Repeated"}
                labelClassName={"Select_label"}
                className={"input-size p-2"}
              />
              {/* Rest of your code for Repeated */}
            </>
          )}
        </div>
        {/* Rest of your code */}
      </div>
    </div>
  );
};

export default YourComponent;
