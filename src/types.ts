export interface User {
  id: number;
  username: string;
  email: string;
  address: {
    city: string;
  };
}

export interface FullUser {
  id: number;
  username: string;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  phone: string;
  company: {
    name: string;
  };
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
