import React, {Component} from 'react'
import './index.css';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            title: '',
            comment: '',
            errors:{}
        };

        this.initialState = this.state;
    }
    handleFormValidation() {
        const {name, email, title, comment} = this.state;
        let errors = {};
        let formIsValid = true;

        if (!name ) {
                formIsValid=false;
            errors["nameErr"] = "Name is required.";
        }else if(name.length<3 && name.length>15){
            errors["nameErr"] = "Name is should be 3-13 charachters.";
        }
        if (!email) {
            formIsValid = false;
            errors["emailErr"] = "Email is required.";
        } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            formIsValid = false;
            errors["emailErr"] = "Invalid email .";
        }
        if (!title) {
            formIsValid = false;
            errors["titleErr"] = "Title is required.";
        }
        if (!comment) {
            formIsValid = false;
            errors["commentErr"] = "Comment is required.";
        }
        this.setState({errors: errors});
        return formIsValid;

    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.handleFormValidation()){
            console.log("Form submitted");
         }else{
            console.log("Form has errors.")
         }
    }
    render() {
        return (

            <form action="" className="form" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="input name"
                    value={this.state.name}
                    onChange={this.handleChange}
                   />
                     <span className="error errorname" style={{color: "red"}}>{this.state.errors["nameErr"]}</span>
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="input email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  /> <span className="error erroremail" style={{color: "red"}}>{this.state.errors["emailErr"]}</span>
                <input
                    type="text"
                    name="title"
                    placeholder="Your Title"
                    className="input title"
                    value={this.state.title}
                    onChange={this.handleChange}
                   /> <span className="error errortittle" style={{color: "red"}}>{this.state.errors["titleErr"]}</span>
                <textarea
                    className="comment input"
                    placeholder="Your Comment"
                    name="comment"
                    value={this.state.comment}
                    onChange={this.handleChange}
                   ></textarea>
              <span className="error errorcomment" style={{color: "red"}}>{this.state.errors["commentErr"]}</span>
                <button className="contact-us">send message</button>
            </form>

        )
    }
}

export default Form;