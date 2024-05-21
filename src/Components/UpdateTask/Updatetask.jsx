import React, { useState } from 'react';
import ReadTask from '../ReadTask/ReadTask';
import ProgressComponent from '../Extra/ProgressBar/ProgressComponent';


const Updatetask = ({tasks,Startworking,checked,confirmstatus,setConfirmstatus,route}) => {
 
    return (
        

            <ReadTask   tasks={tasks} value={"You Can Update"} progress={<ProgressComponent/>} Startworking={Startworking} checked={checked}  confirmstatus={confirmstatus} setConfirmstatus={setConfirmstatus} route={route}/>
           
       
    );
}

export default Updatetask;
