import fs from "fs";
import path from "path";

let __dirname = path.resolve();

const citiesWithId = JSON.parse(fs.readFileSync(__dirname + "/BackEnd/data/cities.json", 'utf8'));
const cities = citiesWithId.map((city) => {
  return {
    name: city.name,
    data: city.data,
  };
});
export default cities;