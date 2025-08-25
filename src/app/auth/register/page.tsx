'use client'
import Image from "next/image";
import Form from "../components/form";
import { useState } from "react";


export default function SignUp (){
    const [isUser, setUser] = useState(true);
    return(
            <div className=" bg-white h-screen w-full z-0 flex flex-row ">
                <div className="bg-[#6000DD] z-1 rounded-r-[15] w-[70%] mr-30 p-20">
                    <Form isUser={isUser}/>
                </div>
                <div className="w-[50%] h-[50%] p-20">
                    <Image src="/assets/Logo-normal.svg" alt="Logo" width={1000} height={1000} />
                </div>
                
            </div>
        
    );
}
