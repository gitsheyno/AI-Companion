import SearchInput from "@/components/SearchInput";

import Categories from "@/components/Categories";
import { Suspense } from "react";
export default async function RootPage({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  console.log("root", searchParams);
  const query = searchParams?.query || "";
  return (
    <div className="h-full p-4 space-y-2">
      <SearchInput />
      <Suspense fallback={<p>Loading Catergories ...</p>}>
        <Categories query={query} />
      </Suspense>
    </div>
  );
}
