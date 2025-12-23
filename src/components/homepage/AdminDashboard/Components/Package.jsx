import React, { useState, useEffect } from "react";
import { FaHome, FaUser } from "react-icons/fa";
import { GoPackage } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { createPackage, getPackages, updatePackage, deletePackage } from "../../../../services/packageService";

import { activitiesData } from "../../../tour-overview-page/components/data/activityData";
import { magnificentToursData } from "../../../tour-overview-page/components/data/magnificentTourData";
import { toast, ToastContainer } from "react-toastify";

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
  const [, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

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

  const handleSave = async () => {
    try {
      const data = new FormData();

      // Images
      (formData.images || []).forEach((img) => {
        if (img instanceof File) data.append("images", img);
      });

      Object.entries(formData).forEach(([key, value]) => {
        if (value === null || value === "" || value === undefined) return;

        if (Array.isArray(value) || typeof value === "object") {
          data.append(key, JSON.stringify(value));
        } else {
          data.append(key, value);
        }
      });

      const updated = await updatePackage(selectedPackage._id, data);

      setPackages((prev) => prev.map((pkg) => (pkg._id === updated._id ? updated : pkg)));

      setSelectedPackage(updated);
      setIsEditing(false);
      setShowEditModal(false);

      toast.success("Package updated successfully.");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update package.");
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this package?");

    if (!confirmDelete) return;

    try {
      await deletePackage(id);

      setPackages((prev) => prev.filter((pkg) => pkg._id !== id));
      setSelectedPackage(null);

      toast.success("Package deleted successfully.");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete package.");
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

                  <td className="px-4 py-2 text-orange-600 font-semibold">{pkg.price}</td>
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
                      onClick={() => handleDelete(pkg._id)}
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

        {showEditModal && selectedPackage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-lg shadow-lg p-6 relative">
              {/* Close Button */}
              <button
                onClick={() => {
                  setShowEditModal(false);
                  setIsEditing(false);
                }}
                className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
              ></button>

              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-700">Edit Package</h2>
                <div className="space-x-2">
                  <button onClick={handleSave} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                    Save
                  </button>
                  <button
                    onClick={() => {
                      setShowEditModal(false);
                      setIsEditing(false);
                    }}
                    className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
                  >
                    Cancel
                  </button>
                </div>
              </div>

              {/* Package Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      value={formData[field] || ""}
                      onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                      className="w-full border rounded px-3 py-2 mt-1"
                    />
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="mt-4">
                <label className="font-medium">Description</label>
                <textarea
                  value={formData.description || ""}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full border rounded px-3 py-2 mt-1"
                  rows={4}
                />
              </div>

              {/* Trip Details */}
              <h3 className="text-lg font-semibold mt-6 mb-2">Trip Details</h3>
              {formData.tripDetails?.map((trip, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-4 rounded mb-3">
                  {Object.keys(trip).map((field) => (
                    <div key={field}>
                      <label className="font-medium capitalize">{field}</label>
                      <input
                        type="text"
                        value={trip[field] || ""}
                        onChange={(e) => {
                          const updated = [...formData.tripDetails];
                          updated[idx][field] = e.target.value;
                          setFormData({ ...formData, tripDetails: updated });
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
                <div key={idx} className="grid grid-cols-3 gap-2 mb-2">
                  <input
                    type="number"
                    value={day.day_number || ""}
                    onChange={(e) => {
                      const updated = [...formData.itinerary];
                      updated[idx].day_number = e.target.value;
                      setFormData({ ...formData, itinerary: updated });
                    }}
                    className="border rounded px-3 py-2"
                  />
                  <input
                    type="text"
                    value={day.title || ""}
                    onChange={(e) => {
                      const updated = [...formData.itinerary];
                      updated[idx].title = e.target.value;
                      setFormData({ ...formData, itinerary: updated });
                    }}
                    className="border rounded px-3 py-2"
                  />
                  <input
                    type="text"
                    value={day.description || ""}
                    onChange={(e) => {
                      const updated = [...formData.itinerary];
                      updated[idx].description = e.target.value;
                      setFormData({ ...formData, itinerary: updated });
                    }}
                    className="border rounded px-3 py-2"
                  />
                </div>
              ))}
            </div>
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
      <ToastContainer />
    </div>
  );
}

export default PackageDetails;
