import * as React from "react";
//import { memo } from "react";
import Navabs from "../components/nav";
import { Profiler } from "react";

const callbackTest = (
  id: any,
  phase: any,
  actualTime: any,
  baseTime: any,
  startTime: any,
  commitTime: any
) => {
  /* console.log(
    "id: " + id,
    "phase:" + phase,
    "actualTime:" + actualTime,
    "baseTime: " + baseTime,
    "startTime: " + startTime,
    "commitTime: " + commitTime
  );*/
  //console.log("hello");
};

const Layout = (props: any) => {
  const { children } = props;
  //console.log(children);
  // const [products] = children;

  return (
    <>
      <Profiler id="Navabs" onRender={callbackTest}>
        <Navabs />
      </Profiler>

      {children}
    </>
  );
};

export default Layout;
