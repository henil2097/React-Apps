import styles from "./UserItem.module.css";
const UserItem = (props) => {
  return <li className={styles.li}> {`${props.name} (${props.age})years`}</li>;
};

export default UserItem;
