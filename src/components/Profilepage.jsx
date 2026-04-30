import {
  Wifi, Signal, Battery, User, Camera,
  Bell, LogOut, ChevronDown, Edit2, ShieldCheck, Save,ChevronLeft
} from 'lucide-react';
import { useState } from 'react';

export default function ProfilePage({onBack}) {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [twoFAEnabled, setTwoFAEnabled] = useState(false);

  return (
    
    <div className="px-6 pt-6 pb-2 flex items-center gap-3">
      <div className="w-[375px] h-[812px] bg-white flex flex-col overflow-hidden">


        {/* BACK BUTTON */}
        <button
          onClick={onBack}
          className="absolute left-4 top-5 z-50 bg-white p-2 rounded-full shadow hover:scale-105 transition"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        {/* Status Bar */}
        <div className="flex items-center justify-between px-6 pt-3 pb-2 bg-white">
          <span className="text-[15px] font-semibold text-slate-900">9:41</span>
          <div className="flex items-center gap-1.5">
            <Signal className="w-4 h-4" strokeWidth={2.5} />
            <Wifi className="w-4 h-4" strokeWidth={2.5} />
            <Battery className="w-5 h-4" strokeWidth={2.5} />
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto bg-slate-50 scrollbar-none">

          {/* Header + Avatar */}
          <div className="bg-white px-6 pt-5 pb-7">
            <h1 className="text-center text-[18px] font-bold text-slate-900 tracking-tight mb-6">
              Profil
            </h1>

            <div className="flex flex-col items-center">
              <div className="relative">
                <div
                  className="w-[88px] h-[88px] rounded-full flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 50%, #0ea5e9 100%)',
                    boxShadow: '0 8px 24px rgba(59,130,246,0.35)',
                  }}
                >
                  <User className="w-11 h-11 text-white" strokeWidth={2} />
                </div>
                <div className="absolute bottom-0 right-0 w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center shadow-md border-2 border-slate-50 cursor-pointer">
                  <Camera className="w-[14px] h-[14px] text-blue-600" strokeWidth={2.5} />
                </div>
              </div>

              <h2 className="mt-3.5 text-[20px] font-bold text-slate-900 tracking-tight">Ahmed Hassan</h2>
              <p className="mt-1 text-[13px] text-slate-400 font-medium">Patient · Doc-nnect</p>
              <button className="mt-2.5 text-[13px] text-blue-600 font-semibold px-2 py-1 rounded-md hover:bg-blue-50 transition-colors">
                Changer la photo de profil
              </button>
            </div>
          </div>

          {/* Stats Row */}
          <div className="mx-6 mt-5 flex rounded-2xl overflow-hidden border border-slate-200 bg-slate-200 gap-px">
            {[
              { value: '12', label: 'Consultations' },
              { value: '3', label: 'Médecins' },
              { value: '2', label: 'Documents' },
            ].map((stat) => (
              <div key={stat.label} className="flex-1 bg-white flex flex-col items-center py-3.5 px-3">
                <span className="text-[18px] font-bold text-slate-900">{stat.value}</span>
                <span className="text-[11px] text-slate-400 font-medium uppercase tracking-wide mt-0.5">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Personal Information Card */}
          <div className="px-6 pt-5">
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
              <h3 className="text-[14px] font-bold text-slate-900 mb-4 tracking-tight">
                Informations personnelles
              </h3>

              <div className="space-y-4">
                {/* First Name */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Prénom
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      defaultValue="Ahmed"
                      className="w-full px-4 py-3 pr-12 bg-slate-50 rounded-xl border border-slate-200 text-slate-900 font-medium text-[15px] focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                      <Edit2 className="w-[14px] h-[14px]" />
                    </button>
                  </div>
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Nom
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      defaultValue="Hassan"
                      className="w-full px-4 py-3 pr-12 bg-slate-50 rounded-xl border border-slate-200 text-slate-900 font-medium text-[15px] focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                      <Edit2 className="w-[14px] h-[14px]" />
                    </button>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      defaultValue="ahmed.hassan@email.com"
                      className="w-full px-4 py-3 pr-12 bg-slate-50 rounded-xl border border-slate-200 text-slate-900 font-medium text-[15px] focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                      <Edit2 className="w-[14px] h-[14px]" />
                    </button>
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Téléphone
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      defaultValue="+212 6 00 00 00 00"
                      className="w-full px-4 py-3 pr-12 bg-slate-50 rounded-xl border border-slate-200 text-slate-900 font-medium text-[15px] focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                      <Edit2 className="w-[14px] h-[14px]" />
                    </button>
                  </div>
                </div>

                {/* Language */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Langue
                  </label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-900 font-medium text-[15px] appearance-none focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all">
                      <option>Français</option>
                      <option>العربية</option>
                      <option>English</option>
                      <option>Español</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Settings Card */}
          <div className="px-6 pt-4">
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
              <h3 className="text-[14px] font-bold text-slate-900 mb-4 tracking-tight">Paramètres</h3>

              {/* Notifications */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                    <Bell className="w-[18px] h-[18px] text-blue-600" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-[15px] font-medium text-slate-900">Notifications</p>
                    <p className="text-[12px] text-slate-400">Rappels & alertes</p>
                  </div>
                </div>
                <button
                  onClick={() => setNotificationsEnabled(!notificationsEnabled)}
                  className={`relative w-12 h-7 rounded-full transition-colors ${
                    notificationsEnabled ? 'bg-emerald-500' : 'bg-slate-200'
                  }`}
                >
                  <div
                    className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${
                      notificationsEnabled ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <div className="h-px bg-slate-100 my-3.5" />

              {/* 2FA */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 bg-violet-50 rounded-xl flex items-center justify-center">
                    <ShieldCheck className="w-[18px] h-[18px] text-violet-600" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-[15px] font-medium text-slate-900">Double authentification</p>
                    <p className="text-[12px] text-slate-400">Sécurité renforcée</p>
                  </div>
                </div>
                <button
                  onClick={() => setTwoFAEnabled(!twoFAEnabled)}
                  className={`relative w-12 h-7 rounded-full transition-colors ${
                    twoFAEnabled ? 'bg-emerald-500' : 'bg-slate-200'
                  }`}
                >
                  <div
                    className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${
                      twoFAEnabled ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="px-6 pt-4">
            <button
              className="w-full py-4 text-white text-[15px] font-bold rounded-2xl flex items-center justify-center gap-2 transition-all hover:opacity-90 active:scale-[0.98]"
              style={{
                background: 'linear-gradient(135deg, #1d4ed8, #3b82f6)',
                boxShadow: '0 6px 20px rgba(37,99,235,0.3)',
              }}
            >
              <Save className="w-[18px] h-[18px]" />
              Enregistrer les modifications
            </button>
          </div>

          {/* Logout Button */}
          <div className="px-6 pt-3 pb-8">
            <button className="w-full py-4 bg-red-50 text-red-500 text-[15px] font-semibold rounded-2xl border border-red-100 hover:bg-red-100 transition-colors flex items-center justify-center gap-2">
              <LogOut className="w-5 h-5" />
              Se déconnecter
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}