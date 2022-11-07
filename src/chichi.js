import React, { useContext } from "react";
import { MyContext } from "./MyApp";

export default function Chichi() {
  const name = useContext(MyContext);

  return <h2>hello {name}</h2>;
}
