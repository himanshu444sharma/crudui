import { useEffect, useState } from "react";


const CustomHooks=(url)=>{


    const [data,setData]=useState([]);
    // const [load,reload]=useState(false)

    useEffect(()=>{
        fetch(url)
        .then((result) => result.json())
        .then((response) => 
          setData(response.data));
    });
      console.log(data);
return([data])
    


};

export default CustomHooks;