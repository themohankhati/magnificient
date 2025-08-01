// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import axios from "axios";

const PackageForm = () => {
  const [form, setForm] = useState({
    package_name: "",
    category: "",
    description: "",
    price: "",
    tripDetails: [
      {
        country: "",
        duration: "",
        difficulty: "",
        trip_map_files: [],
      },
    ],
  });

  const [images, setImages] = useState([]);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleTripDetailChange = (i, e) => {
    const { name, value, files } = e.target;
    const updated = [...form.tripDetails];
    updated[i][name] = files ? Array.from(files) : value;
    setForm((prev) => ({ ...prev, tripDetails: updated }));
  };

  const handleImageUpload = (e) => {
    const newFiles = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...newFiles]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    // Append regular fields
    data.append("package_name", form.package_name);
    data.append("category", form.category);
    data.append("description", form.description);
    data.append("price", form.price);

    // Append tripDetails JSON (excluding trip_map_files)
    const cleanTripDetails = form.tripDetails.map(({ trip_map_files, ...rest }) => rest);
    data.append("tripDetails", JSON.stringify(cleanTripDetails));

    // Append main images
    images.forEach((img) => {
      data.append("images", img);
    });

    // Append trip_map_files for each trip detail
    form.tripDetails.forEach((detail, idx) => {
      (detail.trip_map_files || []).forEach((file) => {
        data.append(`trip_map_${idx}`, file);
      });
    });

    try {
      const res = await axios.post("http://localhost:3000/api/package", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Success:", res.data);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="package_name" placeholder="Name" onChange={handleFormChange} />
      <input name="category" placeholder="Category" onChange={handleFormChange} />
      <textarea name="description" placeholder="Description" onChange={handleFormChange} />
      <input name="price" placeholder="Price" onChange={handleFormChange} />

      <label>Main Images</label>
      <input type="file" className="w-full border rounded px-3 py-2" placeholder="Choose Images" multiple onChange={handleImageUpload} />

      {form.tripDetails.map((detail, i) => (
        <div key={i}>
          <h4>Trip Detail #{i + 1}</h4>
          <input name="country" placeholder="Country" onChange={(e) => handleTripDetailChange(i, e)} />
          <input name="duration" placeholder="Duration" onChange={(e) => handleTripDetailChange(i, e)} />
          <input name="difficulty" placeholder="Difficulty" onChange={(e) => handleTripDetailChange(i, e)} />
          <label>Trip Map Files</label>
          <input type="file" multiple name="trip_map_files" onChange={(e) => handleTripDetailChange(i, e)} />
        </div>
      ))}

      <button type="submit">Submit</button>
    </form>
  );
};

export default PackageForm;
