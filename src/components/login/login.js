import './login.css';
import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";



const Login = ({setLoginUser, loggedin, isLoggedin}) =>{


    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e)=>{
        const{name, value}= e.target;
        setUser({
            ...user,
            [name]: value

        })
    }

    const navigate = useNavigate();

    const handleClick =()=>{
        navigate('/register');
    }

    const login=(isLoggedin)=>{
        axios.post("https://movie-backend2-cbib.onrender.com/login", user)
        .then((res)=>{
            alert(res.data.message);
            setLoginUser(res.data.user)
            if(res.data.message==="Wrong Password"){
            navigate("/login");
            }
            else if(res.data.message==="Successfully Logged in"){
                navigate('/');
            }
            else{
                navigate('/login');
                isLoggedin(true);
            }
        })
    }
    // return(
    //     <div className="wrapper">
    //             <div className="login">
    //         <h1 style={{paddingBottom:"10%"}}>Login</h1>
    //         <input type="text" name="" id="" placeholder='Enter your email'/>
    //         <input type="password" name="" id="" placeholder='Enter password'/>
    //         <div className="button">Login</div>
    //         <div>or</div>
    //         <div className="button">Register</div>
    //     </div>
    //     </div>
        
    // )

    return(<>
        <div className="hero">
            {console.log(user)}
            <div className="form-box">
                <div className="button-box">
                <div id="btn"></div>
                <button type='button' className='toggle-btn'>Log In</button>
                <button type='button' className='toggle-btn' onClick={handleClick}>Register</button>
                </div>
                <div className="input-group">
                    <input type="email" name="email" value={user.email} placeholder='Enter username' className='input-field'  onChange={handleChange}/>
                    <input type="password" name="password" value={user.password} placeholder='Password' className='input-field'  onChange={handleChange}/>
                    <button type='button'className='submit-btn' onClick={login}>Login</button>
                    <button className="new-btn" onClick={handleClick}>New To MyMovies? Register</button>
                </div>
                
            </div>


        </div>
        </>
    );



    // return <>
    // <div className="hero">
    //     <div className="form-box"></div>
    // <div className="button-box">
    //             <div id="btn"></div>
    //             <button type="button" className="toggle-btn" onclick="login()" style="color: white;">Login</button>
    //             <button type="button" className="toggle-btn" onclick="register()" style="color: white;">Register</button>
    //         </div>
    //         <div  id="login" class="input-group">
    //             <h6 style="color:red">Wrong Password</h6>
    //             <input type="text" name="" id="" className="input-field" placeholder="User Id" />
    //             <input type="password" name="" id="" className="input-field" placeholder="Password" />
    //             <input type="submit" value="Login" className="submit-btn" style="color: white;"/>
    //             <button type="button" onclick="register()" className="new-btn" style="color: white;">New to MyMovies? Register</button>
    //         </div>
    //         <div action="" id="register" className="input-group">
    //             <h5 style="color: yellow">Registered Successfully</h5>
    //             <input type="text" name="" id="" className="input-field" placeholder="Gmail" />
    //             <input type="password" name="" id="" className="input-field" placeholder="Password" />
    //             <input type="submit" value="Register" className="submit-btn" style="color: white;"/>
    //             <button type="button" onclick="login()" className="new-btn" style="color: white;">Already Registered? Login</button>
    //         </div>
    // </div>
    // </>
    
}

export default Login;