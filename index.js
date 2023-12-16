import axios from "axios";
import express, { response } from 'express'

const app = express();

app.get('/', (req, res) => {
	 res.status(200).send("<h1>Hello from Server-1</h1>")
});

app.listen(3001, () => {
    console.log("Server started on port 3001");
});
