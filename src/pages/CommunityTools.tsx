import { useState } from 'react';
import Section from '../components/ui/Section';
import { Heading } from '../components/ui/Heading';
import { Text } from '../components/ui/Text';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import SEO from '../components/SEO';
import { Card, CardContent } from '@bettergov/kapwa/card';
import {
  Waves,
  Phone,
  BookOpen,
  AlertTriangle,
  MessageSquare,
  ExternalLink,
  Calendar,
  Info,
} from 'lucide-react';

export default function CommunityTools() {
  const [activeTab, setActiveTab] = useState<'tide' | 'hotlines' | 'heritage'>(
    'tide'
  );

  return (
    <>
      <SEO
        title="Community Tools - Municipality of Obando, Bulacan"
        description="Civic tools and local information for residents of Obando, Bulacan. Includes High Tide & Flood Advisories, Emergency Hotlines, and the Obando Fertility Dance Guide."
        keywords="Obando community tools, high tide obando, obando flood advisory, obando hotlines, obando fertility dance guide"
      />
      <Section className="py-10">
        <Breadcrumbs className="mb-6" />

        <div className="mb-8">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-accent-100 text-accent-800 mb-2">
            Civic Tech Utilities
          </div>
          <Heading level={1} className="text-3xl font-bold text-gray-900">
            Obando Community Tools
          </Heading>
          <Text className="text-gray-600 max-w-2xl mt-2">
            Practical, citizen-built utilities designed specifically for the
            daily realities, seasonal tides, and cultural life of Obando,
            Bulacan.
          </Text>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 mb-8 overflow-x-auto">
          <button
            onClick={() => setActiveTab('tide')}
            className={`flex items-center gap-2 py-3 px-5 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'tide'
                ? 'border-primary-600 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-800'
            }`}
          >
            <Waves className="h-4 w-4" />
            High Tide & Flood Advisory
          </button>
          <button
            onClick={() => setActiveTab('hotlines')}
            className={`flex items-center gap-2 py-3 px-5 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'hotlines'
                ? 'border-primary-600 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-800'
            }`}
          >
            <Phone className="h-4 w-4" />
            Complete Hotlines Phonebook
          </button>
          <button
            onClick={() => setActiveTab('heritage')}
            className={`flex items-center gap-2 py-3 px-5 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'heritage'
                ? 'border-primary-600 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-800'
            }`}
          >
            <BookOpen className="h-4 w-4" />
            Fertility Dance & Heritage Guide
          </button>
        </div>

        {/* Tab Content: High Tide & Flood Advisory */}
        {activeTab === 'tide' && (
          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 sm:p-6 text-blue-900">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-accent-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">
                    Understanding Coastal High Tides in Obando
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Because Obando borders Manila Bay and the Paliwas/Marilao
                    river systems, astronomical high tides frequently affect
                    low-lying roads in barangays such as Binuangan, Tawiran,
                    Salambao, and Lawa even on sunny days.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border border-gray-200 bg-white">
                <CardContent className="p-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded">
                    Normal Tide (&lt; 1.0m)
                  </span>
                  <h4 className="font-semibold text-gray-900 mt-3 text-base">
                    Passable Roads
                  </h4>
                  <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                    Main national and municipal thoroughfares (J.P. Rizal St.,
                    Paliwas corridor) remain dry and accessible to light
                    vehicles.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 bg-white">
                <CardContent className="p-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded">
                    Moderate Tide (1.0m - 1.4m)
                  </span>
                  <h4 className="font-semibold text-gray-900 mt-3 text-base">
                    Caution for Low Sedans
                  </h4>
                  <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                    Gutter to ankle-deep water in riverside areas of Tawiran,
                    Paco, and Salambao. Motorists are advised to plan alternate
                    routes.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 bg-white">
                <CardContent className="p-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 px-2.5 py-1 rounded">
                    Spring / Storm Tide (&gt; 1.5m)
                  </span>
                  <h4 className="font-semibold text-gray-900 mt-3 text-base">
                    Flood Advisory Active
                  </h4>
                  <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                    Widespread road flooding. Coastal barangays may require
                    waterborne transport. Monitor MDRRMO Obando bulletins
                    immediately.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h4 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Info className="h-4 w-4 text-primary-600" />
                Where to get Live Tide & Weather Bulletins:
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-600" />
                  <span>
                    <strong>MDRRMO Obando:</strong> Official Facebook updates &
                    hotline (02) 8281-5816
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-600" />
                  <span>
                    <strong>NAMRIA Manila Bay Tide Station:</strong>{' '}
                    Astronomical tide forecast tables
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-600" />
                  <span>
                    <strong>PAGASA Weather Bulletins:</strong> Heavy rainfall
                    warnings and monsoon advisories
                  </span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Tab Content: Complete Hotlines Phonebook */}
        {activeTab === 'hotlines' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2 text-primary-700">
                  <Phone className="h-5 w-5" /> Municipal Emergency Services
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      title: 'Obando Rescue / MDRRMC',
                      tel: '(02) 8281-5816',
                      desc: 'Disaster response, flood rescue, ambulance assistance',
                    },
                    {
                      title: 'Obando Police Station (PNP)',
                      tel: '(02) 8292-2043',
                      desc: 'Law enforcement, peace and order, emergency patrols',
                    },
                    {
                      title: 'Bureau of Fire Protection (BFP Obando)',
                      tel: '(02) 8299-7996',
                      desc: 'Fire emergencies, hazardous chemical response',
                    },
                    {
                      title: 'Obando Rural Health Unit (RHU)',
                      tel: '(02) 8332-2744',
                      desc: 'Free medical consultations, vaccines, maternal care',
                    },
                    {
                      title: 'Mayor’s Office / Public Information',
                      tel: '(02) 8277-1356',
                      desc: 'Municipal administration & citizen assistance',
                    },
                  ].map(item => (
                    <div
                      key={item.title}
                      className="p-3 bg-gray-50 rounded-lg border border-gray-100"
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-semibold text-gray-900 text-sm">
                          {item.title}
                        </span>
                        <a
                          href={`tel:${item.tel.replace(/[^0-9]/g, '')}`}
                          className="font-mono text-sm text-primary-600 font-bold hover:underline"
                        >
                          {item.tel}
                        </a>
                      </div>
                      <p className="text-xs text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2 text-primary-700">
                  <ExternalLink className="h-5 w-5" /> Utility & National
                  Hotlines
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      title: 'MERALCO (Electricity Outages)',
                      tel: '16211',
                      desc: 'Report power outages, downed lines, transformer sparks',
                    },
                    {
                      title: 'Maynilad Water Hotline',
                      tel: '1626',
                      desc: 'Water service interruptions, low pressure, leak reports',
                    },
                    {
                      title: 'National Emergency Hotline',
                      tel: '911',
                      desc: 'Nationwide dispatch service',
                    },
                    {
                      title: 'Philippine Red Cross Bulacan',
                      tel: '143',
                      desc: 'Blood bank, disaster relief, first aid assistance',
                    },
                    {
                      title: 'DILG Public Assistance',
                      tel: '(02) 8876-3454',
                      desc: 'Local government affairs and citizen inquiries',
                    },
                  ].map(item => (
                    <div
                      key={item.title}
                      className="p-3 bg-gray-50 rounded-lg border border-gray-100"
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-semibold text-gray-900 text-sm">
                          {item.title}
                        </span>
                        <a
                          href={`tel:${item.tel.replace(/[^0-9]/g, '')}`}
                          className="font-mono text-sm text-primary-600 font-bold hover:underline"
                        >
                          {item.tel}
                        </a>
                      </div>
                      <p className="text-xs text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content: Fertility Dance & Heritage */}
        {activeTab === 'heritage' && (
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8">
              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-accent-100 text-accent-800 mb-3">
                Cultural Heritage & Devotion
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                The Obando Fertility Dance (Sayaw sa Obando)
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                Celebrated annually every <strong>May 17, 18, and 19</strong> at
                the San Pascual Baylon Parish in Brgy. Pag-asa (Poblacion), the
                Obando Fertility Rites are one of the most culturally revered
                Catholic folk traditions in the Philippines.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-gray-100">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-2 font-semibold text-primary-700 text-sm mb-1">
                    <Calendar className="h-4 w-4" /> May 17: San Pascual Baylon
                  </div>
                  <p className="text-xs text-gray-600">
                    Patron of couples praying for a male child and believers
                    seeking good fortune and prosperity in life.
                  </p>
                </div>

                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-2 font-semibold text-primary-700 text-sm mb-1">
                    <Calendar className="h-4 w-4" /> May 18: Santa Clara de Asis
                  </div>
                  <p className="text-xs text-gray-600">
                    Devotees dance and offer eggs to petition for a female
                    child, good weather, or a loving spouse.
                  </p>
                </div>

                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-2 font-semibold text-primary-700 text-sm mb-1">
                    <Calendar className="h-4 w-4" /> May 19: Nuestra Señora de
                    Salambao
                  </div>
                  <p className="text-xs text-gray-600">
                    Honors the miraculous Virgin of Salambao discovered in a
                    fishing net, patroness of fishermen and bountiful harvest.
                  </p>
                </div>
              </div>

              <div className="mt-8 p-4 bg-accent-50 rounded-xl border border-accent-200">
                <h4 className="font-semibold text-accent-900 text-sm mb-2">
                  Tips for Devotees and Visitors:
                </h4>
                <ul className="text-xs text-accent-800 space-y-1.5 list-disc list-inside">
                  <li>
                    Wear comfortable white or festive attire suitable for
                    walking and traditional street dancing.
                  </li>
                  <li>
                    Traffic rerouting is implemented along the J.P. Rizal
                    corridor; park in designated municipal parking zones.
                  </li>
                  <li>
                    Dispose of trash responsibly along the procession route to
                    support Obando's waste segregation ordinances.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Suggest / Get Involved Callout */}
        <div className="mt-12 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold mb-1">
              Have an Idea for a New Obando Civic Tool?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              BetterObando is community-maintained. If you have public data,
              suggest an emergency hotline correction, or want to contribute a
              feature, we welcome your help!
            </p>
          </div>
          <a
            href="https://bettergov.ph/join-us"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent-500 hover:bg-accent-600 text-slate-950 font-bold rounded-lg text-sm transition-colors shrink-0"
          >
            <MessageSquare className="h-4 w-4" />
            Join / Suggest an Idea
          </a>
        </div>
      </Section>
    </>
  );
}
