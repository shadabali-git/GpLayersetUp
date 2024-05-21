import React,{useEffect, useState} from 'react';
import { FloatingLabel } from "flowbite-react";
import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom"
import GetDate from '../../utils/GetDate';
import Main from '../Dashboard/Main';


const CreateTask = ( {tasks,setTasks }) => {
    const navigate = useNavigate()
   
     const [taskName, setTaskName] = useState('');
     const [startingDate, setStartingDate] = useState(GetDate());
    
     const [endingDate, setEndingDate] = useState('');
     const [progress, setProgress] = useState('0%');


     const createTask1 = (e) => {
           
        // if(taskName === '' || startingDate === '' || endingDate === '' || progress === ''){
        //     return alert('Please fill all the fields')
        // }
        if(taskName === '' || endingDate === '' || progress === ''){
            return alert('Please fill all the fields')
        }
        else if(endingDate[endingDate.length-2]+endingDate[endingDate.length-1] < GetDate()[GetDate().length-2]+GetDate()[GetDate().length-1] ){
            alert('Ending date should be greater than or equal to current date')
        }
        else if(endingDate[endingDate.length-2]+endingDate[endingDate.length-1] === GetDate()[GetDate().length-2]+GetDate()[GetDate().length-1] && endingDate[endingDate.length-5]+endingDate[endingDate.length-4] < GetDate()[GetDate().length-5]+GetDate()[GetDate().length-4]){
            alert('Ending date should be greater than or equal to current date')
        }
        else if(endingDate[endingDate.length-2]+endingDate[endingDate.length-1] === GetDate()[GetDate().length-2]+GetDate()[GetDate().length-1] && endingDate[endingDate.length-5]+endingDate[endingDate.length-4] === GetDate()[GetDate().length-5]+GetDate()[GetDate().length-4] && endingDate[endingDate.length-8]+endingDate[endingDate.length-7] < GetDate()[GetDate().length-8]+GetDate()[GetDate().length-7]){
            alert('Ending date should be greater than or equal to current date')
        }
        else if(endingDate[endingDate.length-2]+endingDate[endingDate.length-1] === GetDate()[GetDate().length-2]+GetDate()[GetDate().length-1] && endingDate[endingDate.length-5]+endingDate[endingDate.length-4] === GetDate()[GetDate().length-5]+GetDate()[GetDate().length-4] && endingDate[endingDate.length-8]+endingDate[endingDate.length-7] === GetDate()[GetDate().length-8]+GetDate()[GetDate().length-7] && endingDate[endingDate.length-11]+endingDate[endingDate.length-10] < GetDate()[GetDate().length-11]+GetDate()[GetDate().length-10]){
            alert('Ending date should be greater')
        }
       else{
            // console.log(endingDate[endingDate.length-2]+endingDate[endingDate.length-1])
           
            setTasks((prevTasks) => [...prevTasks, {
                TaskName:taskName,
                StartingDate: startingDate,
                EndingDate:endingDate,
                progress:progress
            
            }]);
            navigate("/");
        
        }
          
     }
    
    return (
        <div className="bg-gray-200 flex flex-col w-screen h-screen">

        <Main/>
         
        <div className='justify-center flex m-4'>

           

           <div className="grid grid-col justify-stretch space-x-4">
           <h2 className='m-2 text-black font-bold flex justify-center'>New Task </h2>
           <FloatingLabel variant="filled" label="Task Name" sizing="sm" onChange={(e)=> setTaskName(e.target.value)}/>
           <FloatingLabel variant="filled" label="StartingDate" sizing="sm" value={startingDate} readOnly
            />
            
           <FloatingLabel type='date' variant="filled" label="EndingDate" sizing="sm"
           onChange={(e)=>setEndingDate(e.target.value)} />
           <FloatingLabel variant="filled" label="Progress" sizing="sm" value={progress} readOnly

           />
           <Button outline gradientDuoTone="purpleToBlue" onClick={createTask1}>
            Create Task
           </Button>
        

      </div>
          
            

             

        </div>

        </div>
    );
}

export default CreateTask;

