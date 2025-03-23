import { Suspense } from "react";
import { catList, catMap } from "../utils";

export function generateStaticParams() {
  return catList;
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (!catMap.has(id)) {
    return <>{id} not exist</>;
  }

  const MDContent = catMap.get(id).MDContent;

  return (
    <div>
      <Suspense fallback="loading...">
        <MDContent />
      </Suspense>
    </div>
  );
}
