import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  MonitorPlay,
  Sparkles,
  Star,
  Trophy,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const PURPLE = "#6d28d2";
const CARDS_PER_PAGE = 4;

type TrendingTopic = {
  label: string;
  learners: string;
};

type TrendingTopicColumn = {
  category: string;
  topics: TrendingTopic[];
  showAllButton?: boolean;
};

const TRENDING_TOPICS: TrendingTopicColumn[] = [
  {
    category: "AI skills for work",
    showAllButton: true,
    topics: [{ label: "See ChatGPT courses", learners: "56 lakh learners" }],
  },
  {
    category: "Development",
    topics: [
      { label: "Python", learners: "5 crore learners" },
      { label: "Data Science", learners: "84 lakh learners" },
      { label: "Web Development", learners: "1 crore learners" },
    ],
  },
  {
    category: "Data Analytics",
    topics: [
      { label: "Microsoft Excel", learners: "2 crore learners" },
      { label: "SQL", learners: "91 lakh learners" },
      { label: "Microsoft Power BI", learners: "53 lakh learners" },
    ],
  },
  {
    category: "Career Certifications",
    topics: [
      {
        label: "PMI Project Management Professional (PMP)",
        learners: "30 lakh learners",
      },
      {
        label: "AWS Certified Solutions Architect - Associate",
        learners: "40 lakh learners",
      },
      {
        label: "AWS Certified Cloud Practitioner",
        learners: "26 lakh learners",
      },
    ],
  },
];

type TrendingCourse = {
  title: string;
  courseType: string;
  image: string;
  instructor: string;
  rating: number;
  ratingCount: number;
  price: number;
  discount: number;
};

const TrendingCourses: TrendingCourse[] = [
  {
    title: "AI Engineer Agentic Track: The Complete Agent & MCP Course",
    courseType: "Bestseller",
    image: "/course_image/AIEngineerAgenticTrack.png",
    instructor: "Ed Donner, Ligency",
    rating: 4.7,
    ratingCount: 43556,
    price: 459,
    discount: 42,
  },
  {
    title: "AI Engineer Core Track: LLM Engineering, RAG, QLoRA, Agents",
    courseType: "Bestseller",
    image: "/course_image/track.png",
    instructor: "Ligency, Ed Donner",
    rating: 4.7,
    ratingCount: 37826,
    price: 459,
    discount: 86,
  },
  {
    title: "100 Days of Code™: The Complete Python Pro Bootcamp",
    courseType: "Bestseller",
    image: "/course_image/pythonbootcamp.png",
    instructor: "Dr. Angela Yu",
    rating: 4.7,
    ratingCount: 429623,
    price: 459,
    discount: 86,
  },
  {
    title: "The Complete Claude Code & Claude Cowork Masterclass [2026]",
    courseType: "Premium",
    image: "/course_image/claudecode.png",
    instructor: "Prof. Ryan Ahmed",
    rating: 4.6,
    ratingCount: 5261,
    price: 449,
    discount: 64,
  },
  {
    title: "The AI Engineer Course 2026: Complete AI Engineer Bootcamp",
    courseType: "Premium",
    image: "/course_image/AIENGINEER.png",
    instructor: "365 Careers",
    rating: 4.6,
    ratingCount: 22931,
    price: 459,
    discount: 85,
  },
  {
    title: "AI Coder: Complete Claude Code & Coding Agents Course",
    courseType: "Premium",
    image: "/course_image/aicoder.png",
    instructor: "Ligency, Ed Donner",
    rating: 4.7,
    ratingCount: 8338,
    price: 459,
    discount: 77,
  },
  {
    title: "Microsoft Excel - Excel from Beginner to Advanced",
    courseType: "Bestseller",
    image: "/course_image/excel.png",
    instructor: "Kyle Pew",
    rating: 4.7,
    ratingCount: 538199,
    price: 469,
    discount: 86,
  },
  {
    title: "The Complete Full-Stack Web Development Bootcamp",
    courseType: "Bestseller",
    image: "/course_image/completedevelopment.png",
    instructor: "Dr. Angela Yu",
    rating: 4.7,
    ratingCount: 471997,
    price: 459,
    discount: 86,
  },
  {
    title: "Ultimate AWS Certified Solutions Architect Associate 2026",
    courseType: "Bestseller",
    image: "/course_image/aws.png",
    instructor: "Stephane Maarek",
    rating: 4.7,
    ratingCount: 293170,
    price: 499,
    discount: 86,
  },
  {
    title: "The Complete AI Guide: Learn ChatGPT, Claude & Generative AI",
    courseType: "Premium",
    image: "/course_image/complete-ai-guide.png",
    instructor: "Julian Melanson",
    rating: 4.5,
    ratingCount: 61990,
    price: 479,
    discount: 81,
  },
  {
    title: "The Complete Python Bootcamp From Zero to Hero in Python",
    courseType: "Bestseller",
    image: "/course_image/pythonbootcamp.png",
    instructor: "Jose Portilla",
    rating: 4.6,
    ratingCount: 563549,
    price: 459,
    discount: 86,
  },
  {
    title: "Complete Data Analyst Bootcamp From Basics To Advanced",
    courseType: "Bestseller",
    image: "/course_image/dataanalyst.png",
    instructor: "Krish Naik",
    rating: 4.5,
    ratingCount: 20143,
    price: 469,
    discount: 85,
  },
  {
    title: "Machine Learning A-Z [2026]: ML, DL, AI with AWS, Python & R",
    courseType: "Machine Learning",
    image: "/course_image/machinelearning.png",
    instructor: "Kirill Eremenko",
    rating: 4.5,
    ratingCount: 205060,
    price: 509,
    discount: 86,
  },
  {
    title: "Claude Code - The Practical Guide",
    courseType: "Premium",
    image: "/course_image/claudepractival.png",
    instructor: "Academind",
    rating: 4.5,
    ratingCount: 12793,
    price: 459,
    discount: 77,
  },
  {
    title: "ChatGPT & AI Tools - From Beginner to Expert",
    courseType: "Premium",
    image: "/course_image/chatgpt.png",
    instructor: "Todd McLeod",
    rating: 4.6,
    ratingCount: 1686,
    price: 489,
    discount: 39,
  },
  {
    title: "Full Stack Generative and Agentic AI with Python",
    courseType: "Bestseller",
    image: "/course_image/generativeai.png",
    instructor: "Hitesh Choudhary, Piyush Garg",
    rating: 4.5,
    ratingCount: 8751,
    price: 459,
    discount: 43,
  },
];

