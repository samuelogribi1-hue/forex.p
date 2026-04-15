import "../styles/settings.css";

const Settings = () => {
  return (
    <div className="settings-container">

      <h1 className="settings-title">⚙️ Settings</h1>

      {/* PROFILE CARD */}
      <div className="settings-card">
        <div className="profile">
          <div className="avatar">P</div>

          <div className="profile-info">
            <h3>Prevo OGB</h3>
            <p>prevo@email.com</p>
          </div>
        </div>
      </div>

      {/* ACCOUNT SETTINGS */}
      <div className="settings-card">

        <div className="setting-row">
          <span>Dark Mode</span>

          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
        </div>

        <div className="setting-row">
          <span>Notifications</span>

          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
        </div>

        <div className="setting-row">
          <span>Two-Factor Authentication</span>

          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
        </div>

      </div>

      {/* INFO CARD */}
      <div className="settings-card">
        <p style={{ color: "#6b7280", fontSize: "14px" }}>
          Manage your account preferences and security settings.
        </p>
      </div>

    </div>
  );
};

export default Settings;