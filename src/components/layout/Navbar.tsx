import React, { useState } from 'react';
import {
  X,
  Menu,
  ChevronDown,
  Search,
  CheckCircle2,
  Palette,
} from 'lucide-react';
import { mainNavigation } from '../../data/navigation';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { isMeilisearchEnabled } from '../../lib/meilisearch';
import EmergencyBar from './EmergencyBar';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [palette, setPalette] = useState<'river' | 'heritage'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('obando-palette');
      if (saved === 'heritage') {
        document.documentElement.setAttribute('data-palette', 'heritage');
        return 'heritage';
      }
    }
    return 'river';
  });
  const { t, i18n } = useTranslation('common');

  const togglePalette = () => {
    if (palette === 'river') {
      document.documentElement.setAttribute('data-palette', 'heritage');
      localStorage.setItem('obando-palette', 'heritage');
      setPalette('heritage');
    } else {
      document.documentElement.removeAttribute('data-palette');
      localStorage.setItem('obando-palette', 'river');
      setPalette('river');
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setActiveMenu(null);
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    setActiveMenu(null);
  };

  const toggleSubmenu = (label: string) => {
    setActiveMenu(activeMenu === label ? null : label);
  };

  const getNavLabel = (label: string) => {
    switch (label) {
      case 'Services':
        return t('navbar.services', 'Services');
      case 'Forms & Permits':
        return t('navbar.forms', 'Forms & Permits');
      case 'Barangays':
        return t('navbar.barangays', 'Barangays');
      case 'Community Tools':
        return t('navbar.communitytools', 'Community Tools');
      case 'Government':
        return t('navbar.government', 'Government');
      case 'About':
        return t('navbar.about', 'About');
      default:
        return label;
    }
  };

  const isFilipino = i18n.language && i18n.language.startsWith('fil');

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Persistent Emergency Hotlines Ribbon */}
      <EmergencyBar />

      {/* Top Utility Bar */}
      <div className="border-b border-gray-100 bg-gray-50/70 text-xs">
        <div className="container mx-auto px-4 flex justify-between items-center h-9">
          <div className="flex items-center space-x-3 text-gray-500">
            <span className="hidden sm:inline">
              Republic of the Philippines
            </span>
            <span className="hidden sm:inline">•</span>
            <a
              href="https://bettergov.ph"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary-600 transition-colors"
            >
              BetterGov.ph Project
            </a>
          </div>

          <div className="flex items-center space-x-4">
            {/* Color Palette Switcher */}
            <button
              onClick={togglePalette}
              title={`Switch Theme (Current: ${palette === 'river' ? 'Option 1: River & Mangrove' : 'Option 2: Fiesta & Heritage'})`}
              className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-medium border border-gray-200 bg-white text-gray-700 hover:border-primary-400 hover:text-primary-700 transition-colors focus:outline-none focus:ring-1 focus:ring-primary-500"
            >
              <Palette className="h-3 w-3 text-accent-500" />
              <span className="hidden md:inline">
                {t('navbar.switchTheme', 'Theme')}:
              </span>
              <span className="font-semibold">
                {palette === 'river'
                  ? t('navbar.riverPalette', 'River & Mangrove')
                  : t('navbar.heritagePalette', 'Fiesta & Heritage')}
              </span>
            </button>

            {/* Language Pill Switcher [EN | FIL] */}
            <div className="inline-flex rounded-md border border-gray-200 p-0.5 bg-white text-xs font-semibold">
              <button
                onClick={() => i18n.changeLanguage('en')}
                className={`px-2 py-0.5 rounded transition-colors ${
                  !isFilipino
                    ? 'bg-primary-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                onClick={() => i18n.changeLanguage('fil')}
                className={`px-2 py-0.5 rounded transition-colors ${
                  isFilipino
                    ? 'bg-primary-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                aria-label="Switch to Filipino"
              >
                FIL
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="container mx-auto px-4" aria-label="Main Navigation">
        <div className="flex justify-between items-center py-3.5">
          {/* Brand Logo & Name */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-700 to-primary-500 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <div>
              <div className="text-gray-900 font-extrabold text-lg leading-tight group-hover:text-primary-700 transition-colors">
                Better Obando
              </div>
              <div className="text-[11px] font-medium text-gray-500 leading-tight">
                Municipality of Obando, Bulacan
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-7">
            {mainNavigation.map(item => (
              <div key={item.label} className="relative group py-2">
                <Link
                  to={item.href}
                  className="flex items-center text-sm text-gray-700 hover:text-primary-700 font-semibold transition-colors focus:outline-none focus:ring-1 focus:ring-primary-500 rounded px-1"
                >
                  {getNavLabel(item.label)}
                  {item.children && (
                    <ChevronDown className="ml-1 h-3.5 w-3.5 text-gray-400 group-hover:text-primary-600 transition-transform group-hover:rotate-180" />
                  )}
                </Link>

                {item.children && (
                  <div className="absolute left-0 top-full pt-1 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                    <div className="rounded-xl shadow-xl bg-white border border-gray-100 py-2 max-h-96 overflow-y-auto">
                      {item.children.map(child => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block px-4 py-2 text-xs font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {isMeilisearchEnabled && (
              <Link
                to="/search"
                className="flex items-center text-sm text-gray-700 hover:text-primary-600 font-semibold transition-colors"
              >
                <Search className="h-4 w-4 mr-1 text-gray-400" />
                Search
              </Link>
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-bold bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              {t('navbar.about', 'About')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              className="p-2 rounded-lg text-gray-700 hover:text-primary-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100 space-y-2 bg-white">
            {mainNavigation.map(item => (
              <div key={item.label} className="border-b border-gray-50 pb-1">
                <div className="flex justify-between items-center px-2 py-2">
                  <Link
                    to={item.href}
                    onClick={closeMenu}
                    className="font-semibold text-sm text-gray-800 hover:text-primary-600"
                  >
                    {getNavLabel(item.label)}
                  </Link>
                  {item.children && (
                    <button
                      onClick={() => toggleSubmenu(item.label)}
                      aria-label={`Toggle ${item.label} submenu`}
                      className="p-1 text-gray-500 focus:outline-none"
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          activeMenu === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  )}
                </div>

                {item.children && activeMenu === item.label && (
                  <div className="pl-4 py-1 space-y-1 bg-gray-50/80 rounded-lg">
                    {item.children.map(child => (
                      <Link
                        key={child.label}
                        to={child.href}
                        onClick={closeMenu}
                        className="block px-3 py-1.5 text-xs text-gray-700 hover:text-primary-700"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-3 px-2 flex flex-col gap-2">
              <Link
                to="/about"
                onClick={closeMenu}
                className="w-full text-center py-2.5 bg-primary-600 text-white font-bold text-xs rounded-lg shadow-sm"
              >
                {t('navbar.about', 'About Better Obando')}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
