  // REF - https://www.digitalocean.com/community/tutorials/react-axios-react-pt
  import React from 'react';
  import axios from 'axios';
  
  export default class CreatePersona extends React.Component {
    state = {
      name: '',
    }
  
    handleChange = event => {
      this.setState({ name: event.target.value });
    }
  
    handleSubmit = event => {
      event.preventDefault();
  
      const user = {
        name: this.state.name
      };
  
      
      axios.post(`http://localhost:3000/persona/`, { user })
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
    }
  
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Person Name:
              <input type="text" name="name" onChange={this.handleChange} />
            </label>
            <button type="submit">Add</button>
          </form>
        </div>
      )
    }
  }
