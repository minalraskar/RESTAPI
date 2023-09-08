import "./styles.css";
import axios from "axios";
import { useEffect, useState } from "react";
export default function App() {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);
  /* POST REQUEST*/
  const postData = () => {
    axios.post("https://6487a212beba62972790dc8c.mockapi.io/user", {
      name: name,
      age: 34,
      hobbies: ["poetry", "Cooking", "Travelling"]
    });
  };
  /* UPDATING DATA*/
  const updateData = (id) => {
    axios
      .put(`https://6487a212beba62972790dc8c.mockapi.io/user/${id}`, {
        name: name,
        age: 34,
        hobbies: ["poetry", "Cooking", "Travelling", "Listening song"]
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  /*GET REQUEST */
  useEffect(() => {
    axios
      .get("https://6487a212beba62972790dc8c.mockapi.io/user")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="App">
      <input
        placeholder="Enter Name"
        onChange={(event) => setName(event.target.value)}
      />
      <button onClick={postData}>Post</button>
      {users.map((user) => {
        return (
          <>
            <h2>{`${user.id}.${user.name}`}</h2>
            <button onClick={() => updateData(user.id)}>update</button>
          </>
        );
      })}
    </div>
  );
}
