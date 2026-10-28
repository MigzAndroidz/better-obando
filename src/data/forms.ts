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
  // Verified Audit & Statutory Metadata (Phase A)
  verificationStatus:
    | 'VERIFIED'
    | 'NEEDS CONFIRMATION'
    | 'OUTDATED'
    | 'BROKEN SOURCE'
    | 'CONFLICTING SOURCES'
    | 'NOT YET VERIFIED';
  officialFee?: string;
  processingTime?: string;
  legalBasis?: string;
  sourceUrl?: string;
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
    status: 'Downloadable',
    fileType: 'External Link',
    fileUrl: 'https://obando.gov.ph/application-forms/',
    sourceUrl: 'https://obando.gov.ph/application-forms/',
    location: 'BPLO Desk, Ground Floor, Obando Municipal Hall, Brgy. Paliwas',
    requirements: [
      'DTI Certificate (Sole Prop) or SEC Registration (Corp/Partnership)',
      'Barangay Business Clearance from host barangay',
      'Contract of Lease or Proof of Property Ownership',
      'Locational / Zoning Clearance',
      'Occupancy Permit and Sanitary Permit',
      'Fire Safety Inspection Certificate (BFP Obando)',
    ],
    legalBasis:
      'RA 11032; RA 7160; Municipal Ordinance No. 11-33 Series of 2024',
    processingTime: '1 to 3 working days (Simple Transaction)',
    officialFee:
      'Variable based on capital investment and municipal tax schedule',
    verificationStatus: 'VERIFIED',
    lastVerified: 'March 2026 - Obando Application Forms Portal',
  },
  {
    id: 'bplo-renewal',
    title: 'Obando Business Permit Renewal Application Form',
    titleFil: 'Aplikasyon para sa Pagpapanibago ng Business Permit',
    office: 'BPLO',
    category: 'Business & Permits',
    description:
      'Mandatory annual renewal form filed during the Business One-Stop Shop (BOSS) period every January.',
    status: 'Downloadable',
    fileType: 'External Link',
    fileUrl: 'https://obando.gov.ph/application-forms/',
    sourceUrl: 'https://obando.gov.ph/application-forms/',
    location:
      'BPLO Counter / BOSS Center, Obando Municipal Hall, Brgy. Paliwas',
    requirements: [
      "Previous year Mayor's Permit and Official Receipt",
      'Latest Barangay Business Clearance',
      'Annual BIR Sales Declaration / Financial Statements',
      'Updated Sanitary Permit and Fire Safety Certificate',
    ],
    legalBasis: 'RA 11032; RA 7160; Obando Municipal Revenue Code',
    processingTime: '1 to 2 working days during January BOSS period',
    officialFee:
      'Variable based on annual gross receipts and local business tax',
    verificationStatus: 'VERIFIED',
    lastVerified: 'March 2026 - Obando Application Forms Portal & BOSS Center',
  },
  {
    id: 'bplo-occupational',
    title: 'Working / Occupational Permit Application Form',
    titleFil: 'Aplikasyon para sa Mayors Working/Occupational Permit',
    office: 'BPLO',
    category: 'Business & Permits',
    description:
      'Required for all personnel, food handlers, cashiers, and workers employed in commercial establishments across Obando.',
    status: 'Downloadable',
    fileType: 'External Link',
    fileUrl: 'https://obando.gov.ph/application-forms/',
    sourceUrl: 'https://obando.gov.ph/application-forms/',
    location: 'BPLO Window 2, Obando Municipal Hall',
    requirements: [
      'Barangay Clearance for Employment',
      'Police Clearance (Obando PNP)',
      'Medical Certificate & Stool/X-ray from Obando RHU',
      '1x1 ID pictures (2 copies)',
    ],
    legalBasis:
      'PD 856 (Sanitation Code of the Philippines); Obando Revenue Code',
    processingTime: '1 working day',
    officialFee:
      'Standard permit & health inspection fee (exact fee to be re-assessed at Treasury)',
    verificationStatus: 'NEEDS CONFIRMATION',
    lastVerified:
      'March 2026 - Form on Portal; Local Fee Schedule Needs Treasury Confirmation',
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
    status: 'Downloadable',
    fileType: 'External Link',
    fileUrl: 'https://obando.gov.ph/application-forms/',
    sourceUrl: 'https://obando.gov.ph/application-forms/',
    location:
      'Office of the Municipal Civil Registrar, 2nd Floor, Municipal Hall, Brgy. Paliwas',
    requirements: [
      'Valid Government-issued ID of document owner or requesting parent',
      "Specific registry number or child's complete name, date of birth, and parents' names",
      'Authorization letter if requesting on behalf of an adult',
    ],
    legalBasis: 'Act No. 3753 (Civil Registry Law); RA 7160',
    processingTime: 'Same-day to 1 working day',
    officialFee: '₱100 - ₱150 per municipal certified true copy',
    verificationStatus: 'VERIFIED',
    lastVerified:
      'March 2026 - Obando Application Forms Portal (Civil Registry)',
  },
  {
    id: 'mcr-marriage-license',
    title: 'Application for Marriage License & Certificate',
    titleFil: 'Aplikasyon para sa Lisensya sa Kasal',
    office: 'Civil Registrar',
    category: 'Civil Documents',
    description:
      'Official filing for contracting parties residing in Obando planning a civil or religious church marriage.',
    status: 'Downloadable',
    fileType: 'External Link',
    fileUrl: 'https://obando.gov.ph/application-forms/',
    sourceUrl: 'https://obando.gov.ph/application-forms/',
    location: 'Office of the Municipal Civil Registrar, Brgy. Paliwas',
    requirements: [
      'PSA Birth Certificates of both applicants',
      'PSA Certificate of No Marriage Record (CENOMAR)',
      'Barangay Certificate of Residency',
      'Pre-Marriage Counseling Certificate (Obando RHU/MSWDO)',
      'Parental Consent (for applicants aged 18-21) or Advice (aged 22-25)',
    ],
    legalBasis:
      'Executive Order No. 209 (Family Code of the Philippines); RA 11032',
    processingTime:
      '10 consecutive days statutory posting period + 1 working day',
    officialFee:
      '₱300 - ₱500 inclusive of application, filing, and counseling fees',
    verificationStatus: 'VERIFIED',
    lastVerified: 'March 2026 - Obando Application Forms Portal (LCR Section)',
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
    status: 'Downloadable',
    fileType: 'External Link',
    fileUrl: 'https://obando.gov.ph/application-forms/',
    sourceUrl: 'https://obando.gov.ph/application-forms/',
    location:
      'Office of the Building Official (OBO) / Engineering Dept, Municipal Hall, Brgy. Paliwas',
    requirements: [
      '5 sets of Architectural, Structural, Electrical, and Sanitary plans signed and sealed by licensed engineers/architect',
      'Proof of Lot Ownership (TCT / Deed of Sale / Tax Declaration)',
      'Latest Real Property Tax Receipt (Amilyar)',
      'Locational Clearance from Municipal Planning & Development Office (MPDO)',
      'Barangay Construction Clearance',
    ],
    legalBasis:
      'Presidential Decree No. 1096 (National Building Code of the Philippines)',
    processingTime: '5 to 7 working days (Complex Technical Evaluation)',
    officialFee:
      'Graduated fee schedule based on NBCP floor area and construction classification',
    verificationStatus: 'NEEDS CONFIRMATION',
    lastVerified:
      'March 2026 - Form on Portal; Local Assessment Rates Need OBO Confirmation',
  },
  {
    id: 'obo-occupancy-permit',
    title: 'Certificate of Occupancy Application',
    titleFil: 'Aplikasyon para sa Certificate of Occupancy',
    office: 'Building Official (OBO)',
    category: 'Construction & Zoning',
    description:
      'Final certification proving that a finished building complies with the National Building Code before electrical energization and occupancy.',
    status: 'Downloadable',
    fileType: 'External Link',
    fileUrl: 'https://obando.gov.ph/application-forms/',
    sourceUrl: 'https://obando.gov.ph/application-forms/',
    location: 'Engineering Department, Municipal Hall, Brgy. Paliwas',
    requirements: [
      'Approved Building Permit & Plans',
      'As-Built Plans signed and sealed',
      'Certificate of Completion from supervising engineer',
      'Fire Safety Inspection Certificate (BFP Obando)',
    ],
    legalBasis: 'PD 1096 Sec. 309; RA 9514 (Fire Code of the Philippines)',
    processingTime: '3 to 5 working days post-joint inspection',
    officialFee: 'Assessment fee based on NBCP Schedule',
    verificationStatus: 'NEEDS CONFIRMATION',
    lastVerified:
      'March 2026 - Form on Portal; Local Inspection Rates Need OBO Confirmation',
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
    sourceUrl: 'https://obando.gov.ph/',
    location: 'Rural Health Unit (RHU), Paliwas Compound, Obando, Bulacan',
    requirements: [
      'Health Certificates of all food handlers & staff',
      'Water bacteriological test result (for eateries/drinking refilling stations)',
      'Pest control certification',
      'Inspection report from Obando Sanitary Inspector',
    ],
    legalBasis:
      'Presidential Decree No. 856 (Code on Sanitation of the Philippines)',
    processingTime: '1 to 2 working days following sanitary inspection',
    officialFee: '₱100 - ₱300 (Scaled by establishment classification)',
    verificationStatus: 'VERIFIED',
    lastVerified: 'March 2026 - Obando RHU Guidelines & PD 856',
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
    sourceUrl: 'https://obando.gov.ph/',
    location:
      'Treasury Windows 1-3, Ground Floor, Municipal Hall, Brgy. Paliwas',
    requirements: [
      'Government ID with Obando address or Barangay Certificate',
      'Declaration of Gross Annual Income / Pay slip / BIR ITR',
    ],
    legalBasis: 'RA 7160 Sec. 156-164 (Local Government Code of 1991)',
    processingTime: '10 to 15 minutes (Immediate counter issuance)',
    officialFee:
      '₱5.00 basic tax + ₱1.00 per ₱1,000 of gross annual income/receipts',
    verificationStatus: 'VERIFIED',
    lastVerified: 'March 2026 - RA 7160 Statutory Formula & Treasury Counter',
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
    sourceUrl: 'https://obando.gov.ph/',
    location: 'Treasury Assessment Counter, Municipal Hall, Brgy. Paliwas',
    requirements: [
      'Previous year Official Receipt of RPT payment',
      'Tax Declaration Number or Land Title (TCT)',
    ],
    legalBasis: 'Republic Act No. 7160 Title II (Real Property Taxation)',
    processingTime: '15 to 30 minutes (Assessment slip & payment)',
    officialFee:
      'Assessed local real property tax rate based on assessed property valuation',
    verificationStatus: 'VERIFIED',
    lastVerified: 'March 2026 - Local Government Code & Municipal Treasury',
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
    status: 'Downloadable',
    fileType: 'External Link',
    fileUrl: 'https://obando.gov.ph/application-forms/',
    sourceUrl: 'https://obando.gov.ph/application-forms/',
    location:
      'Office of Senior Citizens Affairs (OSCA) / MSWDO, Obando Municipal Compound',
    requirements: [
      'Proof of Age 60+ (Birth Certificate or valid Gov ID)',
      'Barangay Certificate of Residency in Obando (at least 6 months)',
      'Two (2) 1x1 ID pictures',
    ],
    legalBasis: 'Republic Act No. 9994 (Expanded Senior Citizens Act of 2010)',
    processingTime: '1 to 3 working days',
    officialFee: 'Free of charge (Libre - Mandated by statutory law)',
    verificationStatus: 'VERIFIED',
    lastVerified:
      'March 2026 - Obando Application Forms Portal (OSCA Intake Form)',
  },
  {
    id: 'mswdo-pwd-id',
    title: 'Person with Disability (PWD) ID Application Form',
    titleFil: 'Aplikasyon para sa PWD ID Card',
    office: 'MSWDO',
    category: 'Social Assistance',
    description:
      'Official municipal registration for citizens with physical, visual, hearing, psychosocial, or intellectual disabilities.',
    status: 'National Agency Link',
    fileType: 'External Link',
    fileUrl: 'https://prpwd.doh.gov.ph/',
    sourceUrl: 'https://prpwd.doh.gov.ph/',
    location: 'MSWDO Office, Obando Municipal Hall Compound',
    requirements: [
      'Medical Certificate indicating specific disability from licensed physician / RHU Doctor',
      'Barangay Certificate of Residency',
      'Two (2) 1x1 recent ID photos',
    ],
    legalBasis:
      'Republic Act No. 10754; Republic Act No. 7277 (Magna Carta for Disabled Persons)',
    processingTime: '1 to 3 working days',
    officialFee: 'Free of charge (Libre)',
    verificationStatus: 'VERIFIED',
    lastVerified: 'March 2026 - DOH PRPWD Registry & Obando MSWDO Desk',
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
    status: 'Downloadable',
    fileType: 'External Link',
    fileUrl: 'https://obando.gov.ph/application-forms/',
    sourceUrl: 'https://obando.gov.ph/application-forms/',
    location: 'MCTFRB Desk, Engineering/Legal Section, Obando Municipal Hall',
    requirements: [
      'TODA / PODA Board Certification of membership',
      'LTO Certificate of Registration (CR) and Official Receipt (OR)',
      "Professional Driver's License",
      'Barangay Clearance & Police Clearance of driver and operator',
      'Motor vehicle roadworthiness inspection certificate',
    ],
    legalBasis: 'RA 7160 Sec. 447; Municipal Ordinance on Tricycle Regulation',
    processingTime: '3 to 7 working days (Includes roadworthiness inspection)',
    officialFee: '₱300 - ₱500 annual regulatory franchise fee',
    verificationStatus: 'NEEDS CONFIRMATION',
    lastVerified:
      'March 2026 - Forms Portal; Local Franchise Quota Needs MCTFRB Confirmation',
  },
];
