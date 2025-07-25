// AI Blog Website (SEO Optimized, Responsive, Ad-Ready)

import React from "react";
import { Link, Search } from "lucide-react";

export default function AIBlog() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* SEO Head Tags */}
      <head>
        <title>AI Insights Blog | Learn AI & ML</title>
        <meta name="description" content="Stay updated with the latest in AI and Machine Learning. In-depth articles, tutorials, and guides." />
        <meta name="keywords" content="AI blog, machine learning, deep learning, data science, GPT, artificial intelligence" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-700">AI Insights</h1>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-60 border px-3 py-1.5 rounded-md"
            />
            <button className="p-2 border rounded-md">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-100 to-blue-50 py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to AI Insights</h2>
        <p className="text-lg text-gray-700 max-w-xl mx-auto">
          Discover the future of technology with deep dives into Artificial Intelligence, Machine Learning, and everything in between.
        </p>
      </section>

      {/* Blog Feed */}
      <section className="max-w-5xl mx-auto px-4 py-12 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((post) => (
          <div
            key={post}
            className="rounded-lg bg-white p-4 shadow hover:shadow-xl transition-all"
          >
            <h3 className="text-xl font-semibold mb-2">
              3 Best AI For Photo To Video generation.{post}
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Create stunning videos from your photos effortlessly In 2 Minutes.
            </p>
            <a href="/Blog" className="text-blue-600 font-medium">
              Read More
            </a>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-6 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} AI Insights Blog. All rights reserved.</p>
        <p>Built with using React and TailwindCSS.</p>
      </footer>
    </main>
  );
}
