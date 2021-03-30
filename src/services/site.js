import delay from "./delay";
import information from "./earthquakes.json";

export default async function getSiteInfo() {
  await delay(3000);
  return information.site;
}
