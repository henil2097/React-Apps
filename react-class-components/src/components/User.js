import { Component } from 'react';

import classes from './User.module.css';

class User extends Component{
  componentWillUnmount() { // this is same as cleanup return code in useEffect(()=> { return ()=> {}}, [])
    console.log("User Component will get unmounted");
  }
  render () {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
