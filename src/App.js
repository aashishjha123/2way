import FormData from './FormData';
import './App.css';

function App(props) {

  const savaDtaHandler=(entersave)=>{
    console.log("new dasta",entersave);
  };

  return (
   <>
   <h1>hello</h1>
   
    <FormData onsave={savaDtaHandler}/>
   </>
  );
}

export default App;
