import React, { useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Roja Shrestha",
    image: assets.profile_pic,
    email: "rojastha@gmail.com",
    phone: "+977 9867926392",
    address: {
      line1: "Chandragiri_5",
      line2: "Kathmandu, Nepal",
    },
    gender: "Female",
    dob: "2005-03-19",
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6 space-y-4">
      <div className="flex justify-center">
        <img
          src={userData.image}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover shadow-lg"
        />
      </div>

      <div className="text-center">
        {isEdit ? (
          <input
            type="text"
            value={userData.name}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, name: e.target.value }))
            }
            className="border rounded-md px-2 py-1 w-full text-center"
          />
        ) : (
          <h2 className="text-2xl font-semibold">{userData.name}</h2>
        )}
      </div>

      <hr className="my-4 border-gray-200" />

      <div>
        <p className="text-lg font-semibold mb-2">Contact Information</p>
        <div className="space-y-2">
          <p>
            <span className="font-medium">Email:</span> {userData.email}
          </p>
          <p>
            <span className="font-medium">Phone:</span>
            {isEdit ? (
              <input
                type="text"
                value={userData.phone}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, phone: e.target.value }))
                }
                className="border rounded-md px-2 py-1 w-full"
              />
            ) : (
              <span> {userData.phone}</span>
            )}
          </p>
          <p className="font-medium">Address:</p>
          {isEdit ? (
            <div>
              <input
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
                value={userData.address.line1}
                type="text"
                className="border rounded-md px-2 py-1 w-full"
              />
              <input
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
                value={userData.address.line2}
                type="text"
                className="border rounded-md px-2 py-1 w-full mt-1"
              />
            </div>
          ) : (
            <p>
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>

      <hr className="my-4 border-gray-200" />

      <div>
        <p className="text-lg font-semibold mb-2">Basic Information</p>
        <div className="space-y-2">
          <p>
            <span className="font-medium">Gender:</span>
            {isEdit ? (
              <select
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, gender: e.target.value }))
                }
                value={userData.gender}
                className="border rounded-md px-2 py-1 w-full"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
            ) : (
              <span> {userData.gender}</span>
            )}
          </p>
          <p>
            <span className="font-medium">Birth Date:</span>
            {isEdit ? (
              <input
                type="date"
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, dob: e.target.value }))
                }
                value={userData.dob}
                className="border rounded-md px-2 py-1 w-full"
              />
            ) : (
              <span> {userData.dob}</span>
            )}
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-4">
        {isEdit ? (
          <button
            onClick={() => setIsEdit(false)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Save Information
          </button>
        ) : (
          <button
            onClick={() => setIsEdit(true)}
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
