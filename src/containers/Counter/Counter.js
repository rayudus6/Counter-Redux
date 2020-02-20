import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementHandle} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementHandle}  />
                <CounterControl label="Add 5" clicked={this.props.onAddHandle}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubstractHandle}  />
                <hr />
                <button onClick={() =>this.props.storeTotalValue(this.props.ctr)}>Store Values!!</button>
                <ul>
                    {this.props.storedResults.map((res,i) =>{
                       return <li key={res.id+i} onClick={() =>this.props.deleteTheValue(res.id)}>{res.value}</li> 
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps= state =>{
    return{
        ctr:state.ctr.counter,
        storedResults:state.res.results
    }
}

const mapDispatchProps=dispatch =>{
    return{
        onIncrementHandle:() =>dispatch({type:actionTypes.INCREMENT}),
        onDecrementHandle:() =>dispatch({type:actionTypes.DECREMENT}),
        onAddHandle:() =>dispatch({type:actionTypes.ADD,val:5}),
        onSubstractHandle:() =>dispatch({type:actionTypes.SUBSTRACT,val:5}),
        storeTotalValue:(result) =>dispatch({type:actionTypes.STORE_RESULT,result:result}),
        deleteTheValue:(id) =>dispatch({type:actionTypes.DELETE_RESULT,resId:id})
    }
}

export default connect(mapStateToProps,mapDispatchProps)(Counter);