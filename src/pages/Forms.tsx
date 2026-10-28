import { useState } from 'react';
import { OBANDO_FORMS } from '../data/forms';
import Section from '../components/ui/Section';
import { Heading } from '../components/ui/Heading';
import { Text } from '../components/ui/Text';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import SEO from '../components/SEO';
import { Card, CardContent } from '@bettergov/kapwa/card';
import {
  FileText,
  Search,
  MapPin,
  CheckCircle,
  AlertCircle,
  Building2,
  Calendar,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Coins,
  Clock,
} from 'lucide-react';

export default function Forms() {
  const [selectedOffice, setSelectedOffice] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedFormId, setExpandedFormId] = useState<string | null>(null);

  const offices = [
    'All',
    'BPLO',
    'Civil Registrar',
    'Building Official (OBO)',
    'Health Office (RHU)',
    'Treasury',
    'MSWDO',
    'Transport (MCTFRB)',
  ];

  const filteredForms = OBANDO_FORMS.filter(form => {
    const matchesOffice =
      selectedOffice === 'All' || form.office === selectedOffice;
    const matchesSearch =
      form.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (form.titleFil &&
        form.titleFil.toLowerCase().includes(searchQuery.toLowerCase())) ||
      form.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      form.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesOffice && matchesSearch;
  });

  const toggleExpand = (id: string) => {
    setExpandedFormId(expandedFormId === id ? null : id);
  };

  return (
    <>
      <SEO
        title="Application Forms & Permits Hub - Better Obando"
        description="Searchable repository of municipal application forms, permit requirements, and document filing guides for the Municipality of Obando, Bulacan."
        keywords="Obando application forms, business permit obando, building permit obando, birth certificate obando, senior citizen id obando"
      />
      <Section className="py-10">
        <Breadcrumbs className="mb-6" />

        <div className="mb-8">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary-100 text-primary-700 mb-2">
            Frontline Resource Center
          </div>
          <Heading level={1} className="text-3xl font-extrabold text-gray-900">
            Application Forms & Permits Hub
          </Heading>
          <Text className="text-gray-600 max-w-3xl mt-2 text-base leading-relaxed">
            Find the official requirements, municipal desk locations, and
            procedures for government permits and civil documents in Obando.
            Prepare all documentary prerequisites before visiting the Municipal
            Hall in Brgy. Paliwas.
          </Text>
        </div>

        {/* Advisory Callout */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 sm:p-5 mb-8 text-amber-900 text-xs sm:text-sm flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-amber-950 block mb-0.5">
              Notice on Official Carbonized Forms:
            </span>
            Certain municipal permits (e.g. BPLO Unified Forms and Building
            Permits) require serialized official carbon-copy forms distributed
            exclusively at municipal hall service windows to protect document
            authenticity and prevent unauthorized reproduction.
          </div>
        </div>

        {/* Search & Office Filters */}
        <div className="space-y-4 mb-8">
          <div className="relative max-w-xl">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search forms by keyword (e.g., Business, Birth, Building, Senior, Cedula)..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 shadow-sm"
            />
          </div>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {offices.map(office => (
              <button
                key={office}
                onClick={() => setSelectedOffice(office)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  selectedOffice === office
                    ? 'bg-primary-600 text-white shadow-sm'
                    : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-100'
                }`}
              >
                {office}
              </button>
            ))}
          </div>
        </div>

        {/* Forms Results Count */}
        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
          Showing {filteredForms.length} Form
          {filteredForms.length !== 1 ? 's' : ''} & Applications
        </div>

        {/* Forms List */}
        <div className="space-y-4">
          {filteredForms.map(form => {
            const isExpanded = expandedFormId === form.id;
            return (
              <Card
                key={form.id}
                className="border border-gray-200 bg-white shadow-sm hover:border-primary-300 transition-all"
              >
                <CardContent className="p-5 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-3">
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-primary-50 text-primary-700 border border-primary-100">
                          {form.office}
                        </span>
                        <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">
                          {form.category}
                        </span>
                        <span
                          className={`text-[11px] font-semibold px-2 py-0.5 rounded-md border flex items-center gap-1 ${
                            form.verificationStatus === 'VERIFIED'
                              ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                              : 'bg-amber-50 text-amber-700 border-amber-200'
                          }`}
                        >
                          {form.verificationStatus === 'VERIFIED' ? (
                            <CheckCircle className="h-3 w-3 text-emerald-600" />
                          ) : (
                            <AlertCircle className="h-3 w-3 text-amber-600" />
                          )}
                          {form.verificationStatus}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {form.title}
                      </h3>
                      {form.titleFil && (
                        <p className="text-xs font-medium text-gray-500 italic">
                          {form.titleFil}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto shrink-0">
                      {form.fileUrl && (
                        <a
                          href={form.fileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors shadow-sm"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          {form.status === 'National Agency Link'
                            ? 'Open National Portal'
                            : 'Official Form Portal'}
                        </a>
                      )}
                      <button
                        onClick={() => toggleExpand(form.id)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-primary-700 bg-primary-50 hover:bg-primary-100 rounded-lg transition-colors shrink-0"
                      >
                        {isExpanded ? (
                          <>
                            Hide Requirements{' '}
                            <ChevronUp className="h-3.5 w-3.5" />
                          </>
                        ) : (
                          <>
                            View Requirements ({form.requirements.length}){' '}
                            <ChevronDown className="h-3.5 w-3.5" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                    {form.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-3 border-t border-gray-100 text-xs text-gray-600">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-primary-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-gray-800">
                          Where to file / obtain:{' '}
                        </span>
                        <span>{form.location}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Calendar className="h-4 w-4 text-gray-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-gray-800">
                          Verified:{' '}
                        </span>
                        <span className="font-medium text-gray-800">
                          {form.lastVerified}
                        </span>
                      </div>
                    </div>

                    {form.officialFee && (
                      <div className="flex items-start gap-2">
                        <Coins className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-gray-800">
                            Official Fee:{' '}
                          </span>
                          <span>{form.officialFee}</span>
                        </div>
                      </div>
                    )}

                    {form.processingTime && (
                      <div className="flex items-start gap-2">
                        <Clock className="h-4 w-4 text-primary-600 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-gray-800">
                            Processing Time:{' '}
                          </span>
                          <span>{form.processingTime}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Expanded Requirements Drawer */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-gray-200 bg-slate-50/70 -mx-5 -mb-5 sm:-mx-6 sm:-mb-6 p-5 sm:p-6 rounded-b-xl space-y-3 animate-fade-in">
                      <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider flex items-center gap-1.5">
                        <FileText className="h-4 w-4 text-primary-600" />
                        Required Documents for Submission:
                      </h4>
                      <ul className="space-y-2">
                        {form.requirements.map((req, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 text-xs text-gray-700 leading-relaxed"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary-600 shrink-0 mt-1.5" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                      {form.legalBasis && (
                        <div className="pt-3 border-t border-gray-200/60 text-[11px] text-gray-600">
                          <span className="font-semibold text-gray-800">
                            Legal & Regulatory Basis:{' '}
                          </span>
                          <span>{form.legalBasis}</span>
                        </div>
                      )}
                      <div className="pt-1 text-[11px] text-gray-500">
                        Tip: Always bring original documents alongside at least
                        two (2) clear photocopies to the designated service
                        desk.
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}

          {filteredForms.length === 0 && (
            <div className="text-center py-16 bg-white rounded-xl border border-gray-200 p-6">
              <Building2 className="h-10 w-10 text-gray-300 mx-auto mb-3" />
              <h3 className="text-base font-bold text-gray-900 mb-1">
                No matching forms found
              </h3>
              <p className="text-xs text-gray-500 max-w-sm mx-auto mb-4">
                We couldn't find any municipal forms matching &ldquo;
                {searchQuery}&rdquo;. Try another term or select
                &ldquo;All&rdquo;.
              </p>
              <button
                onClick={() => {
                  setSelectedOffice('All');
                  setSearchQuery('');
                }}
                className="px-4 py-2 bg-primary-600 text-white rounded-lg text-xs font-bold hover:bg-primary-700 transition-colors"
              >
                Reset Search
              </button>
            </div>
          )}
        </div>

        {/* Authoritative Forms Source Footnote */}
        <div className="mt-8 pt-4 border-t border-gray-200 text-xs text-gray-500 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <span>
            Application forms and guidelines verified from the{' '}
            <a
              href="https://obando.gov.ph/application-forms/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:underline font-semibold"
            >
              Official Municipality of Obando Application Forms Portal
            </a>{' '}
            and the Obando Citizen&apos;s Charter.
          </span>
          <span>
            EODB Mandate: <strong>Republic Act No. 11032</strong>
          </span>
        </div>
      </Section>
    </>
  );
}
