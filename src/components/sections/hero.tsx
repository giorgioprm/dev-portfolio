import Image from 'next/image';
import { MapPin } from 'lucide-react';

import SocialIcons from '@/components/data-display/social-icons';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const HeroSection = () => {
  return (
    <Container id="inicio">
          <div className="flex flex-col items-center gap-4">
            <Typography variant="h1">
              Hola, soy Giorgio{' '}
              <span className="inline-block animate-waving-hand cursor-pointer">👋</span>
            </Typography>
            <Typography>
              Desarrollador de Software (React.js & Node.js) y Diseñador UX/UI, con un enfoque en la creación
              y el diseño<br/> de proyectos digitales, accesibles, visualmente atractivos y receptivas. He estado creando aplicaciones<br/>web durante más de 2 años.
            </Typography>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                </span>
              </div>
              <Typography>Disponible para nuevos proyectos</Typography>
            </div>
          </div>
          <SocialIcons />
    </Container>
  );
};

export default HeroSection;
