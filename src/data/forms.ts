export interface MunicipalForm {
  id: string;
  title: string;
  titleFil?: string;
  office:
    | 'BPLO'
    | 'Civil Registrar'
    | 'Building Official (OBO)'
    | 'Health Office (RHU)'
    | 'Treasury'
    | 'MSWDO'
    | 'Transport (MCTFRB)';
  description: string;
  category:
    | 'Business & Permits'
    | 'Civil Documents'
    | 'Construction & Zoning'
    | 'Health & Sanitation'
    | 'Taxes & Fees'
    | 'Social Assistance'
    | 'Transport';
  status: 'Downloadable' | 'In-Office Form' | 'National Agency Link';
  fileType?: 'PDF' | 'External Link' | 'Physical Form';
  fileUrl?: string;
  location: string;
  requirements: string[];
  lastVerified: string;
}

export const OBANDO_FORMS: MunicipalForm[] = [
  // BPLO
  {
    id: 'bplo-new-business',
    title: 'Obando Unified Business Permit Application (New)',
    titleFil: "Aplikasyon para sa Bagong Mayor's Business Permit",
    office: 'BPLO',
    category: 'Business & Permits',
    description:
      'The standard unified application form for registering a new commercial establishment or professional office in the Municipality of Obando.',
    status: 'In-Office Form',
    fileType: 'Physical Form',
    location: 'BPLO Desk, Ground Floor, Obando Municipal Hall, Brgy. Paliwas',
    requirements: [
      'DTI Certificate (Sole Prop) or SEC Registration (Corp/Partnership)',
      'Barangay Business Clearance from host barangay',
      'Contract of Lease or Proof of Property Ownership',
      'Locational / Zoning Clearance',
      'Occupancy Permit and Sanitary Permit',
      'Fire Safety Inspection Certificate (BFP Obando)',
    ],
    lastVerified: "2026 Q1 - Obando Citizen's Charter",
  },
  {
    id: 'bplo-renewal',
    title: 'Obando Business Permit Renewal Application Form',
    titleFil: 'Aplikasyon para sa Pagpapanibago ng Business Permit',
    office: 'BPLO',
    category: 'Business & Permits',
    description:
      'Mandatory annual renewal form filed during the Business One-Stop Shop (BOSS) period every January.',
    status: 'In-Office Form',
    fileType: 'Physical Form',
    location:
      'BPLO Counter / BOSS Center, Obando Municipal Hall, Brgy. Paliwas',
    requirements: [
      "Previous year Mayor's Permit and Official Receipt",
      'Latest Barangay Business Clearance',
      'Annual BIR Sales Declaration / Financial Statements',
      'Updated Sanitary Permit and Fire Safety Certificate',
    ],
    lastVerified: "2026 Q1 - Obando Citizen's Charter",
  },
  {
    id: 'bplo-occupational',
    title: 'Working / Occupational Permit Application Form',
    titleFil: 'Aplikasyon para sa Mayors Working/Occupational Permit',
    office: 'BPLO',
    category: 'Business & Permits',
    description:
      'Required for all personnel, food handlers, cashiers, and workers employed in commercial establishments across Obando.',
    status: 'In-Office Form',
    fileType: 'Physical Form',
    location: 'BPLO Window 2, Obando Municipal Hall',
    requirements: [
      'Barangay Clearance for Employment',
      'Police Clearance (Obando PNP)',
      'Medical Certificate & Stool/X-ray from Obando RHU',
      '1x1 ID pictures (2 copies)',
    ],
    lastVerified: '2026 Q1',
  },

  // Civil Registrar
  {
    id: 'mcr-birth-cert',
    title: 'Request for Certified True Copy of Certificate of Live Birth',
    titleFil: 'Kahilingan para sa Certified Copy ng Katibayan ng Kapanganakan',
    office: 'Civil Registrar',
    category: 'Civil Documents',
    description:
      'Application to secure a certified municipal transcript or local civil registry copy of a birth registered in Obando.',
    status: 'In-Office Form',
    fileType: 'Physical Form',
    location:
      'Office of the Municipal Civil Registrar, 2nd Floor, Municipal Hall, Brgy. Paliwas',
    requirements: [
      'Valid Government-issued ID of document owner or requesting parent',
      "Specific registry number or child's complete name, date of birth, and parents' names",
      'Authorization letter if requesting on behalf of an adult',
    ],
    lastVerified: '2026 Q1',
  },
  {
    id: 'mcr-marriage-license',
    title: 'Application for Marriage License & Certificate',
    titleFil: 'Aplikasyon para sa Lisensya sa Kasal',
    office: 'Civil Registrar',
    category: 'Civil Documents',
    description:
      'Official filing for contracting parties residing in Obando planning a civil or religious church marriage.',
    status: 'In-Office Form',
    fileType: 'Physical Form',
    location: 'Office of the Municipal Civil Registrar, Brgy. Paliwas',
    requirements: [
      'PSA Birth Certificates of both applicants',
      'PSA Certificate of No Marriage Record (CENOMAR)',
      'Barangay Certificate of Residency',
      'Pre-Marriage Counseling Certificate (Obando RHU/MSWDO)',
      'Parental Consent (for applicants aged 18-21) or Advice (aged 22-25)',
    ],
    lastVerified: '2026 Q1',
  },

  // Building Official / Engineering
  {
    id: 'obo-building-permit',
    title: 'Unified Building Permit Application Form',
    titleFil: 'Aplikasyon para sa Building Permit',
    office: 'Building Official (OBO)',
    category: 'Construction & Zoning',
    description:
      'Comprehensive technical permit required prior to constructing, renovating, or altering any residential or commercial structure in Obando.',
    status: 'In-Office Form',
    fileType: 'Physical Form',
    location:
      'Office of the Building Official (OBO) / Engineering Dept, Municipal Hall, Brgy. Paliwas',
    requirements: [
      '5 sets of Architectural, Structural, Electrical, and Sanitary plans signed and sealed by licensed engineers/architect',
      'Proof of Lot Ownership (TCT / Deed of Sale / Tax Declaration)',
      'Latest Real Property Tax Receipt (Amilyar)',
      'Locational Clearance from Municipal Planning & Development Office (MPDO)',
      'Barangay Construction Clearance',
    ],
    lastVerified: '2026 Q1',
  },
  {
    id: 'obo-occupancy-permit',
    title: 'Certificate of Occupancy Application',
    titleFil: 'Aplikasyon para sa Certificate of Occupancy',
    office: 'Building Official (OBO)',
    category: 'Construction & Zoning',
    description:
      'Final certification proving that a finished building complies with the National Building Code before electrical energization and occupancy.',
    status: 'In-Office Form',
    fileType: 'Physical Form',
    location: 'Engineering Department, Municipal Hall, Brgy. Paliwas',
    requirements: [
      'Approved Building Permit & Plans',
      'As-Built Plans signed and sealed',
      'Certificate of Completion from supervising engineer',
      'Fire Safety Inspection Certificate (BFP Obando)',
    ],
    lastVerified: '2026 Q1',
  },

  // Health Office (RHU)
  {
    id: 'rhu-sanitary-permit',
    title: 'Sanitary Permit Application for Business Establishments',
    titleFil: 'Aplikasyon para sa Sanitary Permit',
    office: 'Health Office (RHU)',
    category: 'Health & Sanitation',
    description:
      'Mandatory health inspection compliance certificate for food businesses, restaurants, markets, and public establishments.',
    status: 'In-Office Form',
    fileType: 'Physical Form',
    location: 'Rural Health Unit (RHU), Paliwas Compound, Obando, Bulacan',
    requirements: [
      'Health Certificates of all food handlers & staff',
      'Water bacteriological test result (for eateries/drinking refilling stations)',
      'Pest control certification',
      'Inspection report from Obando Sanitary Inspector',
    ],
    lastVerified: '2026 Q1',
  },

  // Treasury
  {
    id: 'treasury-cedula',
    title: 'Community Tax Certificate (Cedula) Application',
    titleFil: 'Pagkuha ng Sedula (Community Tax Certificate)',
    office: 'Treasury',
    category: 'Taxes & Fees',
    description:
      'Required basic identification document for real estate transactions, government filings, and business clearances.',
    status: 'In-Office Form',
    fileType: 'Physical Form',
    location:
      'Treasury Windows 1-3, Ground Floor, Municipal Hall, Brgy. Paliwas',
    requirements: [
      'Government ID with Obando address or Barangay Certificate',
      'Declaration of Gross Annual Income / Pay slip / BIR ITR',
    ],
    lastVerified: '2026 Q1',
  },
  {
    id: 'treasury-amilyar',
    title: 'Real Property Tax (Amilyar) Payment Assessment Slip',
    titleFil: 'Kahilingan para sa Bayad ng Amilyar (Real Property Tax)',
    office: 'Treasury',
    category: 'Taxes & Fees',
    description:
      'Request for official assessment of land, building, and machinery taxes in Obando.',
    status: 'In-Office Form',
    fileType: 'Physical Form',
    location: 'Treasury Assessment Counter, Municipal Hall, Brgy. Paliwas',
    requirements: [
      'Previous year Official Receipt of RPT payment',
      'Tax Declaration Number or Land Title (TCT)',
    ],
    lastVerified: '2026 Q1',
  },

  // MSWDO
  {
    id: 'mswdo-senior-id',
    title: 'Senior Citizen ID & Booklet Application Form',
    titleFil: 'Aplikasyon para sa Senior Citizen ID at Booklet',
    office: 'MSWDO',
    category: 'Social Assistance',
    description:
      'Entitles residents aged 60 and above to statutory 20% discounts, medicine booklets, and municipal senior welfare programs.',
    status: 'In-Office Form',
    fileType: 'Physical Form',
    location:
      'Office of Senior Citizens Affairs (OSCA) / MSWDO, Obando Municipal Compound',
    requirements: [
      'Proof of Age 60+ (Birth Certificate or valid Gov ID)',
      'Barangay Certificate of Residency in Obando (at least 6 months)',
      'Two (2) 1x1 ID pictures',
    ],
    lastVerified: '2026 Q1',
  },
  {
    id: 'mswdo-pwd-id',
    title: 'Person with Disability (PWD) ID Application Form',
    titleFil: 'Aplikasyon para sa PWD ID Card',
    office: 'MSWDO',
    category: 'Social Assistance',
    description:
      'Official municipal registration for citizens with physical, visual, hearing, psychosocial, or intellectual disabilities.',
    status: 'In-Office Form',
    fileType: 'Physical Form',
    location: 'MSWDO Office, Obando Municipal Hall Compound',
    requirements: [
      'Medical Certificate indicating specific disability from licensed physician / RHU Doctor',
      'Barangay Certificate of Residency',
      'Two (2) 1x1 recent ID photos',
    ],
    lastVerified: '2026 Q1',
  },

  // MCTFRB Transport
  {
    id: 'mctfrb-tricycle-franchise',
    title: 'Tricycle / Pedicab Franchise Application & Renewal Form',
    titleFil: 'Aplikasyon para sa Prangkisa ng Tricycle at Pedicab',
    office: 'Transport (MCTFRB)',
    category: 'Transport',
    description:
      'Required registration for TODA/PODA motorized tricycle and pedicab operators providing public transport in Obando.',
    status: 'In-Office Form',
    fileType: 'Physical Form',
    location: 'MCTFRB Desk, Engineering/Legal Section, Obando Municipal Hall',
    requirements: [
      'TODA / PODA Board Certification of membership',
      'LTO Certificate of Registration (CR) and Official Receipt (OR)',
      "Professional Driver's License",
      'Barangay Clearance & Police Clearance of driver and operator',
      'Motor vehicle roadworthiness inspection certificate',
    ],
    lastVerified: '2026 Q1',
  },
];
