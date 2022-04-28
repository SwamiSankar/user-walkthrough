import React, { useContext, useState } from 'react';
import { AppContext } from '../../App';

const InitialPage = () => {
  const [input, setInput] = useState('');
  const [fullName, setFullName] = useState('');
  const { dispatch } = useContext(AppContext);
  const onClick = () => {
    dispatch({
      type: 'PROGRESS_BAR',
      data: {
        progress: 50,
        page: 2,
        name: input,
      },
    });
  };

  return (
    <div className="initial-page-container">
      <h3>Welcome! First things first... </h3>
      <h4>You can always change them later</h4>
      <div className="initial-page-fields">
        <label className="initial-page-name-label">Full Name</label>
        <input
          type="text"
          className="initial-page-name-field"
          placeholder="Steve Jobs"
          required
          value={fullName}
          onInput={(e) => setFullName(e.target.value)}
        />
        <label className="initial-page-display-label">Display Name</label>
        <input
          type="text"
          className="initial-page-display-field"
          placeholder="Steve"
          value={input}
          required
          onInput={(e) => setInput(e.target.value)}
        />
        <button
          className="btn submit"
          onClick={onClick}
          disabled={!input || !fullName}
        >
          Create Workspace
        </button>
      </div>
    </div>
  );
};

export default InitialPage;
