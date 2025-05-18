import { useState } from "react";
import { Link } from "react-router-dom";
import LoginBG from "./Components/LoginBG";
import Button from "./Components/UI/Button";
import InputField from "./Components/UI/InputField";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error("Login error:", err);
      alert("Something went wrong. Please try again.");
    }
  };
  return (
    <>
      <title>Login | WOW KAJIAO</title>
      <link rel="icon" type="image/png" href="/public/images/icons/sunsolaLogo.png" />
      <div className="h-screen flex">
        <div className="w-1/2 relative">
          <LoginBG />
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <div className="w-3/4">
            <div className="text-center p-8">
              <h1 className="p-5 font-bold text-4xl">Login</h1>
              <p className="text-[#929292]">
                Welcome back! Please login to you account
              </p>
            </div>
            <div className="text-[#929292]">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSignup();
                }}
                className="flex flex-col gap-2"
              >
                <InputField
                  label="Email"
                  type="email"
                  id="email"
                  value={email}
                  onChange={setEmail}
                />
                <InputField
                  label="Password"
                  type="password"
                  id="password"
                  value={password}
                  onChange={setPassword}
                />
                <Link
                  to="/login/forgetpassword"
                  className="block text-right font-semibold underline pt-3"
                >
                  Forget Password?
                </Link>
                <div className="text-center pt-5">
                  <Button label="Login" onClick={handleLogin} type="submit" />
                  <p className="p-4">
                    New User?{" "}
                    <Link
                      to="/login/register/user"
                      className="text-[#5F7FFF] underline"
                    >
                      Signup
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
