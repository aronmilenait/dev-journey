import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4 text-gray-100">
      <div className="max-w-4xl w-full text-center space-y-12">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
            Dev
          </span>
          Journey
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
          Task management app for developers
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
          <Link
            href="/signin"
            className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-bold rounded-lg"
          >
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-cyan-500 via-cyan-600 to-emerald-600 group-hover:opacity-100"></span>
            <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
            <span className="relative transition duration-300 ease-out text-white group-hover:text-white">
              Sign Up
            </span>
          </Link>
          <Link
            href="/login"
            className="px-8 py-3 font-bold text-gray-300 transition duration-300 ease-in-out border-2 border-gray-700 rounded-lg hover:bg-gray-800 hover:text-white"
          >
            Log In
          </Link>
        </div>
      </div>
    </main>
  );
}
