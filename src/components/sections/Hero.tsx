import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router';
import {
  Search,
  ArrowRight,
  Compass,
  Waves,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { t, i18n } = useTranslation('common');

  const isFilipino = i18n.language && i18n.language.startsWith('fil');

  const POPULAR_SEARCHES = [
    {
      label: isFilipino
        ? 'Permiso sa Negosyo (BPLO)'
        : "Mayor's & Business Permit",
      href: '/services/business/apply-for-barangay-clearance-and-mayors-business-permits',
    },
    {
      label: isFilipino
        ? 'Bakuna at Health Center'
        : 'Free Vaccines & Health Center',
      href: '/services/health-services/get-free-check-ups-basic-medicines-and-vaccines',
    },
    {
      label: isFilipino
        ? 'Koleksyon ng Basura (MENRO)'
        : 'Garbage Collection Schedule',
      href: '/services/garbage-waste-disposal/check-garbage-collection-schedules-and-request-pickup',
    },
    {
      label: isFilipino
        ? 'Abiso sa High Tide at Baha'
        : 'High Tide & Flood Advisory',
      href: '/community-tools',
    },
    {
      label: isFilipino ? '11 Barangay ng Obando' : '11 Barangays Directory',
      href: '/barangays',
    },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/services?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate('/services');
    }
  };

  return (
    <section
      aria-label="Hero Introduction"
      className="relative bg-gradient-to-br from-slate-900 via-primary-900 to-slate-900 text-white py-12 lg:py-20 border-b border-primary-800/40"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Civic Identity */}
          <div className="lg:col-span-7 space-y-5 animate-fade-in">
            <div className="flex items-center gap-3">
              <img
                src="/images/better-obando-logo.png"
                alt="Better Obando Logo"
                className="h-14 w-14 sm:h-16 sm:w-16 object-contain drop-shadow-lg shrink-0"
                width={64}
                height={64}
              />
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-primary-500/20 text-primary-200 border border-primary-400/30 tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {t(
                  'hero.eyebrow',
                  'Independent • Community-Built • Bayan ng Obando'
                )}
              </div>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {isFilipino ? (
                <>
                  Mas maayos na serbisyo at impormasyon para sa{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-300">
                    Obando
                  </span>
                  .
                </>
              ) : (
                <>
                  Better tools and information for a better{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-300">
                    Obando
                  </span>
                  .
                </>
              )}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
              {t(
                'hero.subtitle',
                'Better Obando is a citizen-driven civic portal making municipal services, barangay hotlines, coastal tide advisories, and public records easy for everyone in Obando to find and use.'
              )}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-500 text-white font-medium px-5 py-2.5 rounded-lg transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-accent-400"
              >
                <Compass className="h-4 w-4" />
                {t('hero.exploreServices', 'Explore Services')}
              </Link>
              <Link
                to="/barangays"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-medium px-4 py-2.5 rounded-lg border border-white/15 transition-all text-sm focus:outline-none focus:ring-2 focus:ring-accent-400"
              >
                <MapPin className="h-4 w-4 text-accent-400" />
                {t('navbar.barangays', 'The 11 Barangays')}
              </Link>
              <Link
                to="/community-tools"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-medium px-4 py-2.5 rounded-lg border border-white/15 transition-all text-sm focus:outline-none focus:ring-2 focus:ring-accent-400"
              >
                <Waves className="h-4 w-4 text-primary-300" />
                {isFilipino
                  ? 'Bantay Baha at High Tide'
                  : 'High Tide & Flood Watch'}
              </Link>
            </div>
          </div>

          {/* Right Column: Search & Quick Access Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-2xl border border-gray-100 text-gray-900">
              <div className="flex items-center gap-2 text-primary-700 font-semibold text-sm mb-3">
                <Search className="h-4 w-4 text-primary-600" />
                <span>
                  {t('hero.findService', 'Find an Obando Government Service')}
                </span>
              </div>

              <form
                onSubmit={handleSearchSubmit}
                className="relative mb-5"
                role="search"
              >
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder={t(
                    'hero.searchPlaceholder',
                    'e.g., Business permit, health center, garbage...'
                  )}
                  aria-label="Search Obando government services"
                  className="w-full pl-4 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-600 focus:bg-white text-gray-900 placeholder:text-gray-400"
                />
                <button
                  type="submit"
                  aria-label="Submit Search"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 p-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>

              <div>
                <p className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="h-3 w-3 text-accent-500" />{' '}
                  {t('hero.quickSearch', 'Frequently Needed Services:')}
                </p>
                <div className="flex flex-wrap gap-2">
                  {POPULAR_SEARCHES.map(item => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="text-xs font-medium px-3 py-1.5 bg-primary-50 text-primary-700 rounded-lg hover:bg-primary-100 hover:text-primary-800 transition-colors border border-primary-100 focus:outline-none focus:ring-1 focus:ring-primary-500"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
