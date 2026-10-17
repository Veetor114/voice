import { BookOpen, HeartPulse, Send, Users } from "lucide-react"
import { type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function FooterSection() {
  const submitNewsletter = (event: FormEvent) => {
    event.preventDefault()
  }

  return (
    <footer
      id="contact"
      className="relative border-t border-white/10 bg-[#002e46] text-white"
    >
      <div className="mx-auto max-w-[1180px] px-5 py-12 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.35fr_.8fr_.8fr_1.2fr]">
          <div className="relative">
            <p className="font-serif text-3xl">Stay Connected</p>
            <p className="mt-3 max-w-[320px] text-sm leading-6 text-white/65">
              Join our newsletter for the latest articles, research updates and
              thoughtful reflections.
            </p>
            <form
              className="relative mt-6 max-w-[340px]"
              onSubmit={submitNewsletter}
            >
              <Input
                type="email"
                required
                aria-label="Email address"
                placeholder="Enter your email"
                className="border-white/20 bg-white pr-12 text-[#173d50] placeholder:text-[#6f8088]"
              />
              <Button
                type="submit"
                size="icon"
                aria-label="Subscribe"
                className="absolute right-1 top-1 rounded-full"
              >
                <Send />
              </Button>
            </form>
          </div>

          <div>
            <p className="font-serif text-xl">Quick Links</p>
            <nav className="mt-4 space-y-2 text-sm text-white/70">
              <a
                className="block transition-colors hover:text-[#e2b45b]"
                href="#home"
              >
                Home
              </a>
              <a
                className="block transition-colors hover:text-[#e2b45b]"
                href="#founder"
              >
                About the Founder
              </a>
              <a
                className="block transition-colors hover:text-[#e2b45b]"
                href="#divisions"
              >
                Cardiovascular Medicine
              </a>
              <a
                className="block transition-colors hover:text-[#e2b45b]"
                href="#divisions"
              >
                Biblical Academy
              </a>
            </nav>
          </div>

          <div>
            <p className="font-serif text-xl">Explore</p>
            <nav className="mt-4 space-y-2 text-sm text-white/70">
              <a
                className="block transition-colors hover:text-[#e2b45b]"
                href="#articles"
              >
                Research
              </a>
              <a
                className="block transition-colors hover:text-[#e2b45b]"
                href="#articles"
              >
                Publications
              </a>
              <a
                className="block transition-colors hover:text-[#e2b45b]"
                href="#investment"
              >
                Investment Management
              </a>
              <a
                className="block transition-colors hover:text-[#e2b45b]"
                href="#contact"
              >
                Contact
              </a>
            </nav>
          </div>

          <div>
            <p className="font-serif text-xl">Follow Unveiling Voice</p>
            <p className="mt-3 text-sm leading-6 text-white/65">
              Connect with our educational and scholarly community.
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { label: "Cardiovascular education", Icon: HeartPulse },
                { label: "Research publications", Icon: BookOpen },
                { label: "Research community", Icon: Users },
              ].map(({ label, Icon }) => (
                <Button
                  key={label}
                  variant="outline"
                  size="icon"
                  aria-label={label}
                  title={label}
                  className="rounded-full border-white/25 text-white hover:border-[#e2b45b] hover:bg-white/10"
                >
                  <Icon />
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <p>© 2025 Unveiling Voice. All rights reserved.</p>
          <nav className="flex flex-wrap gap-5">
            <a className="transition-colors hover:text-white" href="#">
              Privacy Policy
            </a>
            <a className="transition-colors hover:text-white" href="#">
              Accessibility
            </a>
            <a className="transition-colors hover:text-white" href="#">
              Medical Disclaimer
            </a>
            <a className="transition-colors hover:text-white" href="#">
              Terms &amp; Conditions
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
