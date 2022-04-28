import React, { useContext } from 'react';
import { AppContext } from '../../App';

const SuccessPage = () => {
  const { state } = useContext(AppContext);
  return (
    <div className="success-page-container">
      <img
        src="/success-logo.png"
        className="success-logo"
        alt="success-logo"
      />
      <h3>Congratulations, {state.progressBar.name}!</h3>
      <h4>You have completed onboarding, you can start using the Eden</h4>
      <button className="btn submit">Launch Eden</button>
    </div>
  );
};

export default SuccessPage;
