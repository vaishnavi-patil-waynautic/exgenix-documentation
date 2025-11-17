import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {Video } from 'lucide-react';

export default function VideosPage() {
  return (
    <Layout title="Video Tutorials">
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
        <h1><Video size={20} style={{ verticalAlign: 'middle', marginRight: '4px' }} /> Video Tutorials  1</h1>

        <video width="100%" controls style={{ marginTop: '2rem' }}>
          <source src={useBaseUrl('/videos/aigeneration.mp4')} type="video/mp4" />
        </video>

      </div>
    </Layout>
  );
}
