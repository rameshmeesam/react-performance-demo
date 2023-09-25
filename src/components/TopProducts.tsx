import * as React from "react";
import Layout from "../components/Layout";
import { memo, useMemo } from "react";
import useFetch from "../hooks/useFetch";
import Item from "./Item";
import { Profiler } from "react";

const callbackTest = (
  id: any,
  phase: any,
  actualTime: any,
  baseTime: any,
  startTime: any,
  commitTime: any
) => {
  console.log(
    "id: " + id,
    "phase:" + phase,
    "actualTime:" + actualTime,
    "baseTime: " + baseTime,
    "startTime: " + startTime,
    "commitTime: " + commitTime
  );
  //console.log("hello");
};

const TopProductsList = function () {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const { data, loading, error } = useFetch(`${baseUrl}/posts`, null);

  /*const renderItm = (data: []) => {
    // return setTimeout(() => {
    // console.log(loading);
    return (
      <>
        {data.map((val: any, idx: any) => {
          return (
            <div className="product-list" key={idx}>
              {val.title}
            </div>
          );
        })}
      </>
    );

    //  }, 1000);
  };*/
  //console.log("klkl");

  return (
    <>
      {loading ? (
        <div>loading</div>
      ) : !error ? (
        <div className="content-area">
          <div>
            <h4>Top List</h4>
          </div>
          <div className="product-list-container">{data && Item(data)}</div>
        </div>
      ) : (
        <div>error</div>
      )}
    </>
  );
};

const TopProducts = (props: any) => {
  return (
    <Layout>
      <Profiler id="TopProducts" onRender={callbackTest}>
        <TopProductsList />
      </Profiler>
    </Layout>
  );
};

export default TopProducts;
