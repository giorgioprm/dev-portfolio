'use client';

import Button from '@/components/general/button';

const DownloadCV = () => {
  return (
    <Button onClick={() => window?.open('/files/GiorgioRuiton-CV-2023.pdf', '_blank')}>
      Descargar CV
    </Button>
  );
};

export default DownloadCV;
