import React from 'react';
import { ShieldAlert, Phone, Flame, HeartPulse } from 'lucide-react';

interface HotlineItem {
  label: string;
  number: string;
  icon: React.ComponentType<{ className?: string }>;
}

const OBANDO_HOTLINES: HotlineItem[] = [
  { label: 'MDRRMO Rescue', number: '(02) 8281-5816', icon: ShieldAlert },
  { label: 'Obando PNP', number: '(02) 8292-2043', icon: Phone },
  { label: 'Fire (BFP)', number: '(02) 8299-7996', icon: Flame },
  { label: 'RHU Health', number: '(02) 8332-2744', icon: HeartPulse },
];

export const EmergencyBar: React.FC = () => {
  return (
    <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4 border-b border-slate-800">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 font-semibold text-accent-400">
          <ShieldAlert className="h-3.5 w-3.5 text-accent-400" />
          <span>Obando Hotlines:</span>
        </div>
        <div className="flex flex-wrap items-center gap-3 sm:gap-5">
          {OBANDO_HOTLINES.map(item => {
            const Icon = item.icon;
            const tel = item.number.replace(/[^0-9]/g, '');
            return (
              <a
                key={item.label}
                href={`tel:${tel}`}
                className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
                title={`Call ${item.label}`}
              >
                <Icon className="h-3 w-3 text-slate-400" />
                <span className="text-slate-400 hidden md:inline">
                  {item.label}:
                </span>
                <span className="font-mono font-medium">{item.number}</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EmergencyBar;
