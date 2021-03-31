import { useState, useContext, useEffect } from "react";
import EarthquakeContext from "./../context/earthquakes";

export default function useEarthquake(id) {
  const [selectedEarthquake, setSelectedEarthquake] = useState(null);
  let { earthquakes } = useContext(EarthquakeContext);

  useEffect(() => {
    if (earthquakes) {
      let value = earthquakes.features.find((item) => item.id === id);
      setSelectedEarthquake(value);
    }
  }, [id, earthquakes]);

  return { earthquake: selectedEarthquake };
}
