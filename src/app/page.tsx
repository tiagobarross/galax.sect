import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-inter dark:bg-black">
      <main className="flex flex-1 w-full flex-col items-center bg-black dark:bg-black sm:items-start">
        <Navbar />

        <section className="w-full relative h-[100vh] flex items-center justify-center">

          {/* Background */}
          <div className="absolute inset-0">
            <img
              src="\blue_planet_background.png"
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Conteúdo */}
          <div className="relative z-10 text-center text-white px-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              Bem-vindo à Galax.sect
            </h1>
            <p className="mt-4 text-lg md:text-xl">
              Explorando ideias, tecnologia e o futuro.
            </p>
          </div>

        </section>
      </main>
    </div>
  );
}
