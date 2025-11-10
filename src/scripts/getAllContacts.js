import { readContacts } from "../utils/readContacts.js";

export async function getAllContacts() {
  try {
    return await readContacts();
  } catch (error) {
    console.log("Error getting all contacts: ", error);
  }
}

console.log(await getAllContacts());
