export default function ComponentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="markdown-body">{children}</section>;
}
