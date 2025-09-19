#! /usr/bin/env node
import { GithubClient } from "./github/GithubClient";
import {Formatter} from "./formatter/Formatter";
import { GithubError } from "./errors/GithubError";

const args = process.argv.slice(2);
const username = args[0];

if(!username) {
    console.error("Error: Please provide a GitHub username as a command-line argument.");
    process.exit(1);
}


const client = new GithubClient();
client.getUserEvents(username as string)
     .then(events => {
        console.log(Formatter.formatEvents(events));
     })
     .catch(error => {
        const statusCode = error.responce?.status || 500;
       throw new GithubError(error.message, statusCode);
     })
