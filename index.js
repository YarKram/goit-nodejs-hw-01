const argv = require("yargs").argv;

const {
	listContacts,
	getContactById,
	removeContact,
	addContact,
} = require("./contacts");

function invokeAction({ action, id, name, email, phone }) {
	switch (action) {
		case "list":
			listContacts();
			break;

		case "get":
			getContactById(id);
			break;

		case "add":
			addContact(name, email, phone);
			break;

		case "remove":
			removeContact(id);
			break;

		default:
			console.warn("\x1B[31m Unknown action type!");
	}
}

invokeAction(argv);

// listContacts();
// getContactById("rsKkOQUi80UsgVPCcLZZW");
// removeContact("1DEXoP8AuCGYc1YgoQ6hw");
// addContact("Anna Rendt", "anna@gmail.com", "992-442-332");
