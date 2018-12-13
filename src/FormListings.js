import React, { Component } from "react";

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
    this.setState(this.initialState);}

  handleFormSumbit(title, description, start_date, end_date, listing_type, location) {
   this.submitForm();
   let body = JSON.stringify({listing: {title: title, description: description, start_date: start_date, end_date: end_date, listing_type: listing_type, location: location}})
   fetch('https://giveit-backend.herokuapp.com/listings' , {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json'
     },
     body: body,
   })
 }
  render() {
   let formFields = {}
   return(
     <form>
       <input placeholder="Enter title" id="title" ref={input => formFields.title = input} type="text"/><br/>
       <input placeholder="Enter description" id="description" ref={input => formFields.description = input} type="text"/><br/>
       <input placeholder="Enter start_date" id="start_date" ref={input => formFields.start_date = input} type="text"/><br/>
       <input placeholder="Enter end_date" id="end_date" ref={input => formFields.end_date = input} type="text"/><br/>
       <input placeholder="Enter listing_type" id="listing_type" ref={input => formFields.listing_type = input} type="text"/><br/>
       <input placeholder="Enter location" id="location" ref={input => formFields.location = input} type="text"/><br/>

       <button onClick={ (e) => {
         this.handleFormSumbit(formFields.title.value, formFields.description.value, formFields.start_date.value, formFields.end_date.value, formFields.listing_type.value, formFields.location.value)
       }}>Submit</button>
     </form>
   )
 }
}

export default FormListings;
