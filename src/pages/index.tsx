import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { StarsBackground } from '../components/StarsBackground';

import styles from './index.module.css';

function HomepageHero() {
  return (
    <section className={styles.heroSection}>
      <div className={clsx('container', styles.heroContainer)}>
        <div className={styles.heroContent}>
          <Heading as="h1" className={styles.heroTitle}>
            ꦲꦭꦺꦴ <span className={styles.heroTitleHighlight}>I'm Fajar</span> 👋🏻
          </Heading>
          <p className={styles.heroSubtitle}>
            Here, I share the challenges and solutions encountered across various technology stacks. I invite you to explore modern tech stacks and how to apply them in real-world development. I hope my development experience can inspire you.
          </p>
          <div className={styles.socialButtons}>
            {/* Tambahkan tombol media sosial di sini, seperti Link atau <a> */}
          </div>
        </div>
        <div className={styles.heroImage}>
          <img src="/img/web-development.svg" alt="web-development" />
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {

  return (
    <Layout
      title="Homepage"
      description="Created with Docusaurus and a custom landing page.">
      <StarsBackground />
      <main>
        <HomepageHero />
      </main>
    </Layout>
  );
}