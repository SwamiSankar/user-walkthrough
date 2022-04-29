import React, { useContext, useState } from 'react';
import { AppContext } from '../../App';
import { determineValidation } from '../../utils/validation';

const LinkPage = () => {
  const { state, dispatch } = useContext(AppContext);

  const [workspace, setWorkspace] = useState({
    value: '',
    isValid: false,
    isTouched: false,
  });
  const [url, setUrl] = useState({
    value: '',
    isValid: false,
    isTouched: false,
  });

  const onClick = () => {
    dispatch({
      type: 'PROGRESS_BAR',
      data: {
        progress: 75,
        page: 3,
        name: state.progressBar.name,
      },
    });
  };
  return (
    <div className="link-page-container">
      <h3>Let's set up a home for all your work </h3>
      <h4>You can always create another workspace later.</h4>
      <div className="link-page-fields">
        <label className="workspace-name-label">Workspace Name</label>
        <input
          className={`workspace-name-field ${determineValidation(
            workspace.isTouched,
            workspace.isValid
          )}`}
          type="text"
          placeholder="Eden"
          value={workspace.value}
          onInput={(e) => {
            if (e.target.value === '') {
              return setWorkspace((prev) => ({
                ...prev,
                value: e.target.value,
                isValid: false,
              }));
            }
            return setWorkspace((prev) => ({
              ...prev,
              value: e.target.value,
              isValid: true,
            }));
          }}
          onBlur={() => setWorkspace((prev) => ({ ...prev, isTouched: true }))}
          required
        />
        {workspace.isTouched && !workspace.isValid ? (
          <span className="error-message">This is a required field</span>
        ) : null}
        <label className="workspace-url-label">Workspace URL(optional)</label>
        <div className="link-page-url-container">
          <span readOnly className="link-page-url">
            www.eden.com/
          </span>
          <input
            type="text"
            className={`link-page-url-field ${determineValidation(
              url.isTouched,
              url.isValid
            )}`}
            required
            value={url.value}
            onInput={(e) => {
              if (e.target.value === '') {
                return setUrl((prev) => ({
                  ...prev,
                  value: e.target.value,
                  isValid: false,
                }));
              }
              return setUrl((prev) => ({
                ...prev,
                value: e.target.value,
                isValid: true,
              }));
            }}
            onBlur={() => setUrl((prev) => ({ ...prev, isTouched: true }))}
          />
          {url.isTouched && !url.isValid ? (
            <span className="error-message">This is a required field</span>
          ) : null}
        </div>
        <button
          className="btn submit"
          onClick={onClick}
          disabled={!workspace.isValid || !url.isValid}
        >
          Create Workspace
        </button>
      </div>
    </div>
  );
};

export default LinkPage;
