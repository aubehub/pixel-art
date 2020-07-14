import React from 'react';
import './App.css';
import { PaletteGrid } from './Palette_grid';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      color: '',
      grid: [],
    }
    this.updatePenColor = this.updatePenColor.bind(this);
    this.updatePixelColor = this.updatePixelColor.bind(this)
  }


  updatePenColor(newColor){
    this.setState({
      color: newColor
    })
  }

  updatePixelColor(x, y) {
    const newGrid = this.state.grid;
    if (!newGrid[x]) {
      newGrid[x] = [];
    }
    newGrid[x][y] = this.state.color;
    this.setState(newGrid);
  }

  resetFunction(){
    this.setState({
      color: '',
      grid:[]
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Pixel Art</h1>
          <p>Choose your color in the palet and start creating art!</p>
        </header>

        <div className="palette_board-div">
          <PaletteGrid updatePixelColor={this.updatePixelColor}
                        updatePenColor={this.updatePenColor}
                        grid={this.state.grid}
          />
        </div>
        <button className="reset" onClick={() => this.resetFunction()}>Reset</button>
      </div>
    );
  }
}

export default App;
