import React, { useState } from 'react';
import { X, Mail, Lock, User, ToggleLeft as Google } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'login' | 'register';
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, type }) => {
  const [authType, setAuthType] = useState<'login' | 'register'>(type);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would connect to an authentication service
    console.log('Form submitted:', { authType, email, password, name });
    // For demo purposes, just close the modal
    onClose();
  };

  const handleGoogleSignIn = () => {
    // In a real app, this would trigger Google OAuth
    console.log('Google sign in clicked');
    // For demo purposes, just close the modal
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4 text-center">
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
        
        <div className="relative w-full max-w-md transform overflow-hidden rounded-3xl bg-black border border-gray-800 p-6 text-left shadow-xl transition-all">
          <div className="absolute right-4 top-4">
            <button
              type="button"
              className="text-gray-400 hover:text-white"
              onClick={onClose}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white">
              {authType === 'login' ? 'Sign In' : 'Create Account'}
            </h3>
            <p className="mt-2 text-gray-400">
              {authType === 'login' 
                ? 'Welcome back to Zenix' 
                : 'Join Zenix for exclusive deals and offers'}
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {authType === 'register' && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-500" />
                  </div>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-xl bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
              </div>
            )}
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-xl bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-1">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-xl bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent"
                  placeholder="••••••••"
                />
              </div>
            </div>
            
            {authType === 'login' && (
              <div className="flex items-center justify-end">
                <button type="button" className="text-sm text-gray-400 hover:text-white">
                  Forgot password?
                </button>
              </div>
            )}
            
            <div>
              <button
                type="submit"
                className="w-full py-3 px-4 bg-white text-black rounded-xl font-medium hover:bg-gray-200 transition-colors"
              >
                {authType === 'login' ? 'Sign In' : 'Create Account'}
              </button>
            </div>
            
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-black text-gray-400">Or continue with</span>
              </div>
            </div>
            
            <div>
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="w-full flex items-center justify-center py-3 px-4 border border-gray-700 rounded-xl text-white hover:bg-gray-900 transition-colors"
              >
                <Google className="h-5 w-5 mr-2" />
                Google
              </button>
            </div>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              {authType === 'login' ? "Don't have an account?" : "Already have an account?"}
              <button
                type="button"
                className="ml-1 text-white hover:underline"
                onClick={() => setAuthType(authType === 'login' ? 'register' : 'login')}
              >
                {authType === 'login' ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;