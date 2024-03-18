import imgSuccess from "../assets/icon-success.svg";
import { useNavigate } from "react-router-dom";
export default function SuccessPage() {
  const navigate = useNavigate();
  return (
    <div className="SuccessPage">
      <img className="imgSuccess" src={imgSuccess} alt="imgSuccess" />
      <h2 className="title">Thanks for subscribing!</h2>
      <p className="description">
        A confirmation email has been sent to{" "}
        <span style={{ fontWeight: "700" }}>ash@loremcompany.com.</span> Please
        open it and click the button inside to confirm your subscription.
      </p>
      <button className="submitBtn successBtn" onClick={() => navigate("/")}>
        Dismiss message
      </button>
    </div>
  );
}
