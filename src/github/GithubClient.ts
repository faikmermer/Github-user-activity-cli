import {type  UserEvent} from "./types";
import {type GithubError} from "./GithubError";
class GithubClient {
    private baseUrl : string = "https://api.github.com";

    async getUserEvents(username: string) : Promise<Array<UserEvent>> {
        const response : Response = await fetch((`${this.baseUrl}/users/${username}/events`));

        if(!response.ok) {
           //GithubError class will writting later.
        }
        const jsonData: Array<UserEvent> = await response.json();
        return jsonData;
    }
}