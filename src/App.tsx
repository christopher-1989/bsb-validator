import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { bsbList } from './bsbList';


function App() {

  const [bsb, setBsb] = useState<string>('');
  const [bsbBank, setBsbBank] = useState('');

  const validateBsbFormat = (stringToTestForRegex: string): boolean => {
    const regexConst = new RegExp(/\d{3}-{1}\d{3}/);
    return regexConst.test(stringToTestForRegex);
  }

  const handleChange = (bsbStringToTest: string) => {
    if(bsbStringToTest.length !== 7) {
      return 
    }
    if (validateBsbFormat(bsbStringToTest)) {
        const bsbMatchedIndex = bsbList.findIndex(element => element.bsbNum === bsbStringToTest)
        if (bsbMatchedIndex === -1) {
          setBsb('Invalid BSB')
          setBsbBank('');
          return
        }

        const bsbNum = bsbList[bsbMatchedIndex].bsbNum;
        const bsbBank = bsbList[bsbMatchedIndex].bank;
        setBsb(bsbNum)
        setBsbBank(bsbBank)
    } else {
      setBsb('Incorrect BSB format. Should be in the form XXX-XXX');
      setBsbBank('');
    }

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form>
          <label>
            BSB:
            <input type="text" name="name" onChange={(event) => handleChange(event.target.value)}/>
          </label>
          <input type="submit" value="Reset" /><br/>
          <label>{bsb}</label><br/>
          <label>{bsbBank}</label>
        </form>
       
      </header>
    </div>
  );
}

export default App;
