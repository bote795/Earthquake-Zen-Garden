import delay from "./delay";
import information from "./earthquakes.json";
export default async function getProfile() {
  await delay(3000);
  return information.profile;
}
