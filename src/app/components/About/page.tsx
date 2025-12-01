// src/pages/about.tsx
import React from "react";

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 container mx-auto">

      {/* Hero Section */}
      <section className="bg-gray-800 text-white py-20 px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">About NovaSys</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Leading provider of mining equipment and solutions for modern industrial operations.
        </p>
      </section>

      {/* Company Overview */}
      <section className="py-20 px-4 container mx-auto">
        <h2 className="text-3xl text-black font-bold text-center mb-12">Our Company</h2>
        <div className="max-w-4xl mx-auto text-gray-700 space-y-6 text-center">
          <p>
            NovaSys has been delivering top-quality mining equipment and technology solutions for over 15 years. 
            We focus on providing reliable machinery, expert consulting, and maintenance support for mining operations.
          </p>
          <p>
            Our goal is to empower mining businesses with innovative and efficient solutions to maximize productivity and safety.
          </p>
          <p>
            From heavy machinery like excavators and loaders to advanced processing equipment, we supply end-to-end solutions tailored for your operations.
          </p>
        </div>
      </section>

      {/* Equipment / Solutions */}
      <section className="bg-gray-100 py-20 px-4">
        <h2 className="text-3xl font-bold text-black text-center mb-12">Our Equipment & Solutions</h2>
        <div className="grid md:grid-cols-3 gap-8 ">
          <div className="bg-white text-black p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl text-black font-semibold mb-2">Excavators & Loaders</h3>
            <p>High-performance machinery for efficient mining operations.</p>
          </div>
          <div className="bg-white text-black p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl text-black font-semibold mb-2">Crushing & Processing Equipment</h3>
            <p>Advanced equipment for material crushing, processing, and handling.</p>
          </div>
          <div className="bg-white text-black p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl text-black font-semibold mb-2">Maintenance & Consulting</h3>
            <p>Comprehensive support to ensure your operations run smoothly.</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 container mx-auto text-center">
        <h2 className="text-3xl text-black font-bold mb-12">Our Mission & Vision</h2>
        <div className="max-w-3xl mx-auto space-y-6 text-gray-700">
          <p><strong>Mission:</strong> To provide reliable and innovative mining equipment that enhances operational efficiency and safety.</p>
          <p><strong>Vision:</strong> To be the leading partner for mining companies worldwide, recognized for quality, service, and sustainable solutions.</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-700 text-white py-20 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Work With Us</h2>
        <p className="mb-8">Contact us to discuss your mining equipment needs or project requirements.</p>
        <a
          href="/contact"
          className="px-6 py-3 bg-white text-black font-semibold rounded hover:bg-gray-400 transition"
        >
          Get in Touch
        </a>
      </section>
    </div>
  );
};

export default About;
