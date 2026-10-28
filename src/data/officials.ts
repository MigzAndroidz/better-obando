export interface ExecutiveOfficial {
  id: string;
  role: string;
  roleBadge: string;
  name: string;
  honorific: string;
  email: string;
  phone: string;
  hours: string;
  location: string;
  departmentSlug?: string;
  description: string;
}

export interface LegislativeMember {
  id: string;
  name: string;
  role: string;
  roleBadge: string;
  badgeType: 'councilor' | 'abc' | 'sk';
  committee?: string;
  description?: string;
}

export interface MunicipalOffice {
  id: string;
  name: string;
  shortName?: string;
  description: string;
  iconName: string;
  phone: string;
  email: string;
  location: string;
  serviceLink: string;
  serviceLinkText: string;
}

export const EXECUTIVE_OFFICIALS: ExecutiveOfficial[] = [
  {
    id: 'mayor',
    role: 'Municipal Mayor',
    roleBadge: 'MUNICIPAL MAYOR',
    name: 'Leonardo "Ding" D. Valeda',
    honorific: 'Hon.',
    email: 'mayor@obando.gov.ph',
    phone: '(02) 8292-2043',
    hours: 'Mon-Fri: 8:00 AM - 5:00 PM',
    location:
      '2nd Floor, Obando Municipal Hall, J.P. Rizal St., Brgy. Paliwas, Obando, Bulacan',
    departmentSlug: '/government/departments/executive',
    description:
      'Local Chief Executive leading municipal development, disaster resilience, public infrastructure, and administrative frontline operations across all 11 barangays of Obando.',
  },
  {
    id: 'vice-mayor',
    role: 'Municipal Vice Mayor',
    roleBadge: 'MUNICIPAL VICE MAYOR',
    name: 'Rowell S. Rillera',
    honorific: 'Hon.',
    email: 'vicemayor@obando.gov.ph',
    phone: '(02) 8292-2043',
    hours: 'Mon-Fri: 8:00 AM - 5:00 PM',
    location:
      '2nd Floor, Sangguniang Bayan Session Hall, Municipal Hall, Brgy. Paliwas, Obando',
    departmentSlug: '/government/departments/legislative',
    description:
      'Presiding Officer of the Sangguniang Bayan leading local legislative enactments, municipal appropriations review, and public consultative ordinances.',
  },
];

export const LEGISLATIVE_MEMBERS: LegislativeMember[] = [
  {
    id: 'de-ocampo',
    name: 'Hon. Drandren R. De Ocampo',
    role: 'Municipal Councilor',
    roleBadge: 'Municipal Councilor',
    badgeType: 'councilor',
    committee: 'Committee on Rules, Privileges & Legal Matters',
  },
  {
    id: 'dela-cruz',
    name: 'Hon. Felipe F. Dela Cruz',
    role: 'Municipal Councilor',
    roleBadge: 'Municipal Councilor',
    badgeType: 'councilor',
    committee: 'Committee on Appropriations, Ways & Means',
  },
  {
    id: 'de-leon',
    name: 'Hon. Gladys Lyn G. De Leon',
    role: 'Municipal Councilor',
    roleBadge: 'Municipal Councilor',
    badgeType: 'councilor',
    committee: 'Committee on Health, Sanitation & Social Welfare',
  },
  {
    id: 'dela-paz',
    name: 'Hon. Michael L. Dela Paz',
    role: 'Municipal Councilor',
    roleBadge: 'Municipal Councilor',
    badgeType: 'councilor',
    committee: 'Committee on Public Works, Infrastructure & Land Use',
  },
  {
    id: 'bautista',
    name: 'Hon. Evangeline B. Bautista',
    role: 'Municipal Councilor',
    roleBadge: 'Municipal Councilor',
    badgeType: 'councilor',
    committee: 'Committee on Agriculture, Fisheries & Aquatic Resources',
  },
  {
    id: 'valeda-erwin',
    name: 'Hon. Erwin M. Valeda',
    role: 'Municipal Councilor',
    roleBadge: 'Municipal Councilor',
    badgeType: 'councilor',
    committee: 'Committee on Education, Culture & Heritage',
  },
  {
    id: 'banag',
    name: 'Hon. Lawrence R. Banag',
    role: 'Municipal Councilor',
    roleBadge: 'Municipal Councilor',
    badgeType: 'councilor',
    committee: 'Committee on Trade, Commerce & Business Licensing',
  },
  {
    id: 'gomez',
    name: 'Hon. Gerald M. Gomez',
    role: 'Municipal Councilor',
    roleBadge: 'Municipal Councilor',
    badgeType: 'councilor',
    committee: 'Committee on Peace, Public Safety & Disaster Preparedness',
  },
  {
    id: 'abc-president',
    name: 'Hon. Liga ng mga Barangay President',
    role: 'ABC President (Ex-Officio)',
    roleBadge: 'ABC President',
    badgeType: 'abc',
    committee: 'Ex-Officio Member representing all 11 Barangays of Obando',
  },
  {
    id: 'sk-president',
    name: 'Hon. SK Municipal Federation President',
    role: 'SK Federation President (Ex-Officio)',
    roleBadge: 'SK President',
    badgeType: 'sk',
    committee:
      'Ex-Officio Member representing the Youth and Students of Obando',
  },
];

