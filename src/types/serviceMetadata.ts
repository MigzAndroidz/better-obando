export type VerificationStatus =
  | 'VERIFIED'
  | 'NEEDS CONFIRMATION'
  | 'OUTDATED'
  | 'BROKEN SOURCE'
  | 'CONFLICTING SOURCES'
  | 'NOT YET VERIFIED';

export type ArtaTransactionType =
  'Simple (≤ 3 Days)' | 'Complex (≤ 7 Days)' | 'Highly Technical (≤ 20 Days)';

export interface ServiceMetadata {
  officialTitle?: string;
  responsibleOffice: string;
  officeLocation: string;
  hotline?: string;
  transactionType: ArtaTransactionType;
  processingTime: string;
  officialFee: string;
  legalBasis: string;
  sourceUrl?: string;
  sourceName?: string;
  verificationStatus: VerificationStatus;
  lastVerified: string;
  charterSection?: string;
}
