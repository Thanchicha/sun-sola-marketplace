import { useState } from "react";
import LoginBG from "./Components/LoginBG";
import InputField from "./Components/UI/InputField";
import Button from "./Components/UI/Button";

function RegisUser() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleUserRegister = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/register/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, username, password }),
      });

      if (password !== confirmPassword) {
        alert("Password is not match!");
        return;
      }

      const data = await response.json();
      if (response.ok) {
        alert("Registration successful!");
        window.location.href = "/login";
      } else {
        alert(data.message || "Registration failed.");
      }
    } catch (err) {
      console.error("Signup Seller error:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <title>Register for User | Sun Sola</title>
      <div className="h-full max-h-screen flex item-center justify-center">
        <div className="w-1/2 relative">
          <LoginBG />
        </div>
        <div className="w-1/2 ml-auto max-h-screen flex justify-center">
          <div className="w-3/4">
            <div className="text-center pt-8">
              <h1 className="py-5 font-bold text-3xl">User Register</h1>
              <p className="text-[#929292] text-sm px-5">
                Welcome! Please register to create new user account
              </p>
            </div>
            <div className="text-[#929292]">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleUserRegister();
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
                  label="Username"
                  type="text"
                  id="username"
                  value={username}
                  onChange={setUsername}
                />
                <InputField
                  label="Password"
                  type="password"
                  id="password"
                  value={password}
                  onChange={setPassword}
                />
                <InputField
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={setConfirmPassword}
                />
                <div className="text-center py-8 pb-12">
                  <Button label="Submit" onClick={handleUserRegister} type="submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisUser;