function formatRatingCount(count: number) {
  return count.toLocaleString("en-IN");
}

function originalPrice(price: number, discount: number) {
  if (discount <= 0 || discount >= 100) return price;
  return Math.round(price / (1 - discount / 100));
}

function getPageCourses(courses: TrendingCourse[], page: number) {
  const start = page * CARDS_PER_PAGE;
  return courses.slice(start, start + CARDS_PER_PAGE);
}

function CourseCard({ course }: { course: TrendingCourse }) {
  const was = originalPrice(course.price, course.discount);

  return (
    <article className="flex w-full min-w-0 flex-col overflow-hidden rounded-xl p-6 border border-gray-200 bg-white">
      <img
        src={course.image}
        alt=""
        className="aspect-[16/9] w-full object-cover"
      />

      <div className="flex flex-1 flex-col p-3">
        <h3 className="line-clamp-2 text-base font-bold leading-snug text-[#1c1d1f]">
          {course.title}
        </h3>

        <p className="mt-1 truncate text-xs text-[#6a6f73]">{course.instructor}</p>

        <div className="mt-2 flex flex-wrap items-center gap-2">
          {(course.courseType === "Bestseller" || course.courseType === "Premium") && (
            <span
              className={`rounded px-1.5 py-0.5 text-xs font-bold ${
                course.courseType === "Bestseller"
                  ? "bg-[#CFF5F6] text-[#0F4C5C]"
                  : "bg-[#f3e8ff] text-[#6d28d2]"
              }`}
            >
              {course.courseType}
            </span>
          )}

          <div className="flex items-center gap-1">
            <Star size={12} fill="#F69C08" className="text-[#F69C08]" />
            <span className="text-sm font-bold text-[#B4690E]">{course.rating.toFixed(1)}</span>
            <span className="text-xs text-[#6a6f73]">
              ({formatRatingCount(course.ratingCount)})
            </span>
          </div>
        </div>

        <div className="mt-auto flex items-baseline gap-2 pt-3">
          <span className="text-base font-bold text-[#1c1d1f]">
            ₹{course.price.toFixed(2)}
          </span>
          {was > course.price && (
            <span className="text-sm text-[#6a6f73] line-through">
              ₹{was.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

function CoursePage({
  courses,
  pageKey,
}: {
  courses: TrendingCourse[];
  pageKey: string;
}) {
  return (
    <div className="grid w-full shrink-0 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {courses.map((course) => (
        <CourseCard key={`${pageKey}-${course.title}`} course={course} />
      ))}
    </div>
  );
}
const PLAN_FEATURES: {
  icon: LucideIcon;
  bg: string;
  iconColor: string;
  text: React.ReactNode;
}[] = [
  {
    icon: Sparkles,
    bg: "bg-[#eee0f9]",
    iconColor: "text-[#6d28d2]",
    text: (
      <>
        <span className="font-bold">Get</span> access to 28,000+ top-rated courses
      </>
    ),
  },
  {
    icon: Lightbulb,
    bg: "bg-[#d4f1f9]",
    iconColor: "text-[#0b7c9e]",
    text: (
      <>
        <span className="font-bold">Learn</span> from 9,000+ expert instructors
      </>
    ),
  },
  {
    icon: MonitorPlay,
    bg: "bg-[#fbdbe0]",
    iconColor: "text-[#b3364a]",
    text: (
      <>
        <span className="font-bold">Dev</span>, IT, Business, Design and 50+ more topics
      </>
    ),
  },
  {
    icon: Trophy,
    bg: "bg-[#d6f5e3]",
    iconColor: "text-[#1a7a4c]",
    text: (
      <>
        <span className="font-bold">Certification</span> prep for AWS, Microsoft, PMI, and more
      </>
    ),
  },
];

export function Home() {
  const totalPages = Math.max(1, Math.ceil(TrendingCourses.length / CARDS_PER_PAGE));
  const pages = Array.from({ length: totalPages }, (_, i) =>
    getPageCourses(TrendingCourses, i),
  );

  // Track: [last clone] [...real pages...] [first clone] — start on first real page (index 1)
  const slides = [pages[totalPages - 1], ...pages, pages[0]];
  const [slideIndex, setSlideIndex] = useState(1);
  const [animate, setAnimate] = useState(true);
  const isSliding = useRef(false);

  const goNext = () => {
    if (isSliding.current) return;
    isSliding.current = true;
    setAnimate(true);
    setSlideIndex((i) => i + 1);
  };

  const goPrev = () => {
    if (isSliding.current) return;
    isSliding.current = true;
    setAnimate(true);
    setSlideIndex((i) => i - 1);
  };

  const handleTransitionEnd = () => {
    // Jump from clones back onto the real page (no animation) so the cycle feels endless
    if (slideIndex === slides.length - 1) {
      setAnimate(false);
      setSlideIndex(1);
    } else if (slideIndex === 0) {
      setAnimate(false);
      setSlideIndex(totalPages);
    }
    isSliding.current = false;
  };

  useEffect(() => {
    if (!animate) {
      // Re-enable animation on the next frame after the instant jump
      const id = requestAnimationFrame(() => setAnimate(true));
      return () => cancelAnimationFrame(id);
    }
  }, [animate, slideIndex]);

  return (
    <main className="w-full bg-white">
      {/* Hero — matches live Udemy: contained banner + floating promo card */}
      <section className="w-full">
        <div className="relative mx-auto h-[280px] w-full max-w-[1340px] overflow-hidden sm:h-[340px] md:h-[400px]">
          <img
            src="../../../public/homeBanner.jpg"
            alt=""
            className="pointer-events-none absolute inset-0 h-full w-full object-contain object-center"
          />

          <div className="absolute left-4 top-1/2 z-10 w-[min(100%-2rem,26rem)] -translate-y-1/2 rounded-lg bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08),0_4px_16px_rgba(0,0,0,0.12)] sm:left-8 md:left-12 md:p-5">
            <h1 className="text-2xl font-bold leading-tight text-[#1c1d1f] md:text-[1.75rem] md:leading-snug">
              Save 30% off your first 3 months of personal plans to advance your career.
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-[#3e4143] md:text-[0.85rem]">
              Personal Plan is your career companion for AI and more cutting-edge skills. Sale
              ends July 12.{" "}
              <a href="#" className="underline underline-offset-2 hover:text-[#1c1d1f]">
                Terms apply
              </a>
              .
            </p>
            <Link
              to="/signup"
              className="mt-5 inline-flex h-12 items-center justify-center rounded-lg px-5 text-base font-bold text-white hover:brightness-95"
              style={{ backgroundColor: PURPLE }}
            >
              Save now
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1340px] px-4 pb-12 md:px-6">
        <h2 className="mt-10 text-2xl font-bold text-[#1c1d1f] md:text-[1.75rem]">
          Trending courses
        </h2>

        <div className="relative mt-6">
          <button
            type="button"
            aria-label="Previous courses"
            onClick={goPrev}
            className="absolute left-0 top-1/2 z-10 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white shadow-md hover:bg-gray-50"
          >
            <ChevronLeft className="h-6 w-6 text-[#1c1d1f]" />
          </button>

          <button
            type="button"
            aria-label="Next courses"
            onClick={goNext}
            className="absolute right-0 top-1/2 z-10 flex h-12 w-12 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white shadow-md hover:bg-gray-50"
          >
            <ChevronRight className="h-6 w-6 text-[#1c1d1f]" />
          </button>

          <div className="overflow-hidden px-2">
            <div
              className={`flex ${animate ? "transition-transform duration-500 ease-out" : ""}`}
              style={{ transform: `translateX(-${slideIndex * 100}%)` }}
              onTransitionEnd={(e) => {
                if (e.target !== e.currentTarget) return;
                handleTransitionEnd();
              }}
            >
              {slides.map((courses, i) => (
                <CoursePage key={`slide-${i}`} courses={courses} pageKey={`slide-${i}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f7f9fa] py-10">
        <div className="mx-auto max-w-[1340px] px-4 md:px-6">
          <h1 className="text-2xl font-bold text-[#1c1d1f] md:text-[1.75rem]">
            Trending topics in India
          </h1>
          <div className="mt-4 border-t border-gray-300" />

          <div className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {TRENDING_TOPICS.map((column) => (
              <div key={column.category} className="flex flex-col">
                <h2 className="text-2xl font-bold text-[#1c1d1f]">{column.category}</h2>

                <ul className="mt-5 flex flex-col gap-6">
                  {column.topics.map((topic) => (
                    <li key={topic.label}>
                      <a href="#" className="group inline-flex flex-col">
                        <span className="inline-flex items-center gap-1 text-xl font-bold text-[#6d28d2] group-hover:pointer">
                          {topic.label}
                          <ChevronRight className="h-4 w-4 shrink-0" strokeWidth={2.5} />
                        </span>
                        <span className="mt-1 text-sm text-[#6a6f73]">{topic.learners}</span>
                      </a>
                    </li>
                  ))}
                </ul>

                {column.showAllButton && (
                  <a
                    href="#"
                    className="mt-8 inline-flex w-fit items-center gap-2 rounded border border-[#6d28d2] bg-[#f7f9fa] px-4 py-2.5 text-sm font-bold text-[#6d28d2] hover:bg-[#f3e8ff]"
                  >
                    Show all trending topics
                    <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-10">
        <div className="mx-auto max-w-[1340px] px-4 md:px-6">
          <div className="flex flex-col overflow-hidden rounded-2xl bg-[#1c1d1f] lg:flex-row lg:items-stretch">
            {/* Left: copy + features + CTA */}
            <div className="flex flex-1 flex-col justify-center px-8 py-10 md:px-12 md:py-14 lg:max-w-[52%]">
              <h2 className="text-3xl font-bold leading-tight text-white md:text-[2.15rem] md:leading-snug">
                Build your career with a Personal Plan subscription
              </h2>

              <p className="mt-4 max-w-lg text-base leading-relaxed text-[#d1d2e0]">
                Subscribers save an average of ₹4,000† in their first month, stop paying per
                course. Join 5 lakh+ learners, starting at ₹500/month.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
                {PLAN_FEATURES.map((feature, i) => {
                  const Icon = feature.icon;
                  return (
                    <div key={i} className="flex items-start gap-3">
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${feature.bg}`}
                      >
                        <Icon className={`h-4 w-4 ${feature.iconColor}`} strokeWidth={2.25} />
                      </span>
                      <p className="pt-1 text-sm leading-snug text-white">{feature.text}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-9 flex flex-col items-start gap-3">
                <Link
                  to="/signup"
                  className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-6 text-sm font-bold text-[#1c1d1f] transition hover:bg-gray-100"
                >
                  Subscribe now
                </Link>
                <a
                  href="#"
                  className="text-sm font-bold text-white underline underline-offset-4"
                >
                  Learn more
                </a>
              </div>
            </div>

            {/* Right: inset image cards (matches Udemy layout) */}
            <div className="flex flex-1 items-stretch gap-3 p-4 md:gap-4 md:p-6 lg:max-w-[48%]">
              <div className="relative min-h-[260px] flex-[1.35] overflow-hidden rounded-xl bg-[#eef0f2] sm:min-h-[340px]">
                <img
                  src="/course_image/instructor.png"
                  alt="Learner building career skills"
                  className="h-full w-full object-cover object-[center_20%]"
                />
              </div>

              <div
                className="relative hidden w-[22%] min-w-[88px] overflow-hidden rounded-xl sm:block"
                aria-hidden
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#c4b5fd] via-[#7c3aed] to-[#38bdf8]" />
                <div className="absolute inset-x-0 top-[15%] h-[40%] -skew-y-12 bg-white/25" />
                <div className="absolute inset-x-[-20%] bottom-0 h-[45%] rounded-t-[40%] bg-[#6366f1]/50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1340px] px-4 pb-12 md:px-6">
        <h2 className="mt-10 text-2xl font-bold text-[#1c1d1f] md:text-[1.75rem]">
          Trending courses
        </h2>

        <div className="relative mt-6">
          <button
            type="button"
            aria-label="Previous courses"
            onClick={goPrev}
            className="absolute left-0 top-1/2 z-10 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white shadow-md hover:bg-gray-50"
          >
            <ChevronLeft className="h-6 w-6 text-[#1c1d1f]" />
          </button>

          <button
            type="button"
            aria-label="Next courses"
            onClick={goNext}
            className="absolute right-0 top-1/2 z-10 flex h-12 w-12 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white shadow-md hover:bg-gray-50"
          >
            <ChevronRight className="h-6 w-6 text-[#1c1d1f]" />
          </button>

          <div className="overflow-hidden px-2">
            <div
              className={`flex ${animate ? "transition-transform duration-500 ease-out" : ""}`}
              style={{ transform: `translateX(-${slideIndex * 100}%)` }}
              onTransitionEnd={(e) => {
                if (e.target !== e.currentTarget) return;
                handleTransitionEnd();
              }}
            >
              {slides.map((courses, i) => (
                <CoursePage key={`slide-${i}`} courses={courses} pageKey={`slide-${i}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f7f9fa] py-10">
        <div className="mx-auto max-w-[1340px] px-4 md:px-6">
          <h1 className="text-2xl font-bold text-[#1c1d1f] md:text-[1.75rem]">
            Trending topics in India
          </h1>
          <div className="mt-4 border-t border-gray-300" />

          <div className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {TRENDING_TOPICS.map((column) => (
              <div key={column.category} className="flex flex-col">
                <h2 className="text-2xl font-bold text-[#1c1d1f]">{column.category}</h2>

                <ul className="mt-5 flex flex-col gap-6">
                  {column.topics.map((topic) => (
                    <li key={topic.label}>
                      <a href="#" className="group inline-flex flex-col">
                        <span className="inline-flex items-center gap-1 text-xl font-bold text-[#6d28d2] group-hover:pointer">
                          {topic.label}
                          <ChevronRight className="h-4 w-4 shrink-0" strokeWidth={2.5} />
                        </span>
                        <span className="mt-1 text-sm text-[#6a6f73]">{topic.learners}</span>
                      </a>
                    </li>
                  ))}
                </ul>

                {column.showAllButton && (
                  <a
                    href="#"
                    className="mt-8 inline-flex w-fit items-center gap-2 rounded border border-[#6d28d2] bg-[#f7f9fa] px-4 py-2.5 text-sm font-bold text-[#6d28d2] hover:bg-[#f3e8ff]"
                  >
                    Show all trending topics
                    <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1340px] px-4 pb-12 md:px-6">
        <h2 className="mt-10 text-2xl font-bold text-[#1c1d1f] md:text-[1.75rem]">
          Trending courses
        </h2>

        <div className="relative mt-6">
          <button
            type="button"
            aria-label="Previous courses"
            onClick={goPrev}
            className="absolute left-0 top-1/2 z-10 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white shadow-md hover:bg-gray-50"
          >
            <ChevronLeft className="h-6 w-6 text-[#1c1d1f]" />
          </button>

          <button
            type="button"
            aria-label="Next courses"
            onClick={goNext}
            className="absolute right-0 top-1/2 z-10 flex h-12 w-12 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white shadow-md hover:bg-gray-50"
          >
            <ChevronRight className="h-6 w-6 text-[#1c1d1f]" />
          </button>

          <div className="overflow-hidden px-2">
            <div
              className={`flex ${animate ? "transition-transform duration-500 ease-out" : ""}`}
              style={{ transform: `translateX(-${slideIndex * 100}%)` }}
              onTransitionEnd={(e) => {
                if (e.target !== e.currentTarget) return;
                handleTransitionEnd();
              }}
            >
              {slides.map((courses, i) => (
                <CoursePage key={`slide-${i}`} courses={courses} pageKey={`slide-${i}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-10">
        <div className="mx-auto max-w-[1340px] px-4 md:px-6">
          <div className="flex flex-col overflow-hidden rounded-2xl bg-[#1c1d1f] lg:flex-row lg:items-stretch">
            {/* Left: copy + features + CTA */}
            <div className="flex flex-1 flex-col justify-center px-8 py-10 md:px-12 md:py-14 lg:max-w-[52%]">
              <h2 className="text-3xl font-bold leading-tight text-white md:text-[2.15rem] md:leading-snug">
                Build your career with a Personal Plan subscription
              </h2>

              <p className="mt-4 max-w-lg text-base leading-relaxed text-[#d1d2e0]">
                Subscribers save an average of ₹4,000† in their first month, stop paying per
                course. Join 5 lakh+ learners, starting at ₹500/month.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
                {PLAN_FEATURES.map((feature, i) => {
                  const Icon = feature.icon;
                  return (
                    <div key={i} className="flex items-start gap-3">
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${feature.bg}`}
                      >
                        <Icon className={`h-4 w-4 ${feature.iconColor}`} strokeWidth={2.25} />
                      </span>
                      <p className="pt-1 text-sm leading-snug text-white">{feature.text}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-9 flex flex-col items-start gap-3">
                <Link
                  to="/signup"
                  className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-6 text-sm font-bold text-[#1c1d1f] transition hover:bg-gray-100"
                >
                  Subscribe now
                </Link>
                <a
                  href="#"
                  className="text-sm font-bold text-white underline underline-offset-4"
                >
                  Learn more
                </a>
              </div>
            </div>

            {/* Right: inset image cards (matches Udemy layout) */}
            <div className="flex flex-1 items-stretch gap-3 p-4 md:gap-4 md:p-6 lg:max-w-[48%]">
              <div className="relative min-h-[260px] flex-[1.35] overflow-hidden rounded-xl bg-[#eef0f2] sm:min-h-[340px]">
                <img
                  src="/course_image/instructor.png"
                  alt="Learner building career skills"
                  className="h-full w-full object-cover object-[center_20%]"
                />
              </div>

              <div
                className="relative hidden w-[22%] min-w-[88px] overflow-hidden rounded-xl sm:block"
                aria-hidden
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#c4b5fd] via-[#7c3aed] to-[#38bdf8]" />
                <div className="absolute inset-x-0 top-[15%] h-[40%] -skew-y-12 bg-white/25" />
                <div className="absolute inset-x-[-20%] bottom-0 h-[45%] rounded-t-[40%] bg-[#6366f1]/50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1340px] px-4 pb-12 md:px-6">
        <h2 className="mt-10 text-2xl font-bold text-[#1c1d1f] md:text-[1.75rem]">
          Trending courses
        </h2>

        <div className="relative mt-6">
          <button
            type="button"
            aria-label="Previous courses"
            onClick={goPrev}
            className="absolute left-0 top-1/2 z-10 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white shadow-md hover:bg-gray-50"
          >
            <ChevronLeft className="h-6 w-6 text-[#1c1d1f]" />
          </button>

          <button
            type="button"
            aria-label="Next courses"
            onClick={goNext}
            className="absolute right-0 top-1/2 z-10 flex h-12 w-12 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white shadow-md hover:bg-gray-50"
          >
            <ChevronRight className="h-6 w-6 text-[#1c1d1f]" />
          </button>

          <div className="overflow-hidden px-2">
            <div
              className={`flex ${animate ? "transition-transform duration-500 ease-out" : ""}`}
              style={{ transform: `translateX(-${slideIndex * 100}%)` }}
              onTransitionEnd={(e) => {
                if (e.target !== e.currentTarget) return;
                handleTransitionEnd();
              }}
            >
              {slides.map((courses, i) => (
                <CoursePage key={`slide-${i}`} courses={courses} pageKey={`slide-${i}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-10">
        <div className="mx-auto max-w-[1340px] px-4 md:px-6">
          <div className="flex flex-col overflow-hidden rounded-2xl bg-[#1c1d1f] lg:flex-row lg:items-stretch">
            {/* Left: copy + features + CTA */}
            <div className="flex flex-1 flex-col justify-center px-8 py-10 md:px-12 md:py-14 lg:max-w-[52%]">
              <h2 className="text-3xl font-bold leading-tight text-white md:text-[2.15rem] md:leading-snug">
                Build your career with a Personal Plan subscription
              </h2>

              <p className="mt-4 max-w-lg text-base leading-relaxed text-[#d1d2e0]">
                Subscribers save an average of ₹4,000† in their first month, stop paying per
                course. Join 5 lakh+ learners, starting at ₹500/month.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
                {PLAN_FEATURES.map((feature, i) => {
                  const Icon = feature.icon;
                  return (
                    <div key={i} className="flex items-start gap-3">
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${feature.bg}`}
                      >
                        <Icon className={`h-4 w-4 ${feature.iconColor}`} strokeWidth={2.25} />
                      </span>
                      <p className="pt-1 text-sm leading-snug text-white">{feature.text}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-9 flex flex-col items-start gap-3">
                <Link
                  to="/signup"
                  className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-6 text-sm font-bold text-[#1c1d1f] transition hover:bg-gray-100"
                >
                  Subscribe now
                </Link>
                <a
                  href="#"
                  className="text-sm font-bold text-white underline underline-offset-4"
                >
                  Learn more
                </a>
              </div>
            </div>

            {/* Right: inset image cards (matches Udemy layout) */}
            <div className="flex flex-1 items-stretch gap-3 p-4 md:gap-4 md:p-6 lg:max-w-[48%]">
              <div className="relative min-h-[260px] flex-[1.35] overflow-hidden rounded-xl bg-[#eef0f2] sm:min-h-[340px]">
                <img
                  src="/course_image/instructor.png"
                  alt="Learner building career skills"
                  className="h-full w-full object-cover object-[center_20%]"
                />
              </div>

              <div
                className="relative hidden w-[22%] min-w-[88px] overflow-hidden rounded-xl sm:block"
                aria-hidden
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#c4b5fd] via-[#7c3aed] to-[#38bdf8]" />
                <div className="absolute inset-x-0 top-[15%] h-[40%] -skew-y-12 bg-white/25" />
                <div className="absolute inset-x-[-20%] bottom-0 h-[45%] rounded-t-[40%] bg-[#6366f1]/50" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
