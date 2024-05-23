import { useState } from "react";
import { UseQRcontext } from "../context/QRcontext";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const { setFormData, formData, seturltype } = UseQRcontext();
  const [value, setvalue] = useState("");
  const [name, setname] = useState("");
  const navigate = useNavigate();

  const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newValue = e.target.value;
    const newName = e.target.name;
    setvalue(newValue);
    setname(newName);
    if(newName && newValue){
      setFormData((prev) => ({
        ...prev,
        [newName]: newValue
      }));
    } else {
      alert("The input fields are empty, please fill them");
    }
  };

  const HandleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try{
      const obj = new URL(formData.Uri);
      seturltype(obj.hostname);
    if(value && name){
        navigate("/qr");
    } else {
      alert("navigation failed!!");
      navigate("/");
    }
    } catch(err){
      alert("enter a valid url");
    }
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="flex flex-col p-4 bg-white shadow-md rounded">
        <label>Purpose</label>
        <input type="text" name="Purpose" onChange={HandleChange} className="mb-2 p-2 border border-gray-300 rounded" />
        <label>Uri</label>
        <input type="text" name="Uri" onChange={HandleChange} className="mb-4 p-2 border border-gray-300 rounded" />
        <button onClick={HandleClick} className="p-2 bg-blue-500 text-white rounded hover:bg-blue-400">Convert</button>
      </form>
    </div>
  );
};

export default Form;
