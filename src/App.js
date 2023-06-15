import React from 'react';
import './App.css';
import CrystalList from './components/CrystalList';

// App is a component 
const crystalData = [
  {
    id: 1,
    name: "Amethyst",
    color: "Purple",
    powers: "Serving"
  },
  {
    id: 2,
    name: "Tiger's Eye",
    color: "Orange",
    powers: "That gworl"
  },
  {
    id: 3,
    name: "Rose Quartz",
    color: "Pink",
    powers: "Cuteness"
  },
];


function App() {
  const title = "The Crystal Cove"
  return (
  <main className='App'>
    <h1>{title}</h1>
    {/* CrystalList is a nested component, key can be named whatever */}
    <CrystalList crystals={crystalData}/>
  </main>
  );
}
export default App;
