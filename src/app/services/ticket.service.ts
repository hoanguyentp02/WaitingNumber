import { AppSettings } from './../../app.setting';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Ticket } from '../models/ticket';

@Injectable()
export class TicketService {

    private header: any;
    constructor(private http: Http) {
        this.header = AppSettings.getHeadersUnAuthorization();
    }

    getWaitingNumber(ticket: Ticket): Promise<any>{
		return this.http.post(`${AppSettings.API_ENDPOINT}/app/for-web/booking-no`,JSON.stringify(ticket),{headers: this.header})
					 .toPromise()
					 .then(this.extractData)
					 .catch(this.handleError);
    }

    cancelBooking(id: number): Promise<any>{
        return this.http.put(`${AppSettings.API_ENDPOINT}/app/booking-no/cancel/${id}`,{headers: this.header})
					 .toPromise()
					 .then(this.extractData)
					 .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.log('An error occurred', error.message);
        return Promise.reject(error.message || error);
    }
    private extractData(res: Response) {
        console.log(res)
        if (res.text() == ""){
            return null;
        } else{
            let body = res.json();
            return body || null;
        }
    }
}