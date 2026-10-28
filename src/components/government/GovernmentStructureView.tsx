import { Link } from 'react-router';
import {
  Landmark,
  Building2,
  Star,
  Users,
  Mail,
  Phone,
  Clock,
  ArrowRight,
  ExternalLink,
  FileText,
  Coins,
  Briefcase,
  Compass,
  HeartPulse,
  Trees,
  ShieldAlert,
  Home,
  Fish,
  Calculator,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';
import {
  EXECUTIVE_OFFICIALS,
  LEGISLATIVE_MEMBERS,
  MUNICIPAL_OFFICES,
  type MunicipalOffice,
} from '../../data/officials';

export default function GovernmentStructureView() {
  const getOfficeIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileText':
        return <FileText className="h-6 w-6 text-white" />;
      case 'Coins':
        return <Coins className="h-6 w-6 text-white" />;
      case 'Building2':
        return <Building2 className="h-6 w-6 text-white" />;
      case 'Briefcase':
        return <Briefcase className="h-6 w-6 text-white" />;
      case 'Users':
        return <Users className="h-6 w-6 text-white" />;
      case 'Compass':
        return <Compass className="h-6 w-6 text-white" />;
      case 'HeartPulse':
        return <HeartPulse className="h-6 w-6 text-white" />;
      case 'Trees':
        return <Trees className="h-6 w-6 text-white" />;
      case 'ShieldAlert':
        return <ShieldAlert className="h-6 w-6 text-white" />;
      case 'Home':
        return <Home className="h-6 w-6 text-white" />;
      case 'Fish':
        return <Fish className="h-6 w-6 text-white" />;
      case 'Calculator':
        return <Calculator className="h-6 w-6 text-white" />;
      default:
        return <Building2 className="h-6 w-6 text-white" />;
    }
  };

  return (
    <div className="pb-16 space-y-16">
      {/* 1. Header / Hero Section */}
      <section className="text-center pt-6 sm:pt-10 pb-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary-100/80 text-primary-800 border border-primary-200/60 mb-4 shadow-xs">
          <Landmark className="h-3.5 w-3.5 text-primary-700" />
          <span>Government Structure</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
          Government Structure & Officials
        </h1>

        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mt-3 leading-relaxed">
          Meet the leadership, legislative council, and administrative offices
          serving the Municipality of Obando, Bulacan.
        </p>

        {/* Quick jump anchor navigation pills */}
        <div className="flex flex-wrap justify-center gap-2.5 mt-6">
          <a
            href="#executive"
            className="px-4 py-2 text-xs font-bold rounded-xl bg-white hover:bg-primary-50 text-gray-700 hover:text-primary-800 border border-gray-200 hover:border-primary-300 transition-all shadow-xs inline-flex items-center gap-1.5"
          >
            <Star className="h-3.5 w-3.5 text-accent-500" />
            Executive Branch
          </a>
          <a
            href="#legislative"
            className="px-4 py-2 text-xs font-bold rounded-xl bg-white hover:bg-primary-50 text-gray-700 hover:text-primary-800 border border-gray-200 hover:border-primary-300 transition-all shadow-xs inline-flex items-center gap-1.5"
          >
            <Landmark className="h-3.5 w-3.5 text-primary-600" />
            Legislative Council
          </a>
          <a
            href="#offices"
            className="px-4 py-2 text-xs font-bold rounded-xl bg-white hover:bg-primary-50 text-gray-700 hover:text-primary-800 border border-gray-200 hover:border-primary-300 transition-all shadow-xs inline-flex items-center gap-1.5"
          >
            <Building2 className="h-3.5 w-3.5 text-primary-600" />
            Key Municipal Offices
          </a>
          <Link
            to="/government/transparency-documents/citizens-charter"
            className="px-4 py-2 text-xs font-bold rounded-xl bg-primary-50 hover:bg-primary-100 text-primary-800 border border-primary-200 transition-all shadow-xs inline-flex items-center gap-1.5"
          >
            <FileText className="h-3.5 w-3.5 text-primary-600" />
            Citizen's Charter
          </Link>
        </div>
      </section>

      {/* 2. Executive Branch Section */}
      <section id="executive" className="scroll-mt-24">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-primary-900 text-accent-400 border border-primary-800 shadow-xs mb-3">
            <Star className="h-3.5 w-3.5 fill-accent-400 text-accent-400" />
            <span>Executive Branch</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            Executive Branch
          </h2>
          <p className="text-sm text-gray-600 mt-1 max-w-xl mx-auto">
            The executive officials leading the governance and frontline public
            administration of Obando
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {EXECUTIVE_OFFICIALS.map(official => {
            const isMayor = official.id === 'mayor';
            return (
              <div
                key={official.id}
                className="rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-md transition-all overflow-hidden bg-white flex flex-col justify-between"
              >
                {/* Header Banner */}
                <div
                  className={`p-6 text-center text-white ${
                    isMayor
                      ? 'bg-gradient-to-br from-[#082F65] via-[#032759] to-[#011D42]'
                      : 'bg-gradient-to-br from-[#0A3F7A] via-[#032759] to-[#026C80]'
                  }`}
                >
                  <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/15 text-white border border-white/20 mb-2.5">
                    {official.roleBadge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                    {official.honorific} {official.name}
                  </h3>
                  <p className="text-xs text-white/80 mt-1 max-w-md mx-auto line-clamp-2">
                    {official.description}
                  </p>
                </div>

                {/* Body Details */}
                <div className="p-6 space-y-3 bg-white flex-grow flex flex-col justify-between">
                  <div className="space-y-2.5">
                    <a
                      href={`mailto:${official.email}`}
                      className="bg-slate-50 hover:bg-primary-50/70 border border-slate-200/80 hover:border-primary-200 rounded-xl p-3.5 flex items-center gap-3 text-sm text-gray-700 hover:text-primary-900 transition-colors group"
                    >
                      <div className="p-1.5 rounded-lg bg-white border border-gray-100 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors shrink-0">
                        <Mail className="h-4 w-4" />
                      </div>
                      <span className="font-medium truncate">
                        {official.email}
                      </span>
                    </a>

                    <a
                      href={`tel:${official.phone.replace(/[^0-9]/g, '')}`}
                      className="bg-slate-50 hover:bg-primary-50/70 border border-slate-200/80 hover:border-primary-200 rounded-xl p-3.5 flex items-center gap-3 text-sm text-gray-700 hover:text-primary-900 transition-colors group"
                    >
                      <div className="p-1.5 rounded-lg bg-white border border-gray-100 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors shrink-0">
                        <Phone className="h-4 w-4" />
                      </div>
                      <span className="font-medium">{official.phone}</span>
                    </a>

                    <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 flex items-center gap-3 text-sm text-gray-700">
                      <div className="p-1.5 rounded-lg bg-white border border-gray-100 text-primary-600 shrink-0">
                        <Clock className="h-4 w-4" />
                      </div>
                      <span className="font-medium">{official.hours}</span>
                    </div>
                  </div>

                  {official.departmentSlug && (
                    <div className="pt-3 border-t border-gray-100 mt-4">
                      <Link
                        to={official.departmentSlug}
                        className="text-xs font-bold text-primary-700 hover:text-primary-900 inline-flex items-center justify-between w-full p-2 rounded-lg hover:bg-primary-50 transition-colors"
                      >
                        <span>
                          {isMayor
                            ? 'Executive Mandate & Priorities'
                            : 'Legislative Overview & Sessions'}
                        </span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Legislative Branch Section */}
      <section id="legislative" className="scroll-mt-24">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#032759] text-white border border-[#082F65] shadow-xs mb-3">
            <Landmark className="h-3.5 w-3.5 text-accent-400" />
            <span>Legislative Branch</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            Sangguniang Bayan Members
          </h2>
          <p className="text-sm text-gray-600 mt-1 max-w-xl mx-auto">
            The municipal councilors enacting ordinances and serving the people
            of Obando
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {LEGISLATIVE_MEMBERS.map(member => {
            const isAbc = member.badgeType === 'abc';
            const isSk = member.badgeType === 'sk';

            return (
              <div
                key={member.id}
                className={`bg-white rounded-2xl p-5 border border-gray-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between ${
                  isAbc
                    ? 'border-l-4 border-l-emerald-600'
                    : isSk
                      ? 'border-l-4 border-l-amber-500'
                      : 'border-l-4 border-l-primary-600'
                }`}
              >
                <div>
                  <h3 className="font-bold text-gray-900 text-base sm:text-lg leading-snug">
                    {member.name}
                  </h3>

                  <div className="mt-2">
                    {isAbc ? (
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200/60">
                        {member.roleBadge}
                      </span>
                    ) : isSk ? (
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200/60">
                        {member.roleBadge}
                      </span>
                    ) : (
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary-50 text-primary-800 border border-primary-200/60">
                        {member.roleBadge}
                      </span>
                    )}
                  </div>
                </div>

                {member.committee && (
                  <p className="text-xs text-gray-500 mt-4 pt-3 border-t border-gray-100 leading-relaxed">
                    {member.committee}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Municipal Offices / Department Heads Section */}
      <section id="offices" className="scroll-mt-24">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-primary-900 text-white border border-primary-800 shadow-xs mb-3">
            <Building2 className="h-3.5 w-3.5 text-accent-400" />
            <span>Municipal Offices</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            Department Heads & Key Offices
          </h2>
          <p className="text-sm text-gray-600 mt-1 max-w-xl mx-auto">
            Municipal departments and regulatory frontline offices providing
            direct public services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {MUNICIPAL_OFFICES.map((office: MunicipalOffice) => (
            <div
              key={office.id}
              className="flex bg-white rounded-2xl border border-gray-200/90 shadow-xs hover:shadow-md transition-all overflow-hidden group"
            >
              {/* Left Vertical Icon Strip */}
              <div className="w-14 sm:w-16 bg-gradient-to-b from-[#082F65] via-[#032759] to-[#011D42] flex items-center justify-center shrink-0">
                {getOfficeIcon(office.iconName)}
              </div>

              {/* Right Content Area */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-gray-900 text-base leading-snug group-hover:text-primary-700 transition-colors">
                    {office.name}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed line-clamp-2">
                    {office.description}
                  </p>
                </div>

                <div className="mt-3.5 pt-3 border-t border-gray-100 space-y-1.5 text-xs text-gray-600">
                  <div className="flex items-center gap-1.5 truncate">
                    <Phone className="h-3.5 w-3.5 text-primary-600 shrink-0" />
                    <span>{office.phone}</span>
                  </div>
                  <div className="flex items-center gap-1.5 truncate">
                    <Mail className="h-3.5 w-3.5 text-primary-600 shrink-0" />
                    <span className="truncate">{office.email}</span>
                  </div>

                  <div className="pt-2">
                    <Link
                      to={office.serviceLink}
                      className="inline-flex items-center gap-1 text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors"
                    >
                      <span>→ {office.serviceLinkText}</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Civic Accountability & Transparency Notice */}
      <section className="rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-primary-900 to-[#032759] text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-accent-500/20 text-accent-400 border border-accent-400/30 mb-3">
            <ShieldCheck className="h-4 w-4" />
            <span>Civic Integrity & Public Service</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold">
            Obando Citizen's Charter & Full Disclosure
          </h3>
          <p className="text-xs sm:text-sm text-primary-200 max-w-2xl mt-1.5 leading-relaxed">
            All municipal procedures, statutory turnaround times, and official
            fees comply with RA 11032 (Ease of Doing Business and Efficient
            Government Service Delivery Act) and the DILG Full Disclosure
            Policy.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <Link
            to="/government/transparency-documents/citizens-charter"
            className="px-5 py-2.5 rounded-xl bg-accent-500 hover:bg-accent-600 text-gray-950 font-bold text-xs transition-all shadow-sm text-center inline-flex items-center justify-center gap-1.5"
          >
            <span>Citizen's Charter</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
          <a
            href="https://obando.gov.ph"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-all text-center inline-flex items-center justify-center gap-1.5"
          >
            <span>Official Portal</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </section>
    </div>
  );
}
