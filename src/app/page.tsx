export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero Section */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="mb-4 rounded-full border border-gray-700 px-4 py-2 text-sm text-gray-300">
          AI-Powered Video Creation
        </div>

        <h1 className="max-w-4xl text-5xl font-bold md:text-7xl">
          Turn Any Idea Into A Professional Video
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-400">
          Describe your idea using text or voice. Ideon automatically creates
          the script, narration, visuals, and final video — all in one place.
        </p>

        <div className="mt-8">
  <a
    href="https://docs.google.com/forms/d/e/1FAIpQLSfA8wJA74e8vsbWXFuYHnVToaHtkOlGp_w4hMkRrMd4yi9oxw/viewform"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block rounded-xl bg-white px-6 py-3 font-semibold text-black"
  >
    Get Early Access
  </a>
</div>
      </section>

      {/* Problem Section */}
      <section className="px-6 py-24 text-center">
        <h2 className="text-4xl font-bold">
          Creating Videos Shouldn't Require 5 Different Tools
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-gray-400">
          Most creators waste hours switching between script writers,
          voice generators, visual tools, editors, and export software.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-5">
          <div className="rounded-2xl border border-gray-800 p-6">
            📝 Script
          </div>

          <div className="rounded-2xl border border-gray-800 p-6">
            🎙 Voice
          </div>

          <div className="rounded-2xl border border-gray-800 p-6">
            🎨 Visuals
          </div>

          <div className="rounded-2xl border border-gray-800 p-6">
            ✂ Editing
          </div>

          <div className="rounded-2xl border border-gray-800 p-6">
            📤 Export
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-24 text-center">
        <h2 className="text-4xl font-bold">
          From Idea To Video In 3 Simple Steps
        </h2>

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-800 p-8">
            <h3 className="text-xl font-semibold">
              1. Describe Your Idea
            </h3>

            <p className="mt-4 text-gray-400">
              Type or speak naturally.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 p-8">
            <h3 className="text-xl font-semibold">
              2. AI Creates Everything
            </h3>

            <p className="mt-4 text-gray-400">
              Script, scenes, narration and visuals.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 p-8">
            <h3 className="text-xl font-semibold">
              3. Export Your Video
            </h3>

            <p className="mt-4 text-gray-400">
              Get a complete professional video.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-24 text-center">
        <h2 className="text-4xl font-bold">
          Everything You Need In One Platform
        </h2>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-800 p-8">
            Text-to-Video
          </div>

          <div className="rounded-2xl border border-gray-800 p-8">
            Voice-to-Video
          </div>

          <div className="rounded-2xl border border-gray-800 p-8">
            AI Script Writing
          </div>

          <div className="rounded-2xl border border-gray-800 p-8">
            AI Voiceovers
          </div>

          <div className="rounded-2xl border border-gray-800 p-8">
            AI Visual Generation
          </div>

          <div className="rounded-2xl border border-gray-800 p-8">
            Long-Form Videos
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="px-6 py-24 text-center">
        <h2 className="text-4xl font-bold">
          Be Among The First To Experience Ideon
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-gray-400">
          Join the waitlist and get early access when Ideon launches.
        </p>

        <div className="mx-auto mt-10 flex max-w-md flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="rounded-xl border border-gray-700 bg-black p-4"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="rounded-xl border border-gray-700 bg-black p-4"
          />

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfA8wJA74e8vsbWXFuYHnVToaHtkOlGp_w4hMkRrMd4yi9oxw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-white p-4 font-semibold text-black text-center"
          >
            Get Early Access
          </a>
        </div>
      </section>

    </main>
  );
}