export class Customer {
  customerID: number;
  name: {
    first: string;
    last: string;
  };
  birthday: Date;
  gender: string;
  lastContact: Date;
  customerLifetimeValue: number;
}
