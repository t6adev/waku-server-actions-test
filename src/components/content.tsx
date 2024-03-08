'use client';

import { FC, useTransition } from 'react';

export const Content: FC<{ serverActionA: () => void; serverActionB: () => void }> = ({
  serverActionA,
  serverActionB,
}) => {
  const [running, startTransition] = useTransition();
  const [runningB, startTransitionB] = useTransition();

  function runBoth() {
    // serverActionA();
    // serverActionB();
    startTransition(() => serverActionA());
    startTransitionB(() => serverActionB());
  }

  return (
    <div className="p-4">
      <button onClick={runBoth}>Run</button>
    </div>
  );
};
