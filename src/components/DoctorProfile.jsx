import { Wifi, Signal, Battery, Star, Users, Award, GraduationCap, ShieldCheck, Stethoscope, ArrowLeft } from 'lucide-react';

export default function DoctorProfile({ onBack }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', maxWidth: 430, margin: '0 auto', fontFamily: 'sans-serif', backgroundColor: '#f8fafc', overflow: 'hidden' }}>

      {/* White top bar above header */}
      <div style={{ backgroundColor: '#ffffff', padding: '14px 20px 10px', flexShrink: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 13, color: '#1e293b' }}>
          <span style={{ fontWeight: 600 }}>9:41</span>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            <Signal size={15} />
            <Wifi size={15} />
            <Battery size={17} />
          </div>
        </div>
      </div>

      {/* Blue gradient header */}
      <div style={{ background: 'linear-gradient(135deg, #2563eb, #4f46e5)', color: 'white', padding: '16px 20px 40px', position: 'relative', flexShrink: 0 }}>
        
        {/* Back button */}
        <button
          onClick={onBack}
          style={{ position: 'absolute', left: 16, top: 16, background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: 10, padding: '6px 8px', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
        >
          <ArrowLeft size={18} />
        </button>

        {/* Avatar + info */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 8 }}>
          <div style={{ width: 90, height: 90, borderRadius: '50%', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
            <Stethoscope size={40} color="#2563eb" />
          </div>
          <h2 style={{ margin: '12px 0 2px', fontSize: 18, fontWeight: 600 }}>Dr.Youssef EL-Amrani</h2>
          <p style={{ margin: 0, fontSize: 13, opacity: 0.8 }}>General Practitioner</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 8 }}>
            <div style={{ display: 'flex' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={13} fill="#facc15" color="#facc15" />
              ))}
            </div>
            <span style={{ fontSize: 13 }}>4.8</span>
            <span style={{ fontSize: 12, opacity: 0.7 }}>(120)</span>
          </div>
        </div>
      </div>

      {/* Scrollable content */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '20px 16px', display: 'flex', flexDirection: 'column', gap: 14 }}>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
          {[
            { icon: Award, value: '10+', label: 'Experience', color: '#2563eb', bg: '#eff6ff' },
            { icon: Users, value: '1.2k+', label: 'Patients', color: '#16a34a', bg: '#f0fdf4' },
            { icon: ShieldCheck, value: '98%', label: 'Success', color: '#9333ea', bg: '#faf5ff' },
          ].map((item, i) => (
            <div key={i} style={{ backgroundColor: 'white', borderRadius: 12, padding: '12px 8px', textAlign: 'center', border: '0.5px solid #e2e8f0' }}>
              <div style={{ width: 36, height: 36, borderRadius: 9, backgroundColor: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px' }}>
                <item.icon size={18} color={item.color} />
              </div>
              <p style={{ margin: 0, fontWeight: 600, fontSize: 15, color: '#1e293b' }}>{item.value}</p>
              <p style={{ margin: '2px 0 0', fontSize: 11, color: '#94a3b8' }}>{item.label}</p>
            </div>
          ))}
        </div>

        {/* Biography */}
        <div style={{ backgroundColor: 'white', borderRadius: 16, padding: '14px 16px', border: '0.5px solid #e2e8f0' }}>
          <h3 style={{ margin: '0 0 8px', fontSize: 14, fontWeight: 600, color: '#334155' }}>Biography</h3>
          <p style={{ margin: 0, fontSize: 13, color: '#64748b', lineHeight: 1.6 }}>
            Experienced doctor focused on preventive care, chronic disease management, and patient-centered treatment.
          </p>
        </div>

        {/* Education */}
        <div style={{ backgroundColor: 'white', borderRadius: 16, padding: '14px 16px', border: '0.5px solid #e2e8f0' }}>
          <h3 style={{ margin: '0 0 12px', fontSize: 14, fontWeight: 600, color: '#334155' }}>Education</h3>
          {[
            { icon: GraduationCap, title: 'MD Degree', sub: 'Harvard Medical School', color: '#2563eb', bg: '#eff6ff' },
            { icon: Stethoscope, title: 'Residency', sub: 'Johns Hopkins Hospital', color: '#16a34a', bg: '#f0fdf4' },
            { icon: ShieldCheck, title: 'Board Certified', sub: 'Family Medicine', color: '#9333ea', bg: '#faf5ff' },
          ].map((item, i, arr) => (
            <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', paddingBottom: i < arr.length - 1 ? 12 : 0, marginBottom: i < arr.length - 1 ? 12 : 0, borderBottom: i < arr.length - 1 ? '0.5px solid #f1f5f9' : 'none' }}>
              <div style={{ width: 36, height: 36, borderRadius: 9, backgroundColor: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <item.icon size={17} color={item.color} />
              </div>
              <div>
                <p style={{ margin: 0, fontSize: 13, fontWeight: 600, color: '#1e293b' }}>{item.title}</p>
                <p style={{ margin: '2px 0 0', fontSize: 12, color: '#94a3b8' }}>{item.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Book button */}
        <button style={{ width: '100%', backgroundColor: '#2563eb', color: 'white', border: 'none', padding: '14px', borderRadius: 12, fontSize: 15, fontWeight: 600, cursor: 'pointer', marginBottom: 8 }}>
          Book Appointment
        </button>

      </div>
    </div>
  );
}