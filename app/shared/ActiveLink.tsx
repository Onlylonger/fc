"use client";

import cx from "clsx";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "fc/components";

interface ActiveLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
}

export function ActiveButtonLink(props: ActiveLinkProps) {
  const { children, ...reset } = props;

  return (
    <ActiveLink {...reset}>
      <Button variant="ghost" className="w-full justify-start">
        {children}
      </Button>
    </ActiveLink>
  );
}

export function ActiveLink(props: ActiveLinkProps) {
  const { children, ...reset } = props;

  const pathname = usePathname();

  const classNames = cx(
    props.className,
    pathname === reset.href ? "bg-accent text-accent-foreground rounded-md" : ""
  );

  return (
    <Link {...reset} className={classNames}>
      {children}
    </Link>
  );
}
