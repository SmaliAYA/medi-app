import {
  User, Camera, ChevronLeft,
  Save, LogOut, Pencil
} from "lucide-react";
import { useState } from "react";

export default function ProfilePage({ onBack }) {
  const [notifications, setNotifications] = useState(true);
  const [twoFA, setTwoFA] = useState(false);
  const [language, setLanguage] = useState("en");

  // profile data
  const [fullName, setFullName] = useState("Ahmed Hassan");
  const [email, setEmail] = useState("ahmed@email.com");
  const [phone, setPhone] = useState("+212 600000000");

  const [editField, setEditField] = useState(null);

  return (
    <div className="min-h-screen bg-slate-50 flex justify-center">
      <div className="w-full max-w-2xl px-4 py-6 space-y-6">

        {/* HEADER */}
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="w-10 h-10 bg-white border rounded-full flex items-center justify-center shadow-sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <h1 className="text-2xl font-bold text-slate-900">
            Profile
          </h1>
        </div>

        {/* PROFILE */}
        <div className="bg-white rounded-2xl border p-6 flex flex-col items-center text-center">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center">
              <User className="w-10 h-10 text-white" />
            </div>

            <button className="absolute bottom-0 right-0 bg-white border rounded-full p-1 shadow">
              <Camera className="w-4 h-4 text-blue-600" />
            </button>
          </div>

          <h2 className="mt-3 font-semibold text-lg">{fullName}</h2>
          <p className="text-sm text-slate-400">Patient Account</p>
        </div>

        {/* INFO */}
        <div className="bg-white rounded-2xl border p-5 space-y-4">

          {/* FULL NAME */}
          <div className="flex justify-between items-center">
            <span className="text-sm text-slate-500">Full name</span>

            <div className="flex items-center gap-2">
              {editField === "name" ? (
                <input
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="text-sm border rounded px-2 py-1"
                />
              ) : (
                <span className="text-sm">{fullName}</span>
              )}

              <button onClick={() => setEditField(editField === "name" ? null : "name")}>
                <Pencil className="w-4 h-4 text-slate-400" />
              </button>
            </div>
          </div>

          {/* EMAIL */}
          <div className="flex justify-between items-center">
            <span className="text-sm text-slate-500">Email</span>

            <div className="flex items-center gap-2">
              {editField === "email" ? (
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-sm border rounded px-2 py-1"
                />
              ) : (
                <span className="text-sm">{email}</span>
              )}

              <button onClick={() => setEditField(editField === "email" ? null : "email")}>
                <Pencil className="w-4 h-4 text-slate-400" />
              </button>
            </div>
          </div>

          {/* PHONE */}
          <div className="flex justify-between items-center">
            <span className="text-sm text-slate-500">Phone</span>

            <div className="flex items-center gap-2">
              {editField === "phone" ? (
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="text-sm border rounded px-2 py-1"
                />
              ) : (
                <span className="text-sm">{phone}</span>
              )}

              <button onClick={() => setEditField(editField === "phone" ? null : "phone")}>
                <Pencil className="w-4 h-4 text-slate-400" />
              </button>
            </div>
          </div>
        </div>

        {/* SETTINGS */}
        <div className="bg-white rounded-2xl border p-5 space-y-5">

          {/* Notifications */}
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium">Notifications</p>
              <p className="text-xs text-slate-400">Alerts</p>
            </div>

            <button
              onClick={() => setNotifications(!notifications)}
              className={`w-11 h-6 rounded-full relative transition ${
                notifications ? "bg-blue-600" : "bg-slate-300"
              }`}
            >
              <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition ${
                notifications ? "right-0.5" : "left-0.5"
              }`} />
            </button>
          </div>

          {/* 2FA */}
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium">Security (2FA)</p>
              <p className="text-xs text-slate-400">Extra protection</p>
            </div>

            <button
              onClick={() => setTwoFA(!twoFA)}
              className={`w-11 h-6 rounded-full relative transition ${
                twoFA ? "bg-blue-600" : "bg-slate-300"
              }`}
            >
              <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition ${
                twoFA ? "right-0.5" : "left-0.5"
              }`} />
            </button>
          </div>

          {/* Language */}
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium">Language</p>
              <p className="text-xs text-slate-400">Preferences</p>
            </div>

            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-slate-50 border rounded-lg px-3 py-2 text-sm"
            >
              <option value="en">EN</option>
              <option value="fr">FR</option>
              <option value="ar">AR</option>
            </select>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="space-y-3">

          <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2">
            <Save className="w-5 h-5" />
            Save Changes
          </button>

          <button className="w-full bg-red-50 text-red-500 border py-3 rounded-xl font-semibold flex items-center justify-center gap-2">
            <LogOut className="w-5 h-5" />
            Logout
          </button>

        </div>

      </div>
    </div>
  );
}