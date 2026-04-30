export default function CreateAccount({ onSignUp, onGoToLogin }) {
  const currentTime = new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', fontFamily: 'sans-serif' }}>

      {/* Status Bar */}
      <div style={{ backgroundColor: 'white', padding: '8px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: '13px', fontWeight: '500' }}>{currentTime}</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg width="14" height="12" viewBox="0 0 16 12"><rect x="0" y="4" width="3" height="8" rx="1" fill="currentColor"/><rect x="4.5" y="2.5" width="3" height="9.5" rx="1" fill="currentColor"/><rect x="9" y="0.5" width="3" height="11.5" rx="1" fill="currentColor"/></svg>
          <svg width="14" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01"/></svg>
          <svg width="22" height="12" viewBox="0 0 25 13"><rect x="0.5" y="0.5" width="21" height="12" rx="3" stroke="currentColor" strokeWidth="1" fill="none"/><rect x="22" y="4" width="3" height="5" rx="1" fill="currentColor" opacity="0.4"/><rect x="2" y="2" width="17" height="9" rx="2" fill="currentColor"/></svg>
        </div>
      </div>

      {/* Header */}
      <div style={{ backgroundColor: 'white', padding: '16px', textAlign: 'center', borderBottom: '1px solid #f0f0f0' }}>
        <h1 style={{ fontSize: '18px', color: '#2563EB', margin: 0, fontWeight: '500' }}>Create Account</h1>
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '24px 20px' }}>

        {/* Welcome */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{ width: '60px', height: '60px', backgroundColor: '#EFF6FF', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </div>
          <h2 style={{ fontSize: '18px', color: '#111827', margin: '0 0 6px', fontWeight: '500' }}>Get Started</h2>
          <p style={{ fontSize: '13px', color: '#6B7280', margin: 0 }}>Create your account to access medical services</p>
        </div>

        {/* Form */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

          {[
            { label: 'Full Name', type: 'text', placeholder: 'Enter your full name' },
            { label: 'Email Address', type: 'email', placeholder: 'Enter your email' },
            { label: 'Mobile Phone', type: 'tel', placeholder: 'Enter your phone number' },
          ].map((field) => (
            <div key={field.label}>
              <label style={{ display: 'block', fontSize: '13px', color: '#374151', marginBottom: '6px' }}>{field.label}</label>
              <input type={field.type} placeholder={field.placeholder} style={{ width: '100%', padding: '12px 14px', border: '1px solid #E5E7EB', borderRadius: '12px', fontSize: '14px', outline: 'none', boxSizing: 'border-box', backgroundColor: 'white' }} />
            </div>
          ))}

          <div>
            <label style={{ display: 'block', fontSize: '13px', color: '#374151', marginBottom: '6px' }}>Date of Birth</label>
            <input type="date" style={{ width: '100%', padding: '12px 14px', border: '1px solid #E5E7EB', borderRadius: '12px', fontSize: '14px', outline: 'none', boxSizing: 'border-box', color: '#6B7280', backgroundColor: 'white' }} />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '13px', color: '#374151', marginBottom: '6px' }}>Gender</label>
            <select style={{ width: '100%', padding: '12px 14px', border: '1px solid #E5E7EB', borderRadius: '12px', fontSize: '14px', outline: 'none', boxSizing: 'border-box', color: '#6B7280', backgroundColor: 'white' }}>
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {[
            { label: 'Password', placeholder: 'Enter your password' },
            { label: 'Confirm Password', placeholder: 'Confirm your password' },
          ].map((field) => (
            <div key={field.label}>
              <label style={{ display: 'block', fontSize: '13px', color: '#374151', marginBottom: '6px' }}>{field.label}</label>
              <input type="password" placeholder={field.placeholder} style={{ width: '100%', padding: '12px 14px', border: '1px solid #E5E7EB', borderRadius: '12px', fontSize: '14px', outline: 'none', boxSizing: 'border-box', backgroundColor: 'white' }} />
            </div>
          ))}

          {/* Checkbox */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', paddingTop: '4px' }}>
            <input type="checkbox" id="policy" style={{ marginTop: '2px', width: '16px', height: '16px', accentColor: '#2563EB', flexShrink: 0 }} />
            <label htmlFor="policy" style={{ fontSize: '12px', color: '#6B7280', lineHeight: '1.5' }}>
              I accept the confidentiality policy to secure my medical information
            </label>
          </div>

          {/* Sign Up Button */}
          <button
            onClick={onSignUp}
            style={{ width: '100%', backgroundColor: '#2563EB', color: 'white', border: 'none', padding: '14px', borderRadius: '12px', fontSize: '15px', fontWeight: '500', cursor: 'pointer', marginTop: '4px' }}
          >
            Sign Up
          </button>

          {/* Login */}
          <div style={{ textAlign: 'center', paddingBottom: '16px' }}>
            <p style={{ fontSize: '13px', color: '#6B7280', marginBottom: '10px' }}>Already have an account?</p>
            <button
              onClick={onGoToLogin}
              style={{ width: '100%', backgroundColor: 'white', color: '#2563EB', border: '2px solid #2563EB', padding: '12px', borderRadius: '12px', fontSize: '14px', fontWeight: '500', cursor: 'pointer' }}
            >
              Log In
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}