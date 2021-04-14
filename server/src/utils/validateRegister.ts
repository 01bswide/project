import { UsernamePasswordInput } from "../resolvers/UsernamePasswordInput";

export const validateRegister = (options: UsernamePasswordInput) => {
  if (!options.email.includes("@")) {
    return [
      {
        field: "email",
        message: "invalid email",
      },
    ];
  }

  if (options.username.length < 6) {
    return [
      {
        field: "username",
        message: "username much be at least 6 characters",
      },
    ];
  }

  if (options.username.includes("@")) {
    return [
      {
        field: "username",
        message: "cannot include an @",
      },
    ];
  }

  if (options.password.length < 8) {
    return [
      {
        field: "password",
        message: "password much be at least 8 characters",
      },
    ];
  }

  return null;
};
