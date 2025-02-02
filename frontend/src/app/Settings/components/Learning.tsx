

export default function LearningSection() {
  return (
    <div className="space-y-6">
      {/* Learning Goals */}
      <div>
        <h3 className="text-white mb-4">Learning Goals</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border border-gray-700 bg-gray-800/50">
            <label className="block text-sm text-gray-400 mb-2">Weekly Target Hours</label>
            <select className="w-full bg-gray-700 border-none rounded-lg text-white p-2">
              <option>5 hours</option>
              <option>10 hours</option>
              <option>15 hours</option>
              <option>20 hours</option>
            </select>
          </div>
          <div className="p-4 rounded-xl border border-gray-700 bg-gray-800/50">
            <label className="block text-sm text-gray-400 mb-2">Primary Focus</label>
            <select className="w-full bg-gray-700 border-none rounded-lg text-white p-2">
              <option>Frontend Development</option>
              <option>Backend Development</option>
              <option>Full Stack</option>
            </select>
          </div>
        </div>
      </div>

      {/* Learning Schedule */}
      <div className="p-4 rounded-xl border border-gray-700 bg-gray-800/50">
        <h3 className="text-white mb-4">Preferred Learning Time</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Start Time</label>
            <input type="time" className="w-full bg-gray-700 border-none rounded-lg text-white p-2" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">End Time</label>
            <input type="time" className="w-full bg-gray-700 border-none rounded-lg text-white p-2" />
          </div>
        </div>
      </div>
    </div>
  )
}
