import { Star, Users, Award, GraduationCap, ShieldCheck, Stethoscope, ArrowLeft } from 'lucide-react';

export default function DoctorProfile({ onBack }) {
  return (
    <div className="min-h-screen w-full bg-slate-50 flex flex-col font-sans">

      {/* ✅ Header bleu — centré sur mobile, pleine largeur sur desktop */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white px-4 md:px-8 lg:px-12 pt-6 pb-10 relative">

        {/* Bouton retour */}
        <button
          onClick={onBack}
          className="absolute left-4 lg:left-12 top-6 bg-white/20 rounded-xl p-2 flex items-center text-white hover:bg-white/30 transition"
        >
          <ArrowLeft size={18} />
        </button>

        {/* Avatar + infos — centré */}
        <div className="flex flex-col items-center mt-2">
          <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-lg">
            <Stethoscope size={44} className="text-blue-600" />
          </div>
          <h2 className="mt-4 mb-1 text-lg md:text-2xl font-semibold">Dr. Youssef EL-Amrani</h2>
          <p className="text-sm text-white/80">General Practitioner</p>
          <div className="flex items-center gap-2 mt-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={13} fill="#facc15" color="#facc15" />
              ))}
            </div>
            <span className="text-sm">4.8</span>
            <span className="text-xs text-white/70">(120)</span>
          </div>
        </div>
      </div>

      {/* ✅ Contenu scrollable */}
      <div className="flex-1 overflow-y-auto px-4 md:px-8 lg:px-12 py-5">

        {/* ✅ Layout desktop : 2 colonnes */}
        <div className="flex flex-col lg:flex-row gap-4 items-start">

          {/* COLONNE GAUCHE */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">

            {/* Stats — 3 colonnes sur tous les écrans */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: Award,       value: '10+',  label: 'Experience', color: 'text-blue-600',   bg: 'bg-blue-50'   },
                { icon: Users,       value: '1.2k+',label: 'Patients',   color: 'text-green-600',  bg: 'bg-green-50'  },
                { icon: ShieldCheck, value: '98%',  label: 'Success',    color: 'text-purple-600', bg: 'bg-purple-50' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-3 text-center border border-slate-200">
                  <div className={`w-9 h-9 rounded-lg ${item.bg} flex items-center justify-center mx-auto mb-2`}>
                    <item.icon size={18} className={item.color} />
                  </div>
                  <p className="font-semibold text-sm text-slate-800">{item.value}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{item.label}</p>
                </div>
              ))}
            </div>

            {/* Biography */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200">
              <h3 className="text-sm font-semibold text-slate-700 mb-2">Biography</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
               Dr. Youssef EL-Amrani est médecin généraliste diplômé de la <span className="font-medium text-slate-700">FMPC-Faculté de Médecine et de Pharmacie de Casablanca</span>, 
    où il a obtenu son diplôme de Docteur en Médecine Générale avec mention. 
    Fort de plus de <span className="font-medium text-slate-700">10 ans d'expérience clinique</span>, 
    il exerce avec une approche centrée sur le patient, privilegiant l'écoute, la prévention et le suivi personnalisé. 
    Il est reconnu pour sa disponibilité, sa rigueur diagnostique et son engagement envers la santé communautaire à Casablanca.
              </p>
            </div>

          </div>

          {/* COLONNE DROITE */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">

            {/* Education */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200">
              <h3 className="text-sm font-semibold text-slate-700 mb-4">Education</h3>
              <div className="flex flex-col gap-4">
                {[
                  { icon: GraduationCap, title: 'Doctorat en Médecine Générale',       sub: 'Faculté de Médecine et de Pharmacie de Casablanca', color: 'text-blue-600',   bg: 'bg-blue-50'   },
                  { icon: Stethoscope,   title: 'Internat & Résidence',        sub: 'CHU Ibn Rochd, Casablanca', color: 'text-green-600',  bg: 'bg-green-50'  },
                  { icon: ShieldCheck,   title: 'Certification en Médecine d\'Urgence',  sub: 'Ministère de la Santé — Maroc',        color: 'text-purple-600', bg: 'bg-purple-50' },
                  {
        icon: Award,
        title: 'Formation en Diabétologie & Nutrition',
        sub: 'Institut National de Nutrition, Rabat',
        color: 'text-amber-600',
        bg: 'bg-amber-50'
      },
                ].map((item, i, arr) => (
      <div key={i} className={`flex gap-3 items-start ${i < arr.length - 1 ? 'pb-4 border-b border-slate-100' : ''}`}>
        <div className={`w-9 h-9 rounded-lg ${item.bg} flex items-center justify-center shrink-0`}>
          <item.icon size={17} className={item.color} />
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-800">{item.title}</p>
          <p className="text-xs text-slate-400 mt-0.5">{item.sub}</p>
        </div>
      </div>
    ))}
  </div>
</div>

            {/* ✅ Bouton Book */}
            <button className="w-full bg-blue-600 hover:bg-blue-700 active:scale-95 transition text-white py-4 rounded-2xl text-sm font-semibold">
              Book Appointment
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}