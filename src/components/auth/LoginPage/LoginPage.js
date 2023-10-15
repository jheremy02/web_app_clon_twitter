import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../common/Button";
import AuthContext from "../context";
import { login } from "./service.js";
import { authLogin } from "../../../store/actions";
import { connect } from "react-redux";

function LoginPage({ onLogin }) {

  
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    remember: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState(null);

  const firtsStateClassName =
    "bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full";

  const activeClassName = "border-solid border-2 border-green-500";

  const [className, setClassName] = useState(firtsStateClassName);

  const location = useLocation();

  const navigate = useNavigate();

  function handleActiveClass() {
    setClassName();
  }

  const { username, password, remember } = credentials;

  function handleChanges(event) {
    const isCheckbox = event.target.type === "checkbox";

    setCredentials((credentials) => ({
      ...credentials,
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      setIsLoading(true);
      await login(credentials);

      setIsLoading(false);
      onLogin()

      const from = location.state?.from?.pathname || "/";

      navigate(from, { replace: true });
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  }

  return (
    <div className="bg-white lg:w-5/12 md:6/12 w-10/12 shadow-3xl">
      <div className="bg-gray-800 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 md:p-8">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="#FFF">
          <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
        </svg>
      </div>

      <form className="p-12 md:p-24" onSubmit={handleSubmit}>
        <div className="flex items-center text-lg mb-6 md:mb-8">
          <svg className="absolute ml-3" width="24" viewBox="0 0 24 24">
            <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z" />
          </svg>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleChanges}
            className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full "
            placeholder="Username"
          />
        </div>
        <div className="flex items-center text-lg mb-6 md:mb-8">
          <svg className="absolute ml-3" viewBox="0 0 24 24" width="24">
            <path d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z" />
          </svg>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChanges}
            className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
            placeholder="Password"
          />
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Remember me</span>
            <input
              type="checkbox"
              checked={remember}
              name="remember"
              className="checkbox checkbox-primary"
              onChange={handleChanges}
            />
          </label>
        </div>
        <Button
          type="submit"
          variant="primary"
          disabled={!username || !password || isLoading}
        >
          Log in
        </Button>
        Lesson Notes Take notes from the les
      </form>

      {isLoading && (
        <div className="flex items-center justify-center space-x-2">
          <div
            className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full"
            role="status"
          >
            <span className="visually-hidden"></span>
          </div>
        </div>
      )}

      {error && (
        <div
          className="flex bg-red-100 rounded-lg p-4 mb-4 text-sm text-red-700"
          role="alert"
        >
          <svg
            className="w-5 h-5 inline mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <div>
            <span className="font-medium">{error.message}</span>.
          </div>
        </div>
      )}
    </div>
  );
}

const mapDispatchProps = (dispatch) => {
  return {
    onLogin: () => dispatch(authLogin()),
  };
};

const ConnectedLoginPage = connect(null, mapDispatchProps)(LoginPage);

export default ConnectedLoginPage;
