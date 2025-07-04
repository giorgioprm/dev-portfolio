'use client';

import Button from '@/components/general/button';

const DownloadCV = () => {
  return (
    <Button onClick={() => window?.open('/files/CV_GiorgioRuiton_25.pdf', '_blank')}>
      Descargar CV
    </Button>
  );
};

export default DownloadCV;
