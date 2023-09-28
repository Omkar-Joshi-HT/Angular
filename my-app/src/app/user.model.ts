export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    role: string;
    password: string;
    createdDate:Date;
    lastUpdated:Date;
    active:boolean;
  } 