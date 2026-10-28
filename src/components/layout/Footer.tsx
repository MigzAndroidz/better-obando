import React from 'react';
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  CheckCircle2,
} from 'lucide-react';
import { footerNavigation } from '../../data/navigation';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation('common');

  const getSocialIcon = (label: string) => {
    switch (label) {
      case 'Facebook':
        return <Facebook className="h-5 w-5" />;
      case 'Twitter':
        return <Twitter className="h-5 w-5" />;
      case 'Instagram':
        return <Instagram className="h-5 w-5" />;
      case 'YouTube':
        return <Youtube className="h-5 w-5" />;
      default:
        return null;
    }
  };

  const isExternal = (url: string) =>
    url.startsWith('http://') || url.startsWith('https://');

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-900 mt-16">
      <div className="container mx-auto px-4 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-700 to-primary-500 flex items-center justify-center text-white mr-3 shrink-0">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div>
                <div className="font-bold text-base">{t('site_name')}</div>
                <div className="text-xs text-slate-400">
                  BetterGov.ph Civic Portal
                </div>
              </div>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm mb-4 leading-relaxed">
              An independent, community-driven civic platform providing
              residents, businesses, and pilgrims of Obando with accessible
              information, hotlines, and public services.
            </p>
            <div className="flex space-x-3">
              {footerNavigation.socialLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-primary-900 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  {getSocialIcon(link.label)}
                </a>
              ))}
            </div>
          </div>

          {footerNavigation.mainSections.map(section => (
            <div key={section.title}>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map(link => (
                  <li key={link.label}>
                    {isExternal(link.href) ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-400 hover:text-primary-300 text-xs transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-slate-400 hover:text-primary-300 text-xs transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-900 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p className="mb-3 md:mb-0">{t('footer.copyright')}</p>
          <div className="flex space-x-4">
            <Link
              to="/about"
              className="hover:text-slate-300 transition-colors"
            >
              About
            </Link>
            <Link
              to="/barangays"
              className="hover:text-slate-300 transition-colors"
            >
              Barangays
            </Link>
            <Link
              to="/community-tools"
              className="hover:text-slate-300 transition-colors"
            >
              Hotlines & Tools
            </Link>
            <a
              href="https://bettergov.ph"
              target="_blank"
              rel="noreferrer"
              className="text-primary-400 hover:underline"
            >
              BetterGov.ph
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
