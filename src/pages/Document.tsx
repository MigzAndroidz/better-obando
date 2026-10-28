import Section from '../components/ui/Section';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import { Heading } from '../components/ui/Heading';
import { Text } from '../components/ui/Text';
import { Banner } from '@bettergov/kapwa/banner';
import { useParams, Link } from 'react-router';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {
  loadMarkdownContent,
  type MarkdownContent,
} from '../lib/markdownLoader';
import { createMarkdownComponents } from '../lib/markdownComponents';
import { Card, CardContent, CardHeader } from '@bettergov/kapwa/card';
import { getTypographyTheme } from '../lib/typographyThemes';
import {
  serviceCategories,
  governmentCategories,
  getCategorySubcategories,
  isNestedCategory,
  type Subcategory,
  type CategoryIndex,
} from '../data/yamlLoader';
import SEO from '../components/SEO';
import { Printer, ArrowLeft } from 'lucide-react';
import { ServiceSummaryCard } from '../components/services/ServiceSummaryCard';
import type { ServiceMetadata } from '../types/serviceMetadata';

interface DocumentProps {
  theme?: string;
  categoryType?: 'service' | 'government';
}

export default function Document({
  theme: initialTheme = 'default',
  categoryType,
}: DocumentProps) {
  const { documentSlug, category } = useParams();
  const [markdownContent, setMarkdownContent] =
    useState<MarkdownContent | null>(null);
  const [nestedIndex, setNestedIndex] = useState<CategoryIndex | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const markdownComponents = createMarkdownComponents(
    getTypographyTheme(initialTheme)
  );

  const [breadcrumbs, setBreadcrumbs] = useState([
    { label: 'Home', href: '/' },
  ]);

  useEffect(() => {
    let active = true;

    if (!documentSlug || !category || !categoryType) {
      if (active) {
        setError('No document specified');
        setLoading(false);
      }
      return;
    }

    const loadContent = async () => {
      try {
        const isGovernment = categoryType === 'government';
        const categories = isGovernment
          ? governmentCategories.categories
          : serviceCategories.categories;
        const sectionLabel = isGovernment ? 'Government' : 'Services';
        const sectionHref = isGovernment ? '/government' : '/services';
        const categoryData = categories.find(c => c.slug === category);

        // If the slug maps to its own index, render it as a nested listing
        if (isNestedCategory(documentSlug)) {
          const index = await getCategorySubcategories(documentSlug);
          if (active) {
            setNestedIndex(index);
            setBreadcrumbs([
              { label: 'Home', href: '/' },
              { label: sectionLabel, href: sectionHref },
              {
                label: categoryData?.category ?? category,
                href: `${sectionHref}/${category}`,
              },
              {
                label: documentSlug,
                href: `${sectionHref}/${category}/${documentSlug}`,
              },
            ]);
            setLoading(false);
          }
          return;
        }

        const content = await loadMarkdownContent(
          documentSlug,
          category,
          categoryType
        );

        if (active) {
          setMarkdownContent(content);
          setBreadcrumbs([
            { label: 'Home', href: '/' },
            { label: sectionLabel, href: sectionHref },
            {
              label: categoryData?.category ?? category,
              href: `${sectionHref}/${category}`,
            },
            {
              label: content.title ?? documentSlug,
              href: `${sectionHref}/${category}/${documentSlug}`,
            },
          ]);
          setLoading(false);
        }
      } catch (err) {
        if (active) {
          setError(
            err instanceof Error ? err.message : 'Failed to load document'
          );
          setLoading(false);
        }
      }
    };

    loadContent();

    return () => {
      active = false;
    };
  }, [documentSlug, category, categoryType]);

  if (loading) {
    return (
      <Section className="py-12">
        <Banner type="info" description="Loading document guidelines..." />
      </Section>
    );
  }

  if (error) {
    return (
      <Section className="py-12">
        <Breadcrumbs className="mb-6" items={breadcrumbs} />
        <Banner
          type="error"
          title="Document Not Found"
          description={error}
          icon
        />
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/services"
            className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg text-xs font-bold transition-colors"
          >
            Browse Services Directory
          </Link>
          <Link
            to="/forms"
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg text-xs font-semibold transition-colors"
          >
            Check Application Forms Hub
          </Link>
          <Link
            to="/"
            className="px-4 py-2 border border-gray-300 rounded-lg text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </Section>
    );
  }

  if (nestedIndex) {
    const nestedPages: Subcategory[] = nestedIndex.pages;
    return (
      <>
        <SEO
          title={documentSlug}
          keywords={`${documentSlug}, government services, local government`}
        />
        <Section className="py-10">
          <Breadcrumbs className="mb-6" items={breadcrumbs} />
          {nestedIndex.title && (
            <Heading
              level={1}
              className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2"
            >
              {nestedIndex.title}
            </Heading>
          )}
          {nestedIndex.description && (
            <Text className="text-gray-600 mb-6 text-sm">
              {nestedIndex.description}
            </Text>
          )}
          {nestedIndex.layout === 'grid' ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {nestedPages.map((page, i) => (
                <Card
                  hoverable
                  key={page.slug ?? i}
                  className="h-full border border-gray-200 bg-white"
                >
                  <CardContent className="p-6">
                    <h3 className="text-base font-bold text-gray-900 mb-2">
                      {page.name}
                    </h3>
                    {page.description && (
                      <p className="text-xs text-gray-600 leading-relaxed mb-4">
                        {page.description}
                      </p>
                    )}
                    {page.slug && (
                      <Link
                        to={`/${categoryType === 'government' ? 'government' : 'services'}/${category}/${documentSlug}/${page.slug}`}
                        className="text-xs font-semibold text-primary-600 hover:underline"
                      >
                        View Details →
                      </Link>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {nestedPages.map((page, i) => (
                <Card
                  hoverable
                  key={page.slug ?? i}
                  className="border border-gray-200 bg-white"
                >
                  <CardContent className="p-6">
                    <h3 className="text-base font-bold text-gray-900 mb-2">
                      {page.name}
                    </h3>
                    {page.description && (
                      <p className="text-xs text-gray-600 leading-relaxed mb-4">
                        {page.description}
                      </p>
                    )}
                    {page.slug && (
                      <Link
                        to={`/${categoryType === 'government' ? 'government' : 'services'}/${category}/${documentSlug}/${page.slug}`}
                        className="text-xs font-semibold text-primary-600 hover:underline"
                      >
                        View Details →
                      </Link>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </Section>
      </>
    );
  }

  if (!markdownContent) {
    return null;
  }

  const serviceMetadata =
    categoryType === 'service' && markdownContent.data?.serviceMetadata
      ? (markdownContent.data.serviceMetadata as ServiceMetadata)
      : null;

  return (
    <>
      <SEO
        title={markdownContent.title || documentSlug}
        description={
          markdownContent.description ||
          `Government service information for ${documentSlug}`
        }
        keywords={`${documentSlug}, Obando government services, public services, local government`}
      />
      <Section className="py-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <Breadcrumbs items={breadcrumbs} />

          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 text-xs font-semibold shadow-sm transition-colors print:hidden"
          >
            <Printer className="h-3.5 w-3.5 text-primary-600" />
            Print / Save Guide
          </button>
        </div>

        {/* Citizen's Charter / ARTA Service Specification Summary Card */}
        {serviceMetadata && <ServiceSummaryCard metadata={serviceMetadata} />}

        <Card className="border border-gray-200 bg-white shadow-sm markdown-content">
          <CardHeader className="p-6 sm:p-8">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={markdownComponents}
            >
              {markdownContent.content}
            </ReactMarkdown>
          </CardHeader>
        </Card>

        <div className="mt-8 flex justify-between items-center text-xs text-gray-500 print:hidden">
          <Link
            to={`/${categoryType === 'government' ? 'government' : 'services'}/${category}`}
            className="inline-flex items-center gap-1.5 text-primary-600 hover:underline font-semibold"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Category
          </Link>
          <span>Municipality of Obando, Bulacan • Citizen's Charter</span>
        </div>
      </Section>
    </>
  );
}
