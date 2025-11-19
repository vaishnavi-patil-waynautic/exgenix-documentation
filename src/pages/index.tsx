// import type {ReactNode} from 'react';
// import clsx from 'clsx';
// import Link from '@docusaurus/Link';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';
// import Heading from '@theme/Heading';

// import styles from './index.module.css';

// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div className="container">
//         <Heading as="h1" className="hero__title">
//           {siteConfig.title}
//         </Heading>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/docs/intro">
//             Docusaurus Tutorial - 5min ⏱️
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default function Home(): ReactNode {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <Layout
//       title={`Hello from ${siteConfig.title}`}
//       description="Description will go into a meta tag in <head />">
//       <HomepageHeader />
//       <main>
//         <HomepageFeatures />
//       </main>
//     </Layout>
//   );
// }


// import type { ReactNode } from 'react';
// import clsx from 'clsx';
// import Link from '@docusaurus/Link';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import Layout from '@theme/Layout';
// import Heading from '@theme/Heading';
// import styles from './index.module.css';

// function HomepageHeader() {
//   const { siteConfig } = useDocusaurusContext();
//   return (
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div className="container">
//         <Heading as="h1" className="hero__title">
//           Exgenix
//         </Heading>
//         <p className="hero__subtitle">
//           AI-Powered QA Governance for Stock Exchange Ecosystem
//         </p>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/docs/quick-start-guide/"
//           >
//             🚀 Quick Start Guide
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

// function HomepageFeatures() {
//   return (
//     <section className={styles.features}>
//       <div className="container">
//         <div className="row">
//           {/* Feature 1 */}
//           <div className="col col--4">
//             <div className="text--center">
//               <h3>🏛️ QA Governance Engine for Stock Exchanges</h3>
//               <p>
//                 <em>“From APIs to Clearing — One Governance View.”</em><br />
//                 Exgenix unifies QA across Gateway, Matching Engine, Risk, Clearing, 
//                 and Surveillance — ensuring full traceability, coverage, and compliance. 
//                 It transforms testing into true quality governance for trading ecosystems.
//               </p>
//             </div>
//           </div>

//           {/* Feature 2 */}
//           <div className="col col--4">
//             <div className="text--center">
//               <h3>🧩 True No-Code Automation for Complex Trading Protocols</h3>
//               <p>
//                 <em>“Empower QA teams to automate without coding.”</em><br />
//                 Exgenix offers a no-code interface to automate FIX, ETI, and proprietary 
//                 APIs — enabling QA and domain teams to simulate, execute, and validate 
//                 complex trading workflows without scripts or code.
//               </p>
//             </div>
//           </div>

//           {/* Feature 3 */}
//           <div className="col col--4">
//             <div className="text--center">
//               <h3>🧠 AI-Powered Test Case Generation & Governance</h3>
//               <p>
//                 <em>“AI that thinks like a QA lead — not a script.”</em><br />
//                 Exgenix’s AI engine auto-generates test cases from JIRA, BRDs, or API specs — 
//                 ensuring impact-aware updates and seamless integration with JIRA, CI/CD, 
//                 and governance pipelines.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// export default function Home(): ReactNode {
//   const { siteConfig } = useDocusaurusContext();
//   return (
//     <Layout
//       title={`${siteConfig.title} | AI-Powered QA Automation`}
//       description="Exgenix – Test Exchange APIs Functionally & Performantly with AI-powered automation."
//     >
//       <HomepageHeader />
//       <main>
//         <HomepageFeatures />
//       </main>
//     </Layout>
//   );
// }


import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

// ⭐ Add Lucide Icons
import { Landmark, Puzzle, BrainCircuit, Rocket } from 'lucide-react';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title" style={{ color: "#ffffff" }} >
          Exgenix
        </Heading>
        <p className="hero__subtitle">
          AI-Powered QA Governance for Stock Exchange Ecosystem
        </p>

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/quick-start-guide/"
          >
            <Rocket size={20} color='#c07805ff' style={{ marginRight: 10, paddingTop: 5, alignItems: 'center' }} />
            Quick Start Guide
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">

          {/* Feature 1 */}
          <div className="col col--4">
            <div className="text--center">
              <Landmark
                size={34}
                className="margin-bottom--md"
                color="#4F46E5"   // Indigo (Governance)
              />
              <h3>QA Governance Engine for Stock Exchanges</h3>
              <p>
                <em>“From APIs to Clearing — One Governance View.”</em><br />
                Exgenix unifies QA across Gateway, Matching Engine, Risk, Clearing,
                and Surveillance — ensuring full traceability, coverage, and compliance.
                It transforms testing into true quality governance for trading ecosystems.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="col col--4">
            <div className="text--center">
              <Puzzle
                size={34}
                className="margin-bottom--md"
                color="#0EA5E9"   // Sky Blue (No-code / flexibility)
              />
              <h3>True No-Code Automation for Complex Trading Protocols</h3>
              <p>
                <em>“Empower QA teams to automate without coding.”</em><br />
                Exgenix offers a no-code interface to automate FIX, ETI, and proprietary
                APIs — enabling QA and domain teams to simulate, execute, and validate
                complex trading workflows without scripts or code.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="col col--4">
            <div className="text--center">
              <BrainCircuit
                size={34}
                className="margin-bottom--md"
                color="#F59E0B"   // Amber (AI intelligence)
              />
              <h3>AI-Powered Test Case Generation & Governance</h3>
              <p>
                <em>“AI that thinks like a QA lead — not a script.”</em><br />
                Exgenix’s AI engine auto-generates test cases from JIRA, BRDs, or API specs —
                ensuring impact-aware updates and seamless integration with JIRA, CI/CD,
                and governance pipelines.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>

  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} | AI-Powered QA Automation`}
      description="Exgenix – Test Exchange APIs Functionally & Performantly with AI-powered automation."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
