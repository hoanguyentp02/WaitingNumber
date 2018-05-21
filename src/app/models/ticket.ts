export class Ticket{
    public fcm_token: String;
    public no_of_people: number;
    public contact: String;
    public store_id: String;
    public tag_id: String;
    public name: String;
    constructor(){
        // this.store_id = "1234";
        // this.tag_id = "0419AE5A422F81";
        this.store_id = "";
        this.tag_id = "";
        this.no_of_people = 1;
        this.contact = "+84123456789";
        this.fcm_token = "";
        this.name = "Johnson";
    }
}