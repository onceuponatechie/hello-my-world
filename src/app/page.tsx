export default function Home() {
  return (
    <main className="min-h-screen bg-backdrop p-12">
      <h1 className="font-serif text-6xl italic text-ink">Essy</h1>
      <p className="mt-3 text-[13px] text-muted-ink">
        Hanken Grotesk, muted ink, thirteen pixels.
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        <div className="h-20 w-32 rounded-2xl bg-butter" />
        <div className="h-20 w-32 rounded-2xl bg-butter-deep" />
        <div className="h-20 w-32 rounded-2xl bg-butter-soft" />
        <div className="h-20 w-32 rounded-2xl bg-sage" />
        <div className="h-20 w-32 rounded-2xl bg-sage-soft" />
        <div className="h-20 w-32 rounded-2xl bg-lilac" />
        <div className="h-20 w-32 rounded-2xl bg-lavender-soft" />
        <div className="h-20 w-32 rounded-2xl bg-ink" />
        <div className="h-20 w-32 rounded-2xl bg-paper shadow-sm" />
      </div>
    </main>
  );
}