import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const sliderImages = [
  "/Images/EVEREST.jpg",
  "/Images/rafting.jpg",
  "/Images/paragliding.jpg",
  "/Images/tour/Trekking2.jpg",
  "/Images/sightseeing-tour.jpg",
  "/Images/luxury-tour.jpeg",
];

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("user");
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % sliderImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const baseURL = "http://localhost:3000/api/users";

    try {
      if (isLogin) {
        // LOGIN
        const response = await axios.post(`${baseURL}/login`, {
          email,
          password,
        });

        const { token, user } = response.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        toast.success("Login successful!", {
          position: "top-right",
          autoClose: 3000,
        });

        if (user.role === "admin") {
          window.location.href = "/dashboard";
        } else {
          window.location.href = "/";
        }
      } else {
        // REGISTER
        await axios.post(`${baseURL}/register`, {
          first_name: firstName,
          last_name: lastName,
          email,
          password,
          role,
        });

        toast.success("Registration successful! Please log in.", {
          position: "top-right",
          autoClose: 3000,
        });

        setIsLogin(true); // Switch to login form after successful registration
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.response?.data || "Something went wrong.";
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="flex w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Left: Image Slider */}
        <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-blue-50 relative">
          <img
            src={sliderImages[currentImage]}
            alt="Travel Slide"
            className="object-cover w-full h-full transition-all duration-700 ease-in-out absolute top-0 left-0 z-0"
            style={{ height: "100%", width: "100%" }}
          />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
          <div className="absolute bottom-30 left-1/2 transform -translate-x-1/2 z-20 text-center w-11/12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg mb-2">
              Welcome to <br /> Magnificent Travels & Tours
            </h2>
            <p className="text-white text-lg font-medium drop-shadow-md">Explore. Dream. Discover.</p>
          </div>
          <div className="absolute flex gap-2 bottom-4 left-1/2 -translate-x-1/2 z-20">
            {sliderImages.map((_, idx) => (
              <span
                key={idx}
                className={`h-2 w-2 rounded-full ${idx === currentImage ? "bg-white" : "bg-white/40"} transition-all`}
              ></span>
            ))}
          </div>
        </div>

        {/* Right: Auth Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-10 relative z-10 bg-white">
          <div className="flex justify-center mb-6">
            <button
              onClick={() => setIsLogin(true)}
              className={`px-4 py-2 font-semibold focus:outline-none transition-all duration-200 ${
                isLogin ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`px-4 py-2 font-semibold focus:outline-none transition-all duration-200 ${
                !isLogin ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"
              }`}
            >
              Register
            </button>
          </div>

          <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
            {isLogin ? "Login to Your Account" : "Create a New Account"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <>
                <div>
                  <label className="block mb-1 text-gray-700">First Name</label>
                  <input
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter first name"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-gray-700">Last Name</label>
                  <input
                    type="text"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter last name"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-gray-700">Role</label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
              </>
            )}
            <div>
              <label className="block mb-1 text-gray-700">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold text-lg shadow-md"
            >
              {isLogin ? "Login" : "Register"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-4">
            {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
            <button onClick={() => setIsLogin(!isLogin)} className="text-blue-600 hover:underline">
              {isLogin ? "Register here" : "Login here"}
            </button>
          </p>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default AuthPage;
