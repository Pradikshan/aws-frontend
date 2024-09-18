import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthContext";

const ProfileManagement = () => {
  const { username, phoneNumber, email, address, name, user } =
    useContext(AuthContext);

  const [updatedPhoneNumber, setUpdatedPhoneNumber] = useState(
    phoneNumber || ""
  );
  const [updatedAddress, setUpdatedAddress] = useState(address || "");
  const [updatedName, setUpdatedName] = useState(name || "");

  // Update user attributes function
  const handleSave = () => {
    // Validate input
    if (!updatedPhoneNumber || !updatedAddress || !updatedName) {
      console.error("All fields are required");
      return;
    }

    // Make sure phone number is in the correct format
    const formattedPhoneNumber = updatedPhoneNumber.startsWith("+")
      ? updatedPhoneNumber
      : `+1${updatedPhoneNumber}`; // Assuming default country code is +1

    // Construct the attributes array
    const attributes = [
      { Name: "phone_number", Value: formattedPhoneNumber },
      { Name: "address", Value: updatedAddress },
      { Name: "name", Value: updatedName },
    ];

    user.updateAttributes(attributes, (err, result) => {
      if (err) {
        console.error("Failed to update attributes:", err);
      } else {
        alert("Changes have been saved successfully!");
        console.log("Successfully updated attributes:", result);

        user.getUserAttributes((err, attributes) => {
          if (err) {
            console.error("Failed to fetch updated attributes:", err);
          } else {
            console.log("Updated user attributes:", attributes);

            attributes.forEach((attr) => {
              console.log(`${attr.Name}: ${attr.Value}`);
            });
          }
        });
      }
    });
  };

  return (
    <div className="border-2 border-white p-36 mt-36 rounded-xl">
      <p className="text-white text-4xl">Profile Management</p>
      <div className="flex flex-row mt-10">
        <div className="flex flex-col text-white text-lg font-bold gap-y-3">
          <p>Username:</p>
          <p>Email:</p>
          <p>Name:</p>
          <p>Address:</p>
          <p>Phone number:</p>
        </div>
        <div className="ms-5 flex flex-col text-lg gap-y-3">
          <p className="text-white">{username}</p>
          <p className="text-white">{email}</p>
          <input
            type="text"
            className="input-field"
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
          />
          {/* Email is now displayed but not editable */}
          {/* Editable fields */}
          <input
            type="text"
            className="input-field"
            value={updatedAddress}
            onChange={(e) => setUpdatedAddress(e.target.value)}
          />

          <input
            type="text"
            className="input-field"
            value={updatedPhoneNumber}
            onChange={(e) => setUpdatedPhoneNumber(e.target.value)}
          />
        </div>
      </div>
      {/* Save button */}
      <button
        onClick={handleSave}
        className="p-4 mt-4 text-white font-semibold bg-gradient-to-r from-green-500 to-blue-600 hover:bg-gradient-to-r hover:from-green-600 hover:to-blue-700 rounded-full mx-3 hover:scale-110 transition-all ease-in-out duration-500 text-sm"
      >
        Save Changes
      </button>
    </div>
  );
};

export default ProfileManagement;
