import React from 'react';
import './App.css';
import './styles/font-class.scss'
// import Builder from './Builder'
import TBuilder from './TBuilder'
// import fonts from './components/SelectFont/fonts'

function App() {
  // let fontsArray = fonts.map((font) => {
  //   return font.label
  // })
  // window.WebFont.load({
  //   google: {
  //     families: fontsArray
  //   }
  // });
  return (
    <div className="App">
      <TBuilder />
    </div>
  );
}

export default App;
