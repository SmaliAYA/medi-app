export default function Login({ onLogin, onGoToSignUp }) {
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
        <h1 style={{ fontSize: '18px', color: '#2563EB', margin: 0, fontWeight: '500' }}>Welcome Back</h1>
      </div>

      {/* Content */}
      <div style={{ flex: 1, padding: '32px 24px 28px' }}>

        {/* Icon + Title */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{ width: '64px', height: '64px', backgroundColor: '#EFF6FF', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </div>
          <h2 style={{ fontSize: '20px', color: '#111827', margin: '0 0 6px', fontWeight: '500' }}>Log In</h2>
          <p style={{ fontSize: '13px', color: '#6B7280', margin: 0 }}>Access your medical account</p>
        </div>

        {/* Form */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

          {/* Email */}
          <div>
            <label style={{ display: 'block', fontSize: '13px', color: '#374151', marginBottom: '6px' }}>Email Address</label>
            <div style={{ position: 'relative' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }}>
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <input type="email" placeholder="Enter your email" style={{ width: '100%', padding: '12px 14px 12px 40px', border: '1px solid #E5E7EB', borderRadius: '12px', fontSize: '14px', outline: 'none', boxSizing: 'border-box', backgroundColor: 'white' }} />
            </div>
          </div>

          {/* Password */}
          <div>
            <label style={{ display: 'block', fontSize: '13px', color: '#374151', marginBottom: '6px' }}>Password</label>
            <div style={{ position: 'relative' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }}>
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0110 0v4"/>
              </svg>
              <input type="password" placeholder="Enter your password" style={{ width: '100%', padding: '12px 14px 12px 40px', border: '1px solid #E5E7EB', borderRadius: '12px', fontSize: '14px', outline: 'none', boxSizing: 'border-box', backgroundColor: 'white' }} />
            </div>
          </div>

          {/* Forgot Password */}
          <div style={{ textAlign: 'right', marginTop: '-6px' }}>
            <button style={{ background: 'none', border: 'none', color: '#2563EB', fontSize: '13px', cursor: 'pointer', padding: 0 }}>
              Forgot your password?
            </button>
          </div>

          {/* Login Button */}
          <button
            onClick={onLogin}
            style={{ width: '100%', backgroundColor: '#2563EB', color: 'white', border: 'none', padding: '14px', borderRadius: '12px', fontSize: '15px', fontWeight: '500', cursor: 'pointer', marginTop: '4px' }}
          >
            Log In
          </button>

          {/* Divider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '4px 0' }}>
            <div style={{ flex: 1, height: '1px', backgroundColor: '#E5E7EB' }}></div>
            <span style={{ fontSize: '12px', color: '#9CA3AF' }}>or</span>
            <div style={{ flex: 1, height: '1px', backgroundColor: '#E5E7EB' }}></div>
          </div>

          {/* Create Account */}
          <div style={{ textAlign: 'center', paddingBottom: '8px' }}>
            <p style={{ fontSize: '13px', color: '#6B7280', marginBottom: '10px' }}>Don't have an account?</p>
            <button
              onClick={onGoToSignUp}
              style={{ width: '100%', backgroundColor: 'white', color: '#2563EB', border: '2px solid #2563EB', padding: '12px', borderRadius: '12px', fontSize: '14px', fontWeight: '500', cursor: 'pointer' }}
            >
              Create Account
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}