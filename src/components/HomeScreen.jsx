import {
  Phone,
  Calendar,
  Home,
  FileText,
  User,
  Stethoscope,
  AlertCircle,
  Pill
} from "lucide-react";

export default function HomeScreen({ onBook, onOpenMedical ,onOpenProfile,onOpenDoctor}) {
  return (
    <div className="h-screen w-full max-w-md mx-auto bg-white flex flex-col relative">

      {/* Status Bar */}
      <div className="px-6 pt-3 pb-1 flex items-center justify-between">
        <span className="text-xs font-medium text-gray-900">9:41</span>

        <div className="flex items-center gap-1">
          <svg width="16" height="12" viewBox="0 0 16 12">
            <rect x="0" y="4" width="3" height="8" rx="1" fill="currentColor" />
            <rect x="4.5" y="2.5" width="3" height="9.5" rx="1" fill="currentColor" />
            <rect x="9" y="0.5" width="3" height="11.5" rx="1" fill="currentColor" />
            <rect x="13.5" y="0" width="2.5" height="12" rx="1" fill="currentColor" opacity="0.3" />
          </svg>

          <svg width="16" height="12" viewBox="0 0 16 12">
            <path d="M8 1L15.5 6H0.5L8 1Z" fill="currentColor" />
            <rect x="2.5" y="6" width="11" height="5" rx="0.5" fill="currentColor" />
          </svg>

          <svg width="25" height="13" viewBox="0 0 25 13">
            <rect x="0.5" y="0.5" width="21" height="12" rx="3" stroke="currentColor" fill="none" />
            <rect x="22" y="4" width="3" height="5" rx="1" fill="currentColor" opacity="0.4" />
            <rect x="2" y="2" width="17" height="9" rx="2" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* Header */}
      <div className="px-6 pt-5 pb-3">
        <h1 className="text-2xl text-gray-900 mb-1">Hello!</h1>
        <p className="text-lg text-gray-500">Aya Smali</p>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-6 pb-24">

        {/* Next Appointment */}
        <div className="mb-5 bg-blue-600 rounded-2xl p-5">
          <p className="text-blue-200 text-sm mb-1">Next Rendez-vous</p>
          <p className="text-white text-base font-medium">Dr. Youssef EL-Amrani</p>
          <p className="text-blue-100 text-sm mt-1">Monday 14 Avril, 14:30</p>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 mb-7">

          {/* Contact */}
          <button className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col items-center gap-3 active:scale-95 transition-transform">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
              <Phone className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-sm text-gray-800">Contact & Emergency</span>
          </button>

          {/* Appointment */}
          <button
            onClick={onBook}
            className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col items-center gap-3 active:scale-95 transition-transform"
          >
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
              <Calendar className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-sm text-gray-800">Appointments</span>
          </button>

          {/* ⭐ NEW: Medical Record */}

        </div>

        {/* Alerts */}
        <h2 className="text-lg text-gray-900 mb-3">Alerts</h2>

        <div className="space-y-3">

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3 items-start">
            <AlertCircle className="w-5 h-5 text-amber-500 mt-0.5" />
            <div>
              <p className="text-sm font-medium">High Blood Sugar</p>
              <p className="text-xs text-gray-500">Level detected: 145 mg/dL</p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex gap-3 items-start">
            <Pill className="w-5 h-5 text-blue-500 mt-0.5" />
            <div>
              <p className="text-sm font-medium">New Prescription</p>
              <p className="text-xs text-gray-500">Available in your medical file</p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex gap-3 items-start">
            <FileText className="w-5 h-5 text-green-500 mt-0.5" />
            <div>
              <p className="text-sm font-medium">Lab Results</p>
              <p className="text-xs text-gray-500">Your results are ready</p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3">
        <div className="flex items-center justify-around">

          <button className="flex flex-col items-center gap-1">
            <Home className="w-6 h-6 text-blue-600" />
            <span className="text-xs text-blue-600">Home</span>
          </button>

          <button
  onClick={onOpenMedical}
  className="flex flex-col items-center gap-1 py-1 px-3"
>
  <FileText className="w-6 h-6 text-gray-400" />
  <span className="text-xs text-gray-400">Medical Record</span>
</button>
        <button onClick={onOpenProfile} className="flex flex-col items-center gap-1">
  <User className="w-6 h-6 text-gray-400" />
  <span className="text-xs text-gray-400">Profile page</span>
</button>

          <button onClick={onOpenDoctor} className="flex flex-col items-center gap-1">
            <Stethoscope className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-400">Doctor Profile</span>
          </button>

        </div>
      </div>

    </div>
  );
}