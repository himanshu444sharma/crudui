import { useState } from "react";


const FormApi =()=>{

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [mobile,setMobile]=useState("");

    let data = {name,email,mobile};

    const saveUser =()=>{
        fetch("http://localhost:5000/post",{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(data)
        }).then((result)=>(result.json()))
        .then((response)=>(console.log(response)))
    }

    return(

<>
            
        <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}} />  <br /> <br />
        <input type="text" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/> <br /> <br />
        <input type="text" name="mobile" value={mobile} onChange={(e)=>{setMobile(e.target.value)}}/><br /> <br />
        <button onClick={saveUser}>Save Data</button>
   
</>


    )
};



export default FormApi;