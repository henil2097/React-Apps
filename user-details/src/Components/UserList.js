import UserItem from "./UserItem";
import Card from "../UI/Card";
const UserList = (props) => {
  return (
    <Card>
      <ul>
        {props.list?.map((d) => (
          <UserItem key={d.id} name={d.name} age={d.age} />
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
