import React, { Component } from 'react';
import './App.css';
import Contacts from './components/Contact/Contacts';
import Header from './components/Layout/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Provider  from './Context';
import AddContact from './components/Contact/AddContact';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/Pages/About/About';
import NotFound from './components/Pages/NotFound/NotFound';
import Test from './components/test/test';
import EditContact from './components/Contact/EditContact';

class App extends Component {
  render() { 
    return (
        <Provider>
          <Router>
           <div className="App">
           <Header branding='Contact Manager' />
           <div className='container'>
            <Switch>
                <Route exact path='/' component={Contacts} />
                <Route exact path='/contact/add' component={AddContact} />
                <Route exact path='/contact/edit/:id' component={EditContact} />
                <Route exact path='/about' component={About} />
                <Route exact path='/test' component={Test} />
                <Route component={NotFound} />
            </Switch>
           </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
