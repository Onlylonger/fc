"use client";

import { LiveProvider, LiveEditor, LivePreview, LiveError } from "react-live";
import { Button } from "fc/components";
import { themes } from "prism-react-renderer";

const scope = { Button };

const code = `
<>
    <Button>nihao</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="destructive">Destructive</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="link">Link</Button>
</>
`;

export function Demo() {
  return (
    <LiveProvider code={code} scope={scope} theme={themes.github}>
      <section className="border-accent border flex justify-center items-center py-5">
        <LivePreview />
      </section>
      <section>
        <LiveEditor />
      </section>
      <section>
        <LiveError />
      </section>
    </LiveProvider>
  );
}
