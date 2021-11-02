import React,{useState} from 'react';
import del from './Image/del.png'
import './App.scss';
function App() {
  let [task,settask]=useState()
  let [list,setlist]=useState([])
  let holdtask = (e)=>
  {
    settask(e.target.value)
  };
  let addtask=()=>
  {
    if(task!=="")
    {
    setlist([...list,task])
    document.getElementById('inp').value=""
    }
    settask("")
  }
  let taskdone=(e)=>
  {
    let id=e.target.id;
    let res = list.filter(item => item !==list[id])
    setlist([...res])
  }
  return (
    <div className="App">
      <div className="todo">
        <h1>To-Do List</h1>
        <input type="text" id="inp" onChange={holdtask}/>
        <button type="submit" onClick={addtask}>Submit</button>
        <ul>
        {
          list.map((item,index)=>
            {
              return(<li key={index}>
                <p>{item}</p>
                <img src={del} id={index} onClick={taskdone} alt="check button"/>
              </li>)
            })
        }
        </ul>
      </div>
    </div>
  );
}

export default App;
