export function Logo() {
    return (
        <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="Galax.sect" className="w-8 h-8" />
            <span className="hidden sm:block font-bold text-lg">Galax<span className="text-eletric-blue">.sect</span></span>
        </div>
    )
}