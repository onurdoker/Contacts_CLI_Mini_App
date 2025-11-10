import { writeContacts } from "../utils/writeContacts.js";

export async function removeAllContacts() {
  try {
    await writeContacts([]);
    console.log("All contacts removed successfully");
  } catch (error) {
    console.log("Error removing all contacts", error);
  }
}

removeAllContacts();
