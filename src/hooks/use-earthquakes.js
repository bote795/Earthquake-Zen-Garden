import { useState, useEffect } from "react";
import getEarthQuakes from "./../services/earthquakes";

export default function useEarthquakes() {
  const [activeEarthquakes, setActiveEarthquakes] = useState(null);

  useEffect(() => {
    async function getAllEarthquakes() {
      const response = await getEarthQuakes();
      setActiveEarthquakes(response);
    }
    if (!activeEarthquakes) {
      getAllEarthquakes();
    }
  }, []);

  return { earthquakes: activeEarthquakes };
}
