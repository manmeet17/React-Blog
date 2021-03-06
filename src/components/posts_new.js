import React,{Component} from 'react';
import { Field, reduxForm } from "redux-form";
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import { createPost } from '../actions';

class PostsNew extends Component{
    renderField(field){
        return(
            <div className="form-group has-danger">
            <label>{field.label}</label>
                <input
                className="form-control"
                type="text"
                //inbuilt property input
                {...field.input}
                />
                <div className="text-help">
            {field.meta.touched ? field.meta.error: ""}
            </div> 
            </div>
        );
    }

    onSubmit(values){
        this.props.createPost(values,() =>{
            this.props.history.push('/');
        });
    }

    render(){
        const {handleSubmit}=this.props;
        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                label="Title"
                //name connects to the errors objects properties
                name="title"
                component={this.renderField}
                />
                <Field
                label="Categories"
                name="categories"
                component={this.renderField}
                />
                <Field
                label="Content"
                name='content'
                component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link className="btn btn-secondary" to="/">
                Cancel
                </Link>
            </form>
        );
    }
}

function validate(values){
    // console.log(values);
    const errors={};

    if(!values.title){
        errors.title="Enter a title";
    }
    if(!values.categories){
        errors.categories="Enter some categories";
    }
    if(!values.content){
        errors.content="Enter some content";
    }
    //if errors is empty then its a valid form
    return errors;
}

export default reduxForm({
    validate: validate,
    form: 'PostsNewForm'
})(
   connect(null,{createPost})(PostsNew)
);