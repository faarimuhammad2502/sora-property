import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  Img
} from 'remotion';

export const SoraTrailer: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#0A0B0E',
        color: '#F5F2EB',
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        overflow: 'hidden',
      }}
    >
      {/* SCENE 1: OPENING MANIFESTO (0 - 110 frames = 0s to 3.6s) */}
      <Sequence from={0} durationInFrames={115}>
        <SceneOpening />
      </Sequence>

      {/* SCENE 2: THE SKYLIGHT PAVILION (105 - 230 frames = 3.5s to 7.6s) */}
      <Sequence from={105} durationInFrames={125}>
        <SceneMasterpiece
          title="THE SKYLIGHT PAVILION"
          architect="Studio Andramatin Partner"
          location="BSD City • 420 m²"
          metric="6.5M VOID CEILING"
          image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85"
        />
      </Sequence>

      {/* SCENE 3: MORI ZEN & KOMOREBI (220 - 340 frames = 7.3s to 11.3s) */}
      <Sequence from={220} durationInFrames={120}>
        <SceneZenCollection />
      </Sequence>

      {/* SCENE 4: GUIDED BY SORAI & CLOSING CALL (330 - 450 frames = 11s to 15s) */}
      <Sequence from={330} durationInFrames={120}>
        <SceneClosing />
      </Sequence>

      {/* Persistent Cinematic Letterbox Bars */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 60,
          backgroundColor: '#000',
          zIndex: 50,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 60,
          backgroundColor: '#000',
          zIndex: 50,
        }}
      />
    </AbsoluteFill>
  );
};

// Scene 1: Brand Philosophy & Kanji Reveal
const SceneOpening: React.FC = () => {
  const frame = useCurrentFrame();

  const kanjiScale = interpolate(frame, [0, 70], [0.85, 1.05], {
    extrapolateRight: 'clamp',
  });
  const kanjiOpacity = interpolate(frame, [0, 30, 85, 110], [0, 1, 1, 0], {
    extrapolateRight: 'clamp',
  });

  const textTranslateY = interpolate(frame, [25, 60], [40, 0], {
    extrapolateRight: 'clamp',
  });
  const textOpacity = interpolate(frame, [25, 55, 85, 110], [0, 1, 1, 0], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0A0B0E',
      }}
    >
      {/* Background Soft Mesh Ambient */}
      <div
        style={{
          position: 'absolute',
          width: 800,
          height: 800,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(203,179,139,0.12) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Glowing Kanji Box */}
      <div
        style={{
          transform: `scale(${kanjiScale})`,
          opacity: kanjiOpacity,
          width: 140,
          height: 140,
          borderRadius: 28,
          border: '1px solid rgba(203, 179, 139, 0.4)',
          backgroundColor: '#121418',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 64,
          fontFamily: "'Cinzel', serif",
          color: '#CBB38B',
          boxShadow: '0 25px 60px rgba(0,0,0,0.8)',
          marginBottom: 36,
        }}
      >
        空
      </div>

      {/* Manifesto Headline */}
      <div
        style={{
          transform: `translateY(${textTranslateY}px)`,
          opacity: textOpacity,
          textAlign: 'center',
        }}
      >
        <span
          style={{
            fontFamily: "'Space Grotesk', monospace",
            fontSize: 18,
            letterSpacing: '0.3em',
            color: '#CBB38B',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: 12,
          }}
        >
          ARCHITECTURAL ATELIER
        </span>
        <h1
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: '0.04em',
            margin: 0,
            color: '#F5F2EB',
          }}
        >
          SORA PROPERTY
        </h1>
        <p
          style={{
            fontSize: 22,
            color: '#8E929B',
            marginTop: 16,
            letterSpacing: '0.08em',
          }}
        >
          Where Architecture Meets the Sky
        </p>
      </div>
    </AbsoluteFill>
  );
};

// Scene 2: Architectural Masterpiece Showcase (Skylight Pavilion)
interface MasterpieceProps {
  title: string;
  architect: string;
  location: string;
  metric: string;
  image: string;
}

