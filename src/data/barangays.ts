export interface Barangay {
  name: string;
  slug: string;
  classification:
    'Town Center' | 'Coastal / Waterfront' | 'Mainland Residential';
  description: string;
  hotline?: string;
  hallAddress: string;
  landmarks: string[];
  evacuationCenter: string;
}

export const OBANDO_BARANGAYS: Barangay[] = [
  {
    name: 'Binuangan',
    slug: 'binuangan',
    classification: 'Coastal / Waterfront',
    description:
      'A distinctive coastal barangay situated along the mouth of Manila Bay and extensive fishponds. Known for thriving aquaculture, fishing livelihood, and maritime community life.',
    hotline: '(02) 8292-2043',
    hallAddress: 'Barangay Hall, Brgy. Binuangan, Obando, Bulacan',
    landmarks: ['Manila Bay Shoreline', 'Binuangan Fish Port & Fishponds'],
    evacuationCenter: 'Binuangan Elementary School',
  },
  {
    name: 'Catanghalan',
    slug: 'catanghalan',
    classification: 'Mainland Residential',
    description:
      'A historic residential and artisanal barangay with close-knit neighborhoods, active local businesses, and rich cultural traditions.',
    hotline: '(02) 8288-4486',
    hallAddress: 'Barangay Hall, Brgy. Catanghalan, Obando, Bulacan',
    landmarks: ['Catanghalan Multi-Purpose Center', 'Catanghalan Chapel'],
    evacuationCenter: 'Catanghalan Covered Court',
  },
  {
    name: 'Hulo',
    slug: 'hulo',
    classification: 'Mainland Residential',
    description:
      'A vibrant residential barangay along the main municipal corridor featuring active youth programs, local markets, and community sports facilities.',
    hotline: '(02) 8741-2573',
    hallAddress: 'Barangay Hall, J.P. Rizal St., Brgy. Hulo, Obando, Bulacan',
    landmarks: ['Hulo Barangay Center', 'Hulo Covered Court'],
    evacuationCenter: 'Hulo Elementary School',
  },
  {
    name: 'Lawa',
    slug: 'lawa',
    classification: 'Coastal / Waterfront',
    description:
      'Connecting the central corridor to surrounding water bodies and fish farming zones, Lawa balances residential areas with aquaculture.',
    hotline: '(02) 8292-2043',
    hallAddress: 'Barangay Hall, Brgy. Lawa, Obando, Bulacan',
    landmarks: ['Lawa Chapel', 'Lawa Riverside Path'],
    evacuationCenter: 'Lawa Multi-Purpose Hall',
  },
  {
    name: 'Paco',
    slug: 'paco',
    classification: 'Mainland Residential',
    description:
      'One of the oldest barangays in Obando, characterized by ancestral houses, heritage avenues, and central accessibility to neighboring towns.',
    hotline: '(02) 8292-2043',
    hallAddress: 'Barangay Hall, Brgy. Paco, Obando, Bulacan',
    landmarks: ['Paco Covered Court', 'Paco Day Care Center'],
    evacuationCenter: 'Paco Elementary School',
  },
  {
    name: 'Pag-asa (Poblacion)',
    slug: 'pag-asa',
    classification: 'Town Center',
    description:
      'The town proper and cultural heart of Obando. Home to the historic San Pascual Baylon Parish (Obando Church), the world-famous Fertility Dance rites, and central plaza.',
    hotline: '(02) 8709-5154',
    hallAddress: 'Barangay Hall, Poblacion, Brgy. Pag-asa, Obando, Bulacan',
    landmarks: [
      'San Pascual Baylon Parish (Obando Church)',
      'Obando Town Plaza',
      'Museo de Obando',
    ],
    evacuationCenter: 'Obando Central School Covered Gym',
  },
  {
    name: 'Paliwas',
    slug: 'paliwas',
    classification: 'Town Center',
    description:
      'The municipal administrative center where the Obando Municipal Hall, Municipal Health Office (RHU), and Police Department are located.',
    hotline: '(02) 8292-2043',
    hallAddress: 'Municipal Hall Compound, Brgy. Paliwas, Obando, Bulacan',
    landmarks: [
      'Obando Municipal Hall',
      'Obando Rural Health Unit',
      'Paliwas Multi-Purpose Complex',
    ],
    evacuationCenter: 'Obando Municipal Gymnasium',
  },
  {
    name: 'Panghulo',
    slug: 'panghulo',
    classification: 'Mainland Residential',
    description:
      'The southern gateway of Obando connecting directly to Valenzuela City and Metro Manila. A busy corridor for commerce, logistics, and commuter transport.',
    hotline: '(02) 8294-4170',
    hallAddress: 'Barangay Hall, Brgy. Panghulo, Obando, Bulacan',
    landmarks: ['Obando-Valenzuela Boundary Arch', 'Panghulo Market'],
    evacuationCenter: 'Panghulo Elementary School',
  },
  {
    name: 'Salambao',
    slug: 'salambao',
    classification: 'Coastal / Waterfront',
    description:
      'Named after the traditional fishing raft and net (salambaw) associated with Nuestra Señora de Salambao. A proud fishing and fish farming settlement.',
    hotline: '(02) 8292-2043',
    hallAddress: 'Barangay Hall, Brgy. Salambao, Obando, Bulacan',
    landmarks: ['Our Lady of Salambao Shrine', 'Salambao Waterways'],
    evacuationCenter: 'Salambao Community Center',
  },
  {
    name: 'San Pascual',
    slug: 'san-pascual',
    classification: 'Mainland Residential',
    description:
      'Named in honor of patron saint San Pascual Baylon. A thriving residential neighborhood with active civic clubs and educational institutions.',
    hotline: '(02) 8292-2043',
    hallAddress: 'Barangay Hall, Brgy. San Pascual, Obando, Bulacan',
    landmarks: ['San Pascual Chapel', 'San Pascual Recreation Court'],
    evacuationCenter: 'San Pascual Day Care & Community Center',
  },
  {
    name: 'Tawiran',
    slug: 'tawiran',
    classification: 'Coastal / Waterfront',
    description:
      'Historically served as the primary river crossing point for travelers across Obando waters. Maintains strong ties to riverine transport and fisheries.',
    hotline: '(02) 8292-2043',
    hallAddress: 'Barangay Hall, Brgy. Tawiran, Obando, Bulacan',
    landmarks: ['Tawiran Riverfront', 'Tawiran Community Hall'],
    evacuationCenter: 'Tawiran Covered Court',
  },
];
