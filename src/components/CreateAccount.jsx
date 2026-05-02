export default function CreateAccount({ onSignUp, onGoToLogin }) {
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

          <h2 className="text-2xl font-semibold text-gray-900">
            Create account
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Join the medical platform
          </p>
        </div>

        {/* Form */}
        <div className="space-y-4">

          <input
            type="text"
            placeholder="Full name"
            className="w-full px-4 py-3 border rounded-xl text-sm outline-none focus:border-blue-500"
          />

          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-3 border rounded-xl text-sm outline-none focus:border-blue-500"
          />

          <input
            type="tel"
            placeholder="Phone number"
            className="w-full px-4 py-3 border rounded-xl text-sm outline-none focus:border-blue-500"
          />

          <input
            type="date"
            className="w-full px-4 py-3 border rounded-xl text-sm text-gray-500"
          />

          <select className="w-full px-4 py-3 border rounded-xl text-sm text-gray-500">
            <option>Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border rounded-xl text-sm outline-none focus:border-blue-500"
          />

          <input
            type="password"
            placeholder="Confirm password"
            className="w-full px-4 py-3 border rounded-xl text-sm outline-none focus:border-blue-500"
          />

          {/* Checkbox */}
          <label className="flex items-start gap-2 text-xs text-gray-500">
            <input type="checkbox" className="mt-1" />
            I agree to the privacy policy and medical data protection rules
          </label>

          {/* Button */}
          <button
            onClick={onSignUp}
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-xl font-medium"
          >
            Create account
          </button>

          {/* Login */}
          <button
            onClick={onGoToLogin}
            className="w-full border border-blue-600 text-blue-600 py-3 rounded-xl font-medium hover:bg-blue-50 transition"
          >
            Already have an account? Sign in
          </button>

        </div>
      </div>
    </div>
  );
}