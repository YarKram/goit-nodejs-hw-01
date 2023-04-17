const { nanoid } = require("nanoid");
const fs = require("fs/promises");

const path = require("path");
const contactsPath = path.join(__dirname, "db", "contacts.json");

async function listContacts() {
	const response = await fs.readFile(contactsPath, "utf-8");
	console.table(JSON.parse(response));
	return JSON.parse(response);
}

async function getContactById(contactId) {
	const response = await fs.readFile(contactsPath, "utf-8");
	const contacts = JSON.parse(response);
	const contact = contacts.find((contact) => contact.id === contactId);
	console.log(contact);
	return contact;
}

async function removeContact(contactId) {
	const response = await fs.readFile(contactsPath, "utf-8");
	const contacts = JSON.parse(response);
	const contactsRemained = contacts.filter(
		(contact) => contact.id !== contactId
	);
	console.table(contactsRemained);
	return contactsRemained;
}

async function addContact(name, email, phone) {
	const response = await fs.readFile(contactsPath, "utf-8");
	const contacts = JSON.parse(response);
	const newContact = {
		id: nanoid(),
		name,
		email,
		phone,
	};
	contacts.push(newContact);
	await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
	console.table(contacts);
	return contacts;
}

module.exports = {
	listContacts,
	getContactById,
	removeContact,
	addContact,
};
