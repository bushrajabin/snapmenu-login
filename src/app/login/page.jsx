import React from "react";
import Image from "next/image";
import Logo from "../../../public/snapmenu-logo.svg";
import custom from "./login.module.css";

export default function Login() {
  return (
    <div className={custom.loginMainDiv}>
      <div className={custom.logoDiv}>
        <Image src={Logo} alt="Logo image" className={custom.logoImage} />
      </div>

      <div className={custom.loginPage}>
        <div className={custom.loginHead}>Login</div>

        <div className={custom.input}>
          <input
            type="text"
            placeholder="Enter your email"
            className={custom.inputField}
          />
          <input
            type="password"
            placeholder="Enter your password"
            className={custom.inputField}
          />
        </div>

        <div className={custom.buttons}>
          <div className={custom.loginButton}>
            <button>Login</button>
          </div>

          <div className={custom.contnueWith}>
            <div className={custom.line}></div>
            <div className="pl-4 pr-4 text-sm text-black">or continue with</div>
            <div className={custom.line}></div>
          </div>

          <div className={custom.googleBtn}>
            <button>Google</button>
          </div>

          <div className={custom.signupOption}>
            <h2 className="text-black">
              Don&apos;t have an account?{" "}
              <span className="text-green-400">Sign up</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
