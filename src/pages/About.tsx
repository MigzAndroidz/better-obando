import Section from '../components/ui/Section';
import { Heading } from '../components/ui/Heading';
import { Text } from '../components/ui/Text';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import SEO from '../components/SEO';
import { Card, CardContent } from '@bettergov/kapwa/card';
import {
  Heart,
  Code2,
  Users,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';

export default function About() {
  return (
    <>
      <SEO
        title="About Better Obando - Community Civic Portal"
        description="Learn about Better Obando, an independent, community-driven civic technology initiative for the residents and visitors of Obando, Bulacan."
        keywords="About Better Obando, Obando civic technology, BetterGov.ph, Obando Bulacan volunteers"
      />
      <Section className="py-10">
        <Breadcrumbs className="mb-6" />

        <div className="flex flex-col sm:flex-row sm:items-start gap-6 mb-12">
          <img
            src="/images/better-obando-logo.png"
            alt="Better Obando Emblem"
            className="h-20 w-20 sm:h-24 sm:w-24 rounded-full shadow-md shrink-0 border border-primary-100 bg-[#032759]"
          />
          <div className="max-w-2xl">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary-100 text-primary-700 mb-3">
              Civic Technology Initiative
            </div>
            <Heading
              level={1}
              className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3"
            >
              About Better Obando
            </Heading>
            <Text className="text-lg text-gray-700 leading-relaxed">
              Better Obando is an independent, volunteer-led civic tech project
              designed to make public services, barangay directories, and local
              municipal procedures accessible, clear, and easy to use for all
              residents of Obando, Bulacan.
            </Text>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="border border-gray-200 bg-white">
            <CardContent className="p-6">
              <div className="p-2.5 rounded-xl bg-primary-50 text-primary-600 w-fit mb-4">
                <Code2 className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">
                Open Source & Public Domain
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                All software and structured content on this portal are openly
                built, free to audit, and created in the public interest to
                serve current and future generations.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 bg-white">
            <CardContent className="p-6">
              <div className="p-2.5 rounded-xl bg-accent-50 text-accent-700 w-fit mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">
                Community-Driven
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Maintained by passionate local technologists, civic advocates,
                and students in partnership with the nationwide BetterGov.ph
                grassroots movement.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 bg-white">
            <CardContent className="p-6">
              <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 w-fit mb-4">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">
                Verified & Up-to-Date
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We ground requirements, citizen procedures, and hotlines
                directly on official municipal ordinances, national agency
                directives, and on-the-ground verifications.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 bg-white">
            <CardContent className="p-6">
              <div className="p-2.5 rounded-xl bg-red-50 text-red-600 w-fit mb-4">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">
                Tailored for Obando
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                From high-tide advisories to information on all 11 barangays and
                the historic Obando Fertility Dance, our tools address the
                unique geography and culture of Obando.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Public Disclaimer & Transparency */}
        <div className="bg-gray-100 rounded-2xl p-6 md:p-8 mb-12 text-gray-800 text-sm leading-relaxed border border-gray-200">
          <h4 className="font-bold text-base text-gray-900 mb-2">
            Public Notice & Disclaimer
          </h4>
          <p className="text-gray-600 mb-3">
            Better Obando is a community-run civic technology portal affiliated
            with the BetterGov.ph initiative. While we coordinate with public
            officials and strive for absolute accuracy, this platform is not an
            official instrument of the municipal government. For formal legal
            filings, official seals, and certified vital statistics, please
            consult the Obando Municipal Hall in Brgy. Paliwas.
          </p>
          <p className="text-gray-600">
            Official Municipal Website:{' '}
            <a
              href="https://obando.gov.ph"
              target="_blank"
              rel="noreferrer"
              className="text-primary-600 hover:underline font-medium inline-flex items-center gap-1"
            >
              obando.gov.ph <ExternalLink className="h-3 w-3" />
            </a>
          </p>
        </div>

        {/* Call to action */}
        <div className="bg-primary-900 text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold mb-2">
              Want to Help Build Better Obando?
            </h3>
            <p className="text-primary-200 text-sm max-w-xl">
              Whether you are a developer, designer, researcher, or resident of
              Obando, your contributions make local government information
              clearer and more accessible for everyone.
            </p>
          </div>
          <a
            href="https://bettergov.ph/join-us"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent-500 hover:bg-accent-600 text-gray-950 font-bold rounded-xl text-sm transition-all shrink-0 shadow-md"
          >
            Join the Movement
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </Section>
    </>
  );
}
