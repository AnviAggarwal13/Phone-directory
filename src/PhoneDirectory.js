import React, {Component} from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscribers from './ShowSubscribers';

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
        console.log("Phone directory")
        console.log(this.state.subscriberList)

    }
    render(){
        return(
            // <AddSubscriber AddSubscriberHandler={this.AddSubscriberHandler}/>
            <ShowSubscribers subscriberList={this.state.subscriberList}/>
        )
    }
}

export default PhoneDirectory;