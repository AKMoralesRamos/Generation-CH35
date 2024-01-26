import './App.css';
import axios from 'axios';

function App() {
//
const getUsers = async () => {
  try {
const response = await axios.get("https://jsonplaceholder.typicode.com/users");
console.log(response.data);
console.log(response.data[1].name);
  } catch(error) {
    console.log('¡Peligro!', error);
  }
}

const postUsers = async () => {
  try {
    const url ="https://jsonplaceholder.typicode.com/posts";
    const user = {
      userId: 1994,
      title: "Desarrolladora FullStack",
      body: "Karen Morales"
    }
const response = await axios.post(url, user);
console.log(response);
console.log(response.data);
  } catch(error) {
    console.log('¡Cuidado!', error);
  }
}
  return (
    <>
      <div>
        <h1 className="box">HTTP - Axios</h1>
      </div>
      <div className="card">
        <button onClick={getUsers}>
          Get Method
        </button>
        <button onClick={postUsers}>
          Post Method
        </button>
      </div>
    </>
  )
}

export default App
