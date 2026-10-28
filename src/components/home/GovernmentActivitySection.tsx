import Section from '../ui/Section';
import * as LucideIcons from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import { Card, CardContent } from '@bettergov/kapwa/card';
import { Link } from 'react-router';
import { ArrowRight, Landmark } from 'lucide-react';

import { governmentCategories } from '../../data/yamlLoader';

interface Subcategory {
  name: string;
  slug: string;
}

interface Category {
  category: string;
  slug: string;
  subcategories: Subcategory[];
  description: string;
  icon: string;
}

interface GovernmentActivitySectionProps {
  title?: string;
  description?: string;
}

export default function GovernmentActivitySection({
  title,
  description,
}: GovernmentActivitySectionProps = {}) {
  const { t } = useTranslation();

  const getIcon = (category: string) => {
    const IconComponent = LucideIcons[
      category as keyof typeof LucideIcons
    ] as React.ComponentType<{ className?: string }>;
    return IconComponent ? <IconComponent className="h-5 w-5" /> : null;
  };

  const displayedCategories = governmentCategories.categories as Category[];

  return (
    <Section
      id="government"
      className="py-10 bg-slate-50/60 border-t border-gray-100"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 mb-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-primary-700 bg-primary-50 px-2.5 py-1 rounded-md border border-primary-100">
            Municipal Government
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2">
            {title || t('governmentActivity.title')}
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-2xl leading-relaxed">
            {description || t('governmentActivity.description')}
          </p>
        </div>

        <Link
          to="/government/departments/executive"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white hover:bg-gray-50 text-gray-800 text-xs font-bold transition-colors border border-gray-200 shrink-0 shadow-sm"
        >
          <Landmark className="h-4 w-4 text-primary-600" />
          Mayor & Council Executive Roster →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {displayedCategories.map(category => (
          <Card
            key={category.slug}
            hoverable
            className="border border-gray-200 hover:border-primary-400 transition-all bg-white shadow-sm flex flex-col h-full"
          >
            <Link
              to={`/government/${category.slug}`}
              className="flex flex-col h-full p-6 text-left group"
            >
              <CardContent className="p-0 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary-50 text-primary-600 p-2.5 rounded-xl group-hover:bg-primary-600 group-hover:text-white transition-colors shrink-0">
                    {getIcon(category.icon)}
                  </div>
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-primary-700 transition-colors">
                    {category.category}
                  </h3>
                </div>

                <p className="text-xs text-gray-600 leading-relaxed flex-grow line-clamp-3 mb-4">
                  {category.description}
                </p>

                <div className="pt-3 border-t border-gray-100 mt-auto flex items-center justify-between text-xs font-semibold text-primary-600 group-hover:text-primary-700">
                  <span>View Details & Offices</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </Section>
  );
}
