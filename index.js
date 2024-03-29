const argv = require("yargs").argv;

const contactsService = require("./contacts");

const invokeAction = async ({ action, name, id, email, phone }) => {
  switch (action) {
    case "list":
      const allContatcs = await contactsService.listContacts();
      return console.log("ALL CONTACTS:", allContatcs);

    case "get":
      const oneContact = await contactsService.getContactById(id);
      return console.log("FOUND CONTACT:", oneContact);

    case "add":
      const newContact = await contactsService.addContact(name, email, phone);
      return console.log("NEW CONTACT:", newContact);

    case "remove":
      const deleteContact = await contactsService.removeContact(id);
      return console.log("DELETED CONTACT:", deleteContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);


