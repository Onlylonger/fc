import { ActiveButtonLink } from "../shared/ActiveLink";
import { catList } from "./utils";

export default function ComponentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <aside className="sticky top-14 h-[calc(100vh-(--spacing(14)))] shrink-0 w-[240px] px-2 flex flex-col gap-2 pt-4">
        {catList.map((v) => {
          return (
            <div key={v.id}>
              <ActiveButtonLink size="sm" href={`/components/${v.id}`} exact>
                {v.label}
              </ActiveButtonLink>
            </div>
          );
        })}
      </aside>
      <section className="markdown-body flex-1">
        <main>{children}</main>
      </section>
      <aside className="sticky top-14  h-[calc(100vh-(--spacing(14)))] shrink-0">
        asdfs
      </aside>
    </div>
  );
}
