import React from 'react';
import { Table } from "flowbite-react";

import Confirm from '../Extra/Alert/Confirm';
import { useNavigate } from 'react-router-dom';
import Main from '../Dashboard/Main';

const ReadTask = ({ tasks, value ,progress,Startworking,checked,confirmstatus,setConfirmstatus,route}) => {
    const navigate = useNavigate();
    return (
      <div className="bg-gray-200 flex flex-col w-screen h-screen">

        <Main/>
        <div>
          <div  className={checked?`${confirmstatus[0]?'hidden':'flex'}`:'hidden'}>
          <Confirm setconfirmstatus={setConfirmstatus}/>
          </div>

   <div className="overflow-x-auto m-3 ">
   {tasks.length === 0?
    <Table>
      <Table.Body>
           <Table.Row className='opacity-50'>
            <Table.Cell className='flex items-center justify-center' > <img src='./empty.png' alt="" className='w-200 h-200' />
                            <h2 className='text-blue-500 font-serif font-extrabold text-xs md:text-3xl break-keep' >No Task Yet! Create New Task</h2>
              </Table.Cell>

           </Table.Row>
           </Table.Body>
           </Table>
           :
      <Table>
        <Table.Head>
          <Table.HeadCell>Task name</Table.HeadCell>
          <Table.HeadCell>Starting Time</Table.HeadCell>
          <Table.HeadCell>Ending Time</Table.HeadCell>
          <Table.HeadCell>Progress</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          

    {tasks.map((item,index) => 

        


       
           
          <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{item.TaskName}</Table.Cell>
            <Table.Cell>{item.StartingDate}</Table.Cell>
            <Table.Cell>{item.EndingDate}</Table.Cell>
            <Table.Cell>{progress}</Table.Cell>
             
           
           <Table.Cell>
              <a className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 cursor-pointer"
               onClick={()=>{
               
                if(route!=='update'){
                navigate('/delete')
                }
                Startworking(index)}
               } > 
                {value} 
              </a>
            </Table.Cell>
             
          </Table.Row>

      
                
                
    )}
     

        </Table.Body>

      </Table>
}

                         
           </div>
  

         
        </div>

      </div>
  
    );
}

export default ReadTask;
