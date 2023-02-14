import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const handleCreateTable= async()=>{
    const res= await axios.get('/create-table');
    console.log({res})
  }
  const handleRemoveTable= async()=>{
    const res= await axios.get('/delete-dataset');
    console.log({res})
  }
  return (
    <div className="App" >
     <button onClick={handleCreateTable}>add table</button>
     <button onClick={handleRemoveTable}>remove dataset</button>
    </div>
  );
}

export default App;
