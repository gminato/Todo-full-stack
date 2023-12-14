import React, { useState } from "react";

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [passwordErrorMessages,setPasswordErrorMessages] = useState([]);

    const passwordHandler = (value) => {
        setPassword(value);
        setPasswordErrorMessages([]);
        if (value.length < 8) {
            setPasswordErrorMessages((prevMessages) => [...prevMessages, 'Password must be at least 8 characters long']);
        }
        if (!/\d/.test(value)) {
            setPasswordErrorMessages((prevMessages) => [...prevMessages, 'Password must contain at least one number']);
        }
        if (!/[!@#$%^&*]/.test(value)) {
            setPasswordErrorMessages((prevMessages) => [...prevMessages, 'Password must contain at least one special character']);
        }
        if (!/[A-Z]/.test(value)) {
            setPasswordErrorMessages((prevMessages) => [...prevMessages, 'Password must contain at least one uppercase letter']);
        }
        if (!/[a-z]/.test(value)) {
            setPasswordErrorMessages((prevMessages) => [...prevMessages, 'Password must contain at least one lowercase letter']);
        }
    };
    return (
        <>
            <div className="h-screen w-full flex felx-col items-center justify-center">
                <form className="w-1/2 p-12 flex flex-col items-center justify-center border-2 border-indigo-300 rounded-xl">
                    <h1 className="text-4xl font-bold text-indigo-800 ">Sign Up</h1>
                    <div className=" flex flex-col mt-8 w-1/2">
                        <label className="ml-2 mb-2 text-zinc-600 " htmlFor="username">Username</label>
                        <input 
                            className={`w-full p-2 border-2 active:indi border-indigo-500 focus:outline-none focus:border-indigo-700 rounded`} 
                            type="text" 
                            placeholder="Username"
                            value={username}
                            onChange={(e) => {setUsername(e.target.value)}}
                        />
                    </div>
                    <div className=" flex flex-col mt-8 w-1/2">
                        <label className="ml-2 mb-2 text-zinc-600 " htmlFor="email">Email</label>
                        <input 
                            className={`w-full p-2 border-2 active:indi border-indigo-500 focus:outline-none focus:border-indigo-700 rounded`} 
                            type="email" 
                            placeholder="Email" 
                            value={email}
                            onChange={(e) => {setEmail(e.target.value)}}
                        />
                        {email.length > 0 && !email.includes('@') && <p className="text-red-500">Email must contain @</p>}
                    </div>
                    <div className="flex flex-col mt-8 w-1/2">
                        <label className="ml-2 mb-2 text-zinc-600" htmlFor="passoword">Password</label>
                        <input 
                            className={`w-full p-2 border-2 border-indigo-500 focus:outline-none focus:border-indigo-700 rounded`} 
                            type="password" 
                            placeholder="Password" 
                            value={password}
                            onChange={(e) => {passwordHandler(e.target.value)}}
                        />
                        {passwordErrorMessages.length > 0 && passwordErrorMessages.map((message, index) => {
                            return <p key={index} className="p-1 text-sm text-red-500">{`* ${message}`}</p>
                        })}
                    </div>
                    <button className="w-40 h-10 mt-10 bg-indigo-500 rounded-md hover:bg-indigo-700 text-white" type="submit">Sign Up</button>
                </form>
            </div>
        </>
    )
}

export default SignUp;