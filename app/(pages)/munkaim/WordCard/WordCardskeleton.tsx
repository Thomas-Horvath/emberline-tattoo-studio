export function WorkCardSkeleton() {
  return (
    <div className="absolute inset-0 z-10 animate-pulse bg-zinc-950/40">
      <div className="aspect-square w-full bg-linear-to-br from-zinc-900 via-zinc-800 to-zinc-900" />
      <div className="space-y-3 p-5">
        <div className="h-4 w-28 rounded bg-zinc-800" />
      </div>
    </div>
  );
}