import React ,{ useState,useEffect }from 'react';
import './App.css';
import { Button, Input,FormControl,InputLabel } from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase'
import FlipMove from 'react-flip-move';
import Messenger from './images/Messenger.png';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  const [input,setInput]=useState('');
  const [messages,setMessages]=useState([]);
  const [username,setUsername]=useState('');
//useState =variable in React
//useEffect = run code on a condition in React

  useEffect(() => {
    // run code before...
    //if its blank inside [],this code run ONCE when the app component loads
    setUsername(prompt('Please enter your name'))
  }, [])// condition

 useEffect(() => {
   //run once when app component loads
   db.collection('messages').orderBy('timestamp','desc')
.onSnapshot(snapshot =>{
     setMessages(snapshot.docs.map(doc =>({id:doc.id,message:doc.data()})))
   })
   
 }, []) 

const sendMessage=(event) =>{
// all the logic to send a message goes
    event.preventDefault();
    
    db.collection('messages').add({
      message:input,
      username:username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
    })

    setMessages([...messages,{username:username,message:input}]);
    setInput('');
  }
  return (
    <div className="App">
    <img className='App__image' src={Messenger}/>
     <h1>Hello clever programmer 🚀 </h1>
     <h2>Welcome {username}</h2>
     <form className='App__form'> 
      <FormControl>
        <InputLabel>Enter a message...</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)} />
        <IconButton disabled={!Input} variant='contained' color='primary' type='submit' onClick={sendMessage}
        >
           <SendIcon/>
        </IconButton>
       
        </FormControl> 
      </form>
    {/*messages themselves*/}
      <FlipMove>
      {
        messages.map(({id,message})=> (
          <Message
          key={id}
          username={username}
          message={message}
          />
        )
      )}
    </FlipMove>
        
     
    </div>
  );
}

export default App;
