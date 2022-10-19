import { useEffect, useState } from "react";
import customHooks from "./customHooks"

const GetApi = () => {
  // const [data, setData] = useState([]);
  // const [newData, setNewData] = useState([]);
  const [uname, setUName] = useState("");
  const [uemail, setUEmail] = useState("");
  const [umobile, setUMobile] = useState("");
  const [indexNumber,setIndex]=useState();
  const [load,reload]=useState(false)

  

  const handleDelete = (index) => {
    fetch(`http://localhost:5000/delete/${index}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => response);
      console.log(index)
      reload(value=>!value);
  };
   const [data] =  customHooks("http://localhost:5000/");

  console.log(data)

  const selectUser = (a) => {
    setIndex(a);
    setUName(data[a].name);
    setUEmail(data[a].email);
    setUMobile(data[a].mobile);

    
  };

 

  const updateUser = (indexNumber) => {
 fetch(`http://localhost:5000/update`, {
      method: "PUT",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },body:JSON.stringify({name:uname,email:uemail,mobile:umobile,id:indexNumber})
    })
      .then((res) => res.json())
      .then((response) => response);
      reload(true);
      // console.log(item)

  };

  useEffect(()=>{
    console.log("reload")
      },[load])

  return (
    <>
      <table>
        <thead>
          <tr>
            <td>name</td>
            <td>email</td>
            <td>mobile</td>
          </tr>
        </thead>
        <tbody>
          {data.map((myObject, index) => (
            <tr>
              <td>{myObject.name}</td>
              <td>{myObject.email}</td>
              <td>{myObject.mobile}</td>
              <button onClick={() => handleDelete(index)}>Delete</button>
              <button onClick={() => selectUser(index)}>update</button>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <input
          type="text"
          name="name"
          value={uname}
          onChange={(e) => {
            setUName(e.target.value);
          }}
        />{" "}
        <br /> <br />
        <input
          type="text"
          name="email"
          value={uemail}
          onChange={(e) => {
            setUEmail(e.target.value);
          }}
        />{" "}
        <br />
        <br />
        <input
          type="text"
          name="mobile"
          value={umobile}
          onChange={(e) => {
            setUMobile(e.target.value);
          }}
        />
        <br />
        <br />
        <button onClick={()=>updateUser(indexNumber)}>updateuser</button>
      </div>
    </>
  );
};
export default GetApi;
