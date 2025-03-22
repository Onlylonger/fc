import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { themes } from "prism-react-renderer";
import { CodeIcon, PlayIcon } from "@shilong/rc/icons";
import { Fragment } from "react";

export function LivePlayground(props: {
  scope?: Record<string, unknown>;
  codeString: string;
}) {
  const { scope, codeString } = props;

  return (
    <LiveProvider code={codeString} scope={scope} theme={themes.github}>
      <div className="mt-5">
        <div className="flex gap-2 text-sm items-center bg-accent h-8 rounded-t-sm px-2">
          <PlayIcon size={14} />
          <span>Preview</span>
        </div>
        <div className="flex justify-center items-center border border-accent min-h-75 px-5">
          <LivePreview Component={Fragment} />
          <LiveError className="text-red-800! bg-red-100!" />
        </div>
      </div>

      <div className="mt-5">
        <div className="flex gap-2 text-sm items-center bg-accent h-8 rounded-t-sm px-2">
          <CodeIcon size={14} />
          <span>Editable</span>
        </div>
        <LiveEditor className="[&_pre]:rounded-none! [&_pre]:bg-white! [&_pre]:border-accent [&_pre]:border" />
      </div>
    </LiveProvider>
  );
}
