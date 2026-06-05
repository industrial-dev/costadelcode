import {
  AbsoluteFill,
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

export interface IntroCompositionProps extends Record<string, unknown> {
  title: string;
  location: string;
  tagline: string;
  codeLine: string;
}

const cream = '#f6f1e8';
const ink = '#111111';
const pixelShadow = [
  '1px 0 0 #111111',
  '2px 0 0 #111111',
  '0 1px 0 #111111',
  '0 2px 0 #111111',
  '1px 1px 0 #111111',
  '2px 1px 0 #111111',
  '1px 2px 0 #111111',
  '3px 3px 0 rgba(17, 17, 17, 0.22)',
  '4px 4px 0 rgba(17, 17, 17, 0.12)',
].join(', ');

export const IntroComposition = ({ title }: IntroCompositionProps) => {
  const frame = useCurrentFrame();
  const { fps, width } = useVideoConfig();
  const finalWord = title.split(' ').at(-1) ?? 'Code';
  const fontSize = Math.min(width * 0.092, 148);
  const wordGapEm = 0.28;
  const solWidthCh = 3.4;

  const introProgress = spring({
    fps,
    frame: frame - 6,
    config: {
      damping: 18,
      stiffness: 170,
      mass: 0.9,
    },
  });

  const strikeProgress = interpolate(frame, [56, 72], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.33, 1, 0.68, 1),
  });

  const codeProgress = spring({
    fps,
    frame: frame - 74,
    config: {
      damping: 16,
      stiffness: 180,
      mass: 0.95,
    },
  });

  const settleProgress = spring({
    fps,
    frame: frame - 82,
    config: {
      damping: 20,
      stiffness: 220,
      mass: 0.9,
    },
  });

  const mergeProgress = interpolate(frame, [108, 126], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.2, 0.8, 0.2, 1),
  });

  const renderAnimatedWord = (
    word: string,
    startFrame: number,
    rotation: number,
    fontFamily: string,
    letterSpacing = 0,
    lineHeight = 0.95
  ) => {
    return (
      <span
        style={{
          display: 'inline-flex',
          fontFamily,
          letterSpacing,
          lineHeight,
        }}
      >
        {word.split('').map((letter, index) => {
          const letterProgress = spring({
            fps,
            frame: frame - startFrame - index * 3,
            config: {
              damping: 17,
              stiffness: 190,
              mass: 0.85,
            },
          });

          return (
            <span
              key={`${word}-${letter}-${index}`}
              style={{
                display: 'inline-block',
                opacity: letterProgress,
                transform: `translateY(${interpolate(letterProgress, [0, 1], [70, 0])}px) rotate(${interpolate(letterProgress, [0, 1], [rotation, 0])}deg)`,
              }}
            >
              {letter}
            </span>
          );
        })}
      </span>
    );
  };

  return (
    <AbsoluteFill
      style={{
        backgroundColor: cream,
        color: ink,
        fontFamily: 'Chakra Petch, Inter, system-ui, sans-serif',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 80,
        }}
      >
        <h1
          style={{
            margin: 0,
            display: 'flex',
            alignItems: 'baseline',
            gap: '0.28em',
            flexWrap: 'nowrap',
            justifyContent: 'center',
            fontSize,
            lineHeight: 0.95,
            letterSpacing: '-0.04em',
            fontWeight: 700,
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            transform: `translateY(${interpolate(introProgress, [0, 1], [30, 0])}px)`,
          }}
        >
          {renderAnimatedWord(
            'Costa',
            4,
            -8,
            'Silkscreen, VT323, Courier New, monospace'
          )}
          {renderAnimatedWord(
            'del',
            20,
            -6,
            'Silkscreen, VT323, Courier New, monospace'
          )}
          <span
            style={{
              position: 'relative',
              display: 'inline-flex',
              alignItems: 'baseline',
              gap: `${interpolate(mergeProgress, [0, 1], [wordGapEm, 0])}em`,
            }}
          >
            <span
              style={{
                position: 'relative',
                display: 'inline-block',
                width: `${interpolate(mergeProgress, [0, 1], [solWidthCh, 0])}ch`,
                opacity: 1 - mergeProgress,
                overflow: 'hidden',
                whiteSpace: 'nowrap',
              }}
            >
              <span style={{ display: 'inline-block' }}>
                {renderAnimatedWord(
                  'Sol',
                  34,
                  8,
                  'Silkscreen, VT323, Courier New, monospace',
                  0,
                  0.95
                )}
              </span>

              <span
                style={{
                  position: 'absolute',
                  left: '-0.04em',
                  right: '-0.02em',
                  top: '52%',
                  height: Math.max(fontSize * 0.045, 6),
                  borderRadius: 999,
                  backgroundColor: ink,
                  transformOrigin: '0 50%',
                  transform: `translateY(-50%) scaleX(${strikeProgress})`,
                }}
              />
            </span>

            <span
              style={{
                display: 'inline-block',
                fontFamily: 'Silkscreen, VT323, Courier New, monospace',
                letterSpacing: 0,
                lineHeight: 0.95,
                textShadow: pixelShadow,
                WebkitTextStroke: '1px #111111',
                paintOrder: 'stroke fill',
                opacity: interpolate(codeProgress, [0, 0.08, 1], [0, 1, 1], {
                  extrapolateLeft: 'clamp',
                  extrapolateRight: 'clamp',
                }),
                transform: `translateY(${interpolate(codeProgress, [0, 0.8, 1], [-280, 18, 0])}px) scale(${interpolate(settleProgress, [0, 0.6, 1], [1.16, 0.96, 1])})`,
                transformOrigin: '50% 100%',
              }}
            >
              {finalWord}
            </span>
          </span>
        </h1>
      </div>
    </AbsoluteFill>
  );
};
