import React from 'react';

export default class User extends React.Component {
  render() {
    return (
      <h2>{ this.props.data }</h2>
    )
  }
}
