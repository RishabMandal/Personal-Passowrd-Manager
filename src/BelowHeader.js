import React from "react";
import ManagerPage1 from "./ManagerPage1";

export default function BelowHeader({myRef,executeScroll}) {
  return (
    <div>
      <ManagerPage1 myRef={myRef} executeScroll={executeScroll}/>
    </div>
  );
}
