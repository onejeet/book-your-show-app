import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'; 
import ShowLayout from './ShowLayout';
import Dashboard from './Dashboard'; 
import Header from './Header'; 
import Home from './Home';
import Payments from './Payments';
import '../sass/style.scss';

const App = () => {
  return (
      <Router>
        <Header />
        <Route path="/" exact component={Home}/>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/show" component={ShowLayout} />
        <Route path="/payments" component={Payments} />
      </Router>
  );
} 

export default App;