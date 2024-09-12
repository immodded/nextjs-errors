import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Link
  href="/play?url=https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
  className="inline-block bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transform transition-all hover:bg-red-700 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
>
  Produce Error
</Link>

        <code>
        ⨯ ReferenceError: document is not defined
    at __webpack_require__ (/workspaces/animeTV/.next/server/webpack-runtime.js:33:42)
    at eval (./src/app/ui/videoplayer.js:10:62)
    at (ssr)/./src/app/ui/videoplayer.js (/workspaces/animeTV/.next/server/app/play/page.js:161:1)
    at Object.__webpack_require__ [as require] (/workspaces/animeTV/.next/server/webpack-runtime.js:33:42)
digest: "2279535291"
 GET /play?url=https://www118.anzeat.pro/streamhls/57d3b2bbbb8501f10051c42840b7651a/ep.1.1720367014.720.m3u8 500 in 6012ms
        </code>
      </main>
      
    </div>
  );
}
