interface FromField {
  type: string;
  text: string;
  place: string;
  name: string;
}

export const signUpFields: FromField[] = [
  {
    type: "text",
    text: "FullName",
    place: "Enter Your Name",
    name: "fullname",
  },
  {
    type: "email",
    text: "Email",
    place: "Enter Your Email",
    name: "email",
  },
  {
    type: "password",
    text: "Password",
    place: "Enter Your Password",
    name: "password",
  },
  {
    type: "password",
    text: "Confirm Pssword",
    place: "Confirm your Password",
    name: "confirmpassword",
  },
  {
    type: "text",
    text: "Group",
    place: "Enter Your Cell",
    name: "group",
  },
];
