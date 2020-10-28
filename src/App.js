import './App.css';
import GeneralInfo from './components/General-Info';
import EducationalInfo from './components/Educational-Info';
import PracticalExp from './components/Practical-Exp'
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>CV Application</h1>
          <hr />
        </header>
        <div>
          <GeneralInfo />
          <EducationalInfo />
          <PracticalExp />
        </div>
      </div>
    );
  }
}

export default App;
