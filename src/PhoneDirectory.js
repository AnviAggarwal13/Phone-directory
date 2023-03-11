import React, {Component} from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscribers from './ShowSubscribers';
import {BrowserRouter, Routes,Route} from "react-router-dom";

class PhoneDirectory extends Component{
    constructor(){
        super();
        this.state={
            subscriberList:[{
                id: 1,
                name: 'Shilpa', 
                phone: '98989'
            },
            {
                id: 2,
                name: 'srishti',
                phone: '54844'
            }]
        }
    }

    AddSubscriberHandler=(newSubscriber)=>{
        let subscriberList=this.state.subscriberList;
        if(subscriberList.length>0){
            newSubscriber.id=subscriberList[subscriberList.length-1].id+1;
        }else{
            newSubscriber.id=1;
        }
        subscriberList.push(newSubscriber);
        this.setState({subscriberList:subscriberList});
    }

    render(){
        return(
            <BrowserRouter>
            <div>
                <Routes>
                <Route exact path='/' render={(props)=> <ShowSubscribers {...props} subscriberList={this.state.subscriberList}/>}/>
                <Route exact path='/add' render={({history}, props)=> <AddSubscriber history={history} {...props} AddSubscriberHandler={this.state.AddSubscriberHandler}/>} />
                </Routes>
            </div>
            </BrowserRouter>
        );
    }
}

export default PhoneDirectory;