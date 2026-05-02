export default function Login({ onLogin, onGoToSignUp }) {
  return (
    <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-6 md:p-10">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-3 bg-blue-50 rounded-full flex items-center justify-center">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900">Sign in</h2>
          <p className="text-sm text-gray-500 mt-1">
            Access your medical account
          </p>
        </div>

        {/* Form */}
        <div className="space-y-4">

          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-blue-500"
          />

          <div className="text-right">
            <button className="text-sm text-blue-600">
              Forgot password?
            </button>
          </div>

          <button
            onClick={onLogin}
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-xl font-medium"
          >
            Sign in
          </button>

          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400">or</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <button
            onClick={onGoToSignUp}
            className="w-full border border-blue-600 text-blue-600 py-3 rounded-xl font-medium hover:bg-blue-50 transition"
          >
            Create account
          </button>

        </div>
      </div>
    </div>
  );
}