// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

const heading = "Hello React";
const myStyle = {
  backgroundColor: "green",
  padding: "10px",
  borderRadius: "6px",
}
const divStyle = {
  width: "500px",
  border: "2px solid gray",
  padding: "10px",
  borderRadius: '6px',
  margin: "10px 0"
}


function App() {
  function Sibling() {
  const siblingNames = ["Laizu", "Razu", "Arzu", "AAzim", "Alif", "Lamisa"];

    return (
      <div>
        <ul>
        {
          siblingNames.map(myName => <li>{myName}</li>)
        }
        </ul>
      </div>
    )
  };

  function Card() {
    const siblings = [
      {name : "AAzim Uddon", title : "Web Developer", occupation : "developer"},
      {name : "Arzu Hosen", title : "Hundi Business", occupation : "business"},
      {name : "Razu Ahmed", title : "English Teacher", occupation : "teacher"},
      {name : "Alif Khatun", title : "Student of Madrasa", occupation : "student"},
      {name : "Laizu Khatun", title : "House Worker", occupation : "worker"}
    ];
    return (
      <div>
         {
          siblings.map(element => <Person brosis= {element} />)
        }  
      </div>
    )
  };
  function Person(props) {
    const {name, title, occupation} = props.brosis;
       return (
        <div className='bgimg' style={divStyle}>
          <h1>{name}</h1>
          <h3>{title}</h3>
          <p>As a junior {occupation}</p>
          <button>Click Me</button>
        </div>
       )
  };
  
  function Counter() {
    const [count, setCount] = useState(0);
    const handleIncrease = () => {
      const newCount = count + 1;
      setCount(newCount);
    }
    const handleDecrease = () => {
      const newCount = count -1;
      setCount(newCount);
    }
  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={handleIncrease} disabled = {count === 5 ? true : false}>Increase Button</button>
        <button onClick={handleDecrease} disabled = {count === 0 ? true : false}>Decrease Button</button>
    </div>
  )
  };

  function Userdata() {
    const [users, setUsers] = useState([]);
     useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data))
    }, []);
          return(
            <div>
        <h2>User length : {users.length}</h2>
              <ul>
                {
                 users.map(user => <li>{user.name}</li>)
                }
              </ul>
            </div>
          )
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={myStyle}>{heading}</h1>
        <Userdata />        
        <Counter />
        <Sibling />  
        <Card />                 
      </header>
    </div>
  );
}


export default App;
