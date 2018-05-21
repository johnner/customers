export class Customer {
  customerID: number;
  name: any;
  birthday: Date;
  gender: string;
  lastContact: Date;
  customerLifetimeValue: number;

  constructor(firstName: string, lastName: string) {
    this.name.firstName = firstName;
    this.name.lastName = lastName;
  }
}
