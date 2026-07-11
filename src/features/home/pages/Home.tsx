import React from "react";
import { Link } from "react-router-dom";

const PURPLE = "#6d28d2";

export function Home() {
  return (
    <main className="w-full bg-white">
      {/* Hero — matches live Udemy: contained banner + floating promo card */}
      {/* Live Udemy: centered 1340px banner, 400px tall, contain image, 440px card */}
      <section className="w-full">
        <div className="relative mx-auto h-[280px] w-full max-w-[1340px] overflow-hidden sm:h-[340px] md:h-[400px]">
          <img
            src="../../../public/homeBanner.jpg"
            alt=""
            className="pointer-events-none absolute inset-0 h-full w-full object-contain object-center"
          />

          <div className="absolute left-4 top-1/2 z-10 w-[min(100%-2rem,26rem)] -translate-y-1/2 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08),0_4px_16px_rgba(0,0,0,0.12)] sm:left-8 md:left-12 md:p-5 rounded-lg">
            <h1 className="text-2xl font-bold leading-tight text-[#1c1d1f] md:text-[1.75rem] md:leading-snug">
              30% off your first 3 months. Learn more for less.
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-[#3e4143] md:text-[0.85rem]">
              Personal Plan is your career companion for AI and more cutting-edge
              skills. Sale ends July 12.{" "}
              <a href="#" className="underline underline-offset-2 hover:text-[#1c1d1f]">
                Terms apply
              </a>
              .
            </p>
            <Link
              to="/signup"
              className="rounded-lg mt-5 inline-flex h-12 items-center justify-center rounded px-5 text-base font-bold text-white hover:brightness-95"
              style={{ backgroundColor: PURPLE }}
            >
              Save now
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1340px] px-4 pb-12 md:px-6">
        <h2 className="text-2xl font-bold text-[#1c1d1f] md:text-[1.75rem]">
          Trending courses
        </h2>
      </section>
    </main>
  );
}
