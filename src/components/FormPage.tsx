import {  useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from 'react-router-dom';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const FormPage = () => {

  const navigate = useNavigate();
 
  // const [redirect,setRedirect]= useState(true)

  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setFormData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem("formdata", JSON.stringify(formData));
    
    // setRedirect(prev=>!prev)
    navigate('/second-page')
  };


  return (
    <div className="container">
      <h2>Enter Your Details</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div >
          <TextField className="text-field"
            label="Name"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            sx={{ "& .MuiInputLabel-asterisk": { display: "none" } }}
            required
          />
        </div>
        <div >
          <TextField className="text-field"
            label="Phone Number"
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            sx={{ "& .MuiInputLabel-asterisk": { display: "none" } }}
          />
        </div>
        <div >
          <TextField className="text-field"
            label="Email"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            sx={{ "& .MuiInputLabel-asterisk": { display: "none" } }}
          />
        </div>
        <div>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FormPage;
