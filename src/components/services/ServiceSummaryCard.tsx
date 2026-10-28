import React from 'react';
import type { ServiceMetadata } from '../../types/serviceMetadata';
import {
  Building2,
  Clock,
  Coins,
  Scale,
  CheckCircle,
  AlertCircle,
  ExternalLink,
  Phone,
  MapPin,
  FileCheck,
} from 'lucide-react';

interface ServiceSummaryCardProps {
  metadata: ServiceMetadata;
}

export const ServiceSummaryCard: React.FC<ServiceSummaryCardProps> = ({
  metadata,
}) => {
  const isVerified = metadata.verificationStatus === 'VERIFIED';

  return (
    <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-5 sm:p-7 shadow-sm transition-all hover:border-primary-300">
      {/* Top Header Row: Category / ARTA Label and Verification Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-gray-100">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-primary-50 text-primary-700">
            <FileCheck className="h-5 w-5" />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-primary-700 block">
              Citizen&apos;s Charter Specification
            </span>
            <h3 className="text-sm font-bold text-gray-900">
              {metadata.officialTitle || 'Official Government Service Summary'}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${
              isVerified
                ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                : 'bg-amber-50 text-amber-800 border-amber-200'
            }`}
          >
            {isVerified ? (
              <CheckCircle className="h-3.5 w-3.5 text-emerald-600" />
            ) : (
              <AlertCircle className="h-3.5 w-3.5 text-amber-600" />
            )}
            {metadata.verificationStatus}
          </span>
          {metadata.charterSection && (
            <span className="text-xs font-mono text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md hidden sm:inline-block">
              Sec: {metadata.charterSection}
            </span>
          )}
        </div>
      </div>

      {/* 4-Box Key Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-5">
        {/* Office & Location */}
        <div className="rounded-xl bg-slate-50/70 p-4 border border-slate-100 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
              <Building2 className="h-4 w-4 text-primary-600 shrink-0" />
              Responsible Office
            </div>
            <p className="text-sm font-bold text-gray-900 leading-snug">
              {metadata.responsibleOffice}
            </p>
          </div>
          <div className="mt-3 pt-2.5 border-t border-slate-200/60 text-xs text-gray-600 space-y-1">
            <div className="flex items-start gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-gray-400 shrink-0 mt-0.5" />
              <span className="line-clamp-2">{metadata.officeLocation}</span>
            </div>
            {metadata.hotline && (
              <div className="flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5 text-primary-600 shrink-0" />
                <span className="font-mono text-[11px] font-medium text-primary-700">
                  {metadata.hotline}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Statutory Processing Time */}
        <div className="rounded-xl bg-slate-50/70 p-4 border border-slate-100 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
              <Clock className="h-4 w-4 text-primary-600 shrink-0" />
              Statutory Turnaround
            </div>
            <p className="text-sm font-bold text-gray-900 leading-snug">
              {metadata.processingTime}
            </p>
          </div>
          <div className="mt-3 pt-2.5 border-t border-slate-200/60">
            <span className="inline-block text-[11px] font-semibold text-primary-700 bg-primary-100/70 px-2 py-0.5 rounded-md">
              {metadata.transactionType}
            </span>
          </div>
        </div>

        {/* Official Fee */}
        <div className="rounded-xl bg-slate-50/70 p-4 border border-slate-100 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
              <Coins className="h-4 w-4 text-amber-600 shrink-0" />
              Official Fee
            </div>
            <p className="text-sm font-bold text-gray-900 leading-snug">
              {metadata.officialFee}
            </p>
          </div>
          <div className="mt-3 pt-2.5 border-t border-slate-200/60 text-[11px] text-gray-500">
            Official receipt (OR) issued at Treasury
          </div>
        </div>

        {/* Legal & Regulatory Basis */}
        <div className="rounded-xl bg-slate-50/70 p-4 border border-slate-100 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
              <Scale className="h-4 w-4 text-primary-600 shrink-0" />
              Legal Basis
            </div>
            <p className="text-xs font-medium text-gray-800 leading-relaxed line-clamp-3">
              {metadata.legalBasis}
            </p>
          </div>
          {metadata.sourceUrl && (
            <div className="mt-3 pt-2.5 border-t border-slate-200/60">
              <a
                href={metadata.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-primary-600 hover:text-primary-800 hover:underline"
              >
                <span>{metadata.sourceName || 'Official Source Portal'}</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Footer Audit Trail Notice */}
      <div className="pt-3 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-[11px] text-gray-500">
        <div>
          Verified against municipal records:{' '}
          <strong className="text-gray-700">{metadata.lastVerified}</strong>
        </div>
        <div className="text-gray-400">
          Governed by Republic Act No. 11032 (Ease of Doing Business Act)
        </div>
      </div>
    </div>
  );
};
