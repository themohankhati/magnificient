import React, { useState, useEffect } from "react";
import { FaBell, FaHome, FaTasks, FaUser } from "react-icons/fa";
import { GoPackage } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { createPackage, getPackages, updatePackage, deletePackage } from "../../../../services/packageService";

import { activitiesData } from "../../../tour-overview-page/components/data/activityData";
import { magnificentToursData } from "../../../tour-overview-page/components/data/magnificentTourData";

function PackageDetails() {
  const [images, setImages] = useState([]);
  const [packages, setPackages] = useState([]);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

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
    category: "",
    category_type: "",
    category_place: "",
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
    itinerary: [{ day_number: "", title: "", description: "" }],
    package_includes: [],
    package_excludes: [],
    images: [],
  });

  // Dropdown options
  const categoryOptions = ["Tour", "Trek", "Trekking", "Activity"];
  const countryOptions = ["Nepal", "Tibet", "Bhutan", "India"];
  const categoryPlaceOptions = ["nepal", "india", "bhutan", "tibet"];
  const extraCategoryType = ["nepal-trekking", "tibet-trekking", "india-trekking", "bhutan-trekking"];
  const categoryTypeOptions = Array.from(
    new Set([...activitiesData.map((a) => a.id), ...magnificentToursData.map((t) => t.id), ...extraCategoryType]),
  );

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

  const handleSave = async () => {
    try {
      const data = new FormData();

      // Append images if present
      (formData.images || []).forEach((img) => {
        if (img instanceof File) {
          data.append("images", img);
        }
      });

      // Append other fields
      Object.keys(formData).forEach((key) => {
        const value = formData[key];
        if (Array.isArray(value) || typeof value === "object") {
          data.append(key, JSON.stringify(value));
        } else {
          data.append(key, value);
        }
      });

      const updated = await updatePackage(selectedPackage._id, data);

      // Update local state
      setPackages((prev) => prev.map((pkg) => (pkg._id === updated._id ? updated : pkg)));
      setSelectedPackage(updated);
      setIsEditing(false);
    } catch (error) {
      console.error("Failed to update package:", error.response?.data || error.message);
      alert("Failed to update package. Please try again.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deletePackage(id);

      setPackages((prev) => prev.filter((pkg) => pkg._id !== id));
      setSelectedPackage(null);
      setIsEditing(false);
    } catch (error) {
      console.error("Failed to delete package:", error.response?.data || error.message);
      alert("Failed to delete package. Please try again.");
    }
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
                  <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
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
     <div className="p-6 overflow-x-auto">
  <table className="min-w-full border border-gray-200 bg-white rounded shadow">
    <thead className="bg-gray-100">
      <tr>
        <th className="px-4 py-2 text-left">Package Name</th>
        <th className="px-4 py-2 text-left">Category</th>
        <th className="px-4 py-2 text-left">Price</th>
        <th className="px-4 py-2 text-center">Actions</th>
      </tr>
    </thead>
    <tbody>
      {packages.map((pkg) => (
        <tr key={pkg._id} className="border-t hover:bg-gray-50">
          <td className="px-4 py-2 font-medium">{pkg.package_name}</td>
          <td className="px-4 py-2">{pkg.category}</td>
         
          <td className="px-4 py-2 text-orange-600 font-semibold">
            {pkg.price}
          </td>
          <td className="px-4 py-2 text-center space-x-2">
            <button
              onClick={() => {
                setSelectedPackage(pkg);
                setFormData(pkg);
                setIsEditing(true);
                setShowEditModal(true);
              }}
              className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Edit
            </button>

            <button
              onClick={() => {
                setSelectedPackage(pkg);
                setShowDeleteModal(true);
              }}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


        {/* Package Details Form */}
        {selectedPackage && (
          <div className="p-6 mt-6 bg-white rounded shadow">
            {/* Header Buttons */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-700">Package Details</h2>
              {!isEditing ? (
                <div className="space-x-2">
                  <button
                    onClick={() => setIsEditing(true)}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(selectedPackage._id)}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  >
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

            {/* Package Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded shadow">
              {[
                "package_name",
                "title",
                "category",
                "category_type",
                "category_place",
                "start_date",
                "end_date",
                "price",
              ].map((field) => (
                <div key={field}>
                  <label className="font-medium capitalize">{field.replace("_", " ")}</label>
                  <input
                    type={field.includes("date") ? "date" : "text"}
                    name={field}
                    value={formData[field] || ""}
                    onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                    readOnly={!isEditing}
                    className="w-full border rounded px-3 py-2 mt-1"
                  />
                </div>
              ))}

              {/* Description */}
              <div className="md:col-span-2">
                <label className="font-medium">Description</label>
                <textarea
                  name="description"
                  value={formData.description || ""}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  readOnly={!isEditing}
                  className="w-full border rounded px-3 py-2 mt-1"
                  rows={4}
                />
              </div>
            </div>

            {/* Trip Details */}
            <h3 className="text-lg font-semibold mt-6 mb-2">Trip Details</h3>
            {formData.tripDetails?.map((trip, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-4 rounded shadow mb-4">
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
                      value={trip[field] || ""}
                      readOnly={!isEditing}
                      onChange={(e) => {
                        const updatedTrips = [...formData.tripDetails];
                        updatedTrips[idx][field] = e.target.value;
                        setFormData({ ...formData, tripDetails: updatedTrips });
                      }}
                      className="w-full border rounded px-3 py-2 mt-1"
                    />
                  </div>
                ))}
              </div>
            ))}

            {/* Itinerary */}
            <h3 className="text-lg font-semibold mt-6 mb-2">Itinerary</h3>
            {formData.itinerary?.map((day, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
                <input
                  type="number"
                  placeholder="Day number"
                  value={day.day_number || ""}
                  readOnly={!isEditing}
                  onChange={(e) => {
                    const updated = [...formData.itinerary];
                    updated[idx].day_number = Number(e.target.value);
                    setFormData({ ...formData, itinerary: updated });
                  }}
                  className="border rounded px-3 py-2"
                />
                <input
                  type="text"
                  placeholder="Title"
                  value={day.title || ""}
                  readOnly={!isEditing}
                  onChange={(e) => {
                    const updated = [...formData.itinerary];
                    updated[idx].title = e.target.value;
                    setFormData({ ...formData, itinerary: updated });
                  }}
                  className="border rounded px-3 py-2"
                />
                <input
                  type="text"
                  placeholder="Description"
                  value={day.description || ""}
                  readOnly={!isEditing}
                  onChange={(e) => {
                    const updated = [...formData.itinerary];
                    updated[idx].description = e.target.value;
                    setFormData({ ...formData, itinerary: updated });
                  }}
                  className="border rounded px-3 py-2"
                />
              </div>
            ))}

            {/* Package Includes / Excludes */}
            <div className="md:col-span-2 mt-4">
              <label className="font-medium">Package Includes</label>
              <textarea
                value={formData.package_includes?.join("\n") || ""}
                readOnly={!isEditing}
                onChange={(e) => setFormData({ ...formData, package_includes: e.target.value.split("\n") })}
                className="w-full border rounded px-3 py-2 mt-1"
                rows={4}
              />
            </div>

            <div className="md:col-span-2 mt-4">
              <label className="font-medium">Package Excludes</label>
              <textarea
                value={formData.package_excludes?.join("\n") || ""}
                readOnly={!isEditing}
                onChange={(e) => setFormData({ ...formData, package_excludes: e.target.value.split("\n") })}
                className="w-full border rounded px-3 py-2 mt-1"
                rows={4}
              />
            </div>

            {/* Images */}
            {formData.images?.length > 0 && (
              <div className="mt-4">
                <label className="font-medium">Images</label>
                <div className="flex flex-wrap gap-2 mt-1">
                  {formData.images.map((img, idx) => (
                    <img key={idx} src={img} alt={`package-${idx}`} className="w-24 h-24 object-cover rounded" />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Add Package Modal */}
        {showAddModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-5xl max-h-[90vh] overflow-y-auto">
              <h2 className="text-xl font-bold mb-4">Add New Package</h2>

              {/* Basic Package Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {["package_name", "category", "category_type", "category_place", "title", "price"].map((field) => (
                  <div key={field}>
                    <label className="font-medium capitalize">{field.replace("_", " ")}</label>
                    {field === "category" ? (
                      <select
                        name={field}
                        value={newPackage[field]}
                        onChange={handleNewPackageChange}
                        className="w-full border rounded px-3 py-2 mt-1"
                      >
                        <option value="">Select</option>
                        {categoryOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    ) : field === "category_type" ? (
                      <select
                        name={field}
                        value={newPackage[field]}
                        onChange={handleNewPackageChange}
                        className="w-full border rounded px-3 py-2 mt-1"
                      >
                        <option value="">Select</option>
                        {categoryTypeOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    ) : field === "category_place" ? (
                      <select
                        name={field}
                        value={newPackage[field]}
                        onChange={handleNewPackageChange}
                        className="w-full border rounded px-3 py-2 mt-1"
                      >
                        <option value="">Select</option>
                        {categoryPlaceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type="text"
                        name={field}
                        value={newPackage[field]}
                        onChange={handleNewPackageChange}
                        className="w-full border rounded px-3 py-2 mt-1"
                      />
                    )}
                  </div>
                ))}

                {/* Start & End Dates */}
                <div>
                  <label className="font-medium">Start Date</label>
                  <input
                    type="date"
                    name="start_date"
                    value={newPackage.start_date}
                    onChange={handleNewPackageChange}
                    className="w-full border rounded px-3 py-2 mt-1"
                  />
                </div>
                <div>
                  <label className="font-medium">End Date</label>
                  <input
                    type="date"
                    name="end_date"
                    value={newPackage.end_date}
                    onChange={handleNewPackageChange}
                    className="w-full border rounded px-3 py-2 mt-1"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="mb-4">
                <label className="font-medium">Description</label>
                <textarea
                  rows={5}
                  name="description"
                  value={newPackage.description}
                  onChange={handleNewPackageChange}
                  className="w-full border rounded px-3 py-2 mt-1"
                />
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
                    {field === "country" ? (
                      <select
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
                      >
                        <option value="">Select</option>
                        {countryOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    ) : (
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
                    )}
                  </div>
                ))}

                {/* Trip Map */}
                <div className="md:col-span-2">
                  <label className="font-medium">Trip Map (upload multiple)</label>
                  <input
                    type="file"
                    multiple
                    onChange={(e) => {
                      const files = Array.from(e.target.files).map((f) => f.name);
                      setNewPackage((prev) => ({
                        ...prev,
                        tripDetails: [
                          {
                            ...prev.tripDetails?.[0],
                            trip_map: files,
                          },
                        ],
                      }));
                    }}
                    className="w-full border rounded px-3 py-2 mt-1"
                  />
                </div>
              </div>

              {/* Itinerary */}
              <h3 className="text-lg font-semibold mt-6 mb-2">Itinerary</h3>
              {newPackage.itinerary.map((day, index) => (
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
                value={newPackage.package_includes.join("\n")}
                onChange={(e) =>
                  setNewPackage({
                    ...newPackage,
                    package_includes: e.target.value.split("\n"),
                  })
                }
              />

              <h3 className="text-lg font-semibold mt-4 mb-2">Excludes</h3>
              <textarea
                rows={3}
                className="w-full border rounded px-3 py-2"
                placeholder="Enter each exclude item separated by a newline"
                value={newPackage.package_excludes.join("\n")}
                onChange={(e) =>
                  setNewPackage({
                    ...newPackage,
                    package_excludes: e.target.value.split("\n"),
                  })
                }
              />

              {/* Images */}
              <h3 className="text-lg font-semibold mt-4 mb-2">Choose Images</h3>
              <input type="file" multiple onChange={handleImageUpload} className="w-full border rounded px-3 py-2" />

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
