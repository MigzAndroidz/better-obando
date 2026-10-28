import React from 'react';
import Hero from '../components/sections/Hero';
import ServicesSection from '../components/home/ServicesSection';
import GovernmentActivitySection from '../components/home/GovernmentActivitySection';
import SEO from '../components/SEO';
import Section from '../components/ui/Section';
import { Card, CardContent } from '@bettergov/kapwa/card';
import { Link } from 'react-router';
import {
  MapPin,
  Waves,
  PhoneCall,
  ArrowRight,
  Briefcase,
  FileCheck,
  HeartPulse,
  Users2,
  Calendar,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { OBANDO_BARANGAYS } from '../data/barangays';

const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="BetterObando | Community portal for Obando"
        description="Official community portal for the Municipality of Obando, Bulacan. Access government services, municipal forms, 11 barangay directories, high tide advisories, and local information."
        keywords="BetterObando, Obando Bulacan, Municipality of Obando, Obando services, Obando barangays, Obando fertility dance, high tide obando, obando business permit"
      />
      <div>
        {/* Dual-Utility Hero Section */}
        <Hero />

        {/* Real-time Civic Utility Strip */}
        <Section className="pt-8 pb-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <Link to="/community-tools" className="group">
              <Card className="h-full border border-gray-200 hover:border-primary-400 hover:shadow-md transition-all bg-white">
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-accent-50 text-accent-700 group-hover:bg-accent-600 group-hover:text-white transition-colors shrink-0">
                    <Waves className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-accent-700 uppercase tracking-wider mb-0.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Coastal Watch
                    </div>
                    <h3 className="font-bold text-gray-900 group-hover:text-primary-700 transition-colors flex items-center gap-1 text-base">
                      High Tide & Flood Advisory
                      <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                      Manila Bay tide forecasts, riverside road advisories, and
                      MDRRMO flood monitoring.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/barangays" className="group">
              <Card className="h-full border border-gray-200 hover:border-primary-400 hover:shadow-md transition-all bg-white">
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary-50 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-primary-700 uppercase tracking-wider mb-0.5">
                      Local Directory
                    </div>
                    <h3 className="font-bold text-gray-900 group-hover:text-primary-700 transition-colors flex items-center gap-1 text-base">
                      The 11 Barangays of Obando
                      <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                      Hall locations, phone numbers, and designated evacuation
                      shelters across all 11 barangays.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/community-tools" className="group">
              <Card className="h-full border border-gray-200 hover:border-primary-400 hover:shadow-md transition-all bg-white">
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors shrink-0">
                    <PhoneCall className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-red-700 uppercase tracking-wider mb-0.5">
                      Emergency Assistance
                    </div>
                    <h3 className="font-bold text-gray-900 group-hover:text-primary-700 transition-colors flex items-center gap-1 text-base">
                      Obando Emergency Directory
                      <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                      Verified dispatch hotlines for MDRRMO Rescue, Obando
                      Police, BFP Fire, and RHU Health.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </Section>

        {/* 4 Citizen Frontline Action Pillars */}
        <Section className="py-8">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-700 bg-primary-50 px-2.5 py-1 rounded-md border border-primary-100">
              Citizen Frontline Services
            </span>
            <h2 className="text-2xl font-extrabold text-gray-900 mt-2">
              Common Government Services & Applications
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Direct access to the most requested municipal procedures at the
              Obando Municipal Hall in Brgy. Paliwas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Pillar 1: Business */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 hover:border-primary-400 hover:shadow-sm transition-all flex flex-col justify-between">
              <div>
                <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 w-fit mb-3">
                  <Briefcase className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-1.5">
                  Business & Mayor's Permits
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Step-by-step requirements for registering a new business, BOSS
                  annual renewals, and commercial licenses through BPLO Obando.
                </p>
              </div>
              <div className="space-y-1.5 pt-3 border-t border-gray-100">
                <Link
                  to="/services/business/apply-for-barangay-clearance-and-mayors-business-permits"
                  className="text-xs font-semibold text-primary-600 hover:text-primary-800 flex items-center justify-between"
                >
                  New Business Permit Guide <span>→</span>
                </Link>
                <Link
                  to="/forms"
                  className="text-xs font-medium text-gray-500 hover:text-primary-700 flex items-center justify-between"
                >
                  Download BPLO Forms <span>→</span>
                </Link>
              </div>
            </div>

            {/* Pillar 2: Civil Documents */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 hover:border-primary-400 hover:shadow-sm transition-all flex flex-col justify-between">
              <div>
                <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-600 w-fit mb-3">
                  <FileCheck className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-1.5">
                  Civil Registry & Records
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Certified true copies of Birth, Marriage, and Death
                  certificates, marriage licenses, and delayed registration at
                  the Municipal Civil Registrar.
                </p>
              </div>
              <div className="space-y-1.5 pt-3 border-t border-gray-100">
                <Link
                  to="/forms"
                  className="text-xs font-semibold text-primary-600 hover:text-primary-800 flex items-center justify-between"
                >
                  Request Civil Certificates <span>→</span>
                </Link>
                <Link
                  to="/forms"
                  className="text-xs font-medium text-gray-500 hover:text-primary-700 flex items-center justify-between"
                >
                  Marriage License Filing <span>→</span>
                </Link>
              </div>
            </div>

            {/* Pillar 3: Healthcare */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 hover:border-primary-400 hover:shadow-sm transition-all flex flex-col justify-between">
              <div>
                <div className="p-2.5 rounded-lg bg-rose-50 text-rose-600 w-fit mb-3">
                  <HeartPulse className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-1.5">
                  Public Health & Vaccines
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Free medical check-ups, infant immunizations, maternal care,
                  animal bite anti-rabies, and medicines at the Rural Health
                  Unit (RHU Paliwas).
                </p>
              </div>
              <div className="space-y-1.5 pt-3 border-t border-gray-100">
                <Link
                  to="/services/health-services/get-free-check-ups-basic-medicines-and-vaccines"
                  className="text-xs font-semibold text-primary-600 hover:text-primary-800 flex items-center justify-between"
                >
                  RHU Clinic Hours & Vaccines <span>→</span>
                </Link>
                <Link
                  to="/services/health-services/access-maternal-care-and-child-immunization"
                  className="text-xs font-medium text-gray-500 hover:text-primary-700 flex items-center justify-between"
                >
                  Maternal Care Program <span>→</span>
                </Link>
              </div>
            </div>

            {/* Pillar 4: Social Assistance */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 hover:border-primary-400 hover:shadow-sm transition-all flex flex-col justify-between">
              <div>
                <div className="p-2.5 rounded-lg bg-purple-50 text-purple-600 w-fit mb-3">
                  <Users2 className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-1.5">
                  Social Welfare & Senior Aid
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Senior Citizen ID (OSCA), PWD cards, Solo Parent
                  accreditation, and emergency AICS financial assistance through
                  the MSWDO.
                </p>
              </div>
              <div className="space-y-1.5 pt-3 border-t border-gray-100">
                <Link
                  to="/forms"
                  className="text-xs font-semibold text-primary-600 hover:text-primary-800 flex items-center justify-between"
                >
                  Senior Citizen ID Filing <span>→</span>
                </Link>
                <Link
                  to="/forms"
                  className="text-xs font-medium text-gray-500 hover:text-primary-700 flex items-center justify-between"
                >
                  PWD ID Requirements <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </Section>

        {/* Official Announcements & Public Advisories Strip */}
        <Section className="py-4">
          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-accent-500/20 text-accent-300 border border-accent-400/30">
                  <Sparkles className="h-3.5 w-3.5 text-accent-400" />
                  Municipal Public Advisory
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Annual Business One-Stop Shop (BOSS) & High Tide Advisory
                  Notice
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                  Renewals for business permits take place at the Paliwas
                  Municipal Gymnasium every January. For residents commuting
                  during full moon and new moon spring tides, please review the
                  daily astronomical tide advisory before traveling along
                  riverside roads.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <Link
                  to="/forms"
                  className="px-4 py-2 bg-primary-600 hover:bg-primary-500 text-white rounded-lg text-xs font-bold transition-colors"
                >
                  View Renewal Forms
                </Link>
                <Link
                  to="/community-tools"
                  className="px-4 py-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 rounded-lg text-xs font-semibold transition-colors"
                >
                  Check Tide Levels
                </Link>
              </div>
            </div>
          </div>
        </Section>

        {/* Services Directory Catalog */}
        <ServicesSection />

        {/* Obando's 11 Barangays Showcase */}
        <Section className="py-10 bg-white border-y border-gray-100">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary-700 bg-primary-50 px-2.5 py-1 rounded-md border border-primary-100">
                Bayan ng Obando
              </span>
              <h2 className="text-2xl font-extrabold text-gray-900 mt-2">
                Explore the 11 Barangays of Obando
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                From coastal fishpond communities along Manila Bay to the
                historic town center and commercial gateways.
              </p>
            </div>
            <Link
              to="/barangays"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-700 hover:text-primary-800 transition-colors shrink-0"
            >
              View Complete Barangays Directory{' '}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {OBANDO_BARANGAYS.map(b => (
              <Link
                key={b.slug}
                to={`/barangays/${b.slug}`}
                className="p-3.5 rounded-xl border border-gray-200 hover:border-primary-400 hover:bg-primary-50/50 hover:shadow-sm transition-all group block text-left"
              >
                <div className="text-[10px] font-bold text-primary-600 uppercase tracking-wide truncate mb-1">
                  {b.classification.split('/')[0].trim()}
                </div>
                <div className="font-bold text-gray-900 text-sm group-hover:text-primary-700 transition-colors truncate">
                  {b.name}
                </div>
                <div className="text-[11px] text-gray-500 mt-1 truncate">
                  {b.hallAddress.split(',')[0]}
                </div>
              </Link>
            ))}
            <Link
              to="/barangays"
              className="p-3.5 rounded-xl border border-dashed border-primary-300 bg-primary-50/30 hover:bg-primary-50 hover:border-primary-500 transition-all flex flex-col justify-center items-center text-center text-primary-700 font-bold text-xs"
            >
              <span>View All 11 Barangays</span>
              <ArrowRight className="h-4 w-4 mt-1" />
            </Link>
          </div>
        </Section>

        {/* Heritage & Community Spotlight */}
        <Section className="py-12">
          <div className="bg-gradient-to-br from-primary-950 via-slate-900 to-primary-950 rounded-2xl p-6 sm:p-10 text-white relative overflow-hidden border border-primary-900/60">
            <div className="max-w-2xl relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-accent-500/20 text-accent-300 border border-accent-400/30">
                <Calendar className="h-3.5 w-3.5 text-accent-400" />
                Historic Cultural Heritage
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                Sayaw sa Obando: Faith, Culture, and Coastal Tradition
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Celebrated annually on <strong>May 17, 18, and 19</strong> at
                the historic San Pascual Baylon Parish in Brgy. Pag-asa
                (Poblacion), the Obando Fertility Dance honors patron saints San
                Pascual Baylon, Santa Clara de Asis, and Nuestra Señora de
                Salambao — drawing pilgrims from across the nation and
                celebrating the town's vibrant fishing and cultural legacy.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  to="/community-tools"
                  className="px-5 py-2.5 bg-accent-500 hover:bg-accent-600 text-slate-950 font-bold rounded-lg text-xs transition-colors shadow-sm"
                >
                  Read Pilgrim & Festival Guide
                </Link>
                <a
                  href="https://obando.gov.ph"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 bg-white/10 hover:bg-white/15 text-white rounded-lg text-xs font-medium border border-white/15 transition-colors inline-flex items-center gap-1.5"
                >
                  Official Municipal Site{' '}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </Section>

        {/* Local Government & Administration */}
        <GovernmentActivitySection />
      </div>
    </>
  );
};

export default Home;
