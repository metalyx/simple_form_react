import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Step1 } from './components/Step1';
import { Step2 } from './components/Step2';
import { Step3 } from './components/Step3';
import { Result } from './components/Result';

const App = () => {


  return (
    <Router>
        <div className="container" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100vw', height: '100vh', justifyContent:'center'}}>
        
          <Route exact path="/" component={Step1} />
          <Route path="/step2" component={Step2} />
          <Route path="/step3" component={Step3} />
          <Route path="/result" component={Result} />
        
        </div>
      </Router>
  )
}

export default App;
