import { HeadlessAbout } from '@/components/headless/HeadlessAbout';
import { AboutUI } from '@/pages/ui/AboutUI';

/**
 * ROUTE COMPONENT - About
 * 
 * Página Sobre Nosotros que conecta HeadlessAbout con AboutUI
 */

const About = () => {
  return (
    <HeadlessAbout>
      {(logic) => <AboutUI logic={logic} />}
    </HeadlessAbout>
  );
};

export default About;