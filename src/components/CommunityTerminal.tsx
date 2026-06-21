import { useEffect, useMemo, useState, type ReactElement } from 'react';
import { TerminalIcon } from 'lucide-react';
import { GoTerminal } from 'react-icons/go';

type TerminalStep = {
  text: string;
  bold?: boolean;
};

type TerminalProps = {
  command: string;
  steps: TerminalStep[];
  pulseInterval?: number;
  stepInterval?: number;
  showLocalhost?: boolean;
  hostBarTitle?: string;
  hostMessage?: string;
};

function MacControls() {
  return (
    <>
      <GoTerminal className="text-stone-500 mr-1 size-4" />
      <div className="h-2 w-2 rounded-full bg-red-500" />
      <div className="h-2 w-2 rounded-full bg-yellow-500" />
      <div className="h-2 w-2 rounded-full bg-green-500" />
    </>
  );
}

function LocalHost({ title, message }: { title: string; message: string }) {
  return (
    <div className="bg-ink-950 absolute right-4 bottom-5 z-10 overflow-hidden rounded-md border border-[rgb(255_255_255/0.1)] shadow-xl">
      <div className="bg-[rgb(255_255_255/0.06)] text-stone-500 relative flex h-6 flex-row items-center border-b border-[rgb(255_255_255/0.1)] px-4 text-xs font-mono">
        <TerminalIcon className="absolute inset-2 size-3" />
        <p className="absolute inset-x-0 text-center">{title}</p>
      </div>
      <div className="text-code-lime p-4 text-sm font-mono">{message}</div>
    </div>
  );
}

const CommunityTerminal = ({
  command,
  steps,
  pulseInterval = 60,
  stepInterval = 500,
  showLocalhost = true,
  hostBarTitle = 'localhost:3000',
  hostMessage = 'New App Created!',
}: TerminalProps) => {
  const typingLen = useMemo(() => command.length, [command]);
  const revealLen = useMemo(() => steps.length, [steps]);
  const finalCount = typingLen + revealLen + 1;

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter >= finalCount) return;
    const delay = counter < typingLen ? pulseInterval : stepInterval;
    const t = setTimeout(() => setCounter((c) => c + 1), delay);
    return () => clearTimeout(t);
  }, [counter, pulseInterval, stepInterval, typingLen, finalCount]);

  useEffect(() => {
    if (counter < finalCount) return;
    const t = setTimeout(() => setCounter(0), 5000);
    return () => clearTimeout(t);
  }, [counter, finalCount]);

  const elements: ReactElement[] = [];

  const typedChars = Math.min(counter, typingLen);
  const isTyping = counter < typingLen;

  elements.push(
    <span key="command" className="text-code-lime font-mono">
      {command.substring(0, typedChars)}
      {isTyping && (
        <div className="bg-code-lime inline-block h-3 w-1 animate-pulse" />
      )}
    </span>
  );

  if (!isTyping) {
    const shownSteps = Math.min(revealLen, counter - typingLen);
    if (shownSteps > 0) {
      elements.push(<span key="space"> </span>);
    }
    for (let i = 0; i < shownSteps; i++) {
      const step = steps[i];
      elements.push(
        <span
          key={`step-${i}`}
          className={
            step.bold
              ? 'text-code-lime font-mono font-bold'
              : 'text-code-lime font-mono'
          }
        >
          {step.text}
        </span>
      );
    }
  }

  const revealComplete = counter > typingLen + revealLen;

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        if (counter >= finalCount) {
          setCounter(0);
        }
      }}
    >
      {showLocalhost && revealComplete && (
        <LocalHost title={hostBarTitle} message={hostMessage} />
      )}

      <pre className="bg-ink-950 w-full overflow-hidden rounded-xl border border-[rgb(255_255_255/0.1)] text-[11px] shadow-lg sm:text-[12px] md:text-[13px]">
        <div className="bg-[rgb(255_255_255/0.06)] flex flex-row items-center gap-2 border-b border-[rgb(255_255_255/0.1)] px-3 py-2 sm:px-4">
          <MacControls />
        </div>
        <div className="from-ink-950 to-[rgb(255_255_255/0.04)] h-90 bg-linear-to-b">
          <div className="grid p-3 whitespace-pre-wrap leading-[1.4] sm:p-4 md:p-5">
            {elements}
          </div>
        </div>
      </pre>
    </div>
  );
};

export default CommunityTerminal;