const SceneMasterpiece: React.FC<MasterpieceProps> = ({
  title,
  architect,
  location,
  metric,
  image,
}) => {
  const frame = useCurrentFrame();

  const imgScale = interpolate(frame, [0, 120], [1.0, 1.12], {
    extrapolateRight: 'clamp',
  });
  const sceneOpacity = interpolate(frame, [0, 20, 100, 120], [0, 1, 1, 0], {
    extrapolateRight: 'clamp',
  });
  const textX = interpolate(frame, [10, 45], [-60, 0], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{ opacity: sceneOpacity }}>
      {/* Background Cinematic Photo with Zoom */}
      <Img
        src={image}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: `scale(${imgScale})`,
          filter: 'brightness(0.72) contrast(1.1)',
        }}
      />

      {/* Cinematic Gradient Overlays */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to right, rgba(10,11,14,0.95) 0%, rgba(10,11,14,0.4) 60%, transparent 100%)',
        }}
      />

      {/* Scene Content Left Card */}
      <div
        style={{
          position: 'absolute',
          bottom: 120,
          left: 120,
          maxWidth: 700,
          transform: `translateX(${textX}px)`,
        }}
      >
        <span
          style={{
            display: 'inline-block',
            padding: '8px 18px',
            borderRadius: 100,
            backgroundColor: 'rgba(203, 179, 139, 0.15)',
            border: '1px solid rgba(203, 179, 139, 0.35)',
            color: '#CBB38B',
            fontFamily: "'Space Grotesk', monospace",
            fontSize: 16,
            fontWeight: 700,
            letterSpacing: '0.15em',
            marginBottom: 20,
          }}
        >
          {metric}
        </span>
        <h2
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 58,
            fontWeight: 700,
            margin: '0 0 16px 0',
            lineHeight: 1.1,
            color: '#F5F2EB',
          }}
        >
          {title}
        </h2>
        <p
          style={{
            fontSize: 22,
            color: '#C7C3B8',
            margin: 0,
            letterSpacing: '0.04em',
          }}
        >
          {location} • Arsitek: {architect}
        </p>
      </div>
    </AbsoluteFill>
  );
};

// Scene 3: Zen Collection & Material Integrity
const SceneZenCollection: React.FC = () => {
  const frame = useCurrentFrame();

  const sceneOpacity = interpolate(frame, [0, 20, 95, 115], [0, 1, 1, 0], {
    extrapolateRight: 'clamp',
  });
  const zoom = interpolate(frame, [0, 115], [1.02, 1.1], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{ opacity: sceneOpacity }}>
      <Img
        src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=2000&q=85"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: `scale(${zoom})`,
          filter: 'brightness(0.68)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to top, rgba(10,11,14,0.95) 0%, rgba(10,11,14,0.3) 50%, rgba(10,11,14,0.8) 100%)',
        }}
      />

      {/* Centered Editorial Narrative */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '0 160px',
        }}
      >
        <span
          style={{
            fontFamily: "'Space Grotesk', monospace",
            fontSize: 16,
            letterSpacing: '0.25em',
            color: '#CBB38B',
            textTransform: 'uppercase',
            marginBottom: 20,
          }}
        >
          AUTHENTIC CRAFTSMANSHIP
        </span>
        <h2
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 64,
            fontWeight: 700,
            margin: '0 0 24px 0',
            lineHeight: 1.15,
            color: '#F5F2EB',
          }}
        >
          Material Honesty &amp; Inner Courtyards
        </h2>
        <p
          style={{
            fontSize: 24,
            color: '#C7C3B8',
            maxWidth: 900,
            lineHeight: 1.5,
          }}
        >
          Beton ekspos non-porous, kayu jati bersertifikasi, dan sirkulasi angin
          aktif tanpa kamuflase sintetis.
        </p>
      </div>
    </AbsoluteFill>
  );
};

// Scene 4: SORAI AI Guidance & Call to Action
const SceneClosing: React.FC = () => {
  const frame = useCurrentFrame();

  const sceneOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: 'clamp',
  });
  const scale = interpolate(frame, [0, 110], [0.95, 1.02], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        opacity: sceneOpacity,
        transform: `scale(${scale})`,
        backgroundColor: '#0A0B0E',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          width: 100,
          height: 100,
          borderRadius: 24,
          border: '1px solid rgba(203, 179, 139, 0.5)',
          backgroundColor: '#181B22',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 48,
          color: '#CBB38B',
          marginBottom: 32,
          boxShadow: '0 20px 50px rgba(0,0,0,0.8)',
        }}
      >
        ✦
      </div>

      <span
        style={{
          fontFamily: "'Space Grotesk', monospace",
          fontSize: 18,
          letterSpacing: '0.25em',
          color: '#CBB38B',
          textTransform: 'uppercase',
          marginBottom: 16,
        }}
      >
        GUIDED BY SORAI
      </span>

      <h2
        style={{
          fontFamily: "'Cinzel', serif",
          fontSize: 68,
          fontWeight: 700,
          margin: '0 0 20px 0',
          color: '#F5F2EB',
        }}
      >
        Private Walkthrough By Appointment.
      </h2>

      <p
        style={{
          fontFamily: "'Space Grotesk', monospace",
          fontSize: 24,
          color: '#8E929B',
          letterSpacing: '0.1em',
          margin: 0,
        }}
      >
        sora-property.com • Jakarta, 2026
      </p>
    </AbsoluteFill>
  );
};
