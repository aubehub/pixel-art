import React from 'react';
import './App.css';

export class PaletteGrid extends React.Component {
  constructor(props) {
    super(props)

    this.setPenColor = this.setPenColor.bind(this);
    this.setPixelColor = this.setPixelColor.bind(this);
  }

  setPenColor(newColor){
    this.props.updatePenColor(newColor)
  }

  setPixelColor(x,y){
    this.props.updatePixelColor(x,y)
  }

  render() {

    const rows = []
    for (let y = 0; y < 10; y++) {
      const pixel = []
      for (let x = 0; x < 10; x++) {
        const backgroundColor = this.props.grid[x] ? 
          (this.props.grid[x][y] ? this.props.grid[x][y] : '') : '';
        pixel.push(
          <div className="pixel" key={x} style={{background: backgroundColor}} onClick={() => this.setPixelColor(x,y)}>
          </div>
        )
      }
      rows.push(<div className="row" key={y}>
        {pixel}
      </div>)
    }

    return (
      <div className="wrap-palette_grid">
        <div id="palette">
          <div className="pen" id="purple" onClick={() => this.setPenColor('rgb(206, 95, 206)')}></div>
          <div className="pen" id="black" onClick={() => this.setPenColor('black')}></div>
          <div className="pen" id="yellow" onClick={() => this.setPenColor('yellow')}></div>
          <div className="pen" id="red" onClick={() => this.setPenColor('red')}></div>
          <div className="pen" id="green" onClick={() => this.setPenColor('rgb(53, 175, 53)')}></div>
          <div className="pen" id="brown" onClick={() => this.setPenColor('brown')}></div>
        </div>

        <div id="art">
          {rows}
        </div>

      </div>
    )
  }
}


