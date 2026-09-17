import type { Metadata } from "next";
import Link from "next/link";
import InvestorForm from "@/components/InvestorForm";
import { hero, form } from "@/lib/content/investor-contact";

export const metadata: Metadata = {
  title: "Get in touch — Ektar Investors",
  description: hero.sub,
};

export default function InvestorContactPage() {
  return (
    <>
      <section className="stage">
        <div className="mesh" />
        <div className="glow" />
        <div className="scan" />
        <div className="wrap pt-10! pb-10! mt-10! mb-10!">
          <div className="hero">
            <div className="reveal">
              <p className="status mono">
                <span className="dot" />
                {hero.statusText}
              </p>
              <h1 className="display">{hero.title}</h1>
              <p className="sub">{hero.sub}</p>
              <div className="row">
                <Link href="/investors" className="btn btn-ghost btn-onink">
                  ← Back to Investors
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="wrap pt-10! pb-10! mt-10! mb-10!">
        <div className="pane reveal max-w-2xl! mx-auto!">
          <span className="kicker mono">{form.heading}</span>
          <InvestorForm />
        </div>
      </div>
    </>
  );
}
