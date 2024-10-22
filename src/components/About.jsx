import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Section - Image */}
        <div className="overflow-hidden rounded-3xl shadow-xl">
          <img
            src="https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg?t=st=1729615521~exp=1729619121~hmac=fe4d4c43e0da6a61e23dcb407b18d6bfeee0a7769d85a72046a10436543f1fbe&w=1060"
            alt="Delicious Burger"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Section - Content */}
        <div className="space-y-8">
          <h1 className="text-5xl font-extrabold tracking-tight">
            About Us
          </h1>
          <p className="text-lg leading-relaxed text-gray-300">
            We are a passionate team delivering top-notch food experiences, 
            where flavor meets creativity. Our burgers aren't just meals; they 
            are crafted to leave you with unforgettable moments.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Section */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-400">
                To create exceptional culinary experiences that bring joy and 
                comfort to every bite.
              </p>
            </div>

            {/* Vision Section */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
              <p className="text-gray-400">
                We envision a world where delicious, innovative food becomes 
                the bridge to unforgettable memories.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Innovation and creativity in every recipe</li>
              <li>Commitment to quality and customer satisfaction</li>
              <li>Passion for food and culinary excellence</li>
              <li>Building community through shared meals</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
