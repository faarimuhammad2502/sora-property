import React from 'react';
import { Composition } from 'remotion';
import { SoraTrailer } from './SoraTrailer';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* 16:9 Landscape Cinema Trailer (450 frames = 15 seconds @ 30fps) */}
      <Composition
        id="SoraTrailer"
        component={SoraTrailer}
        durationInFrames={450}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
