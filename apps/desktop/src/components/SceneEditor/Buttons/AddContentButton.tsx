import { useState } from 'react';

import './buttons.scss';

export const AddContentButton = () => {
  const [activeInput, setActiveInput] = useState(false);

  const addContent = () => {
    setActiveInput(false);
  };

  return (
    <div className="flex">
      {activeInput && (
        <div className='fixed'> 
          <input type="text" className="" placeholder="Content Name" />
          <button
            className= "add-content-btn"
            type='submit'
            onClick={() => {
              addContent();
            }}
          >
            Submit
          </button>
        </div>
      )}

      {!activeInput && (
        <button className="z-10" onClick={() => setActiveInput(true)}>
          Add Content
        </button>
      )}
    </div>
  );
};
