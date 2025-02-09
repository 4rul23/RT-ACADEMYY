
export default function SecuritySection() {
  return (
    <div className="space-y-6">
      {/* Password Change */}
      <div className="p-4 rounded-xl border border-gray-700 bg-gray-800/50">
        <h3 className="text-white mb-4">Change Password</h3>
        <div className="space-y-4">
          <input
            type="password"
            placeholder="Current Password"
            className="w-full bg-gray-700 border-none rounded-lg text-white p-3"
          />
          <input
            type="password"
            placeholder="New Password"
            className="w-full bg-gray-700 border-none rounded-lg text-white p-3"
          />
          <button className="w-full py-3 rounded-lg bg-cyan-500 text-white font-medium hover:bg-cyan-600">
            Update Password
          </button>
        </div>
      </div>


      <div className="p-4 rounded-xl border border-red-500/20 bg-gray-800/50">
        <h3 className="text-red-400 mb-4">Danger Zone</h3>
        <button className="w-full py-3 rounded-lg bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20">
          Delete Account
        </button>
      </div>
    </div>
  )
}
