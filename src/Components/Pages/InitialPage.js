import React, { useContext, useState } from 'react';
import { AppContext } from '../../App';
import { determineValidation } from '../../utils/validation';

const InitialPage = () => {
  //State for the display name field
  const [input, setInput] = useState({
    value: '',
    isValid: false,
    isTouched: false,
  });

  //State for the full name field
  const [fullName, setFullName] = useState({
    value: '',
    isValid: false,
    isTouched: false,
  });

  //Setting the values to the context object using dispatch
  const { dispatch } = useContext(AppContext);

  //On click function dispatches the details to context object
  const onClick = () => {
    dispatch({
      type: 'PROGRESS_BAR',
      data: {
        progress: 50,
        page: 2,
        name: input.value,
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
          className={`initial-page-name-field ${determineValidation(
            fullName.isTouched,
            fullName.isValid
          )}`}
          placeholder="Steve Jobs"
          required
          value={fullName.value}
          onInput={(e) => {
            if (e.target.value === '') {
              return setFullName((prev) => ({
                ...prev,
                value: e.target.value,
                isValid: false,
              }));
            }
            return setFullName((prev) => ({
              ...prev,
              value: e.target.value,
              isValid: true,
            }));
          }}
          onBlur={() => setFullName((prev) => ({ ...prev, isTouched: true }))}
        />
        {fullName.isTouched && !fullName.isValid ? (
          <span className="error-message">This is a required field</span>
        ) : null}
        <label className="initial-page-display-label">Display Name</label>
        <input
          type="text"
          className={`initial-page-display-field ${determineValidation(
            input.isTouched,
            input.isValid
          )}`}
          placeholder="Steve"
          value={input.value}
          onChange={(e) => {
            if (e.target.value === '') {
              return setInput((prev) => ({
                ...prev,
                value: e.target.value,
                isValid: false,
              }));
            }
            return setInput((prev) => ({
              ...prev,
              value: e.target.value,
              isValid: true,
            }));
          }}
          onBlur={() => setInput((prev) => ({ ...prev, isTouched: true }))}
          required
        />
        {input.isTouched && !input.isValid ? (
          <span className="error-message">This is a required field</span>
        ) : null}
        <button
          className={`btn submit ${
            !input.isValid || !fullName.isValid ? 'disabled' : ''
          }`}
          onClick={onClick}
          disabled={!input.isValid || !fullName.isValid}
        >
          Create Workspace
        </button>
      </div>
    </div>
  );
};

export default InitialPage;
