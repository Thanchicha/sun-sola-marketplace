import { useState } from "react";
import axios from "axios";
import LoginBG from "./Components/LoginBG";
import InputField from "./Components/UI/InputField";
import Button from "./Components/UI/Button";

function RegisUser() {
  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const handleUserRegister = async () => {
    try {
      if (Password !== ConfirmPassword) {
        alert("Password is not match!");
        return;
      }

      const response = await axios.post(
        "http://10.4.53.25:5008/customerRegister",
        {
          Email,
          Name,
          Password,
        }
      );

      console.log(response.data);

      alert("Registration successful!");
      window.location.href = "/login";
    } catch (err) {
      console.error("Signup User error:", err);
      if (err.response && err.response.data && err.response.data.message) {
        alert(err.response.data.message);
      } else {
        alert("Something went wrong. Please try again.");
      }
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
                  id="Email"
                  value={Email}
                  onChange={setEmail}
                />
                <InputField
                  label="Name"
                  type="text"
                  id="Name"
                  value={Name}
                  onChange={setName}
                />
                <InputField
                  label="Password"
                  type="password"
                  id="Password"
                  value={Password}
                  onChange={setPassword}
                />
                <InputField
                  label="Confirm Password"
                  type="password"
                  id="ConfirmPassword"
                  value={ConfirmPassword}
                  onChange={setConfirmPassword}
                />
                <div className="text-center py-8 pb-12">
                  <Button label="Submit" type="submit" />
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
