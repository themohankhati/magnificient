import React, { useState, useEffect } from "react";
import axios from "axios";
const sliderImages = [
  "/Images/EVEREST.jpg",
  "/Images/rafting.jpg",
  "/Images/paragliding.jpg",
  "/Images/tour/Trekking2.jpg",
  "/Images/sightseeing-tour.jpg",
  "/Images/luxury-tour.jpeg"
];

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
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
      const response = await axios.post(`${baseURL}/login`, {
        email,
        password,
      });

      const { token, user } = response.data;
      localStorage.setItem("token", token); // Store token
      console.log("Login successful:", user);
      alert("Login successful!");
    } else {
      const [first_name, ...rest] = name.trim().split(" ");
      const last_name = rest.join(" ") || "-";
      const role = "user";

      await axios.post(`${baseURL}/register`, {
        first_name,
        last_name,
        email,
        password,
        role,
      });

      alert("Registration successful! Please log in.");
      setIsLogin(true); // Switch to login after successful registration
    }
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
    alert(error.response?.data || "Something went wrong.");
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
          {/* Overlay for text visibility */}
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
          {/* Logo in top-left */}
          {/* <div className="absolute top-1 left-3 z-10">
            <img
              src="/Images/Magnificent logo.png"
              alt="Magnificent Travels and Tours Logo"
              className="w-32 h-32 object-contain drop-shadow-xl"
            />
          </div> */}
          {/* Welcome message with overlay */}
          <div className="absolute bottom-30 left-1/2 transform -translate-x-1/2 z-20 text-center w-11/12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg mb-2">
              Welcome to <br /> Magnificent Travels & Tours
            </h2>
            <p className="text-white text-lg font-medium drop-shadow-md">Explore. Dream. Discover.</p>
          </div>
          {/* Slider dots */}
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
              <div>
                <label className="block mb-1 text-gray-700">Full Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your full name"
                />
              </div>
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
          {isLogin && (
            <p className="text-center text-sm text-gray-600 mt-4">
              Don’t have an account?{' '}
              <button
                onClick={() => setIsLogin(false)}
                className="text-blue-600 hover:underline"
              >
                Register here
              </button>
            </p>
          )}
          {!isLogin && (
            <p className="text-center text-sm text-gray-600 mt-4">
              Already have an account?{' '}
              <button
                onClick={() => setIsLogin(true)}
                className="text-blue-600 hover:underline"
              >
                Login here
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
