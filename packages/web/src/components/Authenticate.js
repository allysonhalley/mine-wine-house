import React from 'react';

import User from './User';

export default class Authenticate extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      users: [],
      newUserData: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);

  }

  handleSubmit(e){
    this.setState({
      users: [
        ...this.state.users,
        { data: this.state.newUserData }
      ]
    });
    this.setState({ newUserData: '' });

    e.preventDefault();
  }

  handleTextChange(e){
    this.setState({ newUserData: e.target.value })
  }

  render() {
    return (
      <div>
        <h2>{ this.props.title }</h2>
        <form onSubmit={ this.handleSubmit }>
          <input value={ this.state.newUserData }
            onChange={ this.handleTextChange }
          />
          <button type="submit">Add</button>
        </form>
        {this.state.users.map((user, index) => {
          return <User key={index} data={user.data} />
        })}
      </div>      
    );
  }
}
