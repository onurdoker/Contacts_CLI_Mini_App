import { PATH_DB } from "../constants/contacts.js";
import fs from "node:fs";

export async function writeContacts(contacts) {
  return new Promise((resolve) => {
    fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), (error) => {
      if (error) {
        console.error("Error writing Contacts: ", error);
        resolve(false);
      } else {
        resolve(true);
      }
    });
  });
}