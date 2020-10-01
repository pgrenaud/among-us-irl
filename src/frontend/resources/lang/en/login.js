export default {
  title: "Login",
  label: {
    name: "Name",
    room: "Room code",
    submit: "Login"
  },
  rules: {
    name: {
      required: "Name is required.",
      length: "Name must be less than or equal {length} characters."
    },
    room: {
      required: "Room code is required.",
      length: "Room code must be exactly {length} characters."
    }
  }
};
