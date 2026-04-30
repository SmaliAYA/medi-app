import {
  ArrowLeft,
  Weight,
  Ruler,
  Heart,
  Droplet,
  FileText,
  Download,
  Clipboard,
  Pill,
  X
} from "lucide-react";

import { useState } from "react";

export default function MedicalRecord({ onBack }) {
  const [openReport, setOpenReport] = useState(false);
  const [openPrescription, setOpenPrescription] = useState(false);

  return (
    <div className="h-screen w-full max-w-md mx-auto bg-gray-50 flex flex-col relative">

      {/* Status Bar */}
      <div className="px-6 pt-3 pb-2 flex items-center justify-between">
        <span className="text-xs font-semibold text-gray-900">9:41</span>

        <div className="flex items-center gap-1 text-gray-700">
          <div className="w-4 h-2 border border-gray-400 rounded-sm"></div>
          <div className="w-6 h-2 border border-gray-400 rounded-sm"></div>
        </div>
      </div>

      {/* Header */}
      <div className="px-6 pt-4 pb-4 flex items-center gap-3">
        <button
          onClick={onBack}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-sm border border-gray-100"
        >
          <ArrowLeft className="w-5 h-5 text-gray-700" />
        </button>

        <div>
          <h1 className="text-xl font-bold text-gray-900">Medical Record</h1>
          <p className="text-xs text-gray-500">Your health information</p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 pb-24 space-y-6">

        {/* INFO */}
        <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
          General Information
        </h2>

        <div className="grid grid-cols-2 gap-3">

          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <Weight className="text-blue-600 mb-2" />
            <p className="text-xs text-gray-500">Weight</p>
            <p className="text-lg font-semibold text-gray-900">72 kg</p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <Ruler className="text-blue-600 mb-2" />
            <p className="text-xs text-gray-500">Height</p>
            <p className="text-lg font-semibold text-gray-900">175 cm</p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <Heart className="text-blue-600 mb-2" />
            <p className="text-xs text-gray-500">Condition</p>
            <p className="text-lg font-semibold text-gray-900">Diabetes</p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <Droplet className="text-blue-600 mb-2" />
            <p className="text-xs text-gray-500">Blood Type</p>
            <p className="text-lg font-semibold text-gray-900">A+</p>
          </div>

        </div>

        {/* TESTS */}
        <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
          Tests & Results
        </h2>

        <div className="space-y-3">

          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                <FileText className="text-blue-600 w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">Blood Test</p>
                <p className="text-xs text-gray-500">12 April 2026</p>
              </div>
            </div>
            <Download className="text-gray-400" />
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                <FileText className="text-blue-600 w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">Urine Test</p>
                <p className="text-xs text-gray-500">01 April 2026</p>
              </div>
            </div>
            <Download className="text-gray-400" />
          </div>

        </div>

        {/* REPORT */}
        <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
          Reports
        </h2>

        <button
          onClick={() => setOpenReport(true)}
          className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex justify-between items-center"
        >
          <div className="flex items-center gap-3">
            <Clipboard className="text-blue-600" />
            <span className="text-sm font-medium text-gray-900">
              Doctor Report
            </span>
          </div>
        </button>

        {/* PRESCRIPTION */}
        <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
          Prescriptions
        </h2>

        <button
          onClick={() => setOpenPrescription(true)}
          className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex justify-between items-center"
        >
          <div className="flex items-center gap-3">
            <Pill className="text-blue-600" />
            <span className="text-sm font-medium text-gray-900">
              Prescription
            </span>
          </div>
        </button>

      </div>

      {/* REPORT MODAL */}
      {openReport && (
        <div className="fixed inset-0 bg-black/40 flex items-end">
          <div className="bg-white w-full rounded-t-3xl p-6 shadow-xl">

            <div className="flex justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Doctor Notes
              </h3>
              <button onClick={() => setOpenReport(false)}>
                <X />
              </button>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              Patient is improving. Continue treatment for 7 days.
              Repeat blood test in 2 weeks.
            </p>

          </div>
        </div>
      )}

      {/* PRESCRIPTION MODAL */}
      {openPrescription && (
        <div className="fixed inset-0 bg-black/40 flex items-end">
          <div className="bg-white w-full rounded-t-3xl p-6 shadow-xl">

            <div className="flex justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Prescription
              </h3>
              <button onClick={() => setOpenPrescription(false)}>
                <X />
              </button>
            </div>

            <div className="space-y-3">

              <div className="bg-gray-50 border border-gray-100 rounded-xl p-3">
                <p className="font-semibold text-gray-900">Doliprane 1000mg</p>
                <p className="text-sm text-gray-500">Twice a day</p>
              </div>

              <div className="bg-gray-50 border border-gray-100 rounded-xl p-3">
                <p className="font-semibold text-gray-900">Vitamin D</p>
                <p className="text-sm text-gray-500">Once a day</p>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}