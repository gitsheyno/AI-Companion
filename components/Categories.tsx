import prisma from "@/lib/prisma-db";
import { cn } from "@/lib/utils";
import Categori from "./Categori";
export default async function Categories(query: { query: string }) {
  const categories = await prisma.category.findMany();

  return (
    <div className="w-full overflow-x-auto space-x-2 flex p-1">
      <button
        className={cn(`
                            flex 
                            items-center
                            text-center
                            text-xs
                            md:text-sm
                            px-2
                            md:px-4
                            py-2
                            md:py-3
                            rounded-md
                            bg-slate-500
                            hover:opacity-75
                            transition
                    `)}
      >
        Newest
      </button>
      {categories.map((item) => (
        <Categori key={item.id} name={item.name} />
      ))}
    </div>
  );
}
