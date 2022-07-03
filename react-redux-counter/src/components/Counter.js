import { Component } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store/counter';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const showCounter = useSelector(state => state.counter.showCounter);
  
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
    // dispatch({ type: 'toggle' })
  };

  const increamentHandler = () => {
    dispatch(counterActions.increament());
    // dispatch({type: 'increament'});
  }

  const increaseHandler = () => {
    dispatch(counterActions.increase(10)); //redux-toolkit internally creates {type: 'SOME_UNIQUE_IDENTIFIER', payload: 10} on its own.
    // dispatch({ type: 'increase', value: 5})
  }
  const decreamentHandler = () => {
    dispatch(counterActions.decreament());
    // dispatch({type: 'decreament'});
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}> {counter} </div>}
      <div>
        <button onClick={increamentHandler}>Increament</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decreamentHandler}>Decreament</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;


//--------------------------- Using redux in class based components -----------------------

// class Counter extends Component {
//   increamentHandler() {
//     this.props.increament();
//   }

//   decreamentHandler() {
//     this.props.decreament();
//   }

//   toggleCounterHandler() {}

//   render () {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}> {this.props.counter} </div>
//         <div>
//           <button onClick={this.increamentHandler.bind(this)}>Increament</button>
//           <button onClick={this.decreamentHandler.bind(this)}>Decreament</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increament: () => dispatch({ type: 'increament' }),
//     decreament: () => dispatch({ type: 'decreament' })
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
