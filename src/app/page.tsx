import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-inter dark:bg-black">
      <main className="flex flex-1 w-full flex-col items-center justify-between bg-black dark:bg-black sm:items-start">
        <Navbar />
      </main>
    </div>
  );
}
