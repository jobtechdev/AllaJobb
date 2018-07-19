import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    jsonGetAsync("http://pilot.arbetsformedlingen.se/searchapi/mvp/search?q=systemutvecklare%20i%20Stockholm&offset=0&limit=10&fromdatetime=2018-02-28%2000%3A00%3A01&sortorder=DEFAULT", (data) => {
      //alert(data.results);
    });
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <JobListing title="Test"/>
        <JobListing title="Test2"/>
        <JobListing title="Test3"/>
      </div>
    );
  }
}

export default App;

function JobListing(props) {
  return (
    <div class="Job">
      <h1>{props.title}</h1>
    </div>
  );
}

function jsonGetAsync(theUrl, success)
{
    httpGetAsync(theUrl, (data) => {
      try {
        success(JSON.parse(data));
      } catch (error) {}
    });
}

function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}
