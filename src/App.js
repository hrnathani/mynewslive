import React, { Component } from 'react';
import NavBar from './Components/NavBar';
import News from './Components/News';
import {
  BrowserRouter as Router,

  Route,
  Routes,

} from "react-router-dom";

export default class App extends Component {
  render() {
    return (


      <Router>

        <NavBar />
        <Routes>
          <Route path="/" element={<News key="general" category="general" country="in" pageSize={6} />}></Route>
          <Route exact path="/business" element={<News key="business" category="business" country="in" pageSize={6} />}></Route>
          <Route exact path="/entertainment" element={<News key="entertainment" category="entertainment" country="in" pageSize={6} />}></Route>
          <Route path="/general" element={<News key="general" category="general" country="in" pageSize={6} />}></Route>
          <Route path="/health" element={<News key="health" category="health" country="in" pageSize={6} />}></Route>
          <Route path="/science" element={<News key="science" category="science" country="in" pageSize={6} />}></Route>
          <Route path="/sports" element={<News key="sports" category="sports" country="in" pageSize={6} />}></Route>
          <Route path="/technology" element={<News key="technology" category="technology" country="in" pageSize={6} />}></Route>

        </Routes>
      </Router>

        );
  }
}
