"use-strict";

import express from "express";
import { StatusCodes } from "http-status-codes";

// heroku will use the process.env.PORT and in package.json the script "start": "node name.js"

const PORT = process.env.PORT || 6969;
const APP = express();
APP.use(express.json());

APP.listen(PORT, () => {
	console.log(`Server running in http://localhost:${PORT}`);
});

APP.get("/", (request, response) => {
	return response.send(
		`<h1>Working with ExpressJS.</h1>` +`\n` +
		`<a href="http://localhost:${PORT}/users">USERS</a>`
	);
});

let users = [
	{
		id: "0x0001",
		name: "namenamename",
	},
	{
		id: "1x0001",
		name: "emanemaneman",
	},
	{
		id: "1x0002",
		name: "ablabluble"
	}
];
APP.get("/users", (request, response) => {
	return response.send(users);
});
APP.get("/users/:id", (request, response) => {
	return response.send(users.find(user => user.id === request.params.id));
});

// use thunder client extension in VSCode to test post method
APP.post("/users", (request, response) => {
	const NEWUSER = request.body;

	users.push(NEWUSER);

	return response.status(StatusCodes.CREATED).send(NEWUSER);
});

APP.put("/users/:id", (request, response) => {
	const ID = request.params.id;
	const UPDATE = request.body;

	users = users.map(user => {
		if (user.id === ID) return UPDATE;
		return user;
	});

	return response.status(StatusCodes.OK).send(UPDATE);
});

APP.delete("/users/:id", (request, response) => {

	const ID = request.params.id;
	users = users.filter(user => user.id !== ID);

	return response.status(StatusCodes.NO_CONTENT).send();
});