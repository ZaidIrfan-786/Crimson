import "./CSS/Profile.css";

function Profile() {
  return (
    <div className="profile-page">

      <div className="profile-card">

        <div className="profile-header">
          <div className="profile-avatar">
            Z
          </div>

          <h1>Zaid</h1>
          <p>zaid@example.com</p>
        </div>

        <div className="profile-info">

          <div className="info-box">
            <h3>📞 Phone</h3>
            <p>+91 9876543210</p>
          </div>

          <div className="info-box">
            <h3>📍 Address</h3>
            <p>Kolkata, West Bengal</p>
          </div>

          <div className="info-box">
            <h3>🎂 Favorite Cake</h3>
            <p>Chocolate Truffle</p>
          </div>

        </div>

        <div className="stats">

          <div className="stat">
            <h2>15</h2>
            <p>Orders</p>
          </div>

          <div className="stat">
            <h2>₹8,450</h2>
            <p>Spent</p>
          </div>

          <div className="stat">
            <h2>4.8⭐</h2>
            <p>Rating</p>
          </div>

        </div>

        <div className="profile-buttons">

          <button className="edit-btn">
            Edit Profile
          </button>

          <button className="logout-btn">
            Logout
          </button>

        </div>

      </div>

    </div>
  );
}

export default Profile;