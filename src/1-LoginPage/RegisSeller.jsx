import { useState } from "react";
import { Link } from "react-router-dom";
import LoginBG from "./Components/LoginBG";
import InputField from "./Components/UI/InputField";
import Button from "./Components/UI/Button";

function RegisSeller() {
  const [organEmail, setOrganEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [nationId, setNationId] = useState("");
  const [phone, setPhone] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/register/seller", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          organEmail,
          firstname,
          lastname,
          nationId,
          phone,
          birthDate,
          password,
          confirmPassword
        }),
      });
      console.log(data);

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
      <div className="h-screen flex">
        <div className="w-1/2 fixed top-0 left-0 h-screen">
          <LoginBG />
        </div>
        <div className="w-1/2 ml-auto my-10 overflow-y-auto max-h-screen flex justify-center">
          <div className="w-3/4">
            <div className="text-center p-8">
              <h1 className="p-5 font-bold text-4xl">Sign up (Seller)</h1>
              <p className="text-[#929292]">
                Welcome! Please Sign up to your new account
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
                  label="Organization Email"
                  type="email"
                  id="organEmail"
                  value={organEmail}
                  onChange={setOrganEmail}
                />
                <InputField
                  label="First name"
                  type="text"
                  id="firstname"
                  value={firstname}
                  onChange={setFirstname}
                />
                <InputField
                  label="Last name"
                  type="text"
                  id="lastname"
                  value={lastname}
                  onChange={setLastname}
                />
                <InputField
                  label="National ID"
                  type="text"
                  inputMode="numeric"
                  patten="[0-9]*"
                  id="nationId"
                  value={nationId}
                  onChange={(val) => setNationId(val.replace(/\D/g, ""))}
                />
                <div className="flex gap-5">
                  <div className="w-1/2">
                    <InputField
                      label="Phone"
                      type="text"
                      inputMode="numeric"
                      patten="[0-9]*"
                      id="phone"
                      value={phone}
                      onChange={(val) => setPhone(val.replace(/\D/g, ""))}
                    />
                  </div>
                  <div className="w-1/2">
                    <InputField
                      label="Date of Birth"
                      type="date"
                      id="birthDate"
                      value={birthDate}
                      onChange={setBirthDate}
                    />
                  </div>
                </div>
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
                <Link
                  to="/login"
                  className="block text-right font-semibold underline pt-3"
                >
                  Back to Login?
                </Link>
                <div className="text-center pt-5">
                  <Button
                    label="Sign up"
                    onClick={handleSignup}
                    type="submit"
                  />
                  <p className="p-4">
                    <Link to="/login" className="text-[#5F7FFF] underline">
                      Cancel
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

export default RegisSeller;
