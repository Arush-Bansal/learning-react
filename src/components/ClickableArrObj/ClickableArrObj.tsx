interface Props{
    arr : {id : number, name: string}[];
    changeArr: React.Dispatch<React.SetStateAction<{id: number;name: string;}[]>>;
}

const ClickableArrObj = ({arr, changeArr} : Props) => {
    const updateArr = (arr : {id : number, name: string}[]) => {
        const new_obj = {...obj};
        
        changeArr(arr.map((obj) => obj.id == 1 ? {...obj, name : "RORO"} : obj))
    }
    return (
        <div onClick={() => changeArr(updateArr(arr, changeArr))}>ClickableArrObj</div>
    )
}

export default ClickableArrObj