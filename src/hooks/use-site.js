import { useState, useEffect } from "react";
import getSiteInfo from "./../services/site";

export default function useSite() {
  const [activeSite, setActiveSite] = useState(null);
  useEffect(() => {
    async function getActiveSite() {
      const response = await getSiteInfo();
      setActiveSite(response);
    }
    if (!activeSite) {
      getActiveSite();
    }
  }, []);

  return { site: activeSite };
}
