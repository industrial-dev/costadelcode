import { AbsoluteFill, useCurrentFrame, useVideoConfig } from 'remotion';

export interface IntroCompositionProps extends Record<string, unknown> {
  title: string;
  location: string;
  tagline: string;
  codeLine: string;
}

const cream = '#f6f1e8';
const ink = '#111111';
const accent = '#f3d458';

export const IntroComposition = ({ title }: IntroCompositionProps) => {
  const frame = useCurrentFrame();
  const { width } = useVideoConfig();
  const titleWords = title.split(' ');
  const finalWord = titleWords[titleWords.length - 1] ?? 'Code';
  const fontSize = Math.min(width * 0.094, 150);
  const typingFrame = 8;
  const deletingFrame = 58;
  const retypingFrame = 74;
  const stepsPerChar = 3;
  const prefix = 'Costa del ';
  const firstPhrase = `${prefix}Sol`;
  const finalPhrase = `${prefix}${finalWord}`;
  const reservedWidthCh = finalPhrase.length + 0.5;

  const typedChars = Math.max(
    0,
    Math.min(
      firstPhrase.length,
      Math.floor((frame - typingFrame) / stepsPerChar) + 1
    )
  );
  const deleteChars = Math.max(
    0,
    Math.min(3, Math.floor((frame - deletingFrame) / stepsPerChar) + 1)
  );
  const codeChars = Math.max(
    0,
    Math.min(
      finalWord.length,
      Math.floor((frame - retypingFrame) / stepsPerChar) + 1
    )
  );

  let visibleText = '';

  if (frame < deletingFrame) {
    visibleText = firstPhrase.slice(0, typedChars);
  } else if (frame < retypingFrame) {
    visibleText = firstPhrase.slice(0, firstPhrase.length - deleteChars);
  } else {
    visibleText = `${prefix}${finalWord.slice(0, codeChars)}`;
  }

  const blinkCycle = frame % 28;
  const cursorVisible =
    blinkCycle < 15 || (blinkCycle >= 20 && blinkCycle < 23);
  const highlightedIndexes = new Set([0, prefix.length]);

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
            display: 'inline-flex',
            alignItems: 'baseline',
            flexWrap: 'nowrap',
            justifyContent: 'flex-start',
            width: `${reservedWidthCh}ch`,
            fontSize,
            lineHeight: 0.95,
            letterSpacing: '-0.04em',
            fontWeight: 700,
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            fontFamily: 'Silkscreen, VT323, Courier New, monospace',
            transform: 'translateX(0.22em)',
          }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'baseline',
              whiteSpace: 'pre',
            }}
          >
            <span
              style={{
                display: 'inline-block',
              }}
            >
              {Array.from(visibleText).map((character, index) => (
                <span
                  key={`${character}-${index}`}
                  style={{
                    color:
                      character === 'C' && highlightedIndexes.has(index)
                        ? accent
                        : ink,
                  }}
                >
                  {character}
                </span>
              ))}
            </span>
            <span
              style={{
                display: 'inline-block',
                width: '0.28em',
                height: '0.78em',
                marginLeft: '0.1em',
                backgroundColor: ink,
                opacity: cursorVisible ? 1 : 0,
                transform: 'translateY(0.02em)',
              }}
            />
          </span>
        </h1>
      </div>
    </AbsoluteFill>
  );
};
