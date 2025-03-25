import { catList } from "./utils";
import { Aside } from "./Aside";

export default function ComponentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Aside list={catList} />
      <section className="markdown-body flex-1">
        <main>{children}</main>
      </section>
      {/* <aside className="hidden md:block sticky top-14 h-[calc(100vh-(--spacing(14)))] shrink-0">
        asdfs
      </aside> */}
    </div>
  );
}
