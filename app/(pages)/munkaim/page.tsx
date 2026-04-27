import { works } from "@/Data/data"
import WorkCards from "./WordCard/WordCard"
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: " ETS - Munkáim",
};



export default function MunkakPage() {


  return (
    <main className="pt-32 pb-20">
      <div className="mx-auto max-w-350 px-6">
        <h1 className="text-4xl font-semibold text-zinc-100">
          Munkáim
        </h1>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">


          {
            works.map((w) => (
              <WorkCards w={w} key={w.id} />
            ))}
        </div>
      </div>
    </main>
  );
}