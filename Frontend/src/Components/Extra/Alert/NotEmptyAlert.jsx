
"use client";

import { Alert } from "flowbite-react";

export default function NotEmptyAlert({value,setAlertValue} ) {
  return (
    <Alert className="flex justify-center items-center" color="blue" onDismiss={() =>setAlertValue('')}>
      <span className="font-medium"> ! </span> {value}
    </Alert>
  );
}
