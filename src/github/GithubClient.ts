import {type  UserEvent} from "./types";
import {GithubError} from "../errors/GithubError";
export class GithubClient {
    private baseUrl : string = "https://api.github.com";

    async getUserEvents(username: string) : Promise<Array<UserEvent>> {
        const response : Response = await fetch((`${this.baseUrl}/users/${username}/events`));

        if(!response.ok) {
          throw new GithubError("Failed to fetch user events", response.status);
        }
        const jsonData: Array<UserEvent> = await response.json() as Array<UserEvent>;
        return jsonData || [];
    }
}