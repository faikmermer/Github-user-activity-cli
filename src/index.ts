import { GithubClient } from "./github/GithubClient";
import {Formatter} from "./formatter/Formatter";
const args : string[] = process.argv.slice(1);
const username : string = args[0] as string;

if(username.length < 2) {
    console.error("Please provide a GitHub username as a command-line argument.");
    process.exit(1);
}

const client = new GithubClient();
client.getUserEvents(username)
     .then(events => {
        new Formatter().formatEvents(events);
     })
