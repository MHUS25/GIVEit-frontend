import React, { Component } from "react";
import axios from 'axios';


class FormListings extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      title: '',
      description: '',
      start_date: '',
      end_date: '',
      listing_type: '',
      location: ''
    };

    this.state = this.initialState;
  }


  submitForm = (ev) => {
    if(ev && ev.preventDefault) { ev.preventDefault() };
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
    axios.post('https://giveit-backend.herokuapp.com/listings',
  {
    data: {
      listing: {
        title: this.state.title,
        description: this.state.description,
        start_date: this.state.start_date,
        end_date: this.state.end_date,
        listing_type: this.state.listing_type,
        location: this.state.location
      }
    }
  })

  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  render() {
    const {
      title,
      description,
      start_date,
      end_date,
      listing_type,
      location
    } = this.state;

    return (
      <form>
        <label>Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={this.handleChange}
        />
        <label>Description</label>
        <input
          type="text"
          id="description"
          name="description"
          value={description}
          onChange={this.handleChange}
        />
        <label>Start Date</label>
        <input
          type="text"
          id="start_date"
          name="start_date"
          value={start_date}
          onChange={this.handleChange}
        />
        <label>End Date</label>
        <input
          type="text"
          id="end_date"
          name="end_date"
          value={end_date}
          onChange={this.handleChange}
        />
        <label>Listing Type</label>
        <input
          type="text"
          id="listing_type"
          name="listing_type"
          value={listing_type}
          onChange={this.handleChange}
        />
        <label>Location</label>
        <input
          type="text"
          id="location"
          name="location"
          value={location}
          onChange={this.handleChange}
        />
        <input
          type="submit"
          id="submit"
          value="submit"
          onClick={this.submitForm}
        />
      </form>
    );
  }
}

export default FormListings;
