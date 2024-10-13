import React, { useState } from "react";

const Profile = () => {
  const [editing, setEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    bio: "Full Stack Developer passionate about building applications.",
    profilePic: "https://via.placeholder.com/150", // Placeholder image
  });

  const handleEdit = () => setEditing(!editing);

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // Simulate saving changes
    alert("Profile updated successfully!");
    setEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Profile</h1>
      </header>

      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-center">
        {/* Profile Picture */}
        <div className="mb-6 md:mb-0 md:mr-6">
          <img
            src={userInfo.profilePic}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover"
          />
        </div>

        {/* Profile Information */}
        <div className="w-full md:w-2/3">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              {editing ? (
                <input
                  type="text"
                  name="name"
                  value={userInfo.name}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              ) : (
                <p className="text-lg">{userInfo.name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              {editing ? (
                <input
                  type="email"
                  name="email"
                  value={userInfo.email}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              ) : (
                <p className="text-lg">{userInfo.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Bio</label>
              {editing ? (
                <textarea
                  name="bio"
                  value={userInfo.bio}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  rows={4}
                />
              ) : (
                <p>{userInfo.bio}</p>
              )}
            </div>

            {editing ? (
              <button
                onClick={handleSave}
                className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-500 transition duration-300"
              >
                Save Changes
              </button>
            ) : (
              <button
                onClick={handleEdit}
                className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-500 transition duration-300"
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
