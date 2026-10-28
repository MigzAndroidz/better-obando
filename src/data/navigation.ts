import type { NavigationItem } from '../types';
import { serviceCategories as servicesData } from './yamlLoader';
import { OBANDO_BARANGAYS } from './barangays';

interface Subcategory {
  name: string;
  slug: string;
}

interface Category {
  category: string;
  slug: string;
  subcategories: Subcategory[];
}

export const mainNavigation: NavigationItem[] = [
  {
    label: 'Services',
    href: '/services',
    children: [
      ...(servicesData.categories as Category[]).map(category => ({
        label: category.category,
        href: `/services/${category.slug}`,
      })),
      {
        label: 'View All Services →',
        href: '/services',
      },
    ],
  },
  {
    label: 'Forms & Permits',
    href: '/forms',
    children: [
      {
        label: 'BPLO Business Permits & BOSS',
        href: '/forms',
      },
      {
        label: 'Civil Registry (Birth, Marriage, Death)',
        href: '/forms',
      },
      {
        label: 'Building & Occupancy Permits (OBO)',
        href: '/forms',
      },
      {
        label: 'Senior & PWD Assistance (MSWDO)',
        href: '/forms',
      },
      {
        label: 'Cedula & Property Tax (Treasury)',
        href: '/forms',
      },
      {
        label: 'All Forms & Requirements Hub →',
        href: '/forms',
      },
    ],
  },
  {
    label: 'Barangays',
    href: '/barangays',
    children: [
      ...OBANDO_BARANGAYS.map(b => ({
        label: `Brgy. ${b.name}`,
        href: `/barangays/${b.slug}`,
      })),
      {
        label: 'All 11 Barangays Directory →',
        href: '/barangays',
      },
    ],
  },
  {
    label: 'Community Tools',
    href: '/community-tools',
    children: [
      {
        label: 'High Tide & Flood Advisory',
        href: '/community-tools',
      },
      {
        label: 'Obando Hotlines Directory',
        href: '/community-tools',
      },
      {
        label: 'Fertility Dance & Heritage Guide',
        href: '/community-tools',
      },
    ],
  },
  {
    label: 'Government',
    href: '/government/departments',
    children: [
      {
        label: 'Executive (Mayor & Vice Mayor)',
        href: '/government/departments/executive',
      },
      {
        label: 'Legislative (Sangguniang Bayan)',
        href: '/government/departments/legislative',
      },
      {
        label: 'All Departments & Offices',
        href: '/government/departments',
      },
    ],
  },
];

export const footerNavigation = {
  mainSections: [
    {
      title: 'About',
      links: [
        { label: 'About Better Obando', href: '/about' },
        { label: 'The 11 Barangays', href: '/barangays' },
        { label: 'Forms & Permits Hub', href: '/forms' },
        { label: 'Community Tools & Tide Watch', href: '/community-tools' },
        { label: 'Volunteer / Join Us', href: 'https://bettergov.ph/join-us' },
      ],
    },
    {
      title: 'Services',
      links: [
        { label: 'All Services Catalog', href: '/services' },
        ...(servicesData.categories as Category[])
          .slice(0, 4)
          .map(category => ({
            label: category.category,
            href: `/services/${category.slug}`,
          })),
        { label: 'Obando Hotlines', href: '/community-tools' },
      ],
    },
    {
      title: 'Government',
      links: [
        {
          label: 'Mayor Leonardo "Ding" Valeda',
          href: '/government/departments/executive',
        },
        {
          label: 'Sangguniang Bayan',
          href: '/government/departments/legislative',
        },
        { label: 'Open Data Philippines', href: 'https://data.gov.ph' },
        {
          label: 'Freedom of Information (FOI)',
          href: 'https://www.foi.gov.ph',
        },
        {
          label: 'Official Gazette PH',
          href: 'https://www.officialgazette.gov.ph',
        },
      ],
    },
  ],
  socialLinks: [
    { label: 'Facebook', href: 'https://facebook.com/obandolgu' },
    { label: 'Twitter', href: 'https://twitter.com/bettergovph' },
    { label: 'YouTube', href: 'https://youtube.com/@bettergovph' },
  ],
};
