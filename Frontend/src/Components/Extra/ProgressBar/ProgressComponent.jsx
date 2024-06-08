import React from 'react';
import { Progress } from "flowbite-react";
const ProgressComponent = ({value}) => {
    return (
        
      <Progress
      progress={value}
      progressLabelPosition="inside"
      textLabelPosition="outside"
      size="lg"
      labelProgress
      
     
    />
            
        
    );
}

export default ProgressComponent;