export const MUNICIPAL_OFFICES: MunicipalOffice[] = [
  {
    id: 'civil-registrar',
    name: 'Municipal Civil Registrar',
    shortName: 'MCR',
    description:
      'Birth, death, marriage certificates, CENOMAR, legitimation, and civil registry record authentications.',
    iconName: 'FileText',
    phone: '(02) 8292-2043',
    email: 'civilreg@obando.gov.ph',
    location: 'Ground Floor, Obando Municipal Hall, Brgy. Paliwas',
    serviceLink: '/forms',
    serviceLinkText: 'View Civil Forms',
  },
  {
    id: 'treasury',
    name: "Municipal Treasurer's Office",
    shortName: 'MTO',
    description:
      'Tax payments, real property tax (amilyar), community tax certificates (cedula), and revenue collection.',
    iconName: 'Coins',
    phone: '(02) 8292-2043',
    email: 'treasurer@obando.gov.ph',
    location: 'Ground Floor, Obando Municipal Hall, Brgy. Paliwas',
    serviceLink: '/government/departments/treasury',
    serviceLinkText: 'View Treasury Services',
  },
  {
    id: 'engineering',
    name: 'Municipal Engineering Office',
    shortName: 'MEO / OBO',
    description:
      'Building permits, construction permits, occupancy certificates, and municipal infrastructure.',
    iconName: 'Building2',
    phone: '(02) 8292-2043',
    email: 'engineer@obando.gov.ph',
    location: '2nd Floor, Obando Municipal Hall, Brgy. Paliwas',
    serviceLink: '/government/departments/engineering',
    serviceLinkText: 'View Engineering Services',
  },
  {
    id: 'bplo',
    name: 'Business Permits & Licensing Office',
    shortName: 'BPLO',
    description:
      'New business registrations, Business One-Stop Shop (BOSS), commercial permits, and regulatory compliance.',
    iconName: 'Briefcase',
    phone: '(02) 8292-2043',
    email: 'bplo@obando.gov.ph',
    location: 'Ground Floor, Obando Municipal Hall, Brgy. Paliwas',
    serviceLink: '/government/departments/bplo',
    serviceLinkText: 'View Business Services',
  },
  {
    id: 'mswdo',
    name: 'Municipal Social Welfare & Development',
    shortName: 'MSWDO',
    description:
      'Social services, PWD & senior citizen IDs (OSCA), financial assistance (AICS), and child daycare.',
    iconName: 'Users',
    phone: '(02) 8292-2043',
    email: 'mswdo@obando.gov.ph',
    location: 'Ground Floor, Obando Municipal Hall, Brgy. Paliwas',
    serviceLink: '/government/departments/social-welfare',
    serviceLinkText: 'View Social Services',
  },
  {
    id: 'mpdo',
    name: 'Municipal Planning & Development',
    shortName: 'MPDO',
    description:
      'Development planning, comprehensive land use plan (CLUP), zoning certificates, and locational clearances.',
    iconName: 'Compass',
    phone: '(02) 8292-2043',
    email: 'mpdo@obando.gov.ph',
    location: '2nd Floor, Obando Municipal Hall, Brgy. Paliwas',
    serviceLink: '/government/departments/planning-development',
    serviceLinkText: 'View Planning Services',
  },
  {
    id: 'health',
    name: 'Municipal Health Office & RHU',
    shortName: 'MHO / RHU',
    description:
      'Free primary consultations, basic medicines, maternal & child immunization, and sanitary permits.',
    iconName: 'HeartPulse',
    phone: '(02) 8292-2043',
    email: 'health@obando.gov.ph',
    location: 'Rural Health Unit Compound, Brgy. Paliwas',
    serviceLink: '/government/departments/health-office',
    serviceLinkText: 'View Health Services',
  },
  {
    id: 'menro',
    name: 'Municipal Environment & Natural Resources',
    shortName: 'MENRO',
    description:
      'Ecological solid waste collection, river desiltation, mangrove reforestation, and environmental protection.',
    iconName: 'Trees',
    phone: '(02) 8292-2043',
    email: 'menro@obando.gov.ph',
    location: 'Ground Floor, Obando Municipal Hall, Brgy. Paliwas',
    serviceLink: '/government/departments/menro',
    serviceLinkText: 'View Environmental Services',
  },
  {
    id: 'mdrrmo',
    name: 'Municipal Disaster Risk Reduction & Management',
    shortName: 'MDRRMO',
    description:
      '24/7 emergency operations center, high-tide early warnings, disaster drills, and river flood rescue.',
    iconName: 'ShieldAlert',
    phone: '(02) 8292-2043',
    email: 'mdrrmo@obando.gov.ph',
    location: 'Disaster Operations Center, Municipal Hall, Brgy. Paliwas',
    serviceLink: '/government/departments/mdrrmo',
    serviceLinkText: 'View Disaster Operations',
  },
  {
    id: 'assessor',
    name: "Municipal Assessor's Office",
    shortName: 'Assessor',
    description:
      'Property assessment, tax declarations, land classifications, and real property record transfers.',
    iconName: 'Home',
    phone: '(02) 8292-2043',
    email: 'assessor@obando.gov.ph',
    location: 'Ground Floor, Obando Municipal Hall, Brgy. Paliwas',
    serviceLink: '/forms',
    serviceLinkText: 'View Assessor Forms',
  },
  {
    id: 'agriculture',
    name: 'Municipal Agriculture & Fisheries',
    shortName: 'MAO',
    description:
      'Fisherfolk registry (FishR), fingerling subsidies, agricultural training, and aquaculture assistance.',
    iconName: 'Fish',
    phone: '(02) 8292-2043',
    email: 'agriculture@obando.gov.ph',
    location: 'Ground Floor, Obando Municipal Hall, Brgy. Paliwas',
    serviceLink: '/services/agriculture-fisheries',
    serviceLinkText: 'View Fisheries Services',
  },
  {
    id: 'budget-accounting',
    name: 'Municipal Accounting & Budget Offices',
    shortName: 'Budget & Accounting',
    description:
      'Financial records, municipal disbursements, annual executive appropriations, and fiscal transparency.',
    iconName: 'Calculator',
    phone: '(02) 8292-2043',
    email: 'accounting@obando.gov.ph',
    location: '2nd Floor, Obando Municipal Hall, Brgy. Paliwas',
    serviceLink: '/government/transparency-documents/annual-budget-reports',
    serviceLinkText: 'View Budget Reports',
  },
];
