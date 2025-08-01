import React, { useState, useEffect } from "react";
import { FaBell, FaHome, FaTasks, FaUser } from "react-icons/fa";
import { GoPackage } from "react-icons/go";
import { Link } from "react-router-dom";
import { createPackage, getPackages } from "../../../../services/packageService";

function PackageDetails() {
  const [images, setImages] = useState([]);
  const [packages, setPackages] = useState([]);
  const getPackagesName = async () => {
    try {
      const packageData = await getPackages();
      setPackages(packageData);
    } catch (error) {
      console.error("Error fetching package data:", error);
    }
  };
  useEffect(() => {
    getPackagesName();
  }, []);

  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const [newPackage, setNewPackage] = useState({
    package_name: "",
    title: "",
    start_date: "",
    end_date: "",
    price: "",
    description: "",
    tripDetails: [
      {
        country: "",
        duration: "",
        difficulty: "",
        activity: "",
        maxAltitude: "",
        bestSeason: "",
        accommodation: "",
        meals: "",
        startEndpoint: "",
      },
    ],
    itinerary: [
      { day_number: "", title: "", description: "" },
    ],
    package_includes: [],
    package_excludes: [],
    images: [],
  });

  const handleSelect = (pkg) => {
    if (selectedPackage && selectedPackage.package_name === pkg.package_name) {
      setSelectedPackage(null);
      setIsEditing(false);
    } else {
      setSelectedPackage(pkg);
      setFormData(pkg);
      setIsEditing(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEdit = () => setIsEditing(true);
  const handleCancel = () => {
    setIsEditing(false);
    setFormData(selectedPackage);
  };

  const handleSave = () => {
    const updatedList = packages.map((pkg) => (pkg.package_name === selectedPackage.package_name ? formData : pkg));
    setPackages(updatedList);
    setSelectedPackage(formData);
    setIsEditing(false);
  };

  const handleDelete = () => {
    const filtered = packages.filter((pkg) => pkg.package_name !== selectedPackage.package_name);
    setPackages(filtered);
    setSelectedPackage(null);
    setIsEditing(false);
  };

  const handleNewPackageChange = (e) => {
    const { name, value } = e.target;
    setNewPackage((prev) => ({ ...prev, [name]: value }));
  };
  const handleImageUpload = (e) => {
    const newFiles = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...newFiles]);
  };

const handleAddPackage = async () => {
  const data = new FormData();

  // Append each image file
  images.forEach((img) => {
    data.append("images", img); // or "images[]" if your backend expects array notation
  });

  // Append each field from the newPackage object
  Object.keys(newPackage).forEach((key) => {
    const value = newPackage[key];

    if (Array.isArray(value) || typeof value === "object") {
      // For arrays or objects (like tripDetails, itinerary, etc.)
      data.append(key, JSON.stringify(value));
    } else {
      // For primitive values (string, number, etc.)
      data.append(key, value);
    }
  });

  try {
    const created = await createPackage(data); // Ensure createPackage accepts FormData and uses correct headers
    setPackages([...packages, created]);
    setShowAddModal(false);
    setImages([]); // Reset images
  } catch (error) {
    console.error("Failed to add package:", error.response?.data || error.message);
    alert("Failed to add package. Please try again.");
  }
};


  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-50 text-black flex flex-col bg-white">
        <div className="p-4">
          <img src="Images/Magnificent logo.png" alt="Logo" />
        </div>
        <nav className="flex-1 px-4 space-y-4">
          <Link to="/dashboard" className="flex items-center px-4 py-2 hover:bg-gray-700 hover:text-white">
            <FaHome className="mr-2" /> Home
          </Link>
          <Link to="/dashboardpackage" className="flex items-center px-4 py-2 hover:bg-gray-700 hover:text-white">
            <GoPackage className="mr-2" /> Package
          </Link>
          <Link to="/userdetails" className="flex items-center px-4 py-2 hover:bg-gray-700 hover:text-white">
            <FaUser className="mr-2" /> Users
          </Link>
          <Link to="/customerdetails" className="flex items-center px-4 py-2 hover:bg-gray-700 hover:text-white">
            <FaUser className="mr-2" /> Customers
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100">
        {/* Header */}
        <div className="flex justify-end p-4 bg-white shadow">
          <div className="flex items-center space-x-4">
            <img src="Images/cultural-historical.jpg" alt="Profile" className="w-10 h-10 rounded-full" />
            <div
              className="relative"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <div className="cursor-pointer">
                <p className="text-red-500">Ella Jones</p>
                <p className="text-sm">Admin</p>
              </div>

              {showDropdown && (
                <div className="absolute right-0  w-40 bg-white border rounded shadow z-50">
                  <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    My Profile
                  </Link>
                  <button
                    onClick={() => alert("Logging out...")}
                    className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Add Package Button */}
        <div className="flex justify-end m-5">
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Add Package
          </button>
        </div>

        {/* Package Cards */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              onClick={() => handleSelect(pkg)}
              className="bg-white p-4 rounded shadow hover:shadow-lg cursor-pointer"
            >
              <h2 className="text-lg font-semibold">{pkg.package_name}</h2>
              <p className="text-sm text-gray-500">
                {pkg.start_date} to {pkg.end_date}
              </p>
              <p className="text-orange-600 font-bold mt-2">{pkg.price}</p>
            </div>
          ))}
        </div>

        {/* Package Details Form */}
        {selectedPackage && (
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-700">Package Details</h2>
              {!isEditing ? (
                <div className="space-x-2">
                  <button onClick={handleEdit} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Edit
                  </button>
                  <button onClick={handleDelete} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                    Delete
                  </button>
                </div>
              ) : (
                <div className="space-x-2">
                  <button onClick={handleSave} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                    Save
                  </button>
                  <button onClick={handleCancel} className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500">
                    Cancel
                  </button>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded shadow">
              {["package_name", "title", "start_date", "end_date", "price"].map((field) => (
                <div key={field}>
                  <label className="font-medium capitalize">{field.replace("_", " ")}</label>
                  <input
                    type="text"
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    readOnly={!isEditing}
                    className="w-full border rounded px-3 py-2 mt-1"
                  />
                </div>
              ))}
              <div className="md:col-span-2">
                <label className="font-medium">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  readOnly={!isEditing}
                  className="w-full border rounded px-3 py-2 mt-1"
                  rows={4}
                />
              </div>
            </div>
          </div>
        )}

        {/* Add Package Modal */}
        {showAddModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
              <h2 className="text-xl font-bold mb-4">Add New Package</h2>

              {/* Basic Package Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {["package_name", "title", "start_date", "end_date", "price"].map((field) => (
                  <div key={field}>
                    <label className="font-medium capitalize">{field.replace("_", " ")}</label>
                    <input
                      type={field.includes("date") ? "date" : "text"}
                      name={field}
                      value={newPackage[field]}
                      onChange={handleNewPackageChange}
                      className="w-full border rounded px-3 py-2 mt-1"
                    />
                  </div>
                ))}
              </div>

              {/* Trip Details */}
              <h3 className="text-lg font-semibold mt-6 mb-2">Trip Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "country",
                  "duration",
                  "difficulty",
                  "activity",
                  "maxAltitude",
                  "bestSeason",
                  "accommodation",
                  "meals",
                  "startEndpoint",
                ].map((field) => (
                  <div key={field}>
                    <label className="font-medium capitalize">{field}</label>
                    <input
                      type="text"
                      name={field}
                      value={newPackage.tripDetails?.[0]?.[field] || ""}
                      onChange={(e) => {
                        const { name, value } = e.target;
                        setNewPackage((prev) => ({
                          ...prev,
                          tripDetails: [
                            {
                              ...prev.tripDetails?.[0],
                              [name]: value,
                            },
                          ],
                        }));
                      }}
                      className="w-full border rounded px-3 py-2 mt-1"
                    />
                  </div>
                ))}
              </div>

              {/* Itinerary */}
              <h3 className="text-lg font-semibold mt-6 mb-2">Itinerary</h3>
              { ["day_number", "title", "description"]?.map((day, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
                  <input
                    type="number"
                    placeholder="Day number"
                    value={day.day_number}
                    onChange={(e) => {
                      const updated = [...newPackage.itinerary];
                      updated[index].day_number = e.target.value;
                      setNewPackage({ ...newPackage, itinerary: updated });
                    }}
                    className="border rounded px-3 py-2"
                  />
                  <input
                    type="text"
                    placeholder="Title"
                    value={day.title}
                    onChange={(e) => {
                      const updated = [...newPackage.itinerary];
                      updated[index].title = e.target.value;
                      setNewPackage({ ...newPackage, itinerary: updated });
                    }}
                    className="border rounded px-3 py-2"
                  />
                  <input
                    type="text"
                    placeholder="Description"
                    value={day.description}
                    onChange={(e) => {
                      const updated = [...newPackage.itinerary];
                      updated[index].description = e.target.value;
                      setNewPackage({ ...newPackage, itinerary: updated });
                    }}
                    className="border rounded px-3 py-2"
                  />
                </div>
              ))}
              <button
                className="text-blue-500 mt-2"
                onClick={() =>
                  setNewPackage((prev) => ({
                    ...prev,
                    itinerary: [...(prev.itinerary || []), { day_number: "", title: "", description: "" }],
                  }))
                }
              >
                + Add Day
              </button>

              {/* Includes & Excludes */}
              <h3 className="text-lg font-semibold mt-6 mb-2">Includes</h3>
              <textarea
                rows={3}
                className="w-full border rounded px-3 py-2"
                placeholder="Enter each include item separated by a newline"
                onChange={(e) => setNewPackage({ ...newPackage, package_includes: e.target.value.split("\n") })}
              />

              <h3 className="text-lg font-semibold mt-4 mb-2">Excludes</h3>
              <textarea
                rows={3}
                className="w-full border rounded px-3 py-2"
                placeholder="Enter each exclude item separated by a newline"
                onChange={(e) => setNewPackage({ ...newPackage, package_excludes: e.target.value.split("\n") })}
              />

              {/* Image URLs */}
              <h3 className="text-lg font-semibold mt-4 mb-2">Choose Images</h3>
              <input
                type="file"
                className="w-full border rounded px-3 py-2"
                placeholder="Choose Images"
                multiple
                onChange={handleImageUpload}
              />

              {/* Footer Buttons */}
              <div className="flex justify-end mt-6 space-x-2">
                <button
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddPackage}
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Add Package
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default PackageDetails;
