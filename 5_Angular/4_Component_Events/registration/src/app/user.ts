export class User {
    public first_name: string;
    public last_name: string;
    public email: string;
    public password: string;
    public street: string;
    public unit: string;
    public city: string;
    public state: string;
    public lucky: boolean;

    constructor(){
      this.first_name = "";
      this.last_name = "";
      this.email = "";
      this.password = "";
      this.street = "";
      this.unit = "";
      this.city = "";
      this.state = "";
      this.lucky = false;
    }

}
  