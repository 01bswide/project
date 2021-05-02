import React, { useState } from "react";

import Checkbox from "../components/Checkbox";
import Lock from "../components/icons/Lock";
import Form from "../components/Form";
import UserVisibleError from "../util/UserVisibleError";
import { useMutation } from "urql";

const LOGIN_MUTATION = `
mutation Login($usernameOrEmail: String!, $password:String!) {
  login(usernameOrEmail: $usernameOrEmail, password: $password) {
    user {
      id
      username
    }
    errors {
      field
      message
    }
  }
}`;

const Login: React.FC = () => {
  return (
    <div className="min-h-screen flex mt-16 justify-center py-1 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-bold text-info">
            Sign in to your account
          </h2>
        </div>
        <LoginForm className="mt-8 space-y-6" />
      </div>
    </div>
  );
};

export default Login;

interface LoginFormProps {
  className: string;
}

function LoginForm(props: LoginFormProps) {
  const { className } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [{}, login] = useMutation(LOGIN_MUTATION);

  const handleSubmit = async () => {
    if (email === "ben@ben") {
      throw new UserVisibleError("That is not a real Email");
    }
    if (password === "password") {
      throw new UserVisibleError("password cannot be password");
    }
    login({ usernameOrEmail: email, password: password });
  };

  return (
    <Form onSubmit={handleSubmit} className={className}>
      <div className="rounded shadow-sm -space-y-px">
        <Form.TextInput
          autoComplete={"email"}
          id={"email-address"}
          label={"Email Address"}
          name={"email"}
          onChange={(event) => setEmail(event.target.value)}
          required
          rounded={"t"}
          type={"email"}
          value={email}
        />
        <Form.TextInput
          autoComplete={"current-password"}
          id={"password"}
          label={"Password"}
          name={"password"}
          onChange={(event) => setPassword(event.target.value)}
          required
          rounded={"b"}
          type={"password"}
          value={password}
        />
      </div>

      <div className="flex justify-between">
        <Checkbox label="Remember me" />

        <div className="text-sm">
          <a href="#" className="font-medium text-link hover:text-link-hover">
            Forgot your password?
          </a>
        </div>
      </div>
      <Form.ErrorAlert />
      <Form.SubmitButton
        submitLabel={"Sign In"}
        icon={<Lock />}
        loadingLabel={"Signing In"}
      />
    </Form>
  );
}
