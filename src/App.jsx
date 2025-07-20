import { useEffect, useState } from "react";

const words = ["AI vlogs", "New Technologies", "AI softwares"];

export default function App() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 80);
    } else {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 120);
    }

    if (!isDeleting && charIndex === currentWord.length) {
      setTimeout(() => setIsDeleting(true), 1000);
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <div className="w-full min-h-screen font-sans overflow-x-hidden">
      {/* Hero (Home Screen) Section */}
      <div className="h-screen bg-gradient-to-b from-purple-600 to-black relative text-center">
        {/* Typing Animation */}
        <div className="pt-10 text-white text-lg tracking-wide h-10">
          <span>{text}</span>
          <span className="border-r-2 border-white animate-pulse ml-1" />
        </div>

        {/* Main Text */}
        <h1 className="mt-10 text-3xl md:text-5xl font-medium text-white">
          A space for you
        </h1>

        {/* Fade into next section */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-black" />
      </div>

      {/* Articles Section */}
      <div className="bg-black text-white pt-32 pb-20 min-h-screen">
        <h2 className="text-2xl font-semibold mb-10 text-center">Article</h2>

        <div className="space-y-6">
          <div className="bg-white/10 py-4 mx-4 rounded-xl shadow text-center">name</div>
          <div className="bg-white/10 py-4 mx-4 rounded-xl shadow text-center">name</div>
          <div className="bg-white/10 py-4 mx-4 rounded-xl shadow text-center">name</div>
        </div>
      </div>
    </div>
  );
}
