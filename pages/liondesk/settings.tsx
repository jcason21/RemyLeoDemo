import React, { useState, useEffect } from "react";
import LiondeskNavbar from "../../components/LiondeskNavbar";

export default function SettingsPage() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    smsNotifications: false,
  });

  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [billing, setBilling] = useState({
    cardNumber: "",
    expiryDate: "",
    cvc: "",
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
    // Load settings from localStorage on mount
    const savedProfile = localStorage.getItem("profile");
    const savedNotifications = localStorage.getItem("notifications");
    const savedBilling = localStorage.getItem("billing");

    if (savedProfile) setProfile(JSON.parse(savedProfile));
    if (savedNotifications) setNotifications(JSON.parse(savedNotifications));
    if (savedBilling) setBilling(JSON.parse(savedBilling));
  }, []);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSaveProfile = () => {
    if (!profile.name || !profile.email) {
      setMessage("Name and email are required.");
      return;
    }
    if (!validateEmail(profile.email)) {
      setMessage("Please enter a valid email.");
      return;
    }
    localStorage.setItem("profile", JSON.stringify(profile));
    setMessage("Profile saved successfully.");
  };

  const handleSaveNotifications = () => {
    localStorage.setItem("notifications", JSON.stringify(notifications));
    setMessage("Notification preferences saved.");
  };

  const handleChangePassword = () => {
    if (!passwords.currentPassword || !passwords.newPassword || !passwords.confirmPassword) {
      setMessage("Please fill in all password fields.");
      return;
    }
    if (passwords.newPassword !== passwords.confirmPassword) {
      setMessage("New password and confirmation do not match.");
      return;
    }
    // Password change logic placeholder
    setMessage("Password updated successfully.");
    setPasswords({ currentPassword: "", newPassword: "", confirmPassword: "" });
  };

  const handleSaveBilling = () => {
    if (!billing.cardNumber || !billing.expiryDate || !billing.cvc) {
      setMessage("Please fill in all billing fields.");
      return;
    }
    // Basic validation for card number length, expiry, cvc
    if (billing.cardNumber.replace(/\s/g, "").length < 13) {
      setMessage("Invalid card number.");
      return;
    }
    if (!/^\d{3,4}$/.test(billing.cvc)) {
      setMessage("Invalid CVC.");
      return;
    }
    localStorage.setItem("billing", JSON.stringify(billing));
    setMessage("Billing info saved.");
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <LiondeskNavbar />
      <main className="max-w-4xl mx-auto p-6 space-y-8">
        <h1 className="text-3xl font-bold mb-6">Settings</h1>

        {message && (
          <div className="bg-green-100 text-green-800 px-4 py-2 rounded mb-4">{message}</div>
        )}

        {/* Profile Section */}
        <section className="border p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
          <input
            type="text"
            placeholder="Full Name"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            className="w-full mb-3 px-3 py-2 border rounded"
          />
          <input
            type="email"
            placeholder="Email Address"
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            className="w-full mb-3 px-3 py-2 border rounded"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={profile.phone}
            onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
            className="w-full mb-3 px-3 py-2 border rounded"
          />
          <button
            onClick={handleSaveProfile}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Save Profile
          </button>
        </section>

        {/* Notifications Section */}
        <section className="border p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Notification Preferences</h2>
          <label className="flex items-center mb-3">
            <input
              type="checkbox"
              checked={notifications.emailNotifications}
              onChange={(e) =>
                setNotifications({ ...notifications, emailNotifications: e.target.checked })
              }
              className="mr-2"
            />
            Email Notifications
          </label>
          <label className="flex items-center mb-3">
            <input
              type="checkbox"
              checked={notifications.smsNotifications}
              onChange={(e) =>
                setNotifications({ ...notifications, smsNotifications: e.target.checked })
              }
              className="mr-2"
            />
            SMS Notifications
          </label>
          <button
            onClick={handleSaveNotifications}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Save Notification Preferences
          </button>
        </section>

        {/* Password Section */}
        <section className="border p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Change Password</h2>
          <input
            type="password"
            placeholder="Current Password"
            value={passwords.currentPassword}
            onChange={(e) => setPasswords({ ...passwords, currentPassword: e.target.value })}
            className="w-full mb-3 px-3 py-2 border rounded"
          />
          <input
            type="password"
            placeholder="New Password"
            value={passwords.newPassword}
            onChange={(e) => setPasswords({ ...passwords, newPassword: e.target.value })}
            className="w-full mb-3 px-3 py-2 border rounded"
          />
          <input
            type="password"
            placeholder="Confirm New Password"
            value={passwords.confirmPassword}
            onChange={(e) => setPasswords({ ...passwords, confirmPassword: e.target.value })}
            className="w-full mb-3 px-3 py-2 border rounded"
          />
          <button
            onClick={handleChangePassword}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Update Password
          </button>
        </section>

        {/* Billing Section */}
        <section className="border p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Billing Information</h2>
          <input
            type="text"
            placeholder="Card Number"
            value={billing.cardNumber}
            onChange={(e) => setBilling({ ...billing, cardNumber: e.target.value })}
            className="w-full mb-3 px-3 py-2 border rounded"
          />
          <input
            type="month"
            placeholder="Expiry Date"
            value={billing.expiryDate}
            onChange={(e) => setBilling({ ...billing, expiryDate: e.target.value })}
            className="w-full mb-3 px-3 py-2 border rounded"
          />
          <input
            type="text"
            placeholder="CVC"
            maxLength={4}
            value={billing.cvc}
            onChange={(e) => setBilling({ ...billing, cvc: e.target.value })}
            className="w-full mb-3 px-3 py-2 border rounded"
          />
          <button
            onClick={handleSaveBilling}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Save Billing Info
          </button>
        </section>
      </main>
    </div>
  );
}
