import { useState } from "react";
import axios from "axios";
import LoginBG from "./Components/LoginBG";
import InputField from "./Components/UI/InputField";
import Button from "./Components/UI/Button";

function RegisSeller() {
  const [Email, setEmail] = useState("");
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [Phone, setPhone] = useState("");
  const [Birthdate, setBirthdate] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const handleSellerRegister = async () => {
    const email = Email.trim();
    const firstname = Firstname.trim();
    const lastname = Lastname.trim();
    const phone = Phone.trim();
    const birthdate = Birthdate.trim();
    const password = Password;
    const confirmPassword = ConfirmPassword;

    if (
      !email ||
      !firstname ||
      !lastname ||
      !phone ||
      !birthdate ||
      !password ||
      !confirmPassword
    ) {
      alert("Please fill in all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      alert("Phone number must be 10 digits.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post(
        "http://10.4.53.25:5008/sellerRegister",
        {
          Email: email,
          Firstname: firstname,
          Lastname: lastname,
          Phone: phone,
          Birthdate: birthdate,
          Password: password,
          ConfirmPassword: confirmPassword,
        }
      );

      if (response.status === 200) {
        alert("Registration successful!");
        window.location.href = "/";
      } else {
        alert(response.data.message || "Registration failed.");
      }
    } catch (err) {
      console.error("Signup Seller error:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <title>Register for Seller | Sun Sola</title>
      <div className="h-full max-h-screen flex item-center justify-center">
        <div className="w-1/2 relative">
          <LoginBG />
        </div>
        <div className="w-1/2 ml-auto overflow-y-auto max-h-screen flex justify-center">
          <div className="w-3/4">
            <div className="text-center pt-8 pb-4">
              <h1 className="py-5 font-bold text-3xl">Seller Register</h1>
              <p className="text-[#929292] text-sm">
                Welcome! Please register to create new seller account
              </p>
            </div>
            <div className="text-[#929292]">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSellerRegister();
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
                  label="First name"
                  type="text"
                  id="Firstname"
                  value={Firstname}
                  onChange={setFirstname}
                />
                <InputField
                  label="Last name"
                  type="text"
                  id="Lastname"
                  value={Lastname}
                  onChange={setLastname}
                />
                <div className="flex gap-5">
                  <div className="w-1/2">
                    <InputField
                      label="Phone"
                      type="text"
                      inputMode="numeric"
                      patten="[0-9]*"
                      id="Phone"
                      value={Phone}
                      onChange={(val) => setPhone(val.replace(/\D/g, ""))}
                    />
                  </div>
                  <div className="w-1/2">
                    <InputField
                      label="Date of Birth"
                      type="date"
                      id="Birthdate"
                      value={Birthdate}
                      onChange={setBirthdate}
                    />
                  </div>
                </div>
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

export default RegisSeller;
