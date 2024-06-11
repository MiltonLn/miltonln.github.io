import React, { Component } from 'react'

import { Header } from './components/header'
import { Footer } from './components/footer'

import { DATA } from './data'

import './App.css'


function App() {
  return (
    <div className="App">
      <Header data={DATA}/>
      <Footer data={DATA}/>
    </div>
  );
}

export default App
