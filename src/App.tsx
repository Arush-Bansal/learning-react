// import ListGroup from "./components/ListGroup/ListGroup";

import { useState } from "react";
import AdvAlert from "./components/AdvAlert";
import Alert from "./components/Alert";
import PrimaryButton from "./components/PrimaryButton";
import ShowObjectDetails from "./components/ShowObjectDetails";
import ClickableArr from "./components/ClickableArr";
import ClickableArrObj from "./components/ClickableArrObj";



// import Message from "./components/Message"

function App() {
  // const handleSelectItem = (item : string)=>{console.log(item)}

  let [warning_state, update_warning_state] = useState(false);

  const addWarning = () => {
    update_warning_state(true);
  };
  const removeWarning = () => {
    update_warning_state(false);
  };

  const Dolo = {
    "title": "dermaElixir",
    "cost" : "I don't know"
  };

  const [obj, changeObj] = useState(Dolo);

  const [arr , updateArr] = useState(["ala ", "bla ", "sala "]);

  const [arr_of_obj, updateArrOfObj] = useState([{id:0, name: "ace",},{id:1, name: "dace", }, {id:2, name:"lace",}])

  return (
    <div>
      <div>
        {/* <Message/> */}
        {/* <ListGroup items={["Ace", "base", "race", "lace", "rare"]} heading={"Helly"} onSelectItem={handleSelectItem}/> */}
        {}
        <AdvAlert state={warning_state} crossClick={removeWarning} />
        <Alert>
          Hey<span>there</span>
        </Alert>
        <PrimaryButton action={addWarning}>Hello There</PrimaryButton>
      </div>
      <div className="managingComponentStates">
        <button onClick={() => changeCost(obj, changeObj)} className="btn btn-primary">ShowCost</button>
        <ShowObjectDetails object = {obj}/>
        <p onClick={() => {updateArr([...arr, "lol"]);}}>{arr}</p>
        <ClickableArr arr={arr} updateArr={updateArr}/>
        <ClickableArrObj arr={arr_of_obj} changeArr={updateArrOfObj} />
        
      </div>
    </div>
  );
}

export default App;

function changeCost(obj1 : any, changeObj1 : React.Dispatch<React.SetStateAction<{title: string, cost: string;}>>){
  const new_cost = (obj1.cost == "I don't know")?250 : "I don't know"
  changeObj1({...obj1, cost : new_cost}) 
  // we have done this because changeObj will not detect any change if the address of the object is not change and thus not re-rendering.
  // If we have other objects inside the main object, we will have to make clone of the other objects also.(in this same line)
  // Similarly for the arrays, we have to do the same thing.
}