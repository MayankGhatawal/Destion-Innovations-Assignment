import React, { useState } from "react";

const Settings = () => {
  const [profileInfo, setProfileInfo] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1234567890",
  });

  const handleChange = (e) => {
    setProfileInfo({ ...profileInfo, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // Simulate saving changes
    alert("Settings saved successfully!");
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Settings</h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Profile Section */}
        <section className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Profile Information</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={profileInfo.name}
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={profileInfo.email}
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                name="phone"
                value={profileInfo.phone}
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <button
              type="button"
              onClick={handleSave}
              className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-500 transition duration-300"
            >
              Save Changes
            </button>
          </form>
        </section>

        {/* Account Settings */}
        <section className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Account Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Change Password</label>
              <input
                type="password"
                placeholder="New password"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm new password"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <button
              type="button"
              className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-500 transition duration-300"
            >
              Update Password
            </button>
          </div>
        </section>

        {/* Privacy Settings */}
        <section className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Privacy Settings</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="profileVisibility"
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label
                htmlFor="profileVisibility"
                className="ml-2 block text-sm font-medium text-gray-700"
              >
                Make Profile Public
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="searchable"
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label
                htmlFor="searchable"
                className="ml-2 block text-sm font-medium text-gray-700"
              >
                Allow Search Engines to Index Profile
              </label>
            </div>

            <button
              type="button"
              className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-500 transition duration-300"
            >
              Update Privacy
            </button>
          </div>
        </section>

        {/* Notification Settings */}
        <section className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Notification Settings</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="emailNotifications"
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label
                htmlFor="emailNotifications"
                className="ml-2 block text-sm font-medium text-gray-700"
              >
                Email Notifications
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="smsNotifications"
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label
                htmlFor="smsNotifications"
                className="ml-2 block text-sm font-medium text-gray-700"
              >
                SMS Notifications
              </label>
            </div>

            <button
              type="button"
              className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-500 transition duration-300"
            >
              Update Notifications
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Settings;
