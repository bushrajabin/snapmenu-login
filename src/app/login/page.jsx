import React from "react";
import Image from "next/image";
import Logo from "../../../public/snapmenu-logo.svg";
import custom from "./login.module.css";

export default function Login() {
  return (
    <div className={custom.loginmaindiv}>
      <div className={custom.logoDiv}>
        <Image src={Logo} alt="logo-image" className={custom.logoimage} />
      </div>

      <div className={custom.loginpage}>
        <div className={custom.loginhead}>Login</div>
        <div className={custom.input}>
          <input type="text" placeholder="Enter your email" className={custom.inputfield} />
          <input type="password" placeholder="Enter your password" className={custom.inputfield}  />
        </div>

        <div className={custom.buttons}>
          <div className={custom.loginbutton}>
            <button >Login</button>
          </div>
          <div className={custom.contnuewith}>
            <div className={custom.line}></div>
            <div className="pl-4 pr-4 text-sm"> or continue with</div>
            <div className={custom.line}></div>
          </div>

          <div className={custom.googlebtn}>
            <button>Google</button>
          </div>

          <div  className={custom.signupoption}>
            <h2>
              Don't have an account?{" "}
              <span className="text-green-400">Sign up</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
