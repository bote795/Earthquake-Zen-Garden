import React, { useEffect, useContext } from "react";
import Skeleton from "react-loading-skeleton";
import EarthquakeContext from "./../../context/earthquakes";
import Table from "../../components/table/Table";
import styles from "./index.css";

function EarthQuakes() {
  const { earthquakes } = useContext(EarthquakeContext) || {};
  useEffect(() => {
    document.title = earthquakes?.metadata?.title || "Earth Quakes";
  }, [earthquakes]);
  let tableData =
    earthquakes?.features?.map((earthquake) => {
      const { id, properties } = earthquake;
      const { place, mag, time } = properties;
      return {
        id,
        title: place,
        mag,
        time: new Date(time),
      };
    }) || [];

  return (
    <main>
      <h2> {earthquakes?.metadata?.title || <Skeleton width={400} />} </h2>

      {earthquakes?.features ? (
        <Table rowsInfo={tableData} />
      ) : (
        <Skeleton count={10} />
      )}
    </main>
  );
}
export default EarthQuakes;
