import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";

export async function generateContacts(count) {
  try {
    
    const contacts = await readContacts();
    
    for (let i = 0; i < count; i++) {
      contacts.push(createFakeContact());
    }
    
    console.log("Updated contacts: ", contacts);
    
    await writeContacts(contacts);
    
    console.log("Contacts saved successfully");
    
  } catch (error) {
    
    console.log("Error generating contacts", error);
  }
}

generateContacts(2);
