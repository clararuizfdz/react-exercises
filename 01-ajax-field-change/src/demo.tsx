import React from "react";

const users = [
  { name: "maria" },
  { name: "paco" },
  { name: "pepe" },
  { name: "penelope" },
  { name: "juan" }
]
export const MyComponent = () => {
  const [filter, setFilter] = React.useState("");
  const [userCollection, setUserCollection] = React.useState([]);

  // Load full list when the component gets mounted and filter gets updated
  React.useEffect(() => {
    const newUsers = users.filter( e=> e.name.includes(`${filter}`));
    setUserCollection(newUsers);
  }, [filter]);

  return (
    <div>
      <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      <ul>
        {userCollection.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
