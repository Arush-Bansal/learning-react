interface Props{
    arr: string[];
    updateArr : React.Dispatch<React.SetStateAction<string[]>>;
}


const ClickableArr = ({arr, updateArr}: Props) => {
    // arrState = !arrState;
    return <p onClick={() => {updateArr([...arr, "lol"]);}}>{arr}</p>
}

export default ClickableArr