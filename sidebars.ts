import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';


const sidebars: SidebarsConfig = {
  tutorialSidebar: [

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

