import React,{useState,useEffect} from 'react';

import { Button,Label, TextInput } from "flowbite-react";
 import axios from 'axios';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';

const Login = () => {

        const [password, setPassword] = useState('');
        const [confirmpassword, setConfirmpassword] = useState('');
        const [email, setEmail] = useState('');
        const [alertpassword,setalertpassword] = useState('');
        const [helperpassword,sethelperpassword ] = useState('');
        const [alertemail,setalertemail ] = useState('');
        const [helperemail,sethelperemail ] = useState('');
        const [alertconfirmpass,setalertconfirmpass ] = useState('');
        const [helperconfirmpass,sethelperconfirmpass ] = useState('');
        const [ user, setUser ] = useState([]);
        const [ profile, setProfile ] = useState(null);

        const login = useGoogleLogin({
            onSuccess: (codeResponse) => setUser(codeResponse),
            onError: (error) => console.log('Login Failed:', error)
        });
        
        useEffect(
            () => {
                if (user) {
                     console.log(user)  
                     axios
                        .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                            headers: {
                                Authorization: `Bearer ${user.access_token}`,
                                Accept: 'application/json'
                            }
                        })
                        .then((res) => {
                            setProfile(res.data);
                            console.log(res.data)
                           
                        })
                        .catch((err) => console.log(err));
                }
            },
            [ user ]
        );
        const logOut = () => {
            googleLogout();
            setProfile(null);
        };

         const check=()=>{


            if(email ===''){
                setalertemail('failure');
                sethelperemail('Enter email');
            }
            else if(!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){
                setalertemail('failure');
                sethelperemail('Enter valid email');
            }
            else{
                setalertemail('success');
                sethelperemail('');
            }

            
             
            
           if(password ===''){
                setalertpassword('failure');
                sethelperpassword('Enter password');
            }
           else if(password.length<8){
                setalertpassword('failure');
                sethelperpassword('Password must be 8 characters long');

            }
            // password contain atleast one number
            else if(!/\d/.test(password)){
                setalertpassword('failure');
                sethelperpassword('Password must contain atleast one number');
            }
            // password contain atleast one lowercase
            else if(!/[a-z]/.test(password)){
                setalertpassword('failure');
                sethelperpassword('Password must contain atleast one lowercase');
            }
            // password contain atleast one uppercase
            else if(!/[A-Z]/.test(password)){
                setalertpassword('failure');
                sethelperpassword('Password must contain atleast one uppercase');
            }
            // password contain atleast one special character
            else if(!/[!@#$%^&*]/.test(password)){
                setalertpassword('failure');
                sethelperpassword('Password must contain atleast one special character');

            }
            else{
                setalertpassword('success');
                sethelperpassword('');

            }
            
            if(password===confirmpassword){
                setalertconfirmpass('success');
                
            }
            else{
                setalertconfirmpass('failure');
                sethelperconfirmpass('Password not match');
                
            }

         }
    return (
        <div className='w-screen h-screen bg-slate-200 flex justify-center items-center'>

             

<form className="flex max-w-md flex-col gap-4 bg-white p-5 rounded-3xl shadow-2xl shadow-black ">
<p className="text-xl font-extrabold text-gray-900 dark:text-white font-serif">Register Here</p>

  {/* email */}
      <div>
        <div className="mb-2 block">
          <Label className='text-xs font-bold' color={alertemail} htmlFor="email2" value="Your email" />
        </div>
        <TextInput id="email2" type="text" color={alertemail} onChange={(e)=>setEmail(e.target.value)}  placeholder="name@gmail.com" helperText={<span className='text-xs font-bold'>{alertemail==='failure'?`${helperemail}`:``}</span>} required shadow />
      </div>
{/* password */}
      <div>
        <div className="mb-2 block">
          <Label className='text-xs font-bold' htmlFor="password2" color={alertpassword} value="Your password" />
        </div>
        <TextInput id="password2" color={alertpassword} onChange={(e)=>setPassword(e.target.value)}  type="password"  helperText={<span className='text-xs font-bold'>{alertpassword==='failure'?`${helperpassword}`:``}</span>} required shadow />
      </div>


{/* confirm password */}
      <div>
        <div className="mb-2 block">
          <Label className='text-xs font-bold' htmlFor="repeat-password" color={alertconfirmpass} value="Repeat password" />
        </div>
        <TextInput id="repeat-password" color={alertconfirmpass} onChange={(e)=>setConfirmpassword(e.target.value)} type="password" helperText={<span className='text-xs font-bold'>{alertconfirmpass==='failure'?`${helperconfirmpass}`:``}</span>} required shadow/>
      </div>


      <div className="flex items-center gap-2">
       
      {profile ? (
                <div>
                    <img src={profile.picture} alt="user image" />
                    <h3>User Logged in</h3>
                    <p>Name: {profile.name}</p>
                    <p>Email Address: {profile.email}</p>
                    <br />
                    <br />
                    <button onClick={logOut}>Log out</button>
                </div>
            ) : (
                <button onClick={login}>Sign in with Google 🚀 </button>
            )} 
            
    </div>


      <Button onClick={check}>Register new account</Button>
    </form>

            
            
        </div>
    );
}

export default Login;


