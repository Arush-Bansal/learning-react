// import ListGroup from "./components/ListGroup/ListGroup";

import { useState } from "react";
import AdvAlert from "./components/AdvAlert";
import Alert from "./components/Alert";
import PrimaryButton from "./components/PrimaryButton";


// import Message from "./components/Message"


function App() {

  

  // const handleSelectItem = (item : string)=>{console.log(item)}
  const act = (e: any) => console.log(e)

  let [warning_state, update_warning_state] = useState(false)

  const addWarning = ()=>{update_warning_state(true)};
  const removeWarning = ()=>{update_warning_state(false)};

  return <div>
    {/* <Message/> */}
    {/* <ListGroup items={["Ace", "base", "race", "lace", "rare"]} heading={"Helly"} onSelectItem={handleSelectItem}/> */}
    {}
    <AdvAlert state = {warning_state} crossClick={removeWarning}/>
    <Alert>Hey<span>there</span></Alert >
    <PrimaryButton  action = {addWarning}>Hello There</PrimaryButton >
  </div>
}


export default App;