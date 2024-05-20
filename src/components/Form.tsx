import { useState } from "react";

const Form = () => {

  const [formData, setFormData] = useState({
    Purpose: "",
    Uri: ""
  })

  const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value
    const name = e.target.name
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const HandleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log("output", formData);
  }

  return (
    <>
      <div className='flex justify-center'>
        <form className='flex flex-col'>
          <label>Purpose</label>
          <input type='text' onChange={HandleChange} />
          <label>uri</label>
          <input type='text' onChange={HandleChange} />
          <button onClick={HandleClick}>Convert</button>
        </form>
      </div>
    </>
  );
};

export default Form;
