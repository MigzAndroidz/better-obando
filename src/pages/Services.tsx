import Section from '../components/ui/Section';
import { useParams, useSearchParams, Link } from 'react-router';
import { Heading } from '../components/ui/Heading';
import { Text } from '../components/ui/Text';
import {
  serviceCategories,
  getCategorySubcategories,
  type Subcategory,
  type CategoryIndex,
} from '../data/yamlLoader';
import * as LucideIcons from 'lucide-react';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import SEO from '../components/SEO';
import { Card, CardContent } from '@bettergov/kapwa/card';
import { Banner } from '@bettergov/kapwa/banner';
import { useState, useEffect } from 'react';
import { Search, ArrowRight, ArrowLeft } from 'lucide-react';

interface Category {
  category: string;
  slug: string;
  description: string;
  icon: string;
}

const Services: React.FC = () => {
  const { category } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [searchFilter, setSearchFilter] = useState(initialQuery);

  const [categoryIndex, setCategoryIndex] = useState<CategoryIndex>({
    layout: 'list',
    pages: [],
  });
  const subcategories: Subcategory[] = categoryIndex.pages;

  const getCategory = () => {
    return (serviceCategories.categories as Category[]).find(
      c => c.slug === category
    );
  };

  const categoryData = getCategory();
  const Icon = categoryData
    ? (LucideIcons[
        categoryData.icon as keyof typeof LucideIcons
      ] as React.ComponentType<{ className?: string }>)
    : null;

  useEffect(() => {
    let active = true;
    if (category && categoryData) {
      getCategorySubcategories(category)
        .then(data => {
          if (active) setCategoryIndex(data);
        })
        .catch(console.error);
    }
    return () => {
      active = false;
    };
  }, [category, categoryData]);

  const allCategories = serviceCategories.categories as Category[];

  // Filter categories when in root /services
  const filteredCategories = allCategories.filter(cat => {
    if (!searchFilter.trim()) return true;
    const q = searchFilter.toLowerCase();
    return (
      cat.category.toLowerCase().includes(q) ||
      cat.description.toLowerCase().includes(q)
    );
  });

  const getIcon = (iconName: string) => {
    const IconComponent = LucideIcons[
      iconName as keyof typeof LucideIcons
    ] as React.ComponentType<{ className?: string }>;
    return IconComponent ? <IconComponent className="h-6 w-6" /> : null;
  };

  // View: Root Services Catalog (/services)
  if (!category) {
    return (
      <>
        <SEO
          title="Government Services Directory - Better Obando"
          description="Browse public services provided by the Municipality of Obando, Bulacan. Find requirements, responsible offices, and filing procedures for business permits, civil documents, and social welfare."
          keywords="Obando services, Obando business permit, civil registry obando, obando health center, amilyar obando"
        />
        <Section className="py-10">
          <Breadcrumbs className="mb-6" />

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary-700 bg-primary-50 px-2.5 py-1 rounded-md border border-primary-100">
                Frontline Directory
              </span>
              <Heading
                level={1}
                className="text-3xl font-extrabold text-gray-900 mt-2"
              >
                Municipal Services Directory
              </Heading>
              <Text className="text-gray-600 max-w-2xl mt-1 text-base">
                Find requirements, procedures, and responsible offices for
                public services provided by the Municipality of Obando.
              </Text>
            </div>

            {/* In-page Search Bar */}
            <div className="relative w-full md:w-80 shrink-0">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                value={searchFilter}
                onChange={e => {
                  setSearchFilter(e.target.value);
                  setSearchParams(e.target.value ? { q: e.target.value } : {});
                }}
                placeholder="Search services & permits..."
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 shadow-sm"
              />
            </div>
          </div>

          {searchFilter && (
            <div className="mb-6 flex items-center justify-between text-xs text-gray-600 bg-primary-50/50 p-3 rounded-lg border border-primary-100">
              <span>
                Filtering services matching &ldquo;
                <strong>{searchFilter}</strong>&rdquo; (
                {filteredCategories.length} categories)
              </span>
              <button
                onClick={() => {
                  setSearchFilter('');
                  setSearchParams({});
                }}
                className="text-primary-700 font-bold hover:underline"
              >
                Clear Search
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredCategories.map(cat => (
              <Card
                key={cat.slug}
                hoverable
                className="border border-gray-200 hover:border-primary-400 transition-all bg-white shadow-sm flex flex-col h-full"
              >
                <Link
                  to={`/services/${cat.slug}`}
                  className="flex flex-col h-full p-6 text-left group"
                >
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary-50 text-primary-600 p-2.5 rounded-xl group-hover:bg-primary-600 group-hover:text-white transition-colors shrink-0">
                        {getIcon(cat.icon)}
                      </div>
                      <h3 className="text-base font-bold text-gray-900 group-hover:text-primary-700 transition-colors">
                        {cat.category}
                      </h3>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed flex-grow line-clamp-3 mb-4">
                      {cat.description}
                    </p>
                    <div className="pt-3 border-t border-gray-100 mt-auto flex items-center justify-between text-xs font-semibold text-primary-600 group-hover:text-primary-700">
                      <span>View Category Services</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>

          {filteredCategories.length === 0 && (
            <div className="text-center py-16 bg-white rounded-xl border border-gray-200 p-6">
              <Search className="h-10 w-10 text-gray-300 mx-auto mb-3" />
              <h3 className="text-base font-bold text-gray-900 mb-1">
                No matching service categories found
              </h3>
              <p className="text-xs text-gray-500 max-w-sm mx-auto mb-4">
                We couldn't find any category matching &ldquo;{searchFilter}
                &rdquo;. Try another keyword or browse all categories.
              </p>
              <button
                onClick={() => {
                  setSearchFilter('');
                  setSearchParams({});
                }}
                className="px-4 py-2 bg-primary-600 text-white rounded-lg text-xs font-bold hover:bg-primary-700 transition-colors"
              >
                Reset Filter
              </button>
            </div>
          )}
        </Section>
      </>
    );
  }

  // View: Category Not Found
  if (!categoryData) {
    return (
      <Section className="py-12">
        <Breadcrumbs className="mb-6" />
        <Banner
          type="error"
          title="Service Category Not Found"
          description="The municipal service category you are looking for does not exist."
          icon
        />
        <div className="mt-6">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm"
          >
            <ArrowLeft className="h-4 w-4" /> Back to All Services
          </Link>
        </div>
      </Section>
    );
  }

  // View: Specific Category Subpages (/services/:category)
  return (
    <>
      <SEO
        title={`${categoryData.category} - Better Obando`}
        description={categoryData.description}
        keywords={`${categoryData.category}, Obando government services, public services, Bulacan`}
      />
      <Section className="py-10">
        <Breadcrumbs className="mb-6" />

        <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm mb-8">
          <div className="flex items-center gap-3 mb-3">
            {Icon && (
              <div className="p-2.5 rounded-xl bg-primary-50 text-primary-600">
                <Icon className="h-6 w-6" />
              </div>
            )}
            <div>
              <span className="text-[11px] font-bold text-primary-700 uppercase tracking-wider">
                Service Category
              </span>
              <Heading
                level={1}
                className="text-2xl sm:text-3xl font-extrabold text-gray-900"
              >
                {categoryData.category}
              </Heading>
            </div>
          </div>
          <Text className="text-gray-600 text-sm max-w-3xl leading-relaxed">
            {categoryData.description}
          </Text>
        </div>

        {categoryIndex.title && (
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            {categoryIndex.title}
          </h2>
        )}
        {categoryIndex.description && (
          <p className="text-xs text-gray-600 mb-6">
            {categoryIndex.description}
          </p>
        )}

        {subcategories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {subcategories.map(sub => (
              <Card
                key={sub.slug}
                hoverable
                className="border border-gray-200 bg-white hover:border-primary-400 transition-all shadow-sm"
              >
                <Link
                  to={`/services/${category}/${sub.slug}`}
                  className="block p-5 sm:p-6 text-left group"
                >
                  <CardContent className="p-0">
                    <h3 className="text-base font-bold text-gray-900 group-hover:text-primary-700 transition-colors mb-2">
                      {sub.name}
                    </h3>
                    {sub.description && (
                      <p className="text-xs text-gray-600 leading-relaxed mb-3">
                        {sub.description}
                      </p>
                    )}
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary-600 group-hover:text-primary-700">
                      Read requirements & procedures{' '}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        ) : (
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center text-gray-600 text-sm">
            <p className="font-semibold text-gray-800 mb-1">
              Detailed digital guides for this section are currently being
              verified against the official Obando Citizen's Charter.
            </p>
            <p className="text-xs text-gray-500 mb-4">
              Please visit the designated frontline desk at the Obando Municipal
              Hall in Brgy. Paliwas or call the central trunkline (02)
              8292-2043.
            </p>
            <Link
              to="/forms"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary-600 text-white rounded-lg text-xs font-bold hover:bg-primary-700 transition-colors"
            >
              Browse Application Forms Hub
            </Link>
          </div>
        )}

        <div className="mt-8 pt-6 border-t border-gray-200">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-xs"
          >
            <ArrowLeft className="h-4 w-4" /> Back to All Service Categories
          </Link>
        </div>
      </Section>
    </>
  );
};

export default Services;
