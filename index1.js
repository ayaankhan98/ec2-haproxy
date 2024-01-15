import axios from "axios";
import express, { response } from 'express'

const app = express();

app.get('/', (req, res) => {
	 res.status(200).send("<h1>FbLeadCaptureServer</h1>")
});

app.listen(8081, () => {
    console.log("Server started on port 8081");
});
