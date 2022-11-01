export type Contact = {
  id?: number;
  name: string;
  email: string;
  adress: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
};

export type Post = {
  id?: number;
  title: string;
  body: string;
};
