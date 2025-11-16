import React, { useState } from 'react';

/**
 * Reusable Collapsible Table of Contents
 *
 * Props:
 * - sections: Array of { title: string, id: string, subSections?: Array<{ title, id }> }
 */
const CollapsibleTOC = ({ sections }) => {
  const [openSections, setOpenSections] = useState({});

  const toggle = (sectionId) => {
    setOpenSections({ ...openSections, [sectionId]: !openSections[sectionId] });
  };

  return (
    <div style={{ marginBottom: '2rem' }}>
      {sections.map((section) => (
        <div key={section.id} style={{ marginBottom: '0.5rem' }}>
          <button
            onClick={() => toggle(section.id)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 'bold',
              color: '#0070f3',
            }}
          >
            {section.title}
          </button>

          {openSections[section.id] && (
            <ul style={{ marginTop: '0.25rem', marginLeft: '1rem' }}>
              <li>
                <a
                  href={`#${section.id}`}
                  style={{ textDecoration: 'none', color: '#1a1a1a' }}
                >
                  {section.title}
                </a>
              </li>

              {section.subSections &&
                section.subSections.map((sub) => (
                  <li key={sub.id} style={{ marginLeft: '1rem' }}>
                    <a
                      href={`#${sub.id}`}
                      style={{ textDecoration: 'none', color: '#555' }}
                    >
                      {sub.title}
                    </a>
                  </li>
                ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default CollapsibleTOC;
