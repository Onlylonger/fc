"use client";

import { Button } from "@shilong/rc/components";
import { LivePlayground } from "@/app/shared/LivePlaygournd";

const scope = { Button };
import normalStr from "./normal-string.txt";

export function Demo() {
  return <LivePlayground codeString={normalStr} scope={scope} />;
}
