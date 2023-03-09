import React, { useState } from "react";

let formResult = false;

function FormPet() {
  const [name, setName] = useState("");
  const [specie, setSpecie] = useState("");
  const [nameError, setNameError] = useState("");
  const [specieError, setSpecieError] = useState("");
  const [formError, setFormError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (nameError != '' || specieError != '')
    {
        setFormError("Por favor chequea que la información sea correcta");
        formResult = false;
    }
    else{
        setFormError("");
        formResult = true;
    }
    console.log("Name Pet: ", name);
    console.log("Specie: ", specie);
  };  

  const handleInput1Change = (event) => {
    const value = event.target.value;
    setName(value);

    if (value.length < 3) {
      setNameError("Name must be at least 3 characters long");    
    } else if (value.substring(0,1) === " ") {
        setNameError("Name's first character can't be empty");    
    }else {
        setNameError("");
    }
  };

  const handleInput2Change = (event) => {
    const value = event.target.value;
    setSpecie(value);

    if (value.length < 6) {
      setSpecieError("Specie must be at least 6 characters long");
    } else {
        setSpecieError("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={handleInput1Change}
        />
         {nameError && <div style={{ color: "red" }}>{nameError}</div>}
      </label>
      <label>
        Specie:
        <input
          type="text"
          value={specie}
          onChange={handleInput2Change}
        />
        {specieError && <div style={{ color: "red" }}>{specieError}</div>}
      </label>
      <button type="submit">Submit</button>
      {formError && <div style={{ color: "red" }}>{formError}</div>}
    </form>


  );
}

export default FormPet;

export const formResult1 = formResult;