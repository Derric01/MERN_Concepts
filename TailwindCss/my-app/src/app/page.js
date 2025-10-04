"use client";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">

        {/* Navbar */}
        <header className="sticky top-0 z-50 flex justify-between items-center px-10 py-6 backdrop-blur-md bg-white/70 dark:bg-gray-800/70 shadow-lg">
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            Sigma UI ✨
          </h1>
          <nav className="hidden md:flex gap-8 font-medium">
            <a href="#" className="hover:text-blue-500 transition">Home</a>
            <a href="#" className="hover:text-blue-500 transition">Features</a>
            <a href="#" className="hover:text-blue-500 transition">Pricing</a>
            <a href="#" className="hover:text-blue-500 transition">Contact</a>
          </nav>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:scale-105 transition"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
            <button className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:scale-105 transition">
              Sign In
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative flex flex-col md:flex-row items-center justify-between px-10 py-28 overflow-hidden">
          <div className="max-w-lg relative z-10">
            <h2 className="text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Premium Tailwind <br /> Landing Page
            </h2>
            <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">
              A showcase of modern UI with TailwindCSS — gradients, glassmorphism, responsive design, and smooth animations.
            </p>
            <div className="mt-8 flex gap-4">
              <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:scale-105 transition">
                🚀 Get Started
              </button>
              <button className="px-8 py-3 rounded-lg border border-blue-600 text-blue-600 dark:border-purple-500 dark:text-purple-400 hover:bg-blue-50 dark:hover:bg-gray-800 transition">
                Learn More
              </button>
            </div>
          </div>

          <div className="mt-12 md:mt-0 relative">
            <div className="absolute -inset-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <img
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              alt="Tailwind UI Preview"
              className="relative rounded-3xl shadow-2xl w-[500px]"
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="px-10 py-20 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md">
          <h3 className="text-4xl font-bold text-center mb-16">✨ Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Responsive", desc: "Looks perfect on any device." },
              { title: "Customizable", desc: "Tweak colors, fonts & spacing easily." },
              { title: "Animations", desc: "Smooth transitions & hover effects." },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl shadow-lg bg-white/80 dark:bg-gray-900/80 hover:scale-105 hover:shadow-xl transition"
              >
                <h4 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                  {feature.title}
                </h4>
                <p className="mt-4 text-gray-700 dark:text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="px-10 py-24">
          <h3 className="text-4xl font-bold text-center mb-16">💎 Pricing Plans</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {["Starter", "Pro", "Enterprise"].map((plan, idx) => (
              <div
                key={plan}
                className="p-10 rounded-3xl shadow-xl bg-gradient-to-br from-white/80 to-gray-50/50 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-md hover:scale-105 transition"
              >
                <h4 className="text-2xl font-semibold mb-2">{plan}</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {plan === "Starter" ? "For personal projects" : plan === "Pro" ? "For freelancers" : "For teams"}
                </p>
                <p className="mt-6 text-5xl font-extrabold">
                  {plan === "Starter" ? "$9" : plan === "Pro" ? "$29" : "$99"}
                  <span className="text-lg font-normal">/mo</span>
                </p>
                <button className="mt-8 w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 transition">
                  Choose {plan}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="px-10 py-20 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md">
          <h3 className="text-4xl font-bold text-center mb-12">📬 Contact Us</h3>
          <form className="max-w-2xl mx-auto space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500"
            />
            <button className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:scale-105 transition">
              Send Message
            </button>
          </form>
        </section>

        {/* Footer */}
        <footer className="px-10 py-6 text-center text-gray-500 dark:text-gray-400">
          © 2025 Sigma UI. Built with ❤️ + Tailwind CSS
        </footer>
      </div>
    </main>
  );
}
