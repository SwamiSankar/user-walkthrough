import React, { useContext } from 'react';
import { AppContext } from '../../App';
import UserCard from '../Cards/UserCard';

const UserPage = () => {
  //These steps are to prevent the & based XSS attack
  let encodedStr = 'Wikis, docs, tasks &amp; projects, all in one place';

  let parser = new DOMParser();
  let dom = parser.parseFromString(
    '<!doctype html><body>' + encodedStr,
    'text/html'
  );
  let decodedString = dom.body.textContent;

  const { state, dispatch } = useContext(AppContext);

  //On click function dispatches the details to context object
  const onClick = () => {
    dispatch({
      type: 'PROGRESS_BAR',
      data: {
        progress: 100,
        page: 4,
        name: state.progressBar.name,
      },
    });
  };

  return (
    <div className="user-page-container">
      <h3>How are you planning to use Eden ?</h3>
      <h4>We'll streamline your step experience accordingly</h4>
      <div className="user-cards-container">
        <UserCard
          type="solo"
          message="Write better. Think more clearly. Stay organized"
          heading="For myself"
        />
        <UserCard type="group" message={decodedString} heading="With my team" />
      </div>
      <button className="btn submit" onClick={onClick}>
        Create Workspace
      </button>
    </div>
  );
};

export default UserPage;
