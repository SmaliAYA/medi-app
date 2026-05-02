import { Phone, MapPin, Clock, Send, ArrowLeft } from "lucide-react";

export default function ContactPage({ onBack }) {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">

      {/* Container */}
      <div className="max-w-6xl mx-auto w-full px-4 md:px-8 lg:px-12 py-6 space-y-6">

        {/* HEADER */}
        <div className="flex items-center gap-3">

          <button
            onClick={onBack}
            className="w-10 h-10 bg-white border rounded-full flex items-center justify-center shadow-sm hover:bg-slate-100 transition"
          >
            <ArrowLeft className="w-5 h-5 text-slate-700" />
          </button>

          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
              Contact & Support
            </h1>
            <p className="text-sm text-slate-500">
              We are here to help you anytime
            </p>
          </div>

        </div>

        {/* EMERGENCY CARD */}
        <div className="bg-red-600 text-white rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-md">

          <div>
            <p className="text-sm opacity-80">Emergency hotline</p>
            <p className="text-xl font-bold">Call immediately if urgent</p>
          </div>

          <button className="bg-white text-red-600 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-red-50 transition">
            <Phone className="w-5 h-5" />
            +212 600 000 000
          </button>

        </div>

        {/* INFO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* LOCATION */}
          <div className="bg-white border rounded-2xl shadow-sm p-6 flex flex-col items-center text-center gap-2">

            <MapPin className="text-blue-600 w-6 h-6" />

            <p className="font-semibold text-slate-900">
              Our Location
            </p>

            <p className="text-sm text-slate-500">
              Medical Center, Fes, Morocco
            </p>

          </div>

          {/* WORKING HOURS */}
          <div className="bg-white border rounded-2xl shadow-sm p-6 space-y-2">

            <div className="flex items-center gap-2 font-semibold text-slate-900">
              <Clock className="w-5 h-5 text-blue-600" />
              Working Hours
            </div>

            <p className="text-sm text-slate-600">
              Monday - Saturday: 08:00 AM - 08:00 PM
            </p>

            <p className="text-sm text-red-500 font-medium">
              Sunday: Closed (Dimanche fermé)
            </p>

          </div>

        </div>

        {/* MESSAGE SECTION */}
        <div className="bg-white border rounded-2xl shadow-sm p-6 md:p-8 space-y-5">

          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Contact Assistance
            </h3>
            <p className="text-sm text-slate-500">
              Send us a message and we will respond shortly
            </p>
          </div>

          {/* INPUT AREA */}
          <div className="flex flex-col lg:flex-row gap-4">

            <textarea
              placeholder="Write your message..."
              className="w-full lg:flex-1 h-36 p-4 border rounded-xl bg-slate-50 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />

            <button className="w-full lg:w-44 bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-xl flex items-center justify-center gap-2 font-semibold shadow-sm hover:scale-[1.02]">
              <Send className="w-5 h-5" />
              Send
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}