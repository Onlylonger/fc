"use client";

import { useIsMobile } from "../../hooks";

export const BackTop = () => {
  return <>||</>;
};

interface LayoutProps {
  left: React.ReactNode;
  right?: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { left, right } = props;

  return (
    <header className="sl-app-bar">
      <div className="demo flex h-full w-full items-center justify-between px-5">
        <div className="flex items-center gap-2">{left}</div>
        <div className="flex gap-2">{right}</div>
      </div>
    </header>
  );
};

export const AppBar = (props: { mobile: LayoutProps; tablet: LayoutProps }) => {
  const { mobile, tablet } = props;
  const isMobile = useIsMobile();

  if (isMobile) {
    return <Layout left={mobile.left} right={mobile.right} />;
  }

  return <Layout left={tablet.left} right={tablet.right} />;
};
