import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const products = [
    { name: "laptop", price: "9546" },
    { name: "tablet", price: "3546" },
    { name: "watch", price: "2346" },
    { name: "phone", price: "7546" },
  ];
  return (
    <div className="App">
      {
        <ExternalUsers></ExternalUsers>
        // <Counter></Counter>
        // products.map(product=> <Product name={product.name} price={product.price}></Product>)
      }
      {/* <Product name='laptop' price='4543'></Product>
     <Product name='watch' price='343'></Product>
     <Product name='phone' price='84500'></Product> */}
    </div>
  );
}

function ExternalUsers (){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return(
    <div>
      <h2>External Users</h2>
      {
        users.map(user => <User name={user.name } email={user.email}></User>)
      }
    </div>
  )
}

function User(props){
  return (
    <div>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(34);

  const IncreaseCount = () => setCount(count + 1);
  const DecreaseCount = () => setCount(count -1);

  // const [count, setCount] = useState(34);
  // const IncreaseCount = () =>{
  //   const newCount = count + 1;
  //   setCount(newCount)
  // }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={IncreaseCount}>Increase</button>
      <button onClick={DecreaseCount}>Decrease</button>
    </div>
  );
}

function Product(props) {
  return (
    <div className="product">
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  );
}
export default App;
