import React, {Component} from 'react';
import Header from "./Header";
import {Link} from 'react-router-dom';

class AddSubscriber extends Component{
    constructor(){
        super();
        this.state={
            id:0,
            name:'',
            phone:''
        }
            
    }

    inputChangedHandler=(e)=>{
        const state = this.state;
        state[e.target.name]=e.target.value;
        this.setState(state);
    }

    onFormSubmitted=(e)=>{
        e.preventDefault();
        this.props.AddSubscriberHandler(this.state);
        this.setState({id: 0, name: '', phone: ''});
        this.props.history.push("/");
    }
    render(){
        const {name, phone}=this.state;
        return(
            <div>
                <Header heading="Add Subscriber"/>
            <div>
                <Link to="/"> <button>Back</button> </Link>
                <form onSubmit={this.onFormSubmitted.bind(this)}>
                    <label htmlFor='name'>Name: </label><br/>
                    <input type='text' id='name' name='name' onChange={this.inputChangedHandler}></input><br/><br/>
                    <label htmlFor='phone'>Phone: </label><br/>
                    <input type='text' id='phone' name='phone' onChange={this.inputChangedHandler}></input><br/><br/>
                    <span>Subscriber to be added</span><br/>
                    <span>Name:{name}</span><br/>
                    <span>Phone:{phone}</span><br/>
                    <button type='submit'>Add</button>
                </form>
            </div>
            </div>
        );
    }
    
    
}

export default AddSubscriber;