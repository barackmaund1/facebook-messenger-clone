import React ,{useState}from 'react';
import './App.css';

function App() {
  const [input,setInput]=useState('');
  const [messsages,setMessages]=useState([])

  console.log(input)
  console.log(messsages)
  const sendMessage=(event) =>{
// all the logic to send a message goes
    setMessages([...messsages,input]);
    setInput('')
  }
  return (
    <div className="App">
     <h1>Hello clever programmer 🚀 </h1>
     {/* input field*/}
     <input value={input} onChange={event => setInput(event.target.value)}/>
     <button onClick={sendMessage}>send message</button>
     {/*button*/}
     {/*messages themselves*/}
    </div>
  );
}

export default App;
