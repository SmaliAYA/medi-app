import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const DAYS_AVAIL = [14, 16, 17, 21, 22, 23, 28];
const TIMES = ["08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30"];
const TIMES_UNAVAIL = new Set(["08:30","10:00","11:30","15:00","16:30"]);

export default function AppointmentPage({ onBack, onConfirm }) {
  const [cur, setCur] = useState(new Date(2026, 3, 1));
  const [selDay, setSelDay] = useState(null);
  const [selTime, setSelTime] = useState(null);

  const y = cur.getFullYear();
  const m = cur.getMonth();
  const firstDay = new Date(y, m, 1).getDay();
  const daysInMonth = new Date(y, m + 1, 0).getDate();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const prevMonth = () => setCur(new Date(y, m - 1, 1));
  const nextMonth = () => setCur(new Date(y, m + 1, 1));
  const isSelected = (d) => selDay?.d === d && selDay?.m === m && selDay?.y === y;

  return (
    // ✅ min-h-screen au lieu de h-screen, suppression de max-w-md
    <div className="min-h-screen w-full bg-white flex flex-col">

      {/* Header */}
      <div className="px-4 md:px-8 lg:px-12 pt-6 pb-2 flex items-center gap-3">
        <button onClick={onBack} className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center">
          <ChevronLeft className="w-4 h-4 text-gray-600" />
        </button>
        <h1 className="text-xl font-medium text-gray-900">Appointment</h1>
      </div>
      <p className="px-4 md:px-8 lg:px-12 text-sm text-gray-500 mb-4">
        Choose the date and time that works best for you.
      </p>

      {/* ✅ Contenu : 1 colonne mobile → 2 colonnes desktop */}
      <div className="flex-1 overflow-y-auto px-4 md:px-8 lg:px-12 pb-6">
        <div className="flex flex-col lg:flex-row gap-4 items-start">

          {/* ✅ COLONNE GAUCHE : Calendrier */}
          <div className="w-full lg:w-1/2 bg-white border border-gray-200 rounded-2xl p-5">
            <p className="text-sm font-medium text-gray-900 mb-4">Select a date</p>

            <div className="flex items-center justify-between mb-3">
              <button onClick={prevMonth} className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center">
                <ChevronLeft className="w-3 h-3" />
              </button>
              <span className="text-sm font-medium">{MONTHS[m]} {y}</span>
              <button onClick={nextMonth} className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center">
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1 mb-1">
              {["S","M","T","W","T","F","S"].map((d, i) => (
                <span key={i} className="text-center text-xs text-gray-400 py-1">{d}</span>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {Array(firstDay).fill(null).map((_, i) => <div key={`e-${i}`} />)}
              {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(d => {
                const date = new Date(y, m, d);
                const isPast = date < today;
                const avail = DAYS_AVAIL.includes(d);
                const sel = isSelected(d);
                let cls = "aspect-square rounded-full text-xs flex items-center justify-center ";
                if (sel) cls += "bg-blue-600 text-white";
                else if (isPast) cls += "text-gray-300 cursor-not-allowed";
                else if (avail) cls += "bg-blue-50 text-blue-800 cursor-pointer hover:bg-blue-100";
                else cls += "bg-gray-100 text-gray-400 cursor-not-allowed";
                return (
                  <button key={d} className={cls} disabled={isPast || !avail}
                    onClick={() => setSelDay({ d, m, y })}>
                    {d}
                  </button>
                );
              })}
            </div>

            <div className="flex gap-4 mt-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-600 inline-block" />
                <span className="text-xs text-gray-500">Available</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-gray-300 inline-block" />
                <span className="text-xs text-gray-500">Unavailable</span>
              </div>
            </div>
          </div>

          {/* ✅ COLONNE DROITE : Horaires + Résumé + Boutons */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">

            {/* Time Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-5">
              <p className="text-sm font-medium text-gray-900 mb-4">Select a time</p>
              {/* ✅ 4 colonnes mobile → 6 colonnes desktop */}
              <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-2">
                {TIMES.map(t => {
                  const unavail = TIMES_UNAVAIL.has(t);
                  const sel = selTime === t;
                  let cls = "py-2.5 rounded-xl text-xs text-center border ";
                  if (sel) cls += "bg-blue-600 text-white border-blue-600";
                  else if (unavail) cls += "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed";
                  else cls += "border-gray-200 text-gray-800 hover:bg-blue-50 hover:border-blue-400 hover:text-blue-800 cursor-pointer";
                  return (
                    <button key={t} className={cls} disabled={unavail} onClick={() => setSelTime(t)}>{t}</button>
                  );
                })}
              </div>
              <div className="flex gap-4 mt-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-600 inline-block" />
                  <span className="text-xs text-gray-500">Available</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-gray-300 inline-block" />
                  <span className="text-xs text-gray-500">Unavailable</span>
                </div>
              </div>
            </div>

            {/* Recap */}
            <div className="bg-gray-50 rounded-2xl p-4 flex flex-col gap-2">
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-1">Summary</p>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Doctor</span>
                <span className="text-sm font-medium">Dr. Youssef EL-Amrani</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Date</span>
                <span className="text-sm font-medium">
                  {selDay ? `${selDay.d} ${MONTHS[selDay.m]} ${selDay.y}` : "—"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Time</span>
                <span className="text-sm font-medium">{selTime || "—"}</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={onBack}
                className="py-4 rounded-2xl border border-gray-200 text-sm font-medium text-gray-800">
                Cancel
              </button>
              <button
                onClick={() => selDay && selTime && onConfirm({ day: selDay, time: selTime })}
                className={`py-4 rounded-2xl text-sm font-medium text-white ${selDay && selTime ? "bg-blue-600" : "bg-blue-300 cursor-not-allowed"}`}
                disabled={!selDay || !selTime}>
                Add
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}