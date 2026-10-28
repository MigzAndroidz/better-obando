import { useState } from 'react';
import { useParams, Link } from 'react-router';
import { OBANDO_BARANGAYS } from '../data/barangays';
import Section from '../components/ui/Section';
import { Heading } from '../components/ui/Heading';
import { Text } from '../components/ui/Text';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import SEO from '../components/SEO';
import { Card, CardContent } from '@bettergov/kapwa/card';
import {
  MapPin,
  Phone,
  Shield,
  Landmark,
  Search,
  ArrowLeft,
  Users,
} from 'lucide-react';

export default function Barangays() {
  const { slug } = useParams();
  const [filter, setFilter] = useState<string>('all');
  const [search, setSearch] = useState<string>('');

  // Single barangay detail view
  if (slug) {
    const barangay = OBANDO_BARANGAYS.find(b => b.slug === slug);
    if (!barangay) {
      return (
        <Section className="py-12">
          <Breadcrumbs className="mb-6" />
          <Heading level={2}>Barangay Not Found</Heading>
          <Text className="mb-4">
            The barangay you are looking for does not exist.
          </Text>
          <Link
            to="/barangays"
            className="inline-flex items-center gap-2 text-primary-600 font-semibold"
          >
            <ArrowLeft className="h-4 w-4" /> Back to all Barangays
          </Link>
        </Section>
      );
    }

    return (
      <>
        <SEO
          title={`Brgy. ${barangay.name} - Municipality of Obando`}
          description={barangay.description}
          keywords={`Obando Bulacan, Barangay ${barangay.name}, barangay hall, evacuation center, hotlines`}
        />
        <Section className="py-10">
          <Breadcrumbs
            className="mb-6"
            items={[
              { label: 'Home', href: '/' },
              { label: 'Barangays', href: '/barangays' },
              { label: barangay.name },
            ]}
          />

          <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm mb-8">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary-100 text-primary-700">
                {barangay.classification}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center gap-1.5">
                <Users className="h-3.5 w-3.5" />
                Pop: {barangay.population.toLocaleString()} (PSA{' '}
                {barangay.censusYear} Census)
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200 font-mono text-[11px]">
                PSGC: {barangay.psgcCode}
              </span>
            </div>
            <Heading
              level={1}
              className="text-3xl font-bold text-gray-900 mb-3"
            >
              Barangay {barangay.name}
            </Heading>
            <Text className="text-gray-700 text-base leading-relaxed max-w-3xl mb-6">
              {barangay.description}
            </Text>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-100">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary-600 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    Barangay Hall
                  </h4>
                  <p className="text-xs text-gray-600 mt-1">
                    {barangay.hallAddress}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary-600 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    Contact Hotline
                  </h4>
                  {barangay.hotline ? (
                    <a
                      href={`tel:${barangay.hotline.replace(/[^0-9]/g, '')}`}
                      className="text-xs text-primary-600 hover:underline font-mono font-medium block mt-1"
                    >
                      {barangay.hotline}
                    </a>
                  ) : (
                    <p className="text-xs text-gray-500 mt-1">
                      Obando Central Desk: (02) 8292-2043
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    Evacuation Center
                  </h4>
                  <p className="text-xs text-gray-600 mt-1">
                    {barangay.evacuationCenter}
                  </p>
                </div>
              </div>
            </div>

            {barangay.landmarks.length > 0 && (
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h4 className="font-semibold text-gray-900 text-sm mb-3 flex items-center gap-2">
                  <Landmark className="h-4 w-4 text-accent-600" />
                  Key Landmarks & Cultural Sites:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {barangay.landmarks.map(landmark => (
                    <span
                      key={landmark}
                      className="text-xs font-medium px-3 py-1 bg-gray-100 text-gray-800 rounded-lg"
                    >
                      {landmark}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-gray-100 text-[11px] text-gray-500 flex flex-wrap justify-between items-center gap-2">
              <span>
                Demographic source:{' '}
                <strong>
                  Philippine Statistics Authority (PSA) 2020 Census of
                  Population
                </strong>
                .
              </span>
              <span>
                Barangay PSGC:{' '}
                <strong className="font-mono">{barangay.psgcCode}</strong>
              </span>
            </div>
          </div>

          <Link
            to="/barangays"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-sm"
          >
            <ArrowLeft className="h-4 w-4" /> View All 11 Barangays of Obando
          </Link>
        </Section>
      </>
    );
  }

  // All 11 Barangays directory view
  const filteredBarangays = OBANDO_BARANGAYS.filter(b => {
    const matchesFilter = filter === 'all' || b.classification === filter;
    const matchesSearch =
      b.name.toLowerCase().includes(search.toLowerCase()) ||
      b.landmarks.some(l => l.toLowerCase().includes(search.toLowerCase())) ||
      b.description.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <>
      <SEO
        title="Barangays of Obando - Municipality of Obando, Bulacan"
        description="Directory of the 11 Barangays of Obando, Bulacan. Find barangay hall locations, emergency hotlines, evacuation centers, and community information."
        keywords="Obando barangays, Binuangan, Catanghalan, Hulo, Lawa, Paco, Pag-asa, Paliwas, Panghulo, Salambao, San Pascual, Tawiran"
      />
      <Section className="py-10">
        <Breadcrumbs className="mb-6" />

        <div className="mb-8">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary-100 text-primary-700 mb-2">
            Local Communities
          </div>
          <Heading level={1} className="text-3xl font-bold text-gray-900">
            The 11 Barangays of Obando
          </Heading>
          <Text className="text-gray-600 max-w-2xl mt-2">
            Obando is divided into 11 distinct barangays, from the coastal
            fishpond communities along Manila Bay to the historic town proper
            and commercial gateways.
          </Text>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-8">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search barangay or landmark..."
              className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
            />
          </div>

          <div className="flex flex-wrap gap-1.5 w-full sm:w-auto">
            {[
              { id: 'all', label: 'All 11 Barangays' },
              { id: 'Town Center', label: 'Town Center' },
              { id: 'Coastal / Waterfront', label: 'Coastal / Waterfront' },
              { id: 'Mainland Residential', label: 'Mainland' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  filter === tab.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Barangays Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBarangays.map(barangay => (
            <Card
              key={barangay.slug}
              hoverable
              className="border border-gray-200 hover:border-primary-400 transition-all shadow-sm flex flex-col h-full bg-white"
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-primary-50 text-primary-700 border border-primary-100">
                    {barangay.classification}
                  </span>
                  <span className="text-[11px] font-mono text-gray-500">
                    PSGC {barangay.psgcCode}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Brgy. {barangay.name}
                </h3>
                <p className="text-xs text-gray-600 line-clamp-3 mb-4 flex-grow leading-relaxed">
                  {barangay.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-gray-100 text-xs text-gray-600 mb-5">
                  <div className="flex items-center gap-2 text-primary-700 font-medium">
                    <Users className="h-3.5 w-3.5 text-primary-600 shrink-0" />
                    <span>
                      Pop:{' '}
                      <strong>{barangay.population.toLocaleString()}</strong>{' '}
                      (2020 Census)
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="h-3.5 w-3.5 text-primary-600 shrink-0 mt-0.5" />
                    <span className="truncate">{barangay.hallAddress}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-3.5 w-3.5 text-primary-600 shrink-0" />
                    <span className="font-mono">
                      {barangay.hotline || '(02) 8292-2043'}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Shield className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="truncate">
                      Evac: {barangay.evacuationCenter}
                    </span>
                  </div>
                </div>

                <Link
                  to={`/barangays/${barangay.slug}`}
                  className="mt-auto inline-flex items-center justify-center w-full py-2 px-3 bg-gray-50 hover:bg-primary-50 text-primary-700 font-semibold text-xs rounded-lg transition-colors border border-gray-200 hover:border-primary-300"
                >
                  View Barangay Information →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Authoritative Demographic Data Source Footnote */}
        <div className="mt-8 pt-4 border-t border-gray-200 text-xs text-gray-500 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <span>
            Demographic figures verified from the{' '}
            <strong>
              Philippine Statistics Authority (PSA) 2020 Census of Population
              (POPCEN)
            </strong>
            .
          </span>
          <span>
            Municipality of Obando PSGC:{' '}
            <strong className="font-mono">0301414000</strong>
          </span>
        </div>
      </Section>
    </>
  );
}
