import { ReactNode } from "react";
import styles from "./Alert.module.css"

interface Props {
    children : ReactNode; // when a more complex structrue is passed as child
    //   children: string; // this can be used when a simple string is passed as child
}

const Alert = ({ children }: Props) => {
  return <div className={[styles.red, styles.textobluee].join(" ")}>{children}</div>;
  // the vite encodes the styles so that the uniqueness is maintained for the same name styles
};

export default Alert;


