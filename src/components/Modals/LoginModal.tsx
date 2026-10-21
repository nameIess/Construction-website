import React, { useState } from 'react';
import { X, Lock, Mail, User, CheckCircle } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: { name: string; email: string }) => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
}) => {
  const [tab, setTab] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMsg('Please enter both email and password.');
      return;
    }

    const userName = tab === 'register' && name ? name : email.split('@')[0];
    const loggedUser = {
      name: userName.charAt(0).toUpperCase() + userName.slice(1),
      email: email,
    };

    setSuccessMsg(tab === 'login' ? 'Signed in successfully!' : 'Account registered successfully!');
    setTimeout(() => {
      onLoginSuccess(loggedUser);
      onClose();
      setSuccessMsg('');
    }, 800);
  };

  const fillDemoAccount = () => {
    setEmail('client.portal@shivashakthi.com');
    setPassword('ShivaShakthi#2026');
    setName('Bangalore Homeowner');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-md rounded-3xl glass-crystal-modal p-6 sm:p-8 border border-white shadow-2xl relative">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-200/70">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[#B88E3E] uppercase tracking-wider">
              Client Portal
            </span>
            <span className="text-slate-300">·</span>
            <span className="text-xs text-slate-500 font-medium">Shiva Shakthi Account</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center p-1 rounded-2xl bg-slate-200/60 border border-white mb-6 shadow-inner">
          <button
            onClick={() => {
              setTab('login');
              setErrorMsg('');
            }}
            className={`flex-1 py-2 text-xs font-semibold rounded-xl transition ${
              tab === 'login'
                ? 'bg-white text-slate-950 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => {
              setTab('register');
              setErrorMsg('');
            }}
            className={`flex-1 py-2 text-xs font-semibold rounded-xl transition ${
              tab === 'register'
                ? 'bg-white text-slate-950 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Create Account
          </button>
        </div>

        {successMsg ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-14 h-14 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 mx-auto flex items-center justify-center">
              <CheckCircle className="w-8 h-8" />
            </div>
            <p className="text-sm font-bold text-slate-900">{successMsg}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            {errorMsg && (
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 font-medium">
                {errorMsg}
              </div>
            )}

            {tab === 'register' && (
              <div>
                <label className="block text-slate-700 mb-1 font-semibold">Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajeshwar Rao"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl glass-crystal-input"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-slate-700 mb-1 font-semibold">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="email"
                  required
                  placeholder="enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl glass-crystal-input"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-700 mb-1 font-semibold">Password</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="password"
                  required
                  placeholder="enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl glass-crystal-input"
                />
              </div>
            </div>

            {/* Remember me & forgot password */}
            <div className="flex items-center justify-between text-slate-600 pt-1 font-medium">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-3.5 h-3.5 rounded text-[#C5A059] accent-[#C5A059]"
                />
                <span>Remember me</span>
              </label>
              <button
                type="button"
                onClick={() => alert('Password recovery link sent to your registered email.')}
                className="hover:text-[#B88E3E] text-slate-600"
              >
                Forgot password?
              </button>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition shadow-md"
              >
                {tab === 'login' ? 'Login Now' : 'Create Account'}
              </button>
            </div>

            <div className="text-center pt-2 border-t border-slate-200">
              <button
                type="button"
                onClick={fillDemoAccount}
                className="text-[11px] text-[#B88E3E] font-bold hover:underline"
              >
                Auto-fill Demo Client Account
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
