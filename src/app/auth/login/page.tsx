'use client'
import Image from "next/image";
import Form from "../components/form";
import { useState } from "react";


export default function LogIn (){
    const [isUser, setUser] = useState(false);
    return(
            <div className="bg-[#6000DD] h-screen w-full z-0 flex flex-row ">
                <div className="w-[50%] h-[50%] p-20">
                    <Image src="/assets/Logo-white.svg" alt="Logo" width={1000} height={1000} />
                </div>
                <div className="bg-white z-1 border-1 rounded-l-[15] w-[70%] ml-[50px] p-20">
                    <Form isUser={isUser}/>
                </div>
            </div>
        
    );
}
