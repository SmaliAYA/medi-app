import {
  ArrowLeft, Weight, Ruler, Heart, Droplet,
  FileText, Download, Clipboard, Pill, X
} from "lucide-react";
import { useState } from "react";

export default function MedicalRecord({ onBack }) {
  const [openReport, setOpenReport] = useState(false);
  const [openPrescription, setOpenPrescription] = useState(false);

  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col relative">

      {/* Header */}
      <div className="px-4 md:px-8 lg:px-12 pt-6 pb-4 flex items-center gap-3 bg-gray-50">
        <button
          onClick={onBack}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-sm border border-gray-100 shrink-0"
        >
          <ArrowLeft className="w-5 h-5 text-gray-700" />
        </button>
        <div>
          <h1 className="text-xl lg:text-2xl font-bold text-gray-900">Medical Record</h1>
          <p className="text-xs text-gray-500">Your health information</p>
        </div>
      </div>

      {/* Contenu */}
      <div className="flex-1 overflow-y-auto px-4 md:px-8 lg:px-12 pb-10">
        <div className="flex flex-col lg:flex-row gap-6 items-start">

          {/* COLONNE GAUCHE */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">

            {/* General Information */}
            <div>
              <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
                General Information
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: Weight,
                    label: 'Weight',
                    value: '72 kg',
                    desc: 'Normal range',
                    color: 'text-blue-600',
                    bg: 'bg-blue-50'
                  },
                  {
                    icon: Ruler,
                    label: 'Height',
                    value: '175 cm',
                    desc: 'Average height',
                    color: 'text-indigo-600',
                    bg: 'bg-indigo-50'
                  },
                  {
                    icon: Heart,
                    label: 'Condition',
                    value: 'Diabetes',
                    desc: 'Type 2 — monitored',
                    color: 'text-rose-500',
                    bg: 'bg-rose-50'
                  },
                  {
                    icon: Droplet,
                    label: 'Blood Type',
                    value: 'A+',
                    desc: 'Universal recipient',
                    color: 'text-red-500',
                    bg: 'bg-red-50'
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-2xl p-4 lg:p-6 shadow-sm border border-gray-100 flex flex-col gap-3">
                    {/* Icône dans cercle coloré */}
                    <div className={`w-10 h-10 lg:w-12 lg:h-12 ${item.bg} rounded-xl flex items-center justify-center`}>
                      <item.icon className={`${item.color} w-5 h-5 lg:w-6 lg:h-6`} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">{item.label}</p>
                      <p className="text-xl lg:text-2xl font-bold text-gray-900">{item.value}</p>
                      {/* Description visible uniquement sur desktop */}
                      <p className="hidden lg:block text-xs text-gray-400 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tests & Results */}
            <div>
              <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
                Tests & Results
              </h2>
              <div className="flex flex-col gap-3">
                {[
                  { label: 'Blood Test',  date: '12 April 2026', status: 'Ready',   statusColor: 'text-green-600 bg-green-50' },
                  { label: 'Urine Test',  date: '01 April 2026', status: 'Ready',   statusColor: 'text-green-600 bg-green-50' },
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 lg:p-5 shadow-sm border border-gray-100 flex justify-between items-center">
                    <div className="flex gap-3 lg:gap-4 items-center">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                        <FileText className="text-blue-600 w-5 h-5 lg:w-6 lg:h-6" />
                      </div>
                      <div>
                        <p className="text-sm lg:text-base font-semibold text-gray-900">{item.label}</p>
                        <p className="text-xs lg:text-sm text-gray-400">{item.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {/* Badge status visible sur desktop */}
                      <span className={`hidden lg:inline-block text-xs font-medium px-3 py-1 rounded-full ${item.statusColor}`}>
                        {item.status}
                      </span>
                      <button className="hover:text-blue-600 transition">
                        <Download className="text-gray-400 w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* COLONNE DROITE */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">

            {/* Reports */}
            <div>
              <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
                Reports
              </h2>
              <button
                onClick={() => setOpenReport(true)}
                className="w-full bg-white rounded-xl p-4 lg:p-6 shadow-sm border border-gray-100 flex items-center gap-4 hover:border-blue-200 hover:bg-blue-50/40 transition text-left"
              >
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                  <Clipboard className="text-blue-600 w-5 h-5 lg:w-6 lg:h-6" />
                </div>
                <div>
                  <p className="text-sm lg:text-base font-medium text-gray-900">Doctor Report</p>
                  <p className="hidden lg:block text-xs text-gray-400 mt-1">Notes from Dr. Youssef EL-Amrani — April 2026</p>
                </div>
              </button>
            </div>

            {/* Prescriptions */}
            <div>
              <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
                Prescriptions
              </h2>
              <button
                onClick={() => setOpenPrescription(true)}
                className="w-full bg-white rounded-xl p-4 lg:p-6 shadow-sm border border-gray-100 flex items-center gap-4 hover:border-blue-200 hover:bg-blue-50/40 transition text-left"
              >
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                  <Pill className="text-blue-600 w-5 h-5 lg:w-6 lg:h-6" />
                </div>
                <div>
                  <p className="text-sm lg:text-base font-medium text-gray-900">Prescription</p>
                  <p className="hidden lg:block text-xs text-gray-400 mt-1">3 medications — Doliprane · Metformine · Vitamin D</p>
                </div>
              </button>
            </div>

            {/* ✅ NOUVELLE CARD — BMI visible uniquement pour remplir l'espace desktop */}
            <div className="hidden lg:block">
              <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
                Health Summary
              </h2>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">BMI (Body Mass Index)</span>
                  <span className="text-sm font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">23.5 — Normal</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '52%' }}></div>
                </div>
                <div className="flex justify-between text-xs text-gray-400">
                  <span>Underweight</span>
                  <span>Normal</span>
                  <span>Overweight</span>
                  <span>Obese</span>
                </div>
                <div className="border-t border-gray-100 pt-4 flex flex-col gap-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Last visit</span>
                    <span className="font-medium text-gray-800">14 April 2026</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Next visit</span>
                    <span className="font-medium text-blue-600">28 April 2026</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Blood sugar</span>
                    <span className="font-medium text-amber-600">145 mg/dL — High</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* MODAL Report */}
      {openReport && (
        <div className="fixed inset-0 bg-black/40 flex items-end md:items-center justify-center z-50 p-0 md:p-6">
          <div className="bg-white w-full md:max-w-lg md:rounded-2xl rounded-t-3xl p-6 shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Doctor Notes</h3>
              <button
                onClick={() => setOpenReport(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Patient is improving. Continue treatment for 7 days.
              Repeat blood test in 2 weeks. Blood sugar levels are being monitored
              closely — follow prescribed diet and avoid sugar intake.
            </p>
          </div>
        </div>
      )}

      {/* MODAL Prescription */}
      {openPrescription && (
        <div className="fixed inset-0 bg-black/40 flex items-end md:items-center justify-center z-50 p-0 md:p-6">
          <div className="bg-white w-full md:max-w-lg md:rounded-2xl rounded-t-3xl p-6 shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Prescription</h3>
              <button
                onClick={() => setOpenPrescription(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { name: 'Doliprane 1000mg',  dose: 'Twice a day — after meals' },
                { name: 'Vitamin D 1000 UI', dose: 'Once a day — morning'      },
                { name: 'Metformine 500mg',  dose: 'Twice a day — diabetes'    },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 border border-gray-100 rounded-xl p-3 flex gap-3 items-center">
                  <div className="w-9 h-9 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                    <Pill className="text-blue-600 w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{item.name}</p>
                    <p className="text-xs text-gray-500">{item.dose}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}