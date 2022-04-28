import React, { useEffect, useReducer, useState } from 'react';
import './App.css';
import PageBar from './Components/PageBar';
import Header from './Components/Pages/Header';
import InitialPage from './Components/Pages/InitialPage';
import LinkPage from './Components/Pages/LinkPage';
import SuccessPage from './Components/Pages/SuccessPage';
import UserPage from './Components/Pages/UserPage';

export const AppContext = React.createContext();
const initialState = {
  progressBar: {
    progress: 25,
    page: 1,
    name: '',
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'PROGRESS_BAR':
      return {
        progressBar: action.data,
      };
    default:
      return initialState;
  }
};
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [pageNumber, setPageNumber] = useState(1);
  const [progressPercentage, setprogressPercentage] = useState(25);

  const switchPage = (page) => {
    switch (page) {
      case 1:
        return <InitialPage />;
      case 2:
        return <LinkPage />;
      case 3:
        return <UserPage />;

      case 4:
        return <SuccessPage />;
      default:
        return null;
    }
  };
  useEffect(() => {
    setPageNumber(state.progressBar.page);
    setprogressPercentage(state.progressBar.progress);
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="app-container">
        <Header />
        <PageBar percent={progressPercentage} />

        {switchPage(pageNumber)}
      </div>
    </AppContext.Provider>
  );
}

export default App;
