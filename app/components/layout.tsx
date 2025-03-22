export default function ComponentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const asideList = [
    {
      label: "Button",
      key: "button",
    },
    {
      label: "AppBar",
      key: "app-bar",
    },
  ];

  return (
    <div className="flex">
      <aside className="sticky top-14 h-[calc(100vh-(--spacing(14)))]">
        {asideList.map((v) => {
          return <div key={v.key}>{v.label}</div>;
        })}
      </aside>
      <section className="markdown-body">
        <main>
          {children}

          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              nostrum id quasi porro odit eaque molestias? Eligendi, vel
              delectus fuga necessitatibus quaerat nesciunt ullam itaque quo ut
              alias reiciendis velit?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              nostrum id quasi porro odit eaque molestias? Eligendi, vel
              delectus fuga necessitatibus quaerat nesciunt ullam itaque quo ut
              alias reiciendis velit?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              nostrum id quasi porro odit eaque molestias? Eligendi, vel
              delectus fuga necessitatibus quaerat nesciunt ullam itaque quo ut
              alias reiciendis velit?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              nostrum id quasi porro odit eaque molestias? Eligendi, vel
              delectus fuga necessitatibus quaerat nesciunt ullam itaque quo ut
              alias reiciendis velit?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              nostrum id quasi porro odit eaque molestias? Eligendi, vel
              delectus fuga necessitatibus quaerat nesciunt ullam itaque quo ut
              alias reiciendis velit?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              nostrum id quasi porro odit eaque molestias? Eligendi, vel
              delectus fuga necessitatibus quaerat nesciunt ullam itaque quo ut
              alias reiciendis velit?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              nostrum id quasi porro odit eaque molestias? Eligendi, vel
              delectus fuga necessitatibus quaerat nesciunt ullam itaque quo ut
              alias reiciendis velit?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              nostrum id quasi porro odit eaque molestias? Eligendi, vel
              delectus fuga necessitatibus quaerat nesciunt ullam itaque quo ut
              alias reiciendis velit?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              nostrum id quasi porro odit eaque molestias? Eligendi, vel
              delectus fuga necessitatibus quaerat nesciunt ullam itaque quo ut
              alias reiciendis velit?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              nostrum id quasi porro odit eaque molestias? Eligendi, vel
              delectus fuga necessitatibus quaerat nesciunt ullam itaque quo ut
              alias reiciendis velit?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              nostrum id quasi porro odit eaque molestias? Eligendi, vel
              delectus fuga necessitatibus quaerat nesciunt ullam itaque quo ut
              alias reiciendis velit?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              nostrum id quasi porro odit eaque molestias? Eligendi, vel
              delectus fuga necessitatibus quaerat nesciunt ullam itaque quo ut
              alias reiciendis velit?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              nostrum id quasi porro odit eaque molestias? Eligendi, vel
              delectus fuga necessitatibus quaerat nesciunt ullam itaque quo ut
              alias reiciendis velit?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              nostrum id quasi porro odit eaque molestias? Eligendi, vel
              delectus fuga necessitatibus quaerat nesciunt ullam itaque quo ut
              alias reiciendis velit?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              nostrum id quasi porro odit eaque molestias? Eligendi, vel
              delectus fuga necessitatibus quaerat nesciunt ullam itaque quo ut
              alias reiciendis velit?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              nostrum id quasi porro odit eaque molestias? Eligendi, vel
              delectus fuga necessitatibus quaerat nesciunt ullam itaque quo ut
              alias reiciendis velit?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              nostrum id quasi porro odit eaque molestias? Eligendi, vel
              delectus fuga necessitatibus quaerat nesciunt ullam itaque quo ut
              alias reiciendis velit?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              nostrum id quasi porro odit eaque molestias? Eligendi, vel
              delectus fuga necessitatibus quaerat nesciunt ullam itaque quo ut
              alias reiciendis velit?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              nostrum id quasi porro odit eaque molestias? Eligendi, vel
              delectus fuga necessitatibus quaerat nesciunt ullam itaque quo ut
              alias reiciendis velit?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              nostrum id quasi porro odit eaque molestias? Eligendi, vel
              delectus fuga necessitatibus quaerat nesciunt ullam itaque quo ut
              alias reiciendis velit?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              nostrum id quasi porro odit eaque molestias? Eligendi, vel
              delectus fuga necessitatibus quaerat nesciunt ullam itaque quo ut
              alias reiciendis velit?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              nostrum id quasi porro odit eaque molestias? Eligendi, vel
              delectus fuga necessitatibus quaerat nesciunt ullam itaque quo ut
              alias reiciendis velit?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              nostrum id quasi porro odit eaque molestias? Eligendi, vel
              delectus fuga necessitatibus quaerat nesciunt ullam itaque quo ut
              alias reiciendis velit?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              nostrum id quasi porro odit eaque molestias? Eligendi, vel
              delectus fuga necessitatibus quaerat nesciunt ullam itaque quo ut
              alias reiciendis velit?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              nostrum id quasi porro odit eaque molestias? Eligendi, vel
              delectus fuga necessitatibus quaerat nesciunt ullam itaque quo ut
              alias reiciendis velit?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              nostrum id quasi porro odit eaque molestias? Eligendi, vel
              delectus fuga necessitatibus quaerat nesciunt ullam itaque quo ut
              alias reiciendis velit?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              nostrum id quasi porro odit eaque molestias? Eligendi, vel
              delectus fuga necessitatibus quaerat nesciunt ullam itaque quo ut
              alias reiciendis velit?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              nostrum id quasi porro odit eaque molestias? Eligendi, vel
              delectus fuga necessitatibus quaerat nesciunt ullam itaque quo ut
              alias reiciendis velit?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              nostrum id quasi porro odit eaque molestias? Eligendi, vel
              delectus fuga necessitatibus quaerat nesciunt ullam itaque quo ut
              alias reiciendis velit?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              nostrum id quasi porro odit eaque molestias? Eligendi, vel
              delectus fuga necessitatibus quaerat nesciunt ullam itaque quo ut
              alias reiciendis velit?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              nostrum id quasi porro odit eaque molestias? Eligendi, vel
              delectus fuga necessitatibus quaerat nesciunt ullam itaque quo ut
              alias reiciendis velit?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              nostrum id quasi porro odit eaque molestias? Eligendi, vel
              delectus fuga necessitatibus quaerat nesciunt ullam itaque quo ut
              alias reiciendis velit?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              nostrum id quasi porro odit eaque molestias? Eligendi, vel
              delectus fuga necessitatibus quaerat nesciunt ullam itaque quo ut
              alias reiciendis velit?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              nostrum id quasi porro odit eaque molestias? Eligendi, vel
              delectus fuga necessitatibus quaerat nesciunt ullam itaque quo ut
              alias reiciendis velit?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              nostrum id quasi porro odit eaque molestias? Eligendi, vel
              delectus fuga necessitatibus quaerat nesciunt ullam itaque quo ut
              alias reiciendis velit?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              nostrum id quasi porro odit eaque molestias? Eligendi, vel
              delectus fuga necessitatibus quaerat nesciunt ullam itaque quo ut
              alias reiciendis velit?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              nostrum id quasi porro odit eaque molestias? Eligendi, vel
              delectus fuga necessitatibus quaerat nesciunt ullam itaque quo ut
              alias reiciendis velit?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              nostrum id quasi porro odit eaque molestias? Eligendi, vel
              delectus fuga necessitatibus quaerat nesciunt ullam itaque quo ut
              alias reiciendis velit?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              nostrum id quasi porro odit eaque molestias? Eligendi, vel
              delectus fuga necessitatibus quaerat nesciunt ullam itaque quo ut
              alias reiciendis velit?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              nostrum id quasi porro odit eaque molestias? Eligendi, vel
              delectus fuga necessitatibus quaerat nesciunt ullam itaque quo ut
              alias reiciendis velit?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              nostrum id quasi porro odit eaque molestias? Eligendi, vel
              delectus fuga necessitatibus quaerat nesciunt ullam itaque quo ut
              alias reiciendis velit?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              nostrum id quasi porro odit eaque molestias? Eligendi, vel
              delectus fuga necessitatibus quaerat nesciunt ullam itaque quo ut
              alias reiciendis velit?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              nostrum id quasi porro odit eaque molestias? Eligendi, vel
              delectus fuga necessitatibus quaerat nesciunt ullam itaque quo ut
              alias reiciendis velit?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              nostrum id quasi porro odit eaque molestias? Eligendi, vel
              delectus fuga necessitatibus quaerat nesciunt ullam itaque quo ut
              alias reiciendis velit?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              nostrum id quasi porro odit eaque molestias? Eligendi, vel
              delectus fuga necessitatibus quaerat nesciunt ullam itaque quo ut
              alias reiciendis velit?
            </p>
          </div>
        </main>
      </section>
      <aside className="sticky top-14  h-[calc(100vh-(--spacing(14)))]">
        asdfs
      </aside>
    </div>
  );
}
