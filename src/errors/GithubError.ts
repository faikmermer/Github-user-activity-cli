 
 export class GithubError extends Error {
    statusCode: number;
    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;

        if(statusCode === 404){
            console.error("Error: User not found. Please check the username and try again.");
        }
    }


    
}

