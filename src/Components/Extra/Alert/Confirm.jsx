
"use client";

import { useState } from "react";

import { HiInformationCircle } from "react-icons/hi";
import { IoWarning } from "react-icons/io5";
import { Alert } from "flowbite-react";

const Confirm = ({setconfirmstatus}) => {
    
  return (
    <div className={`fixed z-40 w-screen h-screen flex justify-center bg-slate-300/50`}>

    <Alert className="h-1/6 m-5" additionalContent={<ExampleAdditionalContent setconfirmstatus={setconfirmstatus} />} color="blue" icon={HiInformationCircle}>
      <span className="font-medium"> Confirm !</span> You cannot get the deleted data.
    </Alert>
        
</div>
  );
}
export default Confirm;

function ExampleAdditionalContent({setconfirmstatus}) {
  return (
    <>
      <div className="mb-4 mt-2 text-sm text-cyan-700 dark:text-cyan-800">
        Are you sure you want to delete the data? This action cannot be undo.
      </div>
      <div className="flex">
        <button
          type="button"
          className="mr-2 inline-flex items-center rounded-lg bg-cyan-700 px-3 py-1.5 text-center text-xs font-medium text-white hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-800 dark:hover:bg-cyan-900"
           onClick={() => setconfirmstatus([true,true])}
        >
          <IoWarning className="-ml-0.5 mr-2 h-4 w-4" />
            Delete
        </button>
        <button
          type="button"
          className="rounded-lg border border-cyan-700 bg-transparent px-3 py-1.5 text-center text-xs font-medium text-cyan-700 hover:bg-cyan-800 hover:text-white focus:ring-4 focus:ring-cyan-300 dark:border-cyan-800 dark:text-cyan-800 dark:hover:text-white"
        onClick={()=>setconfirmstatus([true,false])} >
          Cancel
        </button>
      </div>
    </>
  );
}
