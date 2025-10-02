import Link from "next/link";
export default function LoginForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <form className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md flex flex-col gap-6 relative">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">Login</h2>

        {/* Email Field */}
        <div className="relative w-full">
          <input
            type="text"
            required
            placeholder=" "
            className="peer w-full h-12 border border-gray-300 rounded-xl px-4 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
          />
          <label className="absolute left-4 top-3 text-gray-400 text-sm transition-all duration-300 peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-blue-600 peer-focus:text-sm">
            Enter Email
          </label>
        </div>

        {/* Password Field */}
        <div className="relative w-full">
          <input
            type="password"
            required
            placeholder=" "
            className="peer w-full h-12 border border-gray-300 rounded-xl px-4 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
          />
          <label className="absolute left-4 top-3 text-gray-400 text-sm transition-all duration-300 peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-blue-600 peer-focus:text-sm">
            Enter Password
          </label>
        </div>

        <a href="#" className="text-sm text-blue-600 hover:underline self-end">
          Forgot your password?
        </a>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 h-14 w-full rounded-2xl bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white font-bold text-lg hover:from-gray-700 hover:via-gray-800 hover:to-gray-900 transition-all duration-300 shadow-lg"
        >
          Log In
        </button>
      </form>
    </div>
  );
}
