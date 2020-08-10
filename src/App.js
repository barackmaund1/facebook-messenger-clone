import React ,{ useState }from 'react';
import './App.css';
import { Button, Input,FormControl,InputLabel } from '@material-ui/core';
import Message from './Message';

function App() {
  const [input,setInput]=useState('');
  const [messages,setMessages]=useState(['hello','hi'])

  console.log(input)
  console.log(messages)
  const sendMessage=(event) =>{
// all the logic to send a message goes
    event.preventDefault();
    setMessages([...messages,input]);
    setInput('');
  }
  return (
    <div className="App">
     <h1>Hello clever programmer 🚀 </h1>
     <form> 
      <FormControl>
        <InputLabel>Enter a message...</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)} />
        <Button disabled={!Input} variant='contained' color='primary' type='submit' onClick={sendMessage}>send message</Button>
        </FormControl> 
        {/*button*/}
        
     </form>
    
    
     {/*messages themselves*/}
     {
       messages.map( message => (
         <Message
         text={message}
         />
       
       )
      )}
     
    </div>
  );
}

export default App;
