import React from 'react';

export default class Form extends React.Component {
  state = {
    title: '',
    body: '',
    location: '',
    startDate: '',
    endDate: ''
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return(
      <form>
      <input
      placeholder='title'
      value={this.state.title}
      onChange={e => this.setState({ title: e.target.value})}
      />
      <br/>

      <input
      placeholder='body'
      value={this.state.body}
      onChange={e => this.setState({ body: e.target.value})}
      />
      <br/>

      <input
      placeholder='location'
      value={this.state.location}
      onChange={e => this.setState({location: e.target.value})}
      />
      <br/>

      <input
      placeholder='start date'
      value={this.state.startDate}
      onChange={e => this.setState({startDate: e.target.value})}
      />
      <br/>

      <input
      placeholder='end date'
      value={this.state.endDate}
      onChange={e => this.setState({endDate: e.target.value})}
      />
      <br/>
      <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}
