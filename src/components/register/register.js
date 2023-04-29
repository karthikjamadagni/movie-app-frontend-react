import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './register.css'
import axios from "axios";


const Register = () => {

    const handleClick =()=>{
        navigate('/login');
    }

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    })

    const register = ()=>{

        const{name, email, password} = user;
        if(name && email && password){
            if(email.includes('@') && email.includes('com') && email.includes('.')){
            axios.post("https://movie-backend2-cbib.onrender.com/register", user)
            .then(res=>alert(res.data.message));
            navigate('/login');
            }
            else{
                alert("Gmail must contain @ . and com");
            }

        }
        else{
            alert("Invalid Input");
        }

    }

    const navigate = useNavigate();


    const handleChange = (e)=>{



        const{name, value}= e.target;
        setUser({
            ...user,
            [name]: value

        })
    }
    return (
        <div className="hero">
            {console.log(user)}
            <div className="form-box">
                <div className="button-box">
                <div id="btn1"></div>
                <button type='button' className='toggle-btn' onClick={handleClick}>Log In</button>
                <button type='button' className='toggle-btn'>Register</button>
                </div>
                <div className="input-group">
                    <input type="text" name="name" value ={user.name} placeholder='Enter Name' className='input-field'  onChange={handleChange}/>
                    <input type="email" name="email"  value ={user.email} placeholder='Enter Gmail Address' className='input-field' autoComplete="off" onChange={handleChange}/>
                    <input type="password" name="password"  value ={user.password} placeholder='Password' className='input-field' autoComplete="off" onChange={handleChange}/>
                    <button type='button'className='submit-btn' onClick={register}>Register</button>
                    <button className="new-btn" onClick={handleClick}>Already Registered?Login</button>
                </div>

            </div>
        </div>
    );
}

export default Register;
