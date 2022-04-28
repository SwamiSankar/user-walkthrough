import React, { useContext, useState } from 'react';
import { AppContext } from '../../App';

const LinkPage = () => {
  const { state, dispatch } = useContext(AppContext);

  const [workspace, setWorkspace] = useState('');
  const [url, setUrl] = useState('');

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
          className="workspace-name-field"
          type="text"
          placeholder="Eden"
          value={workspace}
          onInput={(e) => setWorkspace(e.target.value)}
          required
        />
        <label className="workspace-url-label">Workspace URL(optional)</label>
        <div className="link-page-url-container">
          <span readOnly className="link-page-url">
            www.eden.com/
          </span>
          <input
            type="text"
            className="link-page-url-field"
            required
            value={url}
            onInput={(e) => setUrl(e.target.value)}
          />
        </div>
        <button
          className="btn submit"
          onClick={onClick}
          disabled={!workspace || !url}
        >
          Create Workspace
        </button>
      </div>
    </div>
  );
};

export default LinkPage;
