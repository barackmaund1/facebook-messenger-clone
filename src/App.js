import React ,{ useState }from 'react';
import './App.css';

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
        {/* input field*/}
        <input value={input} onChange={event => setInput(event.target.value)}/>
        {/*button*/}
        <button type='submit' onClick={sendMessage}>send message</button>
     </form>
    
    
     {/*messages themselves*/}
     {
       messages.map( message => (
        <p>{message}</p>
       )
      )}
     
    </div>
  );
}

export default App;
