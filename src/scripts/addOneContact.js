import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";

export async function addOneContact() {
  try {
    const contacts = await readContacts();
    contacts.push(createFakeContact());
    await writeContacts(contacts);
    console.log("Contact added successfully");
  } catch (error) {
    console.log("Error adding contact", error);
  }
}

addOneContact();
