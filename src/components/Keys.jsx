import React from 'react';

class Keys extends React.Component {

  render() {
    return <div className={this.props.name}>
      <div className="row">
        <button name="7" onClick={(event) => {
          this.props.onClick(event.target.name);
        }}>7</button>
        <button name="8" onClick={(event) => {
          this.props.onClick(event.target.name);
        }}>8</button>
        <button name="9" onClick={(event) => {
          this.props.onClick(event.target.name);
        }}>9</button>
        <button name="*" onClick={(event) => {
          this.props.onClick(event.target.name);
        }}>*</button>
      </div>
      <div className="row">
        <button name="4" onClick={(event) => {
          this.props.onClick(event.target.name);
        }}>4</button>
        <button name="5" onClick={(event) => {
          this.props.onClick(event.target.name);
        }}>5</button>
        <button name="6" onClick={(event) => {
          this.props.onClick(event.target.name);
        }}>6</button>
        <button name="-" onClick={(event) => {
          this.props.onClick(event.target.name);
        }}>-</button>
      </div>
      <div className="row">
        <button name="1" onClick={(event) => {
          this.props.onClick(event.target.name);
        }}>1</button>
        <button name="2" onClick={(event) => {
          this.props.onClick(event.target.name);
        }}>2</button>
        <button name="3" onClick={(event) => {
          this.props.onClick(event.target.name);
        }}>3</button>
        <button name="+" onClick={(event) => {
          this.props.onClick(event.target.name);
        }}>+</button>
      </div>
      <div className="row">
        <button name="C" onClick={(event) => {
          this.props.onClick(event.target.name);
        }}>C</button>
        <button name="0" onClick={(event) => {
          this.props.onClick(event.target.name);
        }}>0</button>
        <button name="/" onClick={(event) => {
          this.props.onClick(event.target.name);
        }}>/</button>
        <button name="=" onClick={(event) => {
          this.props.onClick(event.target.name);
        }}>=</button>
      </div>
    </div>;
  }
}

export default Keys;