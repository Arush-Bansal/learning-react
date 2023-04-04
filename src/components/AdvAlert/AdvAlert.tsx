interface Props {
  state : boolean;
  crossClick : ()=>void;
}

const AdvAlert = ({state, crossClick} : Props) => {

  if (!state){
    return (<></>)
  }

  return (
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>Holy guacamole!</strong> You should check in on some of those
      fields below.
      <button
        // type="button"
        className="btn-close"
        onClick={crossClick}
        // data-bs-dismiss="alert"
        // aria-label="Close"
      ></button>
    </div>
  );
};

export default AdvAlert;
