import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export async function removeLastContact() {
  try {
    const contacts = await readContacts();
    if (contacts.length > 0) {
      contacts.pop();
      await writeContacts(contacts);
      console.log("Last contact removed successfully");
    } else {
      console.log("No contacts to remove");
    }
  } catch (error) {
    console.log("Error removing last contact", error);
  }
}

removeLastContact();
