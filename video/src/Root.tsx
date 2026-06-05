import { Composition, type AnyZodObject } from 'remotion';
import {
  IntroComposition,
  type IntroCompositionProps,
} from './IntroComposition';

const defaultProps: IntroCompositionProps = {
  title: 'Costa del Code',
  location: 'Estepona · Costa del Sol',
  tagline: 'Code local. Build global.',
  codeLine: "const intro = 'hello costa del code';",
};

export const RemotionRoot = () => {
  return (
    <Composition<AnyZodObject, IntroCompositionProps>
      id="CostaDelCodeIntro"
      component={IntroComposition}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={defaultProps}
    />
  );
};
