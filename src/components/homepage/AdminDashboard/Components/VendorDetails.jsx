import React, { useState } from 'react'
import { FaBell, FaHome, FaTasks } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function VendorDetails() {
  const [packages, setPackages] = useState([
    {
      package_name: "Rhododendron Blossom Trail – 8 Days",
      start_date: "2025-03-10",
      end_date: "2025-03-17",
      price: "1150 USD",
      title: "Spring Trek Through Rhododendron Valleys",
      description: "An immersive journey through blooming rhododendron forests...",
    },
    {
      package_name: "Himalayan Sunrise Escape – 8 Days",
      start_date: "2025-11-02",
      end_date: "2025-11-09",
      price: "1250 USD",
      title: "Poon Hill Sunrise Trek with Cultural Tour",
      description: "Catch the golden sunrise over the Himalayas from Poon Hill...",
    },
    {
      package_name: "Annapurna Forest & Culture Walk – 8 Days",
      start_date: "2025-09-20",
      end_date: "2025-09-27",
      price: "1180 USD",
      title: "Nature and Heritage Trek in Annapurna Region",
      description: "A gentle trekking journey perfect for nature lovers...",
    },
    {
      package_name: "Chitwan National Park ",
      start_date: "2025-09-20",
      end_date: "2025-09-27",
      price: "1180 USD",
      title: "Nature and Heritage Trek in Annapurna Region",
      description: "A gentle trekking journey perfect for nature lovers...",
    },
    {
      package_name: "Shey Phokshundo",
      start_date: "2025-09-20",
      end_date: "2025-09-27",
      price: "1180 USD",
      title: "Nature and Heritage Trek in Annapurna Region",
      description: "A gentle trekking journey perfect for nature lovers...",
    },
    ,  {
      package_name: "Palpa Shreenagar Trails",
      start_date: "2025-09-20",
      end_date: "2025-09-27",
      price: "1180 USD",
      title: "Nature and Heritage Trek in Annapurna Region",
      description: "A gentle trekking journey perfect for nature lovers...",
    }
  ])

  const [selectedPackage, setSelectedPackage] = useState(null)
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({})

  const handleSelect = (pkg) => {
    if (selectedPackage && selectedPackage.package_name === pkg.package_name) {
      // If the same package is clicked again, hide the details
      setSelectedPackage(null)
      setIsEditing(false)
    } else {
      setSelectedPackage(pkg)
      setFormData(pkg)
      setIsEditing(false)
    }
  }
  

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleEdit = () => setIsEditing(true)

  const handleCancel = () => {
    setIsEditing(false)
    setFormData(selectedPackage)
  }

  const handleSave = () => {
    const updatedList = packages.map(pkg =>
      pkg.package_name === selectedPackage.package_name ? formData : pkg
    )
    setPackages(updatedList)
    setSelectedPackage(formData)
    setIsEditing(false)
  }

  const handleDelete = () => {
    const filtered = packages.filter(pkg => pkg.package_name !== selectedPackage.package_name)
    setPackages(filtered)
    setSelectedPackage(null)
    setIsEditing(false)
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      {/* Sidebar */}
        <aside className="w-110 text-black flex flex-col bg-white">
          <div className="p-4">
            <img
              src="Images/Magnificent logo.png"
              alt="Logo"
              className="h-50"
            />
          </div>
          <nav className="flex-1 px-4 space-y-4">
            <Link
              to="/dashboard"
              className="flex items-center px-4 py-2 bg-orange-500 rounded"
            >
              <FaHome className="mr-2" /> Home
            </Link>
  
            {/* Billing Menu */}
        
  
            {/* Static Links */}
            <Link
              to="/package"
              className="flex items-center px-4 py-2 hover:bg-gray-700 hover:text-white"
            >
              <FaTasks className="mr-2" /> Package
            </Link>
            <Link
              to="/userdetails"
              className="flex items-center px-4 py-2 hover:bg-gray-700 hover:text-white"
            >
              <FaTasks className="mr-2" /> Users
            </Link>
            <Link
              to="/customerdetails"
              className="flex items-center px-4 py-2 hover:bg-gray-700 hover:text-white"
            >
              <FaTasks className="mr-2" /> Customers
            </Link>
          
  
            {/* Settings Menu */}
   
  
  
          </nav>
        </aside>
  

      {/* Main Content */}
      <main className="flex-1 bg-gray-100">
        {/* Header */}
        <div className="flex justify-end p-4 bg-white shadow">
          <div className="flex items-center space-x-4">
            <FaBell />
            <img src="Images/cultural-historical.jpg" alt="Profile" className="w-10 h-10 rounded-full" />
            <div>
              <p className="text-red-500">Ella Jones</p>
              <p className="text-sm">Admin</p>
            </div>
          </div>
        </div>
        <div className='flex justify-end m-5'>
        <button
    onClick={() => setShowAddModal(true)}
    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
  >
    Add Package
  </button>
  </div>

        {/* Action Cards */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              onClick={() => handleSelect(pkg)}
              className="bg-white p-4 rounded shadow hover:shadow-lg cursor-pointer"
            >
              <h2 className="text-lg font-semibold">{pkg.package_name}</h2>
              <p className="text-sm text-gray-500">{pkg.start_date} to {pkg.end_date}</p>
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
                  <button onClick={handleEdit} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Edit</button>
                  <button onClick={handleDelete} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
                </div>
              ) : (
                <div className="space-x-2">
                  <button onClick={handleSave} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Save</button>
                  <button onClick={handleCancel} className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500">Cancel</button>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded shadow">
              {['package_name', 'title', 'start_date', 'end_date', 'price'].map((field) => (
                <div key={field}>
                  <label className="font-medium capitalize">{field.replace('_', ' ')}</label>
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
      </main>
    </div>
  )
}

export default VendorDetails
