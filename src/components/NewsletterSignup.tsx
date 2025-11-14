import { useState } from 'react';
import { subscribeToNewsletter } from '../lib/supabase';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';

export function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');
    setErrorMessage('');

    try {
      await subscribeToNewsletter(email);
      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
      if (error instanceof Error && error.message.includes('unique')) {
        setErrorMessage('This email is already subscribed');
      } else {
        setErrorMessage(error instanceof Error ? error.message : 'Failed to subscribe');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      {status === 'success' ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-semibold text-green-900">Successfully subscribed!</p>
            <p className="text-sm text-green-700">Check your email for exclusive updates.</p>
          </div>
        </div>
      ) : status === 'error' ? (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-semibold text-red-900">Subscription failed</p>
            <p className="text-sm text-red-700">{errorMessage}</p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-3">
          <div className="flex-1 relative">
            <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-70 border border-white border-opacity-30 focus:border-opacity-100 focus:outline-none transition"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-white text-blue-900 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
          >
            {loading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
      )}
    </div>
  );
}
