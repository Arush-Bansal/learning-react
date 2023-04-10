interface Props{
    object : { [index : string] : string,};
}


const ShowObjectDetails = ({object} : Props ) => {
  return (
    <div>
        title : {object.title} <br />
        cost : {object.cost} <br />
    </div>
  )
}

export default ShowObjectDetails