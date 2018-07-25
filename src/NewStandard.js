import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styles from './NewStandard.css'

class NewStandard extends React.Component {

    contactSubmit(e) {
        console.log('submit');
    }

	render() {
		return (
			<div>
				<h1>New Standard</h1>
                <form name="contactform" onSubmit={this.contactSubmit.bind(this)}>
                    <div>
                        <fieldset>
                            <input ref="name" type="text" size="30" placeholder="Name"/>
                            <br/>
                            <input refs="email" type="text" size="30" placeholder="Email"/>
                            <br/>
                            <input refs="phone" type="text" size="30" placeholder="Phone"/>
                            <br/>
                            <input refs="address" type="text" size="30" placeholder="Address"/>
                            <br/>
                        </fieldset>
                    </div>
                    <div className="col-md-12">
                        <fieldset>
                            <button className="btn btn-lg pro" id="submit" value="Submit">Send Message</button>
                        </fieldset>
                    </div>
                    </form>
				<Link to='/standards'>Back</Link>
			</div>
		);
	}
}

export default NewStandard


