import React from 'react';

import Authenticate from './Authenticate';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1> Hello Enophile </h1>
        <Authenticate title=" Enophiles List"/>
        <Authenticate title="Register your experiences"/>
        <Authenticate title="Record you best moments"/>
      </div>      
    );
  }
}
