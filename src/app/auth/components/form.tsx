import { useState } from "react";

interface LogInData {
    username:string;
    password:string;
}
interface SignUpData{
    firstName:string;
    surName:string;
    emailaddress:string;
    password:string;
}

function Form ({isUser}:{isUser:boolean}){
    const [loginformData , setLoginData] = useState<LogInData | null>(null);
    const [signupformData , setSignUpData] = useState<SignUpData | null>(null);
    return(
       <div className="border-2 rounded-[15] shadow-[5px_5px_5px_rgba(89,3,202,0.38)] w-[90%]">
         {isUser ? (
            //Log In
            <div>
                <form>
                    <div className="p-10 ">
                        <div className="flex flex-row">
                            <div className="p-5">
                                <p>FirstName</p>
                                <input className="border-1 border-black rounded-[5] cursor-text w-[50%]" type="text" name="firstName"/>
                            </div>
                            <div className="p-5">
                                <p>SurName</p>
                                <input className="border-1 border-black rounded-[5] cursor-text " type="text" name="surName"/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        ): (
            //Sign Up
            <div>
                <form>
                    <div className="p-15 ">
                        <div className="py-2">
                            <p className="mb-2">Email Address</p>
                            <input className="border-1 border-black rounded-[5] cursor-text w-[90%] h-[30px]" type="text" name="email"/>
                        </div>
                        <div className="py-2"> 
                            <p className="mb-2">Password</p>
                            <input className="border-1 border-black rounded-[5] cursor-text w-[90%] h-[30px]" type="password" name="email"/>
                        </div>
                    </div>
                </form>
            </div>
    )}
       </div>
    )
}
export default Form;