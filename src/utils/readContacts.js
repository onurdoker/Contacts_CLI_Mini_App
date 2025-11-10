import { PATH_DB } from "../constants/contacts.js";
import fs from "node:fs";

export async function readContacts() {
  return new Promise((resolve) => {
    fs.readFile(PATH_DB, "utf-8", (error, data) => {
      if (error && error.code === "ENOENT") {
        resolve([]);
      } else if (error) {
        console.error("Error reading Contacts: ", error);
        resolve([]);
      } else {
        try {
          resolve(JSON.parse(data));
        } catch (parseError) {
          console.error("Error parsing JSON data: ", parseError);
          resolve([]);
        }
      }
    });
  });
}