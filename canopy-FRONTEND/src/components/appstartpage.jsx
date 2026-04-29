import "./mainPage.css";
import pictLogo from "./pictLogo.png";

export default function MainPage() {
  return (
    <div className="phone-screen">
      <div className="status-bar">
        <span>9:41</span>
        <span>📶 📡 🔋</span>
      </div>

      <div className="logo-section">
        <img src={pictLogo} alt="Pict Logo" className="logo-image" />
      </div>

      <div className="welcome-panel">
        <h1>Welcome</h1>

        <button className="login-btn">Login</button>
        <button className="create-btn">Create Account</button>
      </div>
    </div>
  );
}