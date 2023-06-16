import React from 'react';
import './App.css';
import CrystalList from './components/CrystalList';

// App is a component 
const crystalData = [
  {
    id: 1,
    name: "Amethyst",
    color: "Purple",
    powers: "Serving",
    charges: 0
  },
  {
    id: 2,
    name: "Tiger's Eye",
    color: "Orange",
    powers: "That gworl",
    charges: 0
  },
  {
    id: 3,
    name: "Rose Quartz",
    color: "Pink",
    powers: "Cuteness",
    charges: 0
  },
];


function App() {
  // we want react to know to update the crystalData
  const [crystals, setCrystals] = React.useState(crystalData)
  // map over each element inside of crystalData
  const increaseCharge = (id) => {
    setCrystals(prevCrystals => {
      const updatedCrystals = prevCrystals.map(crystal => {
        // below line is a ternary. ? => if this is true. : => else do this 
        // condition ? <value to return if true> : <value to return if false>
        return crystal.id === id ? {...crystal, charges: crystal.charges + 1} : crystal
      })
      return updatedCrystals
    })
  }
  const removeCrystal = (id) => {
    setCrystals(prevCrystals => {
      const updatedCrystals = prevCrystals.filter(crystal => crystal.id !== id)
      return updatedCrystals
    })
  }

  const totalCharges = () => {
    // of gives access to the actual element inside array
    let total = 0
    for (let crystal of crystals) {
      total += crystal.charges
    }
    return total
  }
  // loop over crystals 
  const title = "The Crystal Cove"
  return (
  <main className='App'>
    <h1>{title}</h1>
    <p>Total Charges: {totalCharges()}</p>
    {/* CrystalList is a nested component, key can be named whatever */}
    <CrystalList crystals={crystals} removeCrystal={removeCrystal} increaseCharge={increaseCharge}/>
  </main>
  );
}
export default App;
