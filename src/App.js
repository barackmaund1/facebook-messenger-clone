import React ,{ useState,useEffect }from 'react';
import './App.css';
import { Button, Input,FormControl,InputLabel } from '@material-ui/core';
import Message from './Message';

function App() {
  const [input,setInput]=useState('');
  const [messages,setMessages]=useState([
    {username:'barack',text:'whats up'},
    {username:'Kyende',text:'hello'}
  ]);
  const [username,setUsername]=useState('');
//useState =variable in React
//useEffect = run code on a condition in React

  useEffect(() => {
    // run code before...
    //if its blank inside [],this code run ONCE when the app component loads
    setUsername(prompt('Please enter your name'))
  }, [])// condition

  const sendMessage=(event) =>{
// all the logic to send a message goes
    event.preventDefault();
    setMessages([...messages,{username:username,text:input}]);
    setInput('');
  }
  return (
    <div className="App">
     <h1>Hello clever programmer 🚀 </h1>
     <h2>Welcome {username}</h2>
     <form> 
      <FormControl>
        <InputLabel>Enter a message...</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)} />
        <Button disabled={!Input} variant='contained' color='primary' type='submit' onClick={sendMessage}>send message</Button>
        </FormControl> 
      </form>
    {/*messages themselves*/}
     {
       messages.map( message => (
         <Message
         username={username}
         message={message}
         />
       
       )
      )}
     
    </div>
  );
}

export default App;
