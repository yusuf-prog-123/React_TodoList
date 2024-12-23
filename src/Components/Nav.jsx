import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { ImMoveDown,ImMoveUp } from "react-icons/im";
function Nav() {

  const[tasks,settask]=useState(['Eat chick bun with macroni note that its not good for your helath though'])
  const[newtasks,setnewtask]=useState("")


  function handleinput(event){
    setnewtask(event.target.value)
    
  }
  function addtask(){
    if(newtasks.trim() !== ""){
        settask(t=>[...t,newtasks]);
        setnewtask("");
    }
    else{
      alert("Please Enter Task !");
    }
  }
  function deletetask(index){
    const updatedtasks=(curtasks)=>{
      const updatedTasks = curtasks.filter(function(task, i) {
        return i !== index;  // Only keep tasks that don’t match the `index` we want to remove
      });
      return updatedTasks
    }
  
    settask(updatedtasks);

  }
  function mvtaskup(index){
    if(index>0){
      const updatedTasks = [...tasks];
      /**Array Destructuring to sap 2 elements ithin an array */
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
      settask(updatedTasks);

    }
  }
  function mvtaskdown(index){
    if(index < tasks.length - 1){
      const updatedTasks = [...tasks];
      /**Array Destructuring to sap 2 elements ithin an array */
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      settask(updatedTasks);
    }

  }

  return (
    <div className="flex flex-col items-center">
      <div className="text-7xl">To-Do-List</div>
      <div className="flex fixed mt-20">
          <input
            type="text"
            placeholder="Enter task..."
            value={newtasks}
            onChange={handleinput}
            className="rounded-md w-[500px] border border-stone-950 p-2 mr-14 ml-10"
          />
          <button className="ml-4 w-[100px]  bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"onClick={addtask}>Add</button>
      </div>
      <ol className='mt-14'>
        {tasks.map((eletask,eleindex)=>
            <li key={eleindex} className='flex py-5 justify-between w-[500px]'>
                <span>{eleindex+1}. {eletask} </span> 
                <span className='flex'>
                  <button  className="rounded-xl text-xl text-black px-4 py-2  hover:bg-violet-600" onClick={() => mvtaskup(eleindex)}>
                    <ImMoveUp/>
                  </button>
                  <button  className="rounded-xl text-xl text-black px-4 py-2  hover:bg-violet-600" onClick={() => mvtaskdown(eleindex)}>
                    <ImMoveDown/>
                  </button>  
                  <button  className="rounded-xl text-xl  text-black px-4 py-2  hover:bg-red-600" onClick={() => deletetask(eleindex)}>
                    <MdDelete/>
                  </button>                                        
                </span> 
            </li>        
        )}
      </ol>    
    </div>
  )
}

export default Nav
