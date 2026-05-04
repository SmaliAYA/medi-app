import {
  User, Camera, ChevronLeft,
  Save, LogOut, Pencil, Bell, Shield, Globe, Check
} from "lucide-react";
import { useState } from "react";

export default function ProfilePage({ onBack }) {
  const [notifications, setNotifications] = useState(true);
  const [twoFA, setTwoFA] = useState(false);
  const [language, setLanguage] = useState("en");
  const [fullName, setFullName] = useState("Sara idrissi");
  const [email, setEmail] = useState("sara.idrissi@email.com");
  const [phone, setPhone] = useState("+212 600 000 000");
  const [editField, setEditField] = useState(null);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setEditField(null);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const Toggle = ({ value, onChange }) => (
    <button
      onClick={onChange}
      className={`w-11 h-6 rounded-full relative transition-colors duration-200 ${
        value ? "bg-blue-600" : "bg-slate-200"
      }`}
    >
      <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 shadow transition-all duration-200 ${
        value ? "right-0.5" : "left-0.5"
      }`} />
    </button>
  );

  const EditableField = ({ label, fieldKey, value, onChange }) => (
    <div className="flex justify-between items-center py-3 border-b border-slate-100 last:border-0">
      <span className="text-sm text-slate-500 w-24 shrink-0">{label}</span>
      <div className="flex items-center gap-2 flex-1 justify-end">
        {editField === fieldKey ? (
          <input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            autoFocus
            className="text-sm border border-blue-300 rounded-lg px-3 py-1.5 w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        ) : (
          <span className="text-sm text-slate-800 text-right">{value}</span>
        )}
        <button
          onClick={() => setEditField(editField === fieldKey ? null : fieldKey)}
          className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-slate-100 transition shrink-0"
        >
          {editField === fieldKey
            ? <Check className="w-4 h-4 text-blue-600" />
            : <Pencil className="w-4 h-4 text-slate-400" />
          }
        </button>
      </div>
    </div>
  );

  return (
    // ✅ min-h-screen + responsive layout
    <div className="min-h-screen w-full bg-slate-50 flex flex-col">

      {/* ✅ HEADER — responsive padding */}
      <div className="px-4 md:px-8 lg:px-12 pt-6 pb-4 flex items-center gap-3 bg-slate-50">
        <button
          onClick={onBack}
          className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-sm hover:bg-slate-50 transition shrink-0"
        >
          <ChevronLeft className="w-5 h-5 text-slate-600" />
        </button>
        <h1 className="text-2xl lg:text-3xl font-bold text-slate-900">Profile</h1>
      </div>

      {/* ✅ CONTENU — padding responsive */}
      <div className="flex-1 px-4 md:px-8 lg:px-12 pb-10">

        {/* ✅ Layout : 1 colonne mobile → 2 colonnes desktop */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">

          {/* ══ COLONNE GAUCHE — Avatar + Infos ══ */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">

            {/* Avatar card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col items-center text-center shadow-sm">
              <div className="relative">
                <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-full bg-blue-600 flex items-center justify-center shadow-md">
                  <User className="w-12 h-12 lg:w-14 lg:h-14 text-white" />
                </div>
                <button className="absolute bottom-0 right-0 bg-white border border-slate-200 rounded-full p-2 shadow hover:bg-blue-50 transition">
                  <Camera className="w-4 h-4 text-blue-600" />
                </button>
              </div>
              <h2 className="mt-4 font-semibold text-xl text-slate-900">{fullName}</h2>
              <p className="text-sm text-slate-400 mt-1">Patient Account</p>

              {/* Stats visibles sur desktop sous l'avatar */}
              <div className="hidden lg:grid grid-cols-3 gap-4 w-full mt-6 pt-6 border-t border-slate-100">
                <div className="text-center">
                  <p className="text-lg font-bold text-blue-600">3</p>
                  <p className="text-xs text-slate-400">Appointments</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-blue-600">2</p>
                  <p className="text-xs text-slate-400">Prescriptions</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-blue-600">A+</p>
                  <p className="text-xs text-slate-400">Blood Type</p>
                </div>
              </div>
            </div>

            {/* Infos personnelles */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-2">
                Personal Information
              </h3>
              <EditableField
                label="Full name"
                fieldKey="name"
                value={fullName}
                onChange={setFullName}
              />
              <EditableField
                label="Email"
                fieldKey="email"
                value={email}
                onChange={setEmail}
              />
              <EditableField
                label="Phone"
                fieldKey="phone"
                value={phone}
                onChange={setPhone}
              />
            </div>

          </div>

          {/* ══ COLONNE DROITE — Settings + Actions ══ */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">

            {/* Settings */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-4">
                Settings
              </h3>

              {/* Notifications */}
              <div className="flex justify-between items-center py-3 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center">
                    <Bell className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-800">Notifications</p>
                    <p className="text-xs text-slate-400">Receive health alerts</p>
                  </div>
                </div>
                <Toggle value={notifications} onChange={() => setNotifications(!notifications)} />
              </div>

              {/* 2FA */}
              <div className="flex justify-between items-center py-3 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-purple-50 rounded-xl flex items-center justify-center">
                    <Shield className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-800">Security (2FA)</p>
                    <p className="text-xs text-slate-400">Extra protection</p>
                  </div>
                </div>
                <Toggle value={twoFA} onChange={() => setTwoFA(!twoFA)} />
              </div>

              {/* Language */}
              <div className="flex justify-between items-center py-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-green-50 rounded-xl flex items-center justify-center">
                    <Globe className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-800">Language</p>
                    <p className="text-xs text-slate-400">Preferences</p>
                  </div>
                </div>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                >
                  <option value="en">English</option>
                  <option value="fr">Français</option>
                  <option value="ar">العربية</option>
                </select>
              </div>
            </div>

            {/* ✅ Actions — Save + Logout */}
            <div className="flex flex-col gap-3">
              <button
                onClick={handleSave}
                className={`w-full py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition ${
                  saved
                    ? "bg-green-500 text-white"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
              >
                {saved
                  ? <><Check className="w-5 h-5" /> Saved!</>
                  : <><Save className="w-5 h-5" /> Save Changes</>
                }
              </button>

              <button className="w-full bg-red-50 hover:bg-red-100 text-red-500 border border-red-100 py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition">
                <LogOut className="w-5 h-5" />
                Logout
              </button>
            </div>

            {/* ✅ Card extra visible uniquement sur desktop */}
            <div className="hidden lg:block bg-blue-600 rounded-2xl p-6 text-white">
              <p className="text-xs text-blue-200 uppercase tracking-wide mb-1">Account</p>
              <p className="text-base font-semibold mb-1">Doc-nnect Patient</p>
              <p className="text-sm text-blue-200">Member since April 2026</p>
              <div className="mt-4 pt-4 border-t border-blue-500 flex justify-between text-sm">
                <span className="text-blue-200">Last login</span>
                <span className="font-medium">Today, 09:41</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}