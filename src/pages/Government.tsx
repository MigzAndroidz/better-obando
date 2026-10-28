import Section from '../components/ui/Section';
import { useParams, Link } from 'react-router';
import { Heading } from '../components/ui/Heading';
import { Text } from '../components/ui/Text';
import {
  governmentCategories,
  getCategorySubcategories,
  type Subcategory,
  type CategoryIndex,
} from '../data/yamlLoader';
import * as LucideIcons from 'lucide-react';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import GovernmentStructureView from '../components/government/GovernmentStructureView';
import SEO from '../components/SEO';
import { Card, CardContent } from '@bettergov/kapwa/card';
import { Banner } from '@bettergov/kapwa/banner';
import { useState, useEffect } from 'react';

const Government: React.FC = () => {
  const { category } = useParams();
  const [categoryIndex, setCategoryIndex] = useState<CategoryIndex>({
    layout: 'list',
    pages: [],
  });
  const [loading, setLoading] = useState(false);
  const subcategories: Subcategory[] = categoryIndex.pages;

  const getCategory = () => {
    return governmentCategories.categories.find(c => c.slug === category);
  };

  const categoryData = getCategory();
  const Icon = LucideIcons[
    categoryData?.icon as keyof typeof LucideIcons
  ] as React.ComponentType<{ className?: string }>;

  useEffect(() => {
    if (category && category !== 'departments' && categoryData) {
      setLoading(true);
      getCategorySubcategories(category)
        .then(setCategoryIndex)
        .catch(console.error)
        .finally(() => setLoading(false));
    }
  }, [category, categoryData]);

  if (!category || category === 'departments') {
    return (
      <>
        <SEO
          title="Government Structure & Officials - Municipality of Obando"
          description="Meet the executive leadership, Sangguniang Bayan councilors, and municipal frontline departments serving the Municipality of Obando, Bulacan."
          keywords="Obando municipal government, mayor Leonardo Ding Valeda, vice mayor Rowell Rillera, sangguniang bayan, municipal council, Obando Bulacan departments"
        />
        <Section className="py-6 sm:py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs className="mb-4" />
          <GovernmentStructureView />
        </Section>
      </>
    );
  }

  if (!categoryData) {
    return (
      <Section className="p-3 mb-12">
        <Breadcrumbs className="mb-8" />
        <Banner
          type="error"
          title="Category not found"
          description="The government section you are looking for does not exist."
          icon
        />
      </Section>
    );
  }

  return (
    <>
      <SEO
        title={categoryData.category || category}
        description={categoryData.description}
        keywords={`${categoryData.category}, local government, municipal departments, Obando Bulacan`}
      />
      <Section className="p-3 mb-12">
        <Breadcrumbs className="mb-8" />
        {Icon && <Icon className="h-8 w-8 mb-4 text-primary-600 rounded-md" />}
        <Heading>{categoryData.category || category}</Heading>
        <Text className="text-gray-600 mb-6">{categoryData.description}</Text>

        {loading ? (
          <div className="flex justify-center items-center p-8">
            <Text>Loading government information...</Text>
          </div>
        ) : (
          <>
            {categoryIndex.title && (
              <Heading level={3}>{categoryIndex.title}</Heading>
            )}
            {categoryIndex.description && (
              <Text className="text-gray-600 mb-4">
                {categoryIndex.description}
              </Text>
            )}

            {categoryIndex.layout === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {subcategories.map(subcategory => (
                  <Card key={subcategory.slug} hoverable>
                    <Link
                      to={`/government/${category}/${subcategory.slug}`}
                      className="block p-6 hover:bg-gray-50 transition-colors"
                    >
                      <CardContent>
                        <Heading level={4} className="mb-2">
                          {subcategory.name}
                        </Heading>
                        {subcategory.description && (
                          <Text className="text-gray-600 text-sm">
                            {subcategory.description}
                          </Text>
                        )}
                      </CardContent>
                    </Link>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {subcategories.map(subcategory => (
                  <Card key={subcategory.slug} hoverable>
                    <Link
                      to={`/government/${category}/${subcategory.slug}`}
                      className="block p-6 hover:bg-gray-50 transition-colors"
                    >
                      <CardContent>
                        <Heading level={4} className="mb-2">
                          {subcategory.name}
                        </Heading>
                        {subcategory.description && (
                          <Text className="text-gray-600 text-sm">
                            {subcategory.description}
                          </Text>
                        )}
                      </CardContent>
                    </Link>
                  </Card>
                ))}
              </div>
            )}
          </>
        )}
      </Section>
    </>
  );
};

export default Government;
