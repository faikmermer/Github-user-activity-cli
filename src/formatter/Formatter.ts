 import { UserEvent } from "../github/types";

export class Formatter {
    
    static formatEvents(events: Array<UserEvent>) : string {
        if(events.length === 0) {
            return "No events found for this user.";
        }

        const formatterEvents : string [] = [];


        for(const event of events) {
            let formatEvent : string  = "";
            switch(event.type) {
                case "PushEvent":
                    formatEvent = "Pushed " + event.payload.commits.length + " commits to " + event.repo.name;
                    break;
                case "IssuesEvent":
                    formatEvent = "Opend a new issue in " + event.repo.name;
                    break;
                case "PullRequestEvent":
                    formatEvent = "Starred  " + event.repo.name;
                    break;
                case "PushEvent":
                    formatEvent = "Pushed to " + event.repo.name;
                    break;
                default:
                    formatEvent = `Performed ${event.type} on ${event.repo.name}`;
            }
            formatterEvents.push(formatEvent);
        }
       
        return formatterEvents.join("\n");
    }
};