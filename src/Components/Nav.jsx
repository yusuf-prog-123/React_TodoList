import React, { useState } from 'react'
import logo from '../Asset/Logo.png'
import { MdDelete } from "react-icons/md";
import { ImMoveDown,ImMoveUp } from "react-icons/im";
function Nav() {

  const[task,settask]=useState(['Eat chick bun with macroni note that its not good for your helath though','Clean the Room','ML lecture 7 andrewNg','Ragnorak is coming','complete all dishes make sure that its absolutleyy clean to its core'])
  const[newtask,setnewtask]=useState("")


  function handleinput(event){

  }
  function addtask(){}
  function deletetask(index){}
  function mvtaskup(index){}
  function mvtaskdown(index){}

  return (
    <div className="flex flex-col items-center">
      <div className="text-7xl">To-Do-List</div>
      <div className="flex">
          <input
            type="text"
            placeholder="Enter task..."
            value={newtask}
            onChange={handleinput}
            className="rounded-md w-[500px] border border-stone-950 p-2"
          />
          <button className="ml-4 w-[100px]  bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"onClick={addtask}>Add</button>
      </div>
      <ol>
        {task.map((eletask,eleindex)=>
            <li key={eleindex} className='flex py-5 justify-between w-[500px]'>
                <span>{eleindex+1}. {eletask} </span> 
                <span className='flex'>
                  <button  className="rounded-xl text-xl text-black px-4 py-2  hover:bg-violet-600"onClick= {mvtaskup(eleindex)}>
                    <ImMoveUp/>
                  </button>
                  <button  className="rounded-xl text-xl text-black px-4 py-2  hover:bg-violet-600"onClick= {mvtaskdown(eleindex)}>
                    <ImMoveDown/>
                  </button>  
                  <button  className="rounded-xl text-xl  text-black px-4 py-2  hover:bg-red-600"onClick={deletetask(eleindex)}>
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
