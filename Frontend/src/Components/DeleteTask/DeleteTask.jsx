import React from 'react';
import ReadTask from '../ReadTask/ReadTask';


const DeleteTask = ({tasks,Startworking,checked,confirmstatus,setConfirmstatus,route}) => {
    
    return (
        <>
          
          <ReadTask tasks={tasks} value={"You Can Delete"} progress={'0%'} Startworking={Startworking} checked={checked}  confirmstatus={confirmstatus} setConfirmstatus={setConfirmstatus} route={route}/>

      
        </>
    );
}

export default DeleteTask;
