
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useState } from "react";

 const  NavbarComponent=()=> {
    
     const [css,setcss]=useState(
       `block py-2 pl-3 pr-4 md:p-0 font-bold md:m-5 m-0 md:bg-transparent text-black`
     )
  return (
    <Navbar fluid rounded className="font-serif">
      <Navbar.Brand href="/">
        <img src="logoMain.png" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">To do List</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse >
      
        <NavLink to="/" className={`${css}`} > Read Task</NavLink>
      
        
        <NavLink to="/create" style={{}} className={`${css}`}> Create Task</NavLink> 
        
        <NavLink to="/delete" className={`${css}`} > Delete Task</NavLink>
       
        <NavLink to="/update" className={`${css}`}> Update Task</NavLink>
       
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;