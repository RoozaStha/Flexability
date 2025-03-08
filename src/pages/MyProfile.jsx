import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { assets } from '../assets/assets';
import axios from "axios";
import { toast } from "react-toastify";

const MyProfile = () => {
  const { userData, setUserData, token, backendUrl, loadUserProfileData } = useContext(AppContext);
  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState(null);

  const updateUserProfileData = async () => {
    try {
      const formData = new FormData();
      formData.append("name", userData.name);
      formData.append("phone", userData.phone);
      formData.append("address", JSON.stringify(userData.address || {}));
      formData.append("gender", userData.gender);
      formData.append("dob", userData.dob);

      if (image) formData.append("image", image);

      const { data } = await axios.post(`${backendUrl}/api/user/update-profile`, formData, { 
        headers: { 
          Authorization: `Bearer ${token}` // Use Bearer token for authorization
        } 
      });
      if (data.success) {
        toast.success(data.message);
        await loadUserProfileData();
        setIsEdit(false);
        setImage(null);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while updating the profile.");
    }
  };

  const handleInputChange = (field, value) => {
    setUserData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    userData && (
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6 space-y-4">
        <div className="flex justify-center">
          <label htmlFor="image" className="relative cursor-pointer">
            <img
              src={image ? URL.createObjectURL(image) : userData.image || "/default-image.jpg"}
              alt="Profile"
              className="w-36 h-36 rounded-full object-cover shadow-lg opacity-75"
            />
            {isEdit && (
              <img src={assets.upload_icon} className="w-10 absolute bottom-2 right-2" alt="Upload icon" />
            )}
            <input
              type="file"
              id="image"
              hidden
              onChange={(e) => setImage(e.target.files[0])}
            />
          </label>
        </div>

        <div className="text-center">
          {isEdit ? (
            <input
              type="text"
              value={userData.name || ""}
              onChange={(e) => handleInputChange("name", e.target.value)}
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
                  value={userData.phone || ""}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
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
                  type="text"
                  value={userData.address?.line1 || ""}
                  onChange={(e) => handleInputChange("address", { ...userData.address, line1: e.target.value })}
                  className="border rounded-md px-2 py-1 w-full"
                />
                <input
                  type="text"
                  value={userData.address?.line2 || ""}
                  onChange={(e) => handleInputChange("address", { ...userData.address, line2: e.target.value })}
                  className="border rounded-md px-2 py-1 w-full mt-1"
                />
              </div>
            ) : (
              <p>
                {userData.address?.line1}
                <br />
                {userData.address?.line2}
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
                  value={userData.gender || "Male"}
                  onChange={(e) => handleInputChange("gender", e.target.value)}
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
                  value={userData.dob || ""}
                  onChange={(e) => handleInputChange("dob", e.target.value)}
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
              onClick={updateUserProfileData}
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
    )
  );
};

export default MyProfile;
