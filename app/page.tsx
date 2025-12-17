export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-bold text-gray-900">
        Dr Ashish Pandey Fitness
      </h1>

      <p className="mt-4 text-gray-600 max-w-xl">
        Professional physiotherapy, rehabilitation, and fitness care.
        Book appointments, choose beds, and get guidance instantly.
      </p>

      <div className="mt-6 flex gap-4">
        <a
          href="/appointments"
          className="px-6 py-3 bg-black text-white rounded-lg"
        >
          Book Appointment
        </a>

        <a
          href="/chatbot"
          className="px-6 py-3 border border-black rounded-lg"
        >
          Ask AI Assistant
        </a>
      </div>
    </main>
  );
}
