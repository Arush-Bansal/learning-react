// import { MouseEvent } from "react";

import styled from "styled-components"; // used for local styling 
// for now we need to install type definitions for this library 
// => "$ npm i @types/style-components"; @types have type-definitions for many popular javascript librarbies.

import { useState } from "react";


const List = styled.ul`
  list-padding: none;
  padding: 0;
`; // returns a react component with all the following styles applied to it


interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // below function is called "event handler"
  // const listItemClick  = (e: MouseEvent ) => console.log(e.ctrlKey, e.clientX, e.clientY)
  // let selectedIndex = 0;

  // Below is a Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // use state is a hook, that returns an array of 2 elements, i.e. selected index & updater function

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 ? <p>No item found</p> : null}
      {items.length === 0 && <p>No item found</p>}{" "}
      {/*this implimentation is preferred over the above line*/}
      <List>
        {items.map((item, index) => (
          <li
            className={`list-group-item ${index === selectedIndex && "active"}`}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {/* TODO what is the role of key property in react items (why does react give warning without it) */}
            {item}
          </li>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
