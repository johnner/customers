export class Customer {
  customerID: number;
  name: Object;
  birthday: Date;
  gender: string;
  lastContact: Date;
  customerLifetimeValue: number;

  constructor(firstName: string, lastName: string) {
    this.name = this.name || {};
    this.name.firstName = firstName;
    this.name.lastName = lastName;
  }
}
