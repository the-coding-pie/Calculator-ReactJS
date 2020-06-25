import React from 'react';
import Screen from './Screen';
import Keys from './Keys';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ""};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(currentValue) {
    if (currentValue === "C") {
      this.setState({value: ""});
    } else if (currentValue === "=") {
      this.setState({value: eval(this.state.value)});
    }else {
      this.setState({value: this.state.value + currentValue});
    }
  }

  render() {
    return <div className={this.props.name}>
      <Screen name="screen" value={this.state.value} />
      <Keys name="keys" onClick={this.handleClick} />
    </div>;
  }
}

export default Card;