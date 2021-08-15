import { useState } from "react";

const users = [
  {
    name: "Sarah",
    age: 20,
  },
  {
    name: "Alex",
    age: 26,
  },
  {
    name: "Michael",
    age: 32,
  },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number | undefined }>();

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });

    setUser(foundUser);
  };

  return (
    <div>
      <h3>Find User</h3>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Find User</button>
      <div>
        <h3>User Details</h3>
        <p>Name: {user && user.name}</p>
        <p>Age: {user && user.age}</p>
      </div>
    </div>
  );
};

export default UserSearch;
