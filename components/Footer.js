export default function Footer() {
  return (
    <footer className="w-full bg-zinc-900 text-zinc-400 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <p className="text-sm">
          © {new Date().getFullYear()} Dr Ashish Pandey Fitness. All rights reserved.
        </p>

        <p className="text-sm">
          Made by{" "}
          <a
            href="http://arisht-jain.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-200 hover:underline"
          >
            Arisht Jain
          </a>
        </p>

      </div>
    </footer>
  );
}
