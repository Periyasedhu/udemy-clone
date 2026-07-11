import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  Menu,
  X,
  Globe,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

const PURPLE = "#6d28d2";

type MegaItem = {
  label: string;
  icon?: "google";
  panelTitle: string;
  links: string[];
};

const NEW_FEATURED: MegaItem[] = [
  {
    label: "Learn AI with Google",
    icon: "google",
    panelTitle: "Google Learning Paths",
    links: [
      "Google AI Professional Certificate",
      "Google AI Essentials",
      "Accelerate Your Job Search with AI",
      "All Learn AI with Google",
    ],
  },
  {
    label: "Learn AI",
    panelTitle: "Popular AI topics",
    links: [
      "ChatGPT",
      "Generative AI",
      "Prompt Engineering",
      "Machine Learning",
      "All Learn AI",
    ],
  },
  {
    label: "In-demand careers",
    panelTitle: "Career Accelerators",
    links: [
      "Data Scientist",
      "Full Stack Web Developer",
      "Cloud Engineer",
      "Project Manager",
      "All Career Accelerators",
    ],
  },
  {
    label: "Courses with Role Play",
    panelTitle: "Practice with Role Play",
    links: [
      "Communication skills",
      "Leadership",
      "Sales",
      "Customer service",
      "All Role Play courses",
    ],
  },
];

const CATEGORIES: MegaItem[] = [
  {
    label: "Development",
    panelTitle: "Popular topics",
    links: [
      "Web Development",
      "Data Science",
      "Mobile Development",
      "Programming Languages",
      "Game Development",
      "Database Design & Development",
      "Software Testing",
      "Software Engineering",
    ],
  },
  {
    label: "Business",
    panelTitle: "Popular topics",
    links: [
      "Entrepreneurship",
      "Communication",
      "Management",
      "Sales",
      "Business Strategy",
      "Operations",
      "Project Management",
      "Business Law",
    ],
  },
  {
    label: "Finance & Accounting",
    panelTitle: "Popular topics",
    links: [
      "Accounting & Bookkeeping",
      "Compliance",
      "Cryptocurrency & Blockchain",
      "Economics",
      "Finance",
      "Finance Cert & Exam Prep",
      "Financial Modeling & Analysis",
      "Investing & Trading",
    ],
  },
  {
    label: "IT & Software",
    panelTitle: "Popular topics",
    links: [
      "IT Certifications",
      "Network & Security",
      "Hardware",
      "Operating Systems & Servers",
      "Other IT & Software",
    ],
  },
  {
    label: "Office Productivity",
    panelTitle: "Popular topics",
    links: ["Microsoft", "Apple", "Google", "SAP", "Oracle", "Other Office Productivity"],
  },
  {
    label: "Personal Development",
    panelTitle: "Popular topics",
    links: [
      "Personal Transformation",
      "Personal Productivity",
      "Leadership",
      "Career Development",
      "Parenting & Relationships",
      "Happiness",
      "Esoteric Practices",
      "Religion & Spirituality",
    ],
  },
  {
    label: "Design",
    panelTitle: "Popular topics",
    links: [
      "Web Design",
      "Graphic Design & Illustration",
      "Design Tools",
      "User Experience Design",
      "Game Design",
      "3D & Animation",
      "Fashion Design",
      "Architectural Design",
    ],
  },
  {
    label: "Marketing",
    panelTitle: "Popular topics",
    links: [
      "Digital Marketing",
      "Search Engine Optimization",
      "Social Media Marketing",
      "Branding",
      "Marketing Fundamentals",
      "Marketing Analytics & Automation",
      "Public Relations",
      "Advertising",
    ],
  },
  {
    label: "Lifestyle",
    panelTitle: "Popular topics",
    links: [
      "Arts & Crafts",
      "Beauty & Makeup",
      "Esoteric Practices",
      "Food & Beverage",
      "Gaming",
      "Home Improvement & Gardening",
      "Pet Care & Training",
      "Travel",
    ],
  },
  {
    label: "Photography & Video",
    panelTitle: "Popular topics",
    links: [
      "Digital Photography",
      "Photography",
      "Portrait Photography",
      "Photography Tools",
      "Commercial Photography",
      "Video Design",
      "Photography & Video",
    ],
  },
  {
    label: "Health & Fitness",
    panelTitle: "Popular topics",
    links: [
      "Fitness",
      "General Health",
      "Sports",
      "Nutrition & Diet",
      "Yoga",
      "Mental Health",
      "Martial Arts & Self Defense",
      "Safety & First Aid",
    ],
  },
];

