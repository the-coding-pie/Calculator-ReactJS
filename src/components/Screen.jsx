import React from 'react';

class Screen extends React.Component {
  render() {
    return <div className={this.props.name}>
      <span className="value">{this.props.value}</span>
    </div>;
  }
}

export default Screen;