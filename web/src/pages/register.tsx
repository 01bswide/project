import React from "react";
import { PrimaryButton } from "../components/Button";
import Checkbox from "../components/Checkbox";
import IconWrapper from "../components/IconWrapper";
import Lock from "../components/vectors/Lock";

interface registerProps {}

const Register: React.FC<registerProps> = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-1 px-4 sm:px-6 lg:px-8">
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
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-info rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-link focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-info rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-link focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <Checkbox label="Remember me" />

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-link hover:text-link-hover"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <PrimaryButton type="submit">
            <IconWrapper position="left">
              <Lock />
            </IconWrapper>
            Sign in
          </PrimaryButton>
        </form>
      </div>
    </div>
  );
};

export default Register;
