import Avatar from '~/media/hugo-alliaume.jpeg?w=120;200;300;400&jsx';
import { css } from '~/styled-system/css';
import { FaGithub, FaLinkedin, FaXTwitter } from '@qwikest/icons/font-awesome';

export const RESUME_DATA = {
  name: 'Hugo Alliaume',
  location: 'Villefranche-sur-Saône, France',
  locationLink: 'https://www.google.com/maps/place/Villefranche-sur-Saône+France',
  about: 'Développeur web full-stack passionné et contributeur open-source',
  summary:
    "En tant que développeur web full-stack, j'ai supervisé et optimisé des projets avec une expertise en PHP/Symfony et JavaScript/Vue.js. Fortement engagé dans la qualité et l'efficacité du code, j'ai également contribué activement à la communauté open-source, notamment avec Symfony et divers outils.",
  avatar: (
    <Avatar
      class={css({
        borderRadius: 'full',
        width: '112px',
        boxShadow: 'xl',
        md: {
          width: '164px',
        },
      })}
      alt={'Hugo Alliaume'}
    />
  ),
  personalWebsiteUrl: 'https://hugo.alliau.me',
  contact: {
    email: 'hugo@alliau.me',
    social: [
      {
        name: 'GitHub',
        url: 'https://github.com/Kocal',
        icon: <FaGithub />,
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/%F0%9F%9A%B4-hugo-alliaume-34b475166/',
        icon: <FaLinkedin />,
      },
      {
        name: 'X (Twitter)',
        url: 'https://twitter.com/HugoAlliaume',
        icon: <FaXTwitter />,
      },
    ],
  },
  education: [
    {
      school: 'IUT Lyon 1',
      degree: 'DUT, Informatique',
      start: '2014',
      end: '2016',
    },
    {
      school: 'IUT Lyon 1',
      degree: 'Licence professionnelle METINET, Informatique',
      start: '2016',
      end: '2017',
    },
  ],
  work: [
    {
      company: 'Wamiz',
      link: 'https://wamiz.com/',
      badges: ['Télétravail'],
      title: 'Développeur web full-stack → Lead Développeur web full-stack',
      start: new Date('2021-06-01'),
      end: new Date(),
      description:
        "Évolution et maintenance de nos sites, mise en place d'une nouvelle stack de développement en local et CI, respect des bonnes pratiques, garantir l'ajout et la pertinence de tests automatisés, revues de code, accompagnement technique de mon équipe, monitoring via Blackfire et Datadog. Interventions dans les différentes phases de conception afin de mener les projets à bien. Diverses contributions à l'open-source (Symfony 6, Symfony UX Translator, ...)",
    },
    {
      company: 'Y-proximité',
      link: 'https://www.y-proximite.fr',
      badges: ['Présentiel', 'Télétravail partiel'],
      title: 'Développeur web full-stack',
      start: new Date('2017-09-01'),
      end: new Date('2021-05-28'),
      description:
        "Référent PHP et JavaScript de l'équipe, maintenance et évolution d'une vingtaine de projets. Introduction et optimisation pratiques de qualité avec les outils adéquat, et mise en place d'une CI. Migration de notre environnement de développement de Vagrant à du Docker hybride, afin de gagner en vélocité et expérience développement. Diverses contributions à l'open-source (Symfony Webpack Encore, Rollup, DefinitelyTyped, ...)",
    },
  ],
  skills: [
    'PHP',
    'Symfony',
    'JavaScript',
    'TypeScript',
    'Vue.js',
    'Performances web back & front',
    'Tests automatisés',
    'Bonnes pratiques',
    'CI & CD',
  ],
  projects: [
    {
      title: 'OpenGraph Image Generator',
      date: '2023',
      techStack: ['Projet Personnel', 'Symfony', 'PHP', 'Panther'],
      description:
        'Un service web qui permet de générer des images OpenGraph à la volée, en utilisant le moteur de rendu de Chrome.',
      link: {
        label: 'OpenGraph Image Generator',
        href: 'https://github.com/Kocal/open-graph-image-generator',
      },
    },
    {
      title: 'ESLint Config Generator',
      date: '2020',
      techStack: ['Projet Personnel', 'ESLint', 'JavaScript', 'Mono-repo'],
      description:
        'Un générateur de configuration dogmatique pour ESLint, basé sur AirBnb et supporte TypeScript et Vue.js.',
      link: {
        label: 'ESLint Config Generator',
        href: 'https://github.com/Kocal/eslint-config-generator',
      },
    },
    {
      title: 'Symfony Mailer Testing',
      date: '2020',
      techStack: ['Développeur web full-stack', 'Bundle Symfony', 'PHP', 'Tests automatisés'],
      description:
        "Un bundle Symfony permettant de tester facilement dans Cypress et Behat, l'envoi d'e-mails avec Symfony Mailer.",
      link: {
        label: 'Symfony Mailer Testing',
        href: 'https://github.com/Kocal/SymfonyMailerTesting',
      },
    },
    {
      title: 'web-extension-library',
      date: '2018',
      techStack: ['Projet personnel', 'Extension Web', 'JavaScript', 'TypeScript'],
      description:
        "Une librairie JavaScript proposant une API pratique permettant de faciliter l'écriture d'extension web cross-browser.",
      link: {
        label: 'web-extension-library',
        href: 'https://github.com/Kocal/web-extension-library',
      },
    },
    {
      title: 'vue-web-extension',
      date: '2018',
      techStack: ['Projet personnel', 'Extension Web', 'JavaScript', 'TypeScript', 'Vue.js'],
      description: 'Un boilerplate permettant de créer des extensions web Vue.js, avec Vue-CLI, TypeScript et ESLint.',
      link: {
        label: 'vue-web-extension',
        href: 'https://github.com/Kocal/vue-web-extension',
      },
    },
    {
      title: 'jsdoc-vuejs',
      date: '2017',
      techStack: ['Développeur web full-stack', 'Plugin JSDoc', 'JavaScript', 'Vue.js'],
      description:
        "Un plugin JSDoc permettant la génération d'une documentation API pour les composants Vue.js 2 et 3.",
      link: {
        label: 'jsdoc-vuejs',
        href: 'https://github.com/Kocal/jsdoc-vuejs',
      },
    },
    {
      title: 'AutoLogin-Webmail-Numericable',
      date: '2016',
      techStack: ['Projet personnel', 'Extension Web', 'JavaScript', 'Expérience utilisateur'],
      description:
        'Une extension web permettant de se connecter automatiquement à la boîte mail de Numericable, chose non possible nativement.',
      link: {
        label: 'AutoLogin-Webmail-Numericable',
        href: 'https://chromewebstore.google.com/detail/autologin-webmail-numeric/odnfbbmmfaabccelbmfngimaldbddinm?hl=fr&pli=1',
      },
    },
    {
      title: 'JVCMaster',
      date: '2012',
      techStack: ['Projet personnel', 'Extension Web', 'JavaScript'],
      description:
        'Une extension web populaire permettant qui proposait des fonctionnalités supplémentaires et innovantes sur les forums de JeuxVideo.com (avant Respawn).',
      link: {
        label: 'JVCMaster',
        href: 'https://jvflux.fr/JVCMaster',
      },
    },
  ],
};
