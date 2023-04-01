import React ,{useState} from "react";

export default function FormData(props) {

    const [entername,setEnterName]=useState("");
    const [enteremail,setEnteremail]=useState("");
    const [enterthought,setEnterThought]=useState("");


    const nameChangeHandler=(event)=>{
        setEnterName(event.target.value)
    }
    const emailChangeHandler=(event)=>{
        setEnteremail(event.target.value)
    }
    const thoughtChangeHandler=(event)=>{
        setEnterThought(event.target.value)
    }
    
    const submitHandler=(event)=>{
        event.preventDefault();

        const Dta={
            name:entername,
            mail:enteremail,
            thought:enterthought
        }


        props.onsave(Dta);
        setEnterName("");
        setEnteremail("");
        setEnterThought("")

        console.log("data from form",Dta)

    }


  return (
    <>
      <h2>Form Data recieving</h2>

        <form onSubmit={submitHandler}>
      <input type="text" value={entername} onChange={nameChangeHandler} placeholder="Enter your name" /><br></br><br></br>
      <input type="text" value={enteremail} onChange={emailChangeHandler} placeholder="Enter your email" /><br></br><br></br>
      <input type="text" value={enterthought} onChange={thoughtChangeHandler} placeholder="Enter your thought" /><br></br><br></br>
      <button type="submit">Submit</button>
      </form>
    </>
  );
}
