import React, { useState } from 'react';
import ReadTask from '../ReadTask/ReadTask';
import { Table, TableRow } from "flowbite-react";
import ProgressComponent from '../Extra/ProgressBar/ProgressComponent';
import Confirm from '../Extra/Alert/Confirm';
import { Button } from 'flowbite-react';
import GetDate from '../../utils/GetDate';



const Updatetask = ({tasks,setTasks,Startworking,checked,confirmstatus,setConfirmstatus,route,ISworking,setIsworking}) => {

      const [itemName, setitemName] = useState('');
      const [startingDate, setStartingDate] = useState('');
      const [endingDate, setEndingDate] = useState('');
      const [progress, setProgress] = useState(0);
      
     
    function handleChanges() {
        

        tasks.map((item,index)=>{
               
            if(ISworking===index){

                  if(itemName!==''){
                      item.TaskName=itemName;
                      item.StartingDate=startingDate;
                      item.EndingDate=endingDate;
                     
                 
                  }
                  
                  else{
                      alert('Task Name is not changed');
                  }

                  if(progress <= 100 && progress >= 0){
                      item.progress=progress;
                     
                  }
                  else{
                      alert('Progress should be between 0 to 100');
                  }
            }})
            

        setIsworking(-1)
         
      }
 
    return (
        
         <>
          
        <div className={ISworking===-1?`hidden`:`flex w-screen p-10 h-screen bg-slate-200/75 absolute z-50 justify-center gap-5 items-center flex-col`}>      
           <div className='bg-white rounded-2xl p-4'>
           <h2 className='font-bold'> Edit Here </h2> 
          <Table className='bg-slate-100 rounded-3xl'>
          <Table.Body>
          {tasks.map((item,index)=>
            ISworking===index?
            <Table.Row key={index}>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  <input type="text" className='w-1/2 m-0 rounded-lg bg-inherit' placeholder={item.TaskName} 
                  onChange={(e)=>setitemName(e.target.value)}/>
                  </Table.Cell>
            <Table.Cell> <input type="text" className='w-1/2 rounded-lg bg-inherit' placeholder={item.StartingDate}
            onChange={(e)=>setStartingDate(GetDate())} /> </Table.Cell>
            <Table.Cell>
            <input type="date" className='rounded-lg bg-inherit' 
           
            placeholder={item.EndingDate}  onChange={(e)=>setEndingDate(e.target.value)}  />
            </Table.Cell>
            <Table.Cell>
            <input type="number" className='w-1/2 rounded-lg bg-inherit' placeholder={item.progress} onChange={(e)=>setProgress(e.target.value)}  />
            
            </Table.Cell>
               </Table.Row>:'')}
               
               </Table.Body>
               </Table>
               <div className=''>
                 <div  className='flex  justify-center gap-4 m-2'>
               <Button outline gradientDuoTone="purpleToBlue" 
                 onClick={handleChanges}>
                     Update
               </Button>
              
               <Button outline gradientDuoTone="purpleToBlue" onClick={()=>setIsworking(-1)}>
                     Cancel 
               </Button>
              

                </div>
                   
               </div>
               </div>
            </div>


          
         <ReadTask   tasks={tasks} value={"You Can Update"} progress={<ProgressComponent value={progress}/>} Startworking={Startworking} checked={checked}  confirmstatus={confirmstatus} setConfirmstatus={setConfirmstatus} route={route}/>
      </>  
           
    );
}

export default Updatetask;
