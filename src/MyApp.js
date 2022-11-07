import React from "react";
import Child from "./Child";

export const MyContext = React.createContext();

export default function MyApp() {
  return (
    <MyContext.Provider value={"aaaaaaaaaaaaaaaaaa"}>
      <Child />
    </MyContext.Provider>
  );
}
