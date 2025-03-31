import { ActiveButtonLink } from "../shared/ActiveLink";

interface AsideProps {
  list: { id: string; label: string }[];
}

export const Aside = (props: AsideProps) => {
  const { list } = props;

  return (
    <>
      <aside className="hidden md:flex sticky top-14 h-[calc(100vh-(--spacing(14)))] shrink-0 w-[240px] px-2 flex-col gap-2 pt-4">
        {list.map((v) => {
          return (
            <div key={v.id}>
              <ActiveButtonLink size="sm" href={`/components/${v.id}`} exact>
                {v.label}
              </ActiveButtonLink>
            </div>
          );
        })}
        <div className="inline-flex">demo</div>
      </aside>
    </>
  );
};
