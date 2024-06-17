
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import ReadTask from './Components/ReadTask/ReadTask'
import CreateTask from './Components/CreateTask/CreateTask'
import DeleteTask from './Components/DeleteTask/DeleteTask'
import Updatetask from './Components/UpdateTask/Updatetask'
import { useEffect, useState } from "react"
import Login from './Components/Login-SIgnup/Login/Login'




function App() {
  
  const [tasks, setTasks] = useState([{
    
    TaskName:"Morning walk",
    StartingDate: "2023:04:24",
    EndingDate:"2024-05-29",
    progress:10


   },

{
    TaskName:"Night walk",
    StartingDate: "2023:10:20",
    EndingDate:"2027-05-29",
    progress:80

}]);

  const [checked, setChecked] = useState(false);
  // index of task
  const [taskIndex, setTaskIndex] = useState(null);
  // delete task status 
  const [confirmstatus,setConfirmstatus] =useState([false,false]);
  
  const [ISworking, setIsworking] = useState(-1);


    const updateValue=(e)=>{

           setIsworking(e);
         
         
    }
    
     const Startworking=(e)=>{
       
        setConfirmstatus([false,false]);
        setTaskIndex(e);
        setChecked(true);
      }

     useEffect(() => {

      if(confirmstatus[1]===true && taskIndex !== null){
        tasks.splice(taskIndex,1)
        setChecked(false);
        setConfirmstatus([false,false]);
        
       }
        
    }, [confirmstatus[1],taskIndex]);

     
          






  return (
    <>
      

 <BrowserRouter>
      
      
             <Routes>
         
<Route path="/" 
            element={

            <ReadTask tasks={tasks} value={'Delete'} progress={'0%'} Startworking={Startworking} checked={checked}  confirmstatus={confirmstatus} setConfirmstatus={setConfirmstatus} route={'read'}/>

             }/>

<Route path="/create" 

            element={
             <CreateTask setTasks={setTasks}/>}
             />


<Route path="/delete" 

             element={
             <DeleteTask  tasks={tasks} Startworking={Startworking} checked={checked}  confirmstatus={confirmstatus} setConfirmstatus={setConfirmstatus} route={'delete'} />}
             />

<Route path="/update" 
               element={
               <Updatetask tasks={tasks} setTasks={setTasks} Startworking={updateValue} checked={checked}  confirmstatus={confirmstatus} setConfirmstatus={setConfirmstatus} route={'update'} ISworking={ISworking} setIsworking={setIsworking} />}
               />

<Route path="/login" 
               element={
                  <Login/>
               }
               />
<Route path="/register" 
               element={
                <h2> register page</h2>
               }
               />


            
              </Routes>

          

          
          
          
          </BrowserRouter>

           
    </>
  )
}

export default App

     