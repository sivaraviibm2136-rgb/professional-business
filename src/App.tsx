import { CheckCircle, Shield, Award, TrendingUp, Users, Target, Star, Quote } from 'lucide-react';
import { ContactForm } from './components/ContactForm';
import { NewsletterSignup } from './components/NewsletterSignup';

function App() {
  const services = [
    {
      icon: TrendingUp,
      title: 'Strategic Growth',
      description: 'Data-driven strategies that accelerate your business growth and maximize ROI across all channels.'
    },
    {
      icon: Users,
      title: 'Team Development',
      description: 'Comprehensive training programs that empower your team to achieve excellence and drive results.'
    },
    {
      icon: Target,
      title: 'Market Analysis',
      description: 'Deep market insights and competitive analysis to position your business for sustained success.'
    },
    {
      icon: Award,
      title: 'Brand Excellence',
      description: 'Build a compelling brand identity that resonates with your audience and stands out in the market.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'CEO, TechVentures Inc.',
      content: 'Working with this team transformed our business. Revenue increased 240% in just 18 months, and our market position has never been stronger.',
      rating: 5
    },
    {
      name: 'James Reynolds',
      role: 'Founder, Apex Solutions',
      content: 'The strategic guidance we received was invaluable. They understood our challenges and delivered solutions that exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Linda Chen',
      role: 'Director of Operations, Global Dynamics',
      content: 'Professional, insightful, and results-oriented. Their expertise helped us navigate complex market conditions with confidence.',
      rating: 5
    }
  ];

  const trustBadges = [
    { label: 'ISO 9001 Certified', icon: Shield },
    { label: '500+ Clients Served', icon: Users },
    { label: '15 Years Experience', icon: Award },
    { label: '98% Success Rate', icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">Nexus</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">Services</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">Contact</a>
            </div>
            <button className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors font-medium shadow-md">
              Get Started
            </button>
          </div>
        </nav>
      </header>

      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-block bg-blue-900 bg-opacity-10 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Trusted by Industry Leaders
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your Business with Strategic Excellence
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              We partner with ambitious organizations to unlock growth, optimize operations, and build lasting competitive advantages in dynamic markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-900 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-all font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Schedule Consultation
              </button>
              <button className="bg-white text-blue-900 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-lg border-2 border-blue-900">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustBadges.map((badge, index) => {
              const Icon = badge.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-blue-900 bg-opacity-10 rounded-full flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6 text-blue-900" />
                  </div>
                  <span className="text-sm font-semibold text-gray-900">{badge.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions designed to elevate your business and drive measurable results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-900 group"
                >
                  <div className="w-14 h-14 bg-blue-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Hear from the leaders who've transformed their businesses with our partnership.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-slate-50 p-8 rounded-xl border border-gray-200 hover:border-blue-900 transition-all hover:shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-blue-900 opacity-20 mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="pt-6 border-t border-gray-300">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">
              Have a question or ready to start your transformation? We'd love to hear from you.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Subscribe to our newsletter for exclusive insights, industry trends, and strategic advice.
            </p>
            <NewsletterSignup />
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Nexus</span>
              </div>
              <p className="text-sm">Strategic business solutions for tomorrow's leaders.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Insights</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-sm text-center">
            <p>&copy; 2025 Nexus. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
