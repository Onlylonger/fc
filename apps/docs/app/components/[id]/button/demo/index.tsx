"use client";

import { Button } from "@shilong/rc/components";
import { MenuIcon } from "@shilong/rc/icons";
import { LivePlayground } from "@/app/shared/LivePlaygournd";

const scope = { Button, MenuIcon };
import normalStr from "./normal-string.txt";

export function Demo() {
  return <LivePlayground codeString={normalStr} scope={scope} />;
}
