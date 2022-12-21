import React, { useState } from 'react'
import './App.css';
import SectionHome from './components/SectionHome';

function App() {
  const [subTitle, setSubtitle] = useState('Ini subtitle dari appjs')
  
  const handleChangeSubTitle = () => {
    setSubtitle('The subtitle has change from click')
  }

  return (
    <div className="App">
      <SectionHome subTitle={subTitle} />
      <button onClick={handleChangeSubTitle}>click to change the subtitle</button>
    </div>
  );
}

export default App;
