import { Headers, RequestOptions } from '@angular/http';

export class AppSettings {
    public static TOKEN_KEY: string = "currentUser";
    public static SECRET_PWD_KEY: string = "newworld";

    public static get API_ENDPOINT(): string {
        // return 'http://120.72.107.61:6780';
        // return 'http://192.168.100.22:6780';
        return 'http://kopaya.thlsoft.com:6780';
    }

    public static getHeadersAuthorization(): Headers {
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': this.getAuthorizationTokenHeader()
        });
        return headers;
    }
    public static getHeadersUnAuthorization(): Headers {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        return headers;
    }

    public static getRequestOptionsUnauthenticated(): RequestOptions {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        let options = new RequestOptions({ headers: headers });
        return options;
    }

    public static getAuthorizationTokenHeader(): string {
        let tokenJson = this.getJwtToken();
        if (tokenJson != null && tokenJson != undefined) {
            return JSON.parse(tokenJson).token;
        } else {
            return '';
        }
    }

    public static getUserCurrent(): any {
        let tokenJson = this.getJwtToken();
        return JSON.parse(tokenJson).user;
    }

    public static getJwtToken(): any {
        return localStorage.getItem(this.TOKEN_KEY);
    }

    public static setJwtToken(token): void {
        localStorage.setItem(this.TOKEN_KEY, token);
    }

}
