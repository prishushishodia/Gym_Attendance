
const Signin = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-100">Sign In</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400">Email</label>
            <input
              type="email"
              placeholder="johndoe@example.com"
              className="w-full px-4 py-2 mt-1 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 mt-1 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Sign In
          </button>
        </form>
        <p className="text-sm text-center text-gray-400">
          Don’t have an account?{" "}
          <a href="/signup" className="font-medium text-purple-500 hover:underline">
            Sign up
          </a>
        </p>
        <p className="text-sm text-center text-gray-400">
          <a href="/forgot-password" className="hover:underline">
            Forgot your password?
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signin;
