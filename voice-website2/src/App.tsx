import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type FormEvent,
  type ReactNode,
} from "react"
import { FooterSection } from "@/components/ui/footer-section"

const heroPhoto =
  "https://images.unsplash.com/photo-1516112173450-2e73c1acc637?auto=format&fit=crop&w=1800&q=88"

type CropProps = {
  x: number
  y: number
  width: number
  height: number
  className?: string
}

function ReferenceCrop({ x, y, width, height, className = "" }: CropProps) {
  const style = {
    aspectRatio: `${width} / ${height}`,
    backgroundImage: "url('/unveiling-reference.png')",
    backgroundSize: `${(1024 / width) * 100}% auto`,
    backgroundPosition: `${(x / (1024 - width)) * 100}% ${(y / (1536 - height)) * 100}%`,
  } as CSSProperties

  return (
    <div className={`bg-no-repeat ${className}`} style={style} role="img" />
  )
}

function ArrowButton({
  children,
  gold = false,
  className = "",
  href = "#",
}: {
  children: ReactNode
  gold?: boolean
  className?: string
  href?: string
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full border px-5 py-2.5 text-[12px] font-medium transition hover:-translate-y-0.5 ${
        gold
          ? "border-[#c79743] bg-[#c79743] text-[#062b40] hover:bg-[#d5ab61]"
          : "border-white/80 text-white hover:bg-white/10"
      } ${className}`}
    >
      {children} <span aria-hidden="true">→</span>
    </a>
  )
}

const features = [
  {
    title: "Cardiology Made Simple",
    copy: "Clear explanations of heart health, conditions, tests and prevention.",
    crop: [47, 683, 187, 76],
    href: "#",
  },
  {
    title: "TRCF School of Research",
    copy: "Research education, methodology and critical appraisal.",
    crop: [249, 683, 183, 76],
    href: "#",
  },
  {
    title: "UVP Intellects & Publications",
    copy: "Books, research and educational resources.",
    crop: [449, 683, 183, 76],
    href: "#",
  },
  {
    title: "Investment Management",
    copy: "From capital allocation to sustainable profitability.",
    crop: [648, 683, 179, 76],
    href: "#investment",
  },
]

const articles = [
  {
    title: "Understanding Your Cardiovascular Risk",
    crop: [48, 1253, 187, 64],
    date: "12 Apr 2025",
  },
  {
    title: "The Role of Mixed-Methods in Health Research",
    crop: [252, 1253, 185, 64],
    date: "8 Apr 2025",
  },
  {
    title: "Faith, Wisdom and Everyday Life",
    crop: [455, 1253, 183, 64],
    date: "5 Apr 2025",
  },
  {
    title: "Tackling Health Inequalities in Our Communities",
    crop: [658, 1253, 183, 64],
    date: "1 Apr 2025",
  },
]

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#"
      className={`flex items-center gap-3 ${
        light ? "text-white" : "text-[#062b40]"
      }`}
    >
      <span className="font-serif text-[42px] leading-none tracking-[-.1em]">
        UV
      </span>
      <span className="border-l border-current/25 pl-3">
        <strong className="block font-serif text-[16px] font-normal tracking-[.04em]">
          UNVEILING VOICE
        </strong>
        <small className="block text-[6px] tracking-[.11em]">
          ONE VOICE. TWO DIMENSIONS. ONE PURPOSE.
        </small>
      </span>
    </a>
  )
}

function Header({
  active = "home",
}: {
  active?: "home" | "investment" | "founder"
}) {
  const [menuOpen, setMenuOpen] = useState(false)
  const links = [
    ["Home", "#home"],
    ["About", "#founder"],
    ["Cardiovascular Medicine", "#divisions"],
    ["Biblical Academy", "#divisions"],
    ["Research", "#articles"],
    ["Publications", "#articles"],
    ["Investment Management", "#investment"],
  ]

  return (
    <header className="relative z-50 h-[82px] border-b border-[#e8e3d9] bg-[#fffefb] md:h-[80px]">
      <div className="mx-auto flex h-full max-w-[1180px] items-center justify-between px-5 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-7 text-[11px] text-[#062b40] lg:flex">
          <a
            className={
              active === "home" ? "border-b border-[#bd8a30] pb-1" : ""
            }
            href="#home"
          >
            Home
          </a>
          <a
            className={
              active === "founder" ? "border-b border-[#bd8a30] pb-1" : ""
            }
            href="#founder"
          >
            About
          </a>
          <a href="#divisions">Cardiovascular Medicine⌄</a>
          <a href="#divisions">Biblical Academy⌄</a>
          <a href="#articles">Research⌄</a>
          <a href="#articles">Publications⌄</a>
          <a
            className={
              active === "investment" ? "border-b border-[#bd8a30] pb-1" : ""
            }
            href="#investment"
          >
            Investment⌄
          </a>
          <a href="#">Store</a>
          <span className="text-lg">⌕</span>
          <a
            className="rounded-full bg-[#bd8a30] px-5 py-2 text-white"
            href="#contact"
          >
            Contact
          </a>
        </nav>
        <button
          className="flex h-10 w-10 items-center justify-center text-2xl text-[#062b40] lg:hidden"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          ≡
        </button>
      </div>
      {menuOpen && (
        <nav className="absolute left-0 right-0 top-full flex flex-col border-t border-[#e8e3d9] bg-[#fffefb] px-5 py-4 shadow-xl lg:hidden">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-[#eee8de] py-3 text-sm"
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-[#062d42] bg-cover bg-center text-white"
      style={{ backgroundImage: `url("${heroPhoto}")` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#002a43]/95 via-[#00344e]/70 to-[#061c28]/15" />
      <div className="relative mx-auto flex min-h-[580px] max-w-[1180px] items-center px-5 py-12 md:py-16 lg:px-8">
        <div className="max-w-[720px]">
          <p className="mb-3 text-[12px] tracking-[.22em] text-[#e2b45b]">
            UNVEILING VOICE
          </p>
          <h1 className="font-serif text-[37px] leading-[.98] md:text-[54px] lg:text-[60px]">
            ONE VOICE. TWO DIMENSIONS.
            <br />
            ONE PURPOSE.
          </h1>
          <p className="mt-6 max-w-[690px] text-[13px] leading-6 text-white/90 md:text-[14px]">
            Unveiling Voice is an interdisciplinary educational and scholarly
            platform bringing together cardiovascular public health, preventive
            cardiology, cardiovascular epidemiology, research methodology and
            biblical and theological scholarship. We make complex ideas
            accessible without compromising scientific rigor, clinical
            boundaries or interpretive integrity—helping readers understand
            cardiovascular risk, evaluate evidence and engage thoughtfully with
            faith and meaning.
          </p>
          <p className="mt-3 max-w-[690px] text-[13px] leading-6 text-white/90 md:text-[14px]">
            Our work connects two distinct but complementary fields: the science
            of physical health and the study of biblical truth. Each is
            approached with integrity, accessibility and respect for its own
            methods of inquiry.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <ArrowButton gold>
              Explore Cardiovascular Medicine &amp; Research
            </ArrowButton>
            <ArrowButton>
              Explore the Biblical &amp; Theological Academy
            </ArrowButton>
          </div>
        </div>
      </div>
    </section>
  )
}

function Introduction() {
  return (
    <section className="border-b border-[#e8e1d5] bg-[#f9f5ed]">
      <div className="mx-auto grid max-w-[1180px] gap-6 px-5 py-10 md:grid-cols-[.8fr_1.4fr] md:gap-16 md:px-8 md:py-14">
        <div>
          <p className="text-[10px] font-semibold tracking-[.2em] text-[#ae7d2d]">
            INTRODUCTION
          </p>
          <h2 className="mt-3 font-serif text-[34px] leading-[1.03] text-[#062d42] md:text-[43px]">
            Where Complexity
            <br />
            Becomes Clarity
          </h2>
        </div>
        <p className="self-center text-[14px] leading-7 text-[#294857] md:text-[15px]">
          Knowledge has greatest value when people can understand it and put it
          to use. From cardiovascular risk and prevention to research methods
          and biblical interpretation, Unveiling Voice makes specialist ideas
          more accessible without losing the depth, nuance or responsibility
          they deserve. We seek to make overlooked questions visible, invite
          informed discussion and create educational resources for individuals,
          families, communities, students and professionals.
        </p>
      </div>
    </section>
  )
}

function Divisions() {
  return (
    <section
      id="divisions"
      className="border-b border-[#e8e1d5] bg-[#fffefb] py-8 md:py-9"
    >
      <div className="mx-auto max-w-[1180px] px-5 lg:px-8">
        <h2 className="section-title">Our Two Divisions</h2>
        <p className="section-subtitle">
          Two distinct fields. One integrated vision for health, knowledge and
          life.
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <article className="division-card bg-[#004c64]">
            <ReferenceCrop
              x={47}
              y={403}
              width={127}
              height={192}
              className="division-image"
            />
            <div className="relative flex flex-1 flex-col justify-center p-5 md:p-7">
              <h3>
                Cardiovascular Medicine,
                <br />
                Public Health &amp; Research
              </h3>
              <p className="eyebrow">SCIENCE　/　PREVENTION　/　COMMUNITIES</p>
              <p className="division-copy">
                Evidence-informed cardiovascular education with specialist
                emphasis on prevention, public health, men's health, health
                inequalities and research.
              </p>
              <ArrowButton className="self-start !px-4 !py-2">
                Explore this division
              </ArrowButton>
            </div>
          </article>
          <article className="division-card bg-[#6b1032]">
            <ReferenceCrop
              x={446}
              y={403}
              width={122}
              height={192}
              className="division-image"
            />
            <div className="relative flex flex-1 flex-col justify-center p-5 md:p-7">
              <h3>
                Biblical &amp; Theological
                <br />
                Academy
              </h3>
              <p className="eyebrow">
                SCRIPTURE　/　REFLECTION　/　TRANSFORMATION
              </p>
              <p className="division-copy">
                Accessible biblical learning, theological reflection, devotional
                writing and thoughtful exploration of faith and everyday life.
              </p>
              <ArrowButton className="self-start !px-4 !py-2">
                Explore this division
              </ArrowButton>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

function Features() {
  return (
    <section id="features" className="bg-[#fffefb] py-8 md:py-10">
      <div className="mx-auto max-w-[1180px] px-5 lg:px-8">
        <h2 className="section-title">Featured Areas</h2>
        <p className="section-subtitle">
          Explore key resources, tools and learning pathways across both
          divisions.
        </p>
        <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className={`${
                index > 0 ? "hidden md:block" : ""
              } overflow-hidden rounded border border-[#e4ded4] bg-white shadow-sm`}
            >
              <ReferenceCrop
                x={feature.crop[0]}
                y={feature.crop[1]}
                width={feature.crop[2]}
                height={feature.crop[3]}
                className="w-full"
              />
              <div className="p-5">
                <h3 className="font-serif text-[18px] text-[#052d43]">
                  {feature.title}
                </h3>
                <p className="mt-3 min-h-[48px] text-[12px] leading-5 text-[#284351]">
                  {feature.copy}
                </p>
                <a
                  href={feature.href}
                  className="mt-5 inline-block text-[12px] font-medium text-[#06354d]"
                >
                  Learn more　<span className="text-[#bd8a30]">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section
      id="about"
      className="hidden border-y border-[#eee9df] bg-[#fcfaf6] py-11 md:block"
    >
      <div className="mx-auto grid max-w-[1180px] grid-cols-[260px_1fr_250px] items-center gap-10 px-8">
        <img
          src="/mark-amadi-headshot.png"
          alt="Dr Mark C. Amadi"
          className="h-[360px] w-full border-l-2 border-[#c99a43] object-cover object-top pl-2"
        />
        <div>
          <h2 className="section-title">
            About the Author &amp; Our Philosophy
          </h2>
          <div className="mt-5 space-y-2 text-[12px] leading-5 text-[#183d50]">
            <p className="font-serif text-[18px] text-[#062d42]">
              Mark C. Amadi, PhD, MPH, MSC (Cardiology)
            </p>
            <p>
              Public Health Researcher | Cardiovascular Health Scholar | Author
              | Healthcare Chaplain
            </p>
            <p>Originator, Triple-Risk Convergence Framework (TRCF)</p>
            <p>Producer, Cardiology Made Simple®</p>
            <p className="font-semibold text-[#9a6b1f]">
              UVP INTELLECTUS® | Unveiling Voice Publications
            </p>
            <div className="border-t border-[#ded4c3] pt-2 text-[11px] leading-5">
              <p>ORCID: 0009-0006-9502-9552</p>
              <p>Web of Science Research ID: RGK-4948-2026</p>
              <p>Scopus Author ID: 60916734300</p>
            </div>
          </div>
          <ArrowButton gold className="mt-6" href="#founder">
            Learn more about the author
          </ArrowButton>
        </div>
        <div className="space-y-6 border-l border-[#dfd4c0] pl-8">
          {[
            [
              "♧",
              "Clarity",
              "Explaining specialist ideas without unnecessary jargon.",
            ],
            [
              "◇",
              "Integrity",
              "Distinguishing evidence, interpretation and opinion.",
            ],
            [
              "♙",
              "Service",
              "Creating useful resources for people and communities.",
            ],
          ].map(([icon, title, copy]) => (
            <div className="flex gap-4" key={title}>
              <span className="text-3xl text-[#b98a36]">{icon}</span>
              <div>
                <h3 className="font-serif text-[16px] text-[#052d43]">
                  {title}
                </h3>
                <p className="text-[11px] leading-4 text-[#38505b]">{copy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Community() {
  return (
    <section
      className="community relative overflow-hidden bg-cover bg-center text-white"
      style={{ backgroundImage: `url("${heroPhoto}")` }}
    >
      <div className="absolute inset-0 bg-[#002e45]/80" />
      <div className="relative mx-auto flex max-w-[1180px] flex-col items-center gap-5 px-5 py-7 text-center md:flex-row md:text-left lg:px-8">
        <div className="hidden text-5xl text-[#d2a04d] md:block">♧</div>
        <div className="mr-auto">
          <h2 className="font-serif text-[28px]">
            Join Our Research Community
          </h2>
          <p className="mt-1 max-w-[530px] text-[12px] leading-5">
            Be part of a growing network of researchers, healthcare
            professionals, students and scholars advancing knowledge across both
            divisions.
          </p>
        </div>
        <ArrowButton gold>Join the Community</ArrowButton>
        <p className="hidden border-l border-white/25 pl-8 text-[11px] leading-5 md:block">
          Your interest matters.
          <br />
          Your contribution could help
          <br />
          shape tomorrow's knowledge.
        </p>
      </div>
    </section>
  )
}

function MobileCommunityIntro() {
  return (
    <div className="bg-[#fffefb] px-5 pb-4 md:hidden">
      <div
        className="h-[190px] bg-cover bg-center"
        style={{ backgroundImage: `url("${heroPhoto}")` }}
      />
      <h2 className="py-3 font-serif text-[26px] leading-6 text-[#062d42]">
        Join Our Research
        <br />
        Community
      </h2>
    </div>
  )
}

function Articles() {
  return (
    <section id="articles" className="hidden bg-[#fffefb] py-8 md:block">
      <div className="mx-auto max-w-[1180px] px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="section-title">Latest Articles</h2>
            <p className="section-subtitle">
              Evidence, insight and reflection from our editorial team.
            </p>
          </div>
          <a href="#" className="mb-1 text-[11px] text-[#153a4e]">
            View all articles　<span className="text-[#b98a36]">→</span>
          </a>
        </div>
        <div className="mt-5 grid grid-cols-4 gap-5">
          {articles.map((article) => (
            <article
              key={article.title}
              className="overflow-hidden rounded border border-[#e6e0d8] bg-white shadow-sm"
            >
              <ReferenceCrop
                x={article.crop[0]}
                y={article.crop[1]}
                width={article.crop[2]}
                height={article.crop[3]}
              />
              <div className="p-4">
                <h3 className="min-h-[38px] font-serif text-[14px] leading-4 text-[#052d43]">
                  {article.title}
                </h3>
                <p className="mt-2 text-[9px] text-[#657983]">
                  By Dr Mark C. Amadi　 ·　 {article.date}
                </p>
                <a
                  href="#"
                  className="mt-4 inline-block text-[10px] text-[#06354d]"
                >
                  Read more　<span className="text-[#bd8a30]">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return <FooterSection />
}

function InvestmentPage() {
  const principles = [
    {
      title: "Capital Efficiency",
      copy: "Allocate financial resources towards productive opportunities capable of generating sustainable, risk-adjusted returns.",
    },
    {
      title: "Risk Management",
      copy: "Protect invested capital through rigorous due diligence, diversification where appropriate, scenario planning and effective financial controls.",
    },
    {
      title: "Operational Accountability",
      copy: "Strengthen governance, eliminate avoidable waste and establish transparent responsibility for financial and operational outcomes.",
    },
    {
      title: "Performance Measurement",
      copy: "Evaluate profitability, cash generation, capital productivity and measurable economic value against clearly defined strategic objectives.",
    },
    {
      title: "Sustainable Reinvestment",
      copy: "Direct retained earnings and realised returns towards innovation, workforce development, operational resilience and long-term enterprise growth.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#fffefb] text-[#072f44]">
      <Header active="investment" />
      <main>
        <section className="relative overflow-hidden bg-[#032e45] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(198,151,67,.28),transparent_32%)]" />
          <div className="relative mx-auto max-w-[1040px] px-5 py-16 md:px-8 md:py-24">
            <p className="text-[11px] tracking-[.22em] text-[#e1b45e]">
              UVP INTELLECTUS®　|　INVESTMENT MANAGEMENT &amp; ENTREPRENEURSHIP
            </p>
            <h1 className="mt-6 max-w-[900px] font-serif text-[38px] leading-[1.03] md:text-[62px]">
              Investment Management:
              <br />
              From Capital Allocation to Sustainable Profitability
            </h1>
            <blockquote className="mt-9 max-w-[720px] border-l-2 border-[#c79743] pl-6 font-serif text-[20px] italic leading-8 text-white/90 md:text-[24px]">
              “The true measure of INVESTMENT is not what was SPENT, but what
              was TRANSFORMED.”
              <cite className="mt-3 block font-sans text-[12px] not-italic tracking-[.12em] text-[#e1b45e]">
                — MARK AMADI
              </cite>
            </blockquote>
          </div>
        </section>

        <article className="editorial-article mx-auto max-w-[860px] px-5 py-12 md:px-8 md:py-20">
          <p className="article-lead">
            In today’s competitive business environment, investment success must
            be evaluated beyond capital expenditure, ambitious financial
            projections and impressive corporate announcements. Sustainable
            profitability demands disciplined capital allocation, strategic
            accountability, effective risk management and measurable value
            creation.
          </p>
          <p>
            Whether managing an established corporation or developing an
            entrepreneurial venture, investment decisions must demonstrate
            commercial viability, acceptable risk exposure and alignment with
            long-term strategic objectives. Capital should not merely finance
            activity; it should strengthen productive capacity, generate
            sustainable returns and create enduring enterprise value.
          </p>
          <p>
            Yet allocating capital is only the beginning. Effective investment
            management requires robust governance, transparent financial
            reporting, disciplined cash-flow management and continuous
            performance evaluation. Return on investment (ROI), return on
            invested capital (ROIC), operating margins and liquidity indicators
            provide important insights into financial sustainability.
          </p>

          <aside>
            Profitability without financial discipline is vulnerable; growth
            without accountability is unsustainable.
          </aside>

          <h2>Five Principles of Responsible Investment</h2>
          <p>
            Five interconnected principles should guide responsible investment
            and entrepreneurial leadership:
          </p>
          <ol className="mt-8 space-y-5">
            {principles.map((principle, index) => (
              <li
                key={principle.title}
                className="grid grid-cols-[42px_1fr] gap-4"
              >
                <span className="font-serif text-[30px] text-[#ba8732]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-[21px] text-[#062d42]">
                    {principle.title}
                  </h3>
                  <p className="!mt-1">{principle.copy}</p>
                </div>
              </li>
            ))}
          </ol>

          <h2>Building Stronger Enterprises</h2>
          <p>
            For entrepreneurs, these principles are particularly significant.
            Business expansion should not be confused with business success.
            Increasing turnover, opening additional branches or attracting
            substantial investment does not automatically establish
            profitability or financial resilience.
          </p>
          <aside>
            The ultimate objective is not simply to grow bigger, but to build
            stronger, more productive and financially sustainable enterprises.
          </aside>
          <p>
            Investment excellence is therefore demonstrated not merely by how
            much capital is committed, but by how effectively that capital is
            governed, protected, multiplied and translated into measurable
            economic and societal value.
          </p>
          <p>
            True investment leadership transforms resources into sustainable
            profitability, responsible enterprise growth and lasting impact.
          </p>

          <div className="mt-14 border-t border-[#ded4c3] pt-7">
            <p className="!m-0 font-serif text-[22px] text-[#062d42]">
              — Mark Amadi
            </p>
            <p className="!mt-2 text-[11px] font-semibold tracking-[.14em] text-[#a87524]">
              UVP INTELLECTUS® | INVESTMENT MANAGEMENT &amp; ENTREPRENEURSHIP
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}

function FounderPage() {
  return (
    <div className="min-h-screen bg-[#fffefb] text-[#072f44]">
      <Header active="founder" />
      <main>
        <section className="bg-[#f7f2e9]">
          <div className="mx-auto grid max-w-[1100px] items-center gap-10 px-5 py-12 md:grid-cols-[360px_1fr] md:px-8 md:py-20">
            <img
              src="/mark-amadi-headshot.png"
              alt="Dr Mark C. Amadi"
              className="h-[470px] w-full border-l-4 border-[#c79743] object-cover object-top"
            />
            <div>
              <p className="text-[11px] tracking-[.24em] text-[#a87524]">
                ABOUT THE FOUNDER
              </p>
              <h1 className="mt-4 font-serif text-[46px] leading-none text-[#062d42] md:text-[64px]">
                Dr Mark C. Amadi
              </h1>
              <p className="mt-6 max-w-[660px] text-[15px] leading-7 text-[#294857]">
                Cardiovascular Public Health Researcher | Interdisciplinary
                Scholar | Theologian | Author
              </p>
            </div>
          </div>
        </section>

        <article className="editorial-article mx-auto max-w-[860px] px-5 py-12 md:px-8 md:py-20">
          <p className="article-lead">
            Dr Mark C. Amadi is an interdisciplinary scholar, cardiovascular
            public health researcher, theologian and registered NHS healthcare
            chaplain whose work bridges cardiovascular science, public health,
            behavioural psychology and biblical scholarship.
          </p>
          <p>
            He is the founder of Unveiling Voice, a multidisciplinary platform
            dedicated to advancing knowledge, strengthening evidence and
            translating complex ideas into meaningful understanding and
            practical application.
          </p>
          <p>
            He holds a PhD in Theology, MSc degrees in International Public
            Health, Applied Psychology, Cardiology, MA Pastoral Theology and
            postgraduate qualifications in Pastoral Care and Healthcare
            Chaplaincy.
          </p>
          <p>
            A PhD in Public Health, with doctoral research examining perceived
            stress, social support and cardiovascular health among adult men in
            Nigeria.
          </p>

          <h2>Research &amp; Expertise</h2>
          <p>
            His principal areas of expertise and research interest include
            cardiovascular public health, preventive cardiology, cardiovascular
            epidemiology, precision prevention, men’s cardiovascular health,
            psychosocial and inherited cardiovascular risk, health inequalities,
            and empirical and mixed-methods research.
          </p>
          <p>
            Dr Amadi is the originator of the Triple-Risk Convergence Framework
            (TRCF™), introduced in his 2026 peer-reviewed publication in the
            American Journal of Men’s Health. The framework proposes an
            integrated perspective on psychosocial, metabolic and inherited
            cardiovascular susceptibility, providing a conceptual foundation for
            further empirical investigation into premature cardiovascular
            disease.
          </p>
          <p>
            His scholarship also encompasses biblical theology, spiritual
            formation, ethical leadership and translational and interventional
            biblical studies.
          </p>
          <p>
            Through Unveiling Voice, Dr Amadi seeks to connect rigorous
            scholarship with accessible education, advancing cardiovascular
            prevention, research literacy and responsible theological
            understanding.
          </p>

          <div className="mt-14 bg-[#062f45] px-6 py-9 text-center text-white md:px-10">
            <p className="!m-0 font-serif text-[25px] tracking-[.04em] text-white">
              ONE VOICE. TWO DIMENSIONS. ONE PURPOSE.
            </p>
            <p className="!mt-3 text-[12px] tracking-[.08em] text-[#e3b65f]">
              Unveiling Knowledge. Advancing Prevention. Illuminating Truth.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}

function HomePage() {
  return (
    <div className="min-h-screen bg-[#fffefb] text-[#072f44]">
      <Header />
      <Hero />
      <Introduction />
      <Divisions />
      <Features />
      <About />
      <MobileCommunityIntro />
      <Community />
      <Articles />
      <Footer />
    </div>
  )
}

type ChatMessage = {
  role: "assistant" | "user"
  text: string
}

function answerQuestion(question: string) {
  const query = question.toLowerCase()

  if (
    /(chest pain|pressure in.*chest|heart attack|can't breathe|cannot breathe|severe shortness of breath|fainted|unconscious)/.test(
      query,
    )
  ) {
    return "Chest pain, severe breathlessness, fainting, or symptoms of a heart attack can be an emergency. Call your local emergency number now. In the UK, call 999. Do not wait for an online response or drive yourself. This assistant cannot assess or diagnose an emergency."
  }

  if (/(blood pressure|hypertension)/.test(query)) {
    return "High blood pressure often has no symptoms, so measurement is important. A clinician can confirm whether your readings are high using repeated home or clinic measurements. Helpful steps commonly include reducing salt, staying active, maintaining a healthy weight, limiting alcohol, not smoking, and taking prescribed medicine consistently. If a reading is 180/120 mmHg or higher, repeat it after a few minutes and seek urgent medical advice, especially if you have symptoms."
  }

  if (/(cholesterol|ldl|hdl|triglyceride)/.test(query)) {
    return "Cholesterol is assessed with a blood test. LDL cholesterol contributes to plaque formation, while HDL helps transport cholesterol away from arteries. Your overall cardiovascular risk—not one number alone—guides treatment. Diet, activity, avoiding tobacco, and prescribed lipid-lowering medicine can reduce risk. Ask a qualified clinician to interpret your results in context."
  }

  if (/(prevent|healthy heart|heart health|cardiovascular risk)/.test(query)) {
    return "Core heart-health measures include not smoking, regular physical activity, a fibre-rich diet with vegetables and whole foods, healthy blood pressure and cholesterol, good sleep, weight management, and diabetes control. Your personal risk also depends on age, family history, and existing conditions, so discuss an individual prevention plan with a healthcare professional."
  }

  if (/(exercise|physical activity|workout)/.test(query)) {
    return "For many adults, a common goal is at least 150 minutes of moderate aerobic activity each week plus strength activity on two days. Start gradually and choose activity you can sustain. If you have heart disease, significant symptoms, or have been inactive for a long time, ask a healthcare professional what level is safe for you."
  }

  if (/(diet|food|eat|nutrition)/.test(query)) {
    return "A heart-supportive eating pattern generally emphasises vegetables, fruit, whole grains, beans, nuts, fish, and unsaturated fats while limiting excess salt, added sugar, highly processed food, and saturated or trans fats. Dietary advice should be adapted to your medical conditions, medicines, culture, and preferences."
  }

  if (/(palpitation|heart racing|irregular heartbeat)/.test(query)) {
    return "Palpitations can have many causes, including stress, caffeine, medicines, or an abnormal rhythm. Arrange medical review if they recur, last for more than a few minutes, or concern you. Seek urgent help if they occur with chest pain, fainting, marked breathlessness, or severe dizziness."
  }

  if (/(founder|author|mark amadi|orcid|trcf)/.test(query)) {
    return "Dr Mark C. Amadi is the founder of Unveiling Voice, a cardiovascular public health researcher, interdisciplinary scholar, theologian, author, and healthcare chaplain. His Founder page includes his biography, research interests, and the Triple-Risk Convergence Framework. Open About from the main menu to learn more."
  }

  if (/(investment|entrepreneur|profitability|capital)/.test(query)) {
    return "The Investment Management page explores capital efficiency, risk management, operational accountability, performance measurement, and sustainable reinvestment. Select Investment in the main navigation to read the complete article."
  }

  if (/(biblical|theology|faith|academy)/.test(query)) {
    return "The Biblical & Theological Academy is one of Unveiling Voice’s two divisions. It focuses on accessible biblical learning, theological reflection, spiritual formation, and thoughtful exploration of faith in everyday life."
  }

  if (
    /(research|publication|cardiology made simple|website|unveiling voice|what.*site)/.test(
      query,
    )
  ) {
    return "Unveiling Voice connects cardiovascular medicine, public health, research, and biblical scholarship. Use the main navigation to explore the cardiovascular and biblical divisions, publications, Investment Management, the Founder profile, and the research community."
  }

  return "I can help with general heart-health education or explain where to find information on Unveiling Voice. Try asking about blood pressure, cholesterol, heart-healthy habits, the Founder, Investment Management, or the site’s research areas. I provide general information only and cannot diagnose symptoms or replace a healthcare professional."
}

function ChatAssistant() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      text: "Welcome to the UV Assistant. I can answer general questions about heart health and help you explore Unveiling Voice. How can I help?",
    },
  ])
  const messagesEnd = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open) messagesEnd.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, open])

  const ask = (question: string) => {
    const trimmed = question.trim()
    if (!trimmed) return
    setMessages((current) => [
      ...current,
      { role: "user", text: trimmed },
      { role: "assistant", text: answerQuestion(trimmed) },
    ])
    setInput("")
  }

  const submit = (event: FormEvent) => {
    event.preventDefault()
    ask(input)
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-[70] flex items-center gap-3 rounded-full border border-[#d5ad65] bg-[#052f45] px-5 py-3.5 text-sm font-medium text-white shadow-[0_12px_35px_rgba(0,35,54,.3)] transition hover:-translate-y-0.5"
        aria-label="Open UV Assistant"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#c79743] font-serif text-[11px] text-[#052f45]">
          UV
        </span>
        Ask UV Assistant
      </button>
    )
  }

  return (
    <aside
      className="fixed bottom-3 left-3 right-3 z-[70] flex max-h-[min(680px,calc(100vh-24px))] flex-col overflow-hidden rounded-xl border border-[#d9c9ad] bg-[#fffefb] shadow-[0_20px_60px_rgba(0,35,54,.3)] sm:bottom-5 sm:left-auto sm:right-5 sm:w-[390px]"
      aria-label="UV Assistant chat"
    >
      <div className="flex items-center gap-3 bg-[#052f45] px-4 py-4 text-white">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#c79743] font-serif text-sm text-[#052f45]">
          UV
        </span>
        <div className="min-w-0 flex-1">
          <h2 className="font-serif text-lg">UV Assistant</h2>
          <p className="text-[10px] tracking-[.08em] text-white/65">
            HEART HEALTH &amp; WEBSITE GUIDE
          </p>
        </div>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-xl text-white transition hover:bg-white/10"
          aria-label="Close assistant"
        >
          ×
        </button>
      </div>

      <div className="border-b border-[#e7dfd2] bg-[#f6f0e6] px-4 py-2 text-[10px] leading-4 text-[#596c74]">
        General education only, not medical diagnosis. For emergencies, call
        your local emergency number.
      </div>

      <div
        className="flex min-h-[260px] flex-1 flex-col gap-3 overflow-y-auto px-4 py-4"
        aria-live="polite"
      >
        {messages.map((message, index) => (
          <div
            key={`${message.role}-${index}`}
            className={`max-w-[88%] whitespace-pre-line rounded-xl px-3.5 py-3 text-[13px] leading-5 ${
              message.role === "user"
                ? "ml-auto rounded-br-sm bg-[#0b5268] text-white"
                : "rounded-bl-sm border border-[#e6ded1] bg-white text-[#294857]"
            }`}
          >
            {message.text}
          </div>
        ))}
        <div ref={messagesEnd} />
      </div>

      {messages.length === 1 && (
        <div className="flex flex-wrap gap-2 px-4 pb-3">
          {[
            "How can I protect my heart?",
            "What is high blood pressure?",
            "Tell me about the website",
          ].map((suggestion) => (
            <button
              type="button"
              key={suggestion}
              onClick={() => ask(suggestion)}
              className="rounded-full border border-[#cfb889] bg-[#fbf7ef] px-3 py-1.5 text-[10px] text-[#33505d] transition hover:bg-[#f1e5ce]"
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}

      <form
        onSubmit={submit}
        className="flex gap-2 border-t border-[#e7dfd2] bg-white p-3"
      >
        <label className="sr-only" htmlFor="uv-question">
          Ask a question
        </label>
        <input
          id="uv-question"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Ask about heart health or this site..."
          autoComplete="off"
          className="min-w-0 flex-1 rounded-full border border-[#d9d1c4] bg-[#fffefb] px-4 py-2.5 text-[12px] text-[#173d50] outline-none placeholder:text-[#7b8b91] focus:border-[#b98735]"
        />
        <button
          type="submit"
          className="h-10 rounded-full bg-[#c79743] px-4 text-[12px] font-semibold text-[#052f45] transition hover:bg-[#d4aa5f]"
        >
          Send
        </button>
      </form>
    </aside>
  )
}

export default function App() {
  const getPage = () => {
    if (window.location.hash === "#investment") return "investment"
    if (window.location.hash === "#founder") return "founder"
    return "home"
  }
  const [page, setPage] = useState(getPage)

  useEffect(() => {
    const handleHashChange = () => {
      setPage(getPage())
      const sectionId = window.location.hash.slice(1)
      requestAnimationFrame(() => {
        document.getElementById(sectionId)?.scrollIntoView()
      })
    }

    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  let content: ReactNode = <HomePage />
  if (page === "investment") content = <InvestmentPage />
  if (page === "founder") content = <FounderPage />

  return (
    <>
      {content}
      <ChatAssistant />
    </>
  )
}
