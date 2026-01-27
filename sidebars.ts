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
      // link: { type: 'doc', id: 'exgenix/exgenix' }, // parent doc
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
        id: 'dbg-trial/dbg-trial', // points to docs/dbg-trial/index.md
      },
      items: [
        'dbg-trial/intro',
        'dbg-trial/purpose',
        'dbg-trial/governance-engine',
        'dbg-trial/no-code-automation',
        'dbg-trial/simulator-functions',
        `dbg-trial/instrument-testing-data`,
        'dbg-trial/ai-qa-governance',
        'dbg-trial/what-to-expect',
        'dbg-trial/security',
        'dbg-trial/timeline',
        'dbg-trial/post-trial',
        'dbg-trial/commitment',
      ],
    },

    {
      type: 'category',
      label: 'Quick Start Guide',
      link: {
        type: 'doc',
        id: 'quick-start-guide/quick-start-guide', // points to quick-start-guide/index.md
      },
      items: [
        'quick-start-guide/access_credentials',
        'quick-start-guide/trial_project_details',
        'quick-start-guide/recommended_first_steps',
      ],
    },
    {
      type: 'category',
      label: 'AI Powered Testcase Generation',
      link: {
        type: 'doc',              // Link directly to index.md
        id: 'ai-powered-testcase-generation/ai-powered-testcase-generation', // your folder's index.md
      },
      items: [
        'ai-powered-testcase-generation/overview',
        'ai-powered-testcase-generation/category1',
        'ai-powered-testcase-generation/category2',
        'ai-powered-testcase-generation/category3',
        'ai-powered-testcase-generation/key-highlight',
      ],
    },

    {
      type: 'category',
      label: 'API Configuration',
      link: { type: 'doc', id: 'api-configuration/index' },
      items: [
        'api-configuration/overview',
        'api-configuration/module-structure',
        'api-configuration/collections',
        'api-configuration/api-configuration',
        'api-configuration/datasheets',
        'api-configuration/advanced-features',
        'api-configuration/best-practices',
        'api-configuration/troubleshooting',
        'api-configuration/summary',
      ],
    },

    {
      type: 'category',
      label: 'Test Action Unit',
      link: {
        type: 'doc',
        id: 'test-action-unit/test-action-unit',   // Your index.md for this section
      },
      items: [
        'test-action-unit/overview',
        'test-action-unit/what-is-tau',
        'test-action-unit/module-structure',
        'test-action-unit/creating-tau',
        'test-action-unit/example',
        'test-action-unit/datasheet-configuration',
        'test-action-unit/using-tau',
        'test-action-unit/common-patterns',
        'test-action-unit/best-practices',
        'test-action-unit/managing-tau',
        'test-action-unit/advanced-features',
        'test-action-unit/troubleshooting',
        'test-action-unit/summary',
      ],
    },

    {
      type: 'category',
      label: 'Test Case Configuration',
      link: {
        type: 'doc',
        id: 'test-case-configuration/test-case-configuration',   // points to index.md
      },
      items: [
        'test-case-configuration/overview',
        'test-case-configuration/module-structure',
        'test-case-configuration/test-cases',
        'test-case-configuration/creating-test-case',
        'test-case-configuration/step-settings',
        'test-case-configuration/advanced-features',
        'test-case-configuration/best-practices',
        'test-case-configuration/managing-test-cases',
        'test-case-configuration/common-scenarios',
        'test-case-configuration/troubleshooting',
        'test-case-configuration/summary',
      ],
    },
    {
      type: 'category',
      label: 'Test Suite Execution',
      link: {
        type: 'doc',
        id: 'test-suite-execution/test-suite-execution',   // points to index.md
      },
      items: [
        'test-suite-execution/overview',
        'test-suite-execution/module-structure',
        // 'test-suite-execution/creating-collections',
        'test-suite-execution/creating-test-suites',
        'test-suite-execution/information-panel',
        'test-suite-execution/executing-suites',
        'test-suite-execution/execution-monitoring',
        'test-suite-execution/reports',
        'test-suite-execution/scheduled-execution',
        'test-suite-execution/managing-suites',
        'test-suite-execution/best-practices',
        'test-suite-execution/troubleshooting',
        'test-suite-execution/summary',
      ],
    },


    {
      type: 'category',
      label: 'Sample Test Scenario',
      link: {
        type: 'doc',             // Direct link to index.md
        id: 'sample-test-scenario/sample-test-scenario',
      },
      items: [
        'sample-test-scenario/scenario_1',
        'sample-test-scenario/scenario_2',
        'sample-test-scenario/scenario_3',
        'sample-test-scenario/scenario_4',
      ],
    },

    {
      type: 'category',
      label: 'AI QA Agent',
      link: {
        type: 'doc',
        id: 'ai-qa-agent/ai-qa-agent',   // Your index page
      },
      items: [
        'ai-qa-agent/overview',
        'ai-qa-agent/key-features',
        'ai-qa-agent/qa-governance-benefits',
        'ai-qa-agent/quick-start-guide',
        'ai-qa-agent/usecase1',
        'ai-qa-agent/usecase2',
        'ai-qa-agent/usecase3',
        'ai-qa-agent/value-propositions',
        'ai-qa-agent/integration-ecosystem',
        'ai-qa-agent/target-audience',
        'ai-qa-agent/continuous-learning',
        'ai-qa-agent/success-metrics',
        'ai-qa-agent/technical-capabilities',
        'ai-qa-agent/security-compliance'
      ],
    },

    {
      type: 'category',
      label: 'Best Practices',
      link: {
        type: 'doc',
        id: 'best-practices/best-practices'
      },
      description: 'Recommended guidelines and best practices for effective usage of Exgenix DBG Simulator, ensuring consistency, accuracy, and smoother troubleshooting.',
      items: [
        'best-practices/naming-convention',
        'best-practices/ai-generated-test-cases',
        'best-practices/datasheet-best-practices',
        'best-practices/test-case-import-functionality',
        'best-practices/troubleshooting',
        'best-practices/special-cases',
      ],
    },




    'contact-us',

  ],
};


export default sidebars;