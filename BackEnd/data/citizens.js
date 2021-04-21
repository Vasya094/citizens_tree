import fs from "fs";
import path from "path";

let __dirname = path.resolve();


const citizensWithId = JSON.parse(fs.readFileSync(__dirname + "/BackEnd/data/citizens.json", 'utf8'));
const citizens = citizensWithId.map((citizen) => {
  return {
    name: citizen.name,
    groups: citizen.groups,
  };
} );



export default citizens;
