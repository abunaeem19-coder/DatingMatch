import { useState } from 'react';
import { Heart, Users, MapPin, Sparkles } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const COLORS = ['#ec4899', '#8b5cf6', '#3b82f6', '#f59e0b'];

const ageRanges = [
  '18-24',
  '25-34',
  '35-44',
  '45-54',
  '55-64',
  '65+',
];

const genders = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'non-binary', label: 'Non-binary' },
  { value: 'other', label: 'Other' },
];

const interests = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'non-binary', label: 'Non-binary' },
  { value: 'everyone', label: 'Everyone' },
];

const adsterraSmartlink = 'https://example-ad-link.com';

const AdBanner = ({ position }: { position: string }) => (
  <div className="bg-gradient-to-r from-pink-50 to-purple-50 border-2 border-dashed border-pink-200 rounded-xl p-4 text-center my-6">
    <p className="text-sm text-pink-600 font-medium">Advertisement</p>
    <p className="text-xs text-gray-500 mt-1">{position} - Adsterra Ad Space</p>
    <div className="mt-2 h-24 bg-white rounded-lg flex items-center justify-center">
      <span className="text-gray-400 text-sm">Ad Space Placeholder</span>
    </div>
  </div>
);

const AdLeaderboard = () => (
  <div className="bg-gradient-to-r from-pink-50 to-purple-50 border-2 border-dashed border-pink-200 rounded-xl p-4 text-center my-6">
    <p className="text-sm text-pink-600 font-medium">Advertisement</p>
    <p className="text-xs text-gray-500 mt-1">Leaderboard Banner - Adsterra Ad Space</p>
    <div className="mt-2 h-60 bg-white rounded-lg flex items-center justify-center">
      <span className="text-gray-400 text-sm">728x90 Ad Space Placeholder</span>
    </div>
  </div>
);

function App() {
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    interest: '',
  });
  const [showStats, setShowStats] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.age || !formData.gender || !formData.interest) {
      alert('Please fill in all fields to find your soulmate!');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate processing delay
    setTimeout(() => {
      setShowStats(true);
      setIsSubmitting(false);
    }, 1500);
  };

  const handleFindSoulmate = () => {
    // Redirect to Adsterra smartlink
    window.location.href = adsterraSmartlink;
  };

  const mockChartData = [
    { name: 'Your Age Group', value: 35 },
    { name: 'Similar Profiles', value: 28 },
    { name: 'Active Now', value: 22 },
    { name: 'Potential Matches', value: 15 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-8 h-8 text-pink-500 fill-pink-500" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              SoulConnect
            </h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">Home</a>
            <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">About</a>
            <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-12">
          <div className="flex justify-center mb-6">
            <div className="bg-pink-100 rounded-full p-4">
              <Sparkles className="w-12 h-12 text-pink-500" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Find Your Perfect Match
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover meaningful connections with like-minded individuals. 
            Tell us about yourself and let us help you find your soulmate.
          </p>
        </section>

        {/* Ad Leaderboard */}
        <AdLeaderboard />

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Form Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Users className="w-6 h-6 text-pink-500" />
              Get Started
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Age
                </label>
                <select
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                >
                  <option value="">Select your age range</option>
                  {ageRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                >
                  <option value="">Select your gender</option>
                  {genders.map((g) => (
                    <option key={g.value} value={g.value}>
                      {g.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                  Who Are You Interested In?
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                >
                  <option value="">Select your interest</option>
                  {interests.map((i) => (
                    <option key={i.value} value={i.value}>
                      {i.label}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-pink-600 hover:to-purple-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Finding Your Match...
                  </span>
                ) : (
                  'Find My Soulmate'
                )}
              </button>
            </form>

            {/* Side Ad Banner */}
            <AdBanner position="Sidebar" />
          </div>

          {/* Stats Section */}
          {showStats && (
            <div className="bg-white rounded-2xl shadow-xl p-8 animate-fade-in">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-pink-500" />
                Match Analytics
              </h3>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">
                    Your Profile Insights
                  </h4>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={mockChartData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name}: ${((percent ?? 0) * 100).toFixed(0)}%`}
                        >
                          {mockChartData.map((_, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-pink-50 rounded-xl p-4 text-center">
                    <p className="text-3xl font-bold text-pink-600">1,247</p>
                    <p className="text-sm text-gray-600">Active Users</p>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-4 text-center">
                    <p className="text-3xl font-bold text-purple-600">89%</p>
                    <p className="text-sm text-gray-600">Match Rate</p>
                  </div>
                  <div className="bg-rose-50 rounded-xl p-4 text-center">
                    <p className="text-3xl font-bold text-rose-600">342</p>
                    <p className="text-sm text-gray-600">Potential Matches</p>
                  </div>
                  <div className="bg-indigo-50 rounded-xl p-4 text-center">
                    <p className="text-3xl font-bold text-indigo-600">24/7</p>
                    <p className="text-sm text-gray-600">Support</p>
                  </div>
                </div>

                <button
                  onClick={handleFindSoulmate}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-green-600 hover:to-emerald-700 transition-all transform hover:scale-105 shadow-lg"
                >
                  Find Soulmate
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Features Section */}
        <section className="py-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose SoulConnect?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="bg-pink-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-pink-500" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Authentic Connections</h4>
              <p className="text-gray-600">Real profiles, genuine people, meaningful relationships.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-purple-500" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Smart Matching</h4>
              <p className="text-gray-600">Our algorithm finds your perfect match based on compatibility.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-indigo-500" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Safe & Secure</h4>
              <p className="text-gray-600">Your privacy and safety are our top priorities.</p>
            </div>
          </div>
        </section>

        {/* Bottom Ad Banner */}
        <AdBanner position="Bottom" />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-pink-500 fill-pink-500" />
              <span className="font-semibold text-gray-800">SoulConnect</span>
            </div>
            <p className="text-gray-600 text-sm">
              © 2024 SoulConnect. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}

export default App;
