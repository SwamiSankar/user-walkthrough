import React from 'react';
import 'react-step-progress-bar/styles.css';
import { ProgressBar, Step } from 'react-step-progress-bar';

const PageBar = ({ percent }) => {
  const transitionStyles = {
    entering: { transform: 'scale(1.5)' },
    entered: { transform: 'scale(1)' },
    exiting: { transform: 'scale(1.5)' },
    exited: { transform: 'scale(1)' },
  };
  return (
    <ProgressBar percent={percent} filledBackground="rgb(102,77,229)">
      <Step>
        {({ accomplished, transitionState, index }) => (
          <div
            className={`indexedStep ${accomplished ? 'accomplished' : ''}`}
            style={transitionStyles[transitionState]}
          >
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, transitionState, index }) => (
          <div
            className={`indexedStep ${accomplished ? 'accomplished' : ''}`}
            style={transitionStyles[transitionState]}
          >
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, transitionState, index }) => (
          <div
            className={`indexedStep ${accomplished ? 'accomplished' : ''}`}
            style={transitionStyles[transitionState]}
          >
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, transitionState, index }) => (
          <div
            className={`indexedStep ${accomplished ? 'accomplished' : ''}`}
            style={transitionStyles[transitionState]}
          >
            {index + 1}
          </div>
        )}
      </Step>
    </ProgressBar>
  );
};

export default PageBar;
