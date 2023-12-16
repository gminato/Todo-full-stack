import { useState , useContext} from 'react';
import { Link , useNavigate} from 'react-router-dom';
import FadeInAnimation from '../HelperComponent/FadeInAnimation';
import SignUp from './SignUp';
import {AuthContext} from '../AuthContext';
import axios from 'axios';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {data,updateData} = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/auth/login', {
            username,password
        })
        .then((response) => {
            updateData(response);
            this.localStorage.setItem('token',response.data.token);
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
    }
    

    return (
        <>
            <FadeInAnimation >
                {console.log('render')}
            <div className="h-screen w-full flex felx-col items-center justify-center">
                <form className="p-12 flex flex-col items-center justify-center border-2 border-indigo-300 rounded-xl">
                    <h1 className="text-4xl font-bold text-indigo-800 ">Login</h1>
                    <div className=" flex flex-col mt-8">
                        <label className="ml-2 mb-2 text-zinc-600 " htmlFor="username">Username</label>
                        <input 
                            value={username} 
                            className={`p-2 border-2 active:indi border-indigo-500 focus:outline-none focus:border-indigo-700 rounded`} 
                            type="text" 
                            placeholder="Username" 
                            onChange={(e) => {
                                setUsername(e.target.value);
                            }}
                        />
                    </div>
                    <div className="flex flex-col mt-8">
                        <label className="ml-2 mb-2 text-zinc-600" htmlFor="passoword">Password</label>
                        <input 
                            value={password} 
                            className={`p-2 border-2 border-indigo-500 focus:outline-none focus:border-indigo-700 rounded`} 
                            type="password" 
                            placeholder="Password" 
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                    </div>
                    <button className="w-40 h-10 mt-10 bg-indigo-500 rounded-md hover:bg-indigo-700 text-white" type="submit" onClick={handleLogin} >Login</button>
                    <p className="text-indigo-500 hover:text-indigo-700" ><Link to={'/signup'}>New User?Sign Up</Link></p>
                </form>
            </div>
            </FadeInAnimation>
        </>
    )
}

export default Login;