import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import Skeleton from "react-loading-skeleton";
import { TIME_FORMAT } from "./../../constants/date";

import useEarthquake from "./../../hooks/use-earthquake";
import DisplayKeys from "../../components/displaykeys/DisplayKeys";
import styles from "./earthquake.css";
function EarthQuake(props) {
  let { id } = useParams();
  const { earthquake } = useEarthquake(id);
  useEffect(() => {
    document.title = `Earth Quake - ${earthquake?.properties?.title || ""}`;
  }, [earthquake]);
  let keys = ["title", "magnitude", "time", "status", "tsunami", "type"];
  return (
    <main>
      <h2>{earthquake?.properties?.title || <Skeleton width={400} />} </h2>
      <div className={styles.earthquake__item}>
        {earthquake ? (
          <DisplayKeys
            keys={keys}
            values={{
              ...earthquake.properties,
              time: format(new Date(earthquake.properties["time"]), TIME_FORMAT),
              magnitude: earthquake.properties["mag"],
            }}
          />
        ) : (
          <Skeleton count={10} />
        )}
      </div>
    </main>
  );
}
export default EarthQuake;
