import { useState } from "react";
import check from "../assets/icon-list.svg";
import "../App.css";
import { useNavigate } from "react-router-dom";
export default function LeftSide() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const emailRegEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [err, setErr] = useState(false);
  const submit = () => {
    if (emailRegEX.test(email)) {
      setErr(false);
      navigate("/success");
    } else {
      setErr(true);
    }
  };

  return (
    <aside className="leftSide">
      <div className="container">
        {" "}
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul>
          <li>
            <img src={check} alt="checkImage" />
            Product discovery and building what matters
          </li>
          <li>
            <img src={check} alt="checkImage" />
            Measuring to ensure updates are a success
          </li>
          <li>
            <img src={check} alt="checkImage" />
            And much more!
          </li>
        </ul>
        <div className="inputSection">
          <span>
            <label htmlFor="email">Email address</label>{" "}
            {err && <p className="errorMessage">Valid email Required</p>}
          </span>
          <input
            type="email"
            name="email"
            id="email"
            className={`${err && "inputError"}`}
            value={email}
            onChange={(evt) => setEmail(evt.target.value)}
            placeholder="email@company.com"
            required
          />
        </div>
        <button className="submitBtn" onClick={submit}>
          Subscribe to monthly newsletter
        </button>
      </div>
    </aside>
  );
}
