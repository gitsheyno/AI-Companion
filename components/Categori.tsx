"use client";

import { cn } from "@/lib/utils";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function Category({ name, id }: { name: string; id: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const categoryId = searchParams.get("categoriId");

  const handleClick = (name: string) => {
    const params = new URLSearchParams(searchParams);
    console.log(name);
    const test = encodeURIComponent(name);

    if (test) {
      params.set("categoriId", test as string);
    } else {
      params.delete("categoriId");
    }
    console.log(1);
    console.log(id);

    replace(`${pathname}?${params.toString()}`);

    console.log("id = ", name, "categoriID", categoryId);
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const buttonName = e.currentTarget.getAttribute("name");
    if (buttonName) {
      handleClick(buttonName);
    }
  };
  return (
    <button
      name={name}
      onClick={handleButtonClick}
      className={cn(
        `
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
      `,
        encodeURIComponent(name) ===
          encodeURIComponent(searchParams.get("categoriId") as string)
          ? "bg-slate-700"
          : "  bg-slate-500"
      )}
    >
      {name}
    </button>
  );
}