function GoogleG({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function UdemyLogo() {
  return (
    <span className="relative inline-flex items-baseline font-bold tracking-tight text-[#1c1d1f]">
      <span
        className="absolute -top-1 left-[0.12em] text-[0.5em] leading-none"
        style={{ color: PURPLE }}
        aria-hidden
      >
        ▲
      </span>
      <span className="text-[1.65rem] leading-none">udemy</span>
    </span>
  );
}

function FindCoursesMenu() {
  const allItems = [...NEW_FEATURED, ...CATEGORIES];
  const [active, setActive] = useState(allItems[0].label);
  const current = allItems.find((item) => item.label === active) ?? allItems[0];

  return (
    <div className="group relative hidden xl:block">
      <button
        type="button"
        className="inline-flex h-10 items-center gap-1 rounded-lg px-3 text-sm  text-[#1c1d1f] hover:bg-gray-100"
        aria-haspopup="true"
      >
        Find Courses
      </button>

      {/* Mega menu */}
      <div className="invisible absolute left-0 top-full z-50 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="flex overflow-hidden rounded-lg border border-gray-200 bg-white shadow-[0_4px_16px_rgba(0,0,0,0.12)]">
          {/* Left column */}
          <div className="w-[280px] border-r border-gray-200 py-2">
            <p className="px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-[#6a6f73]">
              New &amp; Featured
            </p>
            {NEW_FEATURED.map((item) => (
              <button
                key={item.label}
                type="button"
                onMouseEnter={() => setActive(item.label)}
                className={`flex w-full items-center justify-between gap-2 px-4 py-2.5 text-left text-sm hover:bg-gray-50 ${
                  active === item.label ? "bg-gray-50 font-bold text-[#1c1d1f]" : "text-[#1c1d1f]"
                }`}
              >
                <span className="flex items-center gap-2">
                  {item.icon === "google" && <GoogleG />}
                  {item.label}
                </span>
                <ChevronRight className="h-4 w-4 shrink-0 text-[#6a6f73]" />
              </button>
            ))}

            <div className="my-2 border-t border-gray-200" />

            {CATEGORIES.map((item) => (
              <button
                key={item.label}
                type="button"
                onMouseEnter={() => setActive(item.label)}
                className={`flex w-full items-center justify-between gap-2 px-4 py-2.5 text-left text-sm hover:bg-gray-50 ${
                  active === item.label ? "bg-gray-50 font-bold text-[#1c1d1f]" : "text-[#1c1d1f]"
                }`}
              >
                {item.label}
                <ChevronRight className="h-4 w-4 shrink-0 text-[#6a6f73]" />
              </button>
            ))}
          </div>

          {/* Right column */}
          <div className="w-[320px] py-3">
            <p className="px-5 pb-2 text-sm font-bold text-[#6a6f73]">{current.panelTitle}</p>
            <ul>
              {current.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="block px-5 py-2.5 text-sm text-[#1c1d1f] hover:bg-gray-50 hover:text-[#6d28d2]"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

const navLinkClass =
  "hidden h-10 items-center rounded-lg px-3 text-sm  whitespace-nowrap text-[#1c1d1f] hover:bg-gray-100 xl:inline-flex";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [promoOpen, setPromoOpen] = useState(true);

  return (
    <div className="sticky top-0 z-50">
      {promoOpen && (
        <div className="relative bg-[#d1ecf1] px-10 py-2.5 text-center text-sm text-[#1c1d1f]">
          <span>
            1 day left! Always-on learning for less |{" "}
            <a href="#" className="font-bold underline underline-offset-2">
              Save 40%
            </a>
          </span>
          <button
            type="button"
            aria-label="Dismiss"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 hover:bg-black/5"
            onClick={() => setPromoOpen(false)}
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      <header
        className="relative border-b border-transparent bg-white"
        style={{
          boxShadow:
            "0 2px 8px oklch(0.63 0.02 306 / 0.08), 0 4px 16px oklch(0.63 0.02 306 / 0.12)",
        }}
      >
        <nav className="mx-auto flex h-[72px] max-w-[1440px] items-center gap-1 px-6">
          <button
            type="button"
            className="mr-1 rounded p-2 text-[#1c1d1f] hover:bg-gray-100 xl:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <Link to="/" className="mr-2 shrink-0" onClick={() => setMobileOpen(false)}>
            <UdemyLogo />
          </Link>

          <FindCoursesMenu />

          <button type="button" className={navLinkClass}>
            Get Certified
          </button>
          <a href="#" className={navLinkClass}>
            Subscribe
          </a>

          <form
            className="mx-3 hidden min-w-0 flex-1 md:block"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex h-12 w-full items-center rounded-full border border-[#c5c4d2] bg-white px-1 focus-within:border-[#6d28d2]">
              <button
                type="submit"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[#6a6f73]"
                aria-label="Search"
              >
                <Search className="h-4 w-4" strokeWidth={1.75} />
              </button>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for anything"
                className="h-full w-full min-w-0 bg-transparent pr-4 text-sm text-[#1c1d1f] outline-none placeholder:text-[#6a6f73]"
              />
            </div>
          </form>

          <div className="ml-auto flex items-center gap-0.5">
            <a
              href="#"
              className="hidden h-10 items-center rounded-lg px-3 text-sm  whitespace-nowrap text-[#1c1d1f] hover:bg-gray-100 xl:inline-flex"
            >
              Udemy Business
            </a>
            <a
              href="#"
              className="hidden h-10 items-center rounded-lg px-3 text-sm  whitespace-nowrap text-[#1c1d1f] hover:bg-gray-100 xl:inline-flex"
            >
              Teach on Udemy
            </a>

            <button
              type="button"
              className="rounded-lg p-2 text-[#1c1d1f] hover:bg-gray-100 md:hidden"
              aria-label="Search"
            >
              <Search className="h-5 w-5" strokeWidth={1.75} />
            </button>

            <button
              type="button"
              className="rounded-lg p-2 text-[#1c1d1f] hover:bg-gray-100"
              aria-label="Cart"
            >
              <ShoppingCart className="h-5 w-5" strokeWidth={1.75} />
            </button>

            <Link
              to="/login"
              className="ml-1 hidden h-10 items-center rounded-lg border px-3 text-sm font-bold sm:inline-flex"
              style={{ color: PURPLE, borderColor: PURPLE }}
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className="ml-1 hidden h-10 items-center rounded-lg px-3 text-sm font-bold text-white sm:inline-flex"
              style={{ backgroundColor: PURPLE }}
            >
              Sign up
            </Link>

            <button
              type="button"
              className="ml-1 hidden h-10 w-10 items-center justify-center rounded-lg border sm:inline-flex"
              style={{ color: PURPLE, borderColor: PURPLE }}
              aria-label="Choose language"
            >
              <Globe className="h-5 w-5" strokeWidth={1.75} />
            </button>
          </div>
        </nav>

        {mobileOpen && (
          <div className="border-t border-gray-200 bg-white xl:hidden">
            <form
              className="border-b border-gray-100 px-4 py-3 md:hidden"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex h-12 items-center rounded-full border border-[#c5c4d2] px-1">
                <Search className="ml-3 h-5 w-5 shrink-0 text-[#6a6f73]" strokeWidth={1.75} />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search for anything"
                  className="h-full w-full bg-transparent px-3 text-sm outline-none placeholder:text-[#6a6f73]"
                />
              </div>
            </form>

            <div className="flex flex-col py-2">
              {[
                "Find Courses",
                "Get Certified",
                "Subscribe",
                "Udemy Business",
                "Teach on Udemy",
              ].map((label) => (
                <a
                  key={label}
                  href="#"
                  className="px-5 py-3 text-sm  text-[#1c1d1f] hover:bg-gray-50"
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </a>
              ))}

              <div className="mt-1 flex gap-2 border-t border-gray-100 px-4 py-3 sm:hidden">
                <Link
                  to="/login"
                  className="flex h-10 flex-1 items-center justify-center rounded-lg border text-sm font-bold"
                  style={{ color: PURPLE, borderColor: PURPLE }}
                  onClick={() => setMobileOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="flex h-10 flex-1 items-center justify-center rounded-lg text-sm font-bold text-white"
                  style={{ backgroundColor: PURPLE }}
                  onClick={() => setMobileOpen(false)}
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
