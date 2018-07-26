import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styles from './NewStandard.css'

class NewStandard extends React.Component {

	constructor(props){
    	super(props);

	    this.state = {
			fields: {},
			errors: {}
		}
  	}

    contactSubmit(e) {
		e.preventDefault();

    }

	handleValidation() {
    	let fields = this.state.fields;
    	let errors = {};
    	let formIsValid = true;

    	if (!fields["name"]) {
      		formIsValid = false;
      		errors["name"] = "Cannot be empty";
    	}

    	if (typeof fields["name"] !== "undefined") {
      		if (!fields["name"].match(/^[a-zA-Z0-9]+$/)) {
        		formIsValid = false;
        		errors["name"] = "Only letters and digits";
      		}      	
    	}

    	if (!fields["author"]) {
      		formIsValid = false;
      		errors["author"] = "Cannot be empty";
    	}

    	if (!fields["chords"]) {
      		formIsValid = false;
      		errors["chords"] = "Cannot be empty";
    	}

    	if (!fields["key"]) {
      		formIsValid = false;
      		errors["key"] = "Cannot be empty";
    	}

    	if (!fields["video"]) {
      		formIsValid = false;
      		errors["video"] = "Cannot be empty";
    	}

    	if (typeof fields["video"] !== "undefined") {
      		if (!fields["video"].match(/^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/)) {
        		formIsValid = false;
        		errors["video"] = "Only Youtube URL allowed";
      		}      	
    	}

    	this.setState({errors: errors});
    	return formIsValid;
  	}

	handleChange(field, e) {    		
    	let fields = this.state.fields;
    	fields[field] = e.target.value;       
		let valid = this.handleValidation();
    	this.setState({fields, valid: valid});
  	}

	render() {
		return (
			<div>
				<h1>New Standard</h1>
                <form class="new_standard_form" name="contactform" onSubmit={this.contactSubmit.bind(this)}>
                    <div>
                        <fieldset>
                            <input ref="name" type="text" size="30" placeholder="Name" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]}/>
							<span className="error">{this.state.errors["name"]}</span>
                            <br/>
                            <input refs="author" type="text" size="30" placeholder="Author" onChange={this.handleChange.bind(this, "author")} value={this.state.fields["author"]}/>
							<span className="error">{this.state.errors["author"]}</span>
                            <br/>
                            <input refs="chords" type="text" size="30" placeholder="Chords" onChange={this.handleChange.bind(this, "chords")} value={this.state.fields["chords"]}/>
							<span className="error">{this.state.errors["chords"]}</span>
                            <br/>
                            <input refs="key" type="text" size="30" placeholder="Key" onChange={this.handleChange.bind(this, "key")} value={this.state.fields["key"]}/>
							<span className="error">{this.state.errors["key"]}</span>
                            <br/>
                            <input refs="video" type="text" size="34" placeholder="Video" onChange={this.handleChange.bind(this, "video")} value={this.state.fields["video"]}/>
							<span className="error">{this.state.errors["video"]}</span>
                            <br/>
                        </fieldset>
                    </div>
                    <div className="col-md-12">
                        <fieldset>
                            <button className="btn btn-lg pro" id="submit" value="Submit" disabled={!this.state.valid}>Send Message</button>
                        </fieldset>
                    </div>
                </form>
				<Link to='/standards'>Back</Link>
			</div>
		);
	}
}

export default NewStandard


