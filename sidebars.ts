import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';


const sidebars: SidebarsConfig = {
  tutorialSidebar: [

    {
      type: 'category',
      label: 'Exgenix',
      link: {
        type: 'doc',
        id: 'exgenix/exgenix'
      },
      description: 'The Exgenix platform revolutionizes QA for stock exchanges by integrating AI-driven test case generation, no-code automation, and comprehensive governance. Explore how Exgenix enhances test coverage, traceability, and efficiency across exchange systems.',
      items: [
        'exgenix/executive-overview',
        'exgenix/qa-transformation-vision',
        'exgenix/core-capabilities',
        'exgenix/data-creation',
        'exgenix/core-modules',
        'exgenix/key-advantages',
        'exgenix/value-propositions',
      ],
    },

    {
      type: 'category',
      label: 'Trial Access',
      link: {
        type: 'doc',
        id: 'dbg-trial/dbg-trial', 
      },
      items: [
        'dbg-trial/intro',
        'dbg-trial/purpose',
        'dbg-trial/governance-engine',
        'dbg-trial/no-code-automation',
        'dbg-trial/ai-qa-governance',
        'dbg-trial/what-to-expect',
        'dbg-trial/security',
        'dbg-trial/timeline',
        'dbg-trial/post-trial',
        'dbg-trial/commitment',
        'dbg-trial/simulator-functions',
      ],
    },
  ],
};


export default sidebars;

