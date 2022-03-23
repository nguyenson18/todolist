import { useState } from "react";
import "./App.css";
import Header from "./components/Header.js";
import TaskList from "./components/TaskList";
import AddTaskFrom from "./components/AddTaskFrom";

const App =  () =>{
    const [tasks, setTasks] = useState([
        {id:"task-1",title:"Learn JS", status: 0},
        {id:"task-2",title:"Code a Todo List", status: 0},
    ]);
    
    const [showIncomplete, setShowIncomplete] = useState(true   );
    const [newTask, setNewTask] = useState("");
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(newTask){
            const task = {
                id:Date.now(),
                title: newTask,
                status:0
            }
            setTasks([...tasks, task])
            setNewTask("")
        }
    }
    const handleInputChange= (e) =>{
        setNewTask(e.target.value)
    }
    const setTaskStatus = (taskId, status) =>{
        setTasks(tasks.map(task => {
            if(task.id === taskId){
                return{...task,status: status ? 1 : 0}
            }
            return task;
        }))
    }
    const removeTask= (taskId)=>{
        setTasks(tasks.filter((task) => task.id !== taskId));
    }

   return(
    <div className="container">
    <Header title="To Do List" subTitile="nothing"/>
    <TaskList 
    
    tasks={tasks} 
    showIncomplete={showIncomplete} 
    setTaskStatus={setTaskStatus} 
    removeTask={removeTask}
    setShowIncomplete={setShowIncomplete}
    />
    
    <AddTaskFrom  newTask ={newTask} handleInputChange={handleInputChange} handleSubmit={handleSubmit}/>
  </div>
   )
}
export default App;