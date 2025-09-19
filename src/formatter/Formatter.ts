 import { UserEvent } from "../github/types";

export class Formatter {
    
    static formatEvents(events: Array<UserEvent>) : string {
       for(const event of events) {
           if(event.type === "PushEvent") {
            return `Pushed to ${event.payload.length} commits to ${event.repo.name}`;
            } else if(event.type === "IssuesEvent") {
                return `Opened a new issue in  in ${event.repo.name}`;
            } else if(event.type === "PullRequestEvent") {
                return `Created a pull request  in ${event.repo.name}`;
            }
       }
         return "No recognizable events found.";
    }
}