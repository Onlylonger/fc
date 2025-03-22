"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { Button, ButtonProps } from "@shilong/rc/components";
import { cx } from "@shilong/rc/utils";
import { useMemo } from "react";

interface ActiveLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  exact?: boolean;
}

export function ActiveButtonLink(
  props: ActiveLinkProps & {
    size?: ButtonProps["size"];
  }
) {
  const { children, size, ...reset } = props;

  return (
    <ActiveLink {...reset}>
      <Button variant="ghost" className="w-full justify-start" size={size}>
        {children}
      </Button>
    </ActiveLink>
  );
}

export function ActiveLink(props: ActiveLinkProps) {
  const { children, exact = false, ...reset } = props;

  const pathname = usePathname();

  const match = useMemo(() => {
    if (exact) {
      return pathname === reset.href;
    }
    return pathname.startsWith(reset.href.toString());
  }, [exact, reset.href, pathname]);

  const classNames = cx(
    props.className,
    match
      ? "bg-accent text-accent-foreground rounded-md h-full inline-block w-full"
      : ""
  );

  return (
    <Link {...reset} className={classNames}>
      {children}
    </Link>
  );
}
