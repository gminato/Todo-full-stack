
const Verify = ({email}) => {
    


    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <form className="p-12 flex flex-col items-center justify-center border-2 border-indigo-300 rounded-xl">
                <h1 className="text-4xl font-bold text-indigo-500 ">{`Verify the otp for the ${email}`}</h1>
                
                <div className="flex flex-col mt-8">
                    <input 
                        className={`p-2 border-2 border-indigo-500 focus:outline-none focus:border-indigo-700 rounded`} 
                        type="text" 
                        placeholder="OTP" 
                    />
                </div>
                <button className="w-40 h-10 mt-10 bg-indigo-500 rounded-md hover:bg-indigo-700 text-white" type="submit">Verify</button>
            </form>
        </div>
    );
};

export default Verify;