
interface Props {
  children: String; // ? denotes optional \
  color?: "primary"|"secondary"|"success"|"danger"// ? denotes optional 
  action : (item:Number)=> void // TODO
}

const PrimaryButton = ({ children, color = 'primary', action }: Props) => {
  return (
    <button type="button" className={`btn btn-${color}`} onClick={(e) => action(e.clientX)}>
      {children}
    </button>
  );
};

export default PrimaryButton;
