import React from 'react';
import { ShieldAlert, Phone, Flame, HeartPulse } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface HotlineItem {
  key: 'mdrrmo' | 'pnp' | 'bfp' | 'rhu';
  fallbackLabel: string;
  number: string;
  icon: React.ComponentType<{ className?: string }>;
}

const OBANDO_HOTLINES: HotlineItem[] = [
  {
    key: 'mdrrmo',
    fallbackLabel: 'MDRRMO Rescue',
    number: '(02) 8281-5816',
    icon: ShieldAlert,
  },
  {
    key: 'pnp',
    fallbackLabel: 'Obando Police',
    number: '(02) 8292-2043',
    icon: Phone,
  },
  {
    key: 'bfp',
    fallbackLabel: 'Fire (BFP)',
    number: '(02) 8299-7996',
    icon: Flame,
  },
  {
    key: 'rhu',
    fallbackLabel: 'RHU Health',
    number: '(02) 8332-2744',
    icon: HeartPulse,
  },
];

export const EmergencyBar: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <aside
      aria-label="Emergency Hotlines"
      className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4 border-b border-slate-800"
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 font-semibold text-accent-400">
          <ShieldAlert className="h-3.5 w-3.5 text-accent-400" />
          <span>{t('emergency.title', 'Obando Hotlines:')}</span>
        </div>
        <div className="flex flex-wrap items-center gap-3 sm:gap-5">
          {OBANDO_HOTLINES.map(item => {
            const Icon = item.icon;
            const label = t(`emergency.${item.key}`, item.fallbackLabel);
            const tel = item.number.replace(/[^0-9]/g, '');
            return (
              <a
                key={item.key}
                href={`tel:${tel}`}
                className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-accent-400 rounded"
                title={`Call ${label} at ${item.number}`}
              >
                <Icon className="h-3 w-3 text-slate-400" />
                <span className="text-slate-400 hidden md:inline">
                  {label}:
                </span>
                <span className="font-mono font-medium">{item.number}</span>
              </a>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default EmergencyBar;
