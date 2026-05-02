import { Phone, Calendar, Home, FileText, User, Stethoscope, AlertCircle, Pill } from "lucide-react";

export default function HomeScreen({ onBook, onOpenMedical, onOpenProfile, onOpenDoctor,onOpenContact}) {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col lg:flex-row">

      {/* SIDEBAR — desktop uniquement */}
      <aside className="hidden lg:flex flex-col w-64 border-r border-gray-200 p-6 shrink-0">
        <div className="flex items-center gap-2 mb-1">
  <Stethoscope className="w-6 h-6 text-blue-600" />
  <h2 className="text-xl font-semibold text-gray-900">Doc-nnect</h2>
</div>
    
        <nav className="flex flex-col gap-2">
          <button className="flex items-center gap-3 px-4 py-3 rounded-xl bg-blue-50 text-blue-600 font-medium text-sm">
            <Home className="w-5 h-5" /> Home
          </button>
          <button onClick={onOpenMedical} className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-500 hover:bg-gray-50 text-sm">
            <FileText className="w-5 h-5" /> Medical Record
          </button>
          <button onClick={onOpenProfile} className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-500 hover:bg-gray-50 text-sm">
            <User className="w-5 h-5" /> Profile
          </button>
          <button onClick={onOpenDoctor} className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-500 hover:bg-gray-50 text-sm">
            <Stethoscope className="w-5 h-5" /> Doctor Profile
          </button>
        </nav>
      </aside>

      {/* CONTENU PRINCIPAL */}
      <main className="flex-1 flex flex-col pb-20 lg:pb-0">

        {/* Header */}
        <div className="px-4 md:px-8 lg:px-12 pt-6 pb-4">
          <h1 className="text-2xl lg:text-3xl text-gray-900 mb-1">Hello!</h1>
          <p className="text-lg text-gray-500">Aya Smali</p>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-4 md:px-8 lg:px-12 pb-6">

          {/* Next Appointment — plus grand et enrichi sur desktop */}
          <div className="mb-5 bg-blue-600 rounded-2xl p-5 lg:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-blue-200 text-sm mb-1">Next Rendez-vous</p>
              <p className="text-white text-base lg:text-xl font-medium">Dr. Youssef EL-Amrani</p>
              <p className="text-blue-100 text-sm mt-1">Monday 14 Avril, 14:30</p>
            </div>
            {/* Infos supplémentaires visibles uniquement sur desktop */}
            <div className="hidden lg:flex flex-col items-end gap-2">
              <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">General Practitioner</span>
              <span className="text-blue-200 text-xs">📍 Cabinet Maarif, Casablanca</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-4 mb-7">

            <button onClick={onOpenContact}className="bg-white border border-gray-200 rounded-2xl p-5 lg:p-8 flex flex-col lg:flex-row items-center lg:items-start gap-3 lg:gap-5 active:scale-95 transition-transform text-left hover:border-blue-200 hover:bg-blue-50/30">
              <div className="w-12 h-12 lg:w-14 lg:h-14 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm lg:text-base font-medium text-gray-800">Contact & Emergency</p>
                <p className="hidden lg:block text-xs text-gray-400 mt-1">Call or message your doctor</p>
              </div>
            </button>

            <button onClick={onBook} className="bg-white border border-gray-200 rounded-2xl p-5 lg:p-8 flex flex-col lg:flex-row items-center lg:items-start gap-3 lg:gap-5 active:scale-95 transition-transform text-left hover:border-blue-200 hover:bg-blue-50/30">
              <div className="w-12 h-12 lg:w-14 lg:h-14 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                <Calendar className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm lg:text-base font-medium text-gray-800">Appointments</p>
                <p className="hidden lg:block text-xs text-gray-400 mt-1">Book or manage your visits</p>
              </div>
            </button>

          </div>

          {/* Alerts */}
          <h2 className="text-lg text-gray-900 mb-3">Alerts</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-7">

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 lg:p-6 flex gap-3 lg:gap-4 items-start">
              <div className="w-9 h-9 lg:w-11 lg:h-11 bg-amber-100 rounded-full flex items-center justify-center shrink-0">
                <AlertCircle className="w-5 h-5 lg:w-6 lg:h-6 text-amber-500" />
              </div>
              <div>
                <p className="text-sm lg:text-base font-medium text-amber-900">High Blood Sugar</p>
                <p className="text-xs lg:text-sm text-amber-700 mt-0.5">Level detected: 145 mg/dL</p>
                <p className="hidden lg:block text-xs text-amber-600 mt-2">
                  Please follow your prescribed diet and avoid sugar intake.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 lg:p-6 flex gap-3 lg:gap-4 items-start">
              <div className="w-9 h-9 lg:w-11 lg:h-11 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                <Pill className="w-5 h-5 lg:w-6 lg:h-6 text-blue-500" />
              </div>
              <div>
                <p className="text-sm lg:text-base font-medium text-blue-900">New Prescription</p>
                <p className="text-xs lg:text-sm text-blue-700 mt-0.5">Available in your medical file</p>
                <p className="hidden lg:block text-xs text-blue-600 mt-2">
                  Doliprane 1000mg · Metformine 500mg · Vitamin D
                </p>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-4 lg:p-6 flex gap-3 lg:gap-4 items-start">
              <div className="w-9 h-9 lg:w-11 lg:h-11 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5 lg:w-6 lg:h-6 text-green-500" />
              </div>
              <div>
                <p className="text-sm lg:text-base font-medium text-green-900">Lab Results</p>
                <p className="text-xs lg:text-sm text-green-700 mt-0.5">Your results are ready</p>
                <p className="hidden lg:block text-xs text-green-600 mt-2">
                  Blood test & urine test from April 2026 are available.
                </p>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* BOTTOM NAV — mobile/tablette uniquement */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3">
        <div className="flex items-center justify-around">
          <button className="flex flex-col items-center gap-1">
            <Home className="w-6 h-6 text-blue-600" />
            <span className="text-xs text-blue-600">Home</span>
          </button>
          <button onClick={onOpenMedical} className="flex flex-col items-center gap-1">
            <FileText className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-400">Medical Record</span>
          </button>
          <button onClick={onOpenProfile} className="flex flex-col items-center gap-1">
            <User className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-400">Profile</span>
          </button>
          <button onClick={onOpenDoctor} className="flex flex-col items-center gap-1">
            <Stethoscope className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-400">Doctor</span>
          </button>
        </div>
      </div>

    </div>
  );
}