import Image from "next/image";
import Link from "next/link";

const PRODUCTS = [
  { label: "ekShield", href: "/ekshield" },
  { label: "ekProtect", href: "/ekprotect" },
  { label: "ekBind", href: "/ekbind" },
  { label: "ekSign", href: "/eksign" },
  { label: "ekSell", href: "/eksell" },
  { label: "ekKey", href: "/ekkey" },
  { label: "ekPulse", href: "/ekpulse" },
  { label: "ekRules", href: "/ekrules" },
];

const COMPANY = [
  { label: "About us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/career" },
  { label: "Investors", href: "/investors" },
  { label: "Contact", href: "/contact" },
];

const OFFICES = [
  {
    name: "Singapore",
    image: "/offices/office-singapore.png",
    address: "18 Boon Lay Way #05-95 Tradehub 21, Singapore 609966",
  },
  {
    name: "UAE",
    image: "/offices/office-uae.png",
    address: "Ektar Technologies LLC, 606, Latifa Towers, Near World Trade Center, Dubai, UAE",
  },
  {
    name: "India",
    image: "/offices/office-india.png",
    address:
      "Rattha Tek Meadows, 4th Floor, Tower C, No: 51, Rajiv Gandhi Salai, Sholinganallur, Chennai, Tamil Nadu 600119, India",
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap pt-10! pb-10! mt-10! mb-10!">
        <div className="fgrid">
          <div>
            <h4>Products</h4>
            {PRODUCTS.map((p) => (
              <Link key={p.href} href={p.href}>
                {p.label}
              </Link>
            ))}
          </div>
          <div>
            <h4>Company</h4>
            {COMPANY.map((c) => (
              <Link key={c.href} href={c.href}>
                {c.label}
              </Link>
            ))}
          </div>
          <div>
            <h4>Contact</h4>
            <Link href="/contact">Talk to us</Link>
            <a
              href="https://www.linkedin.com/company/ektar-technologies/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://www.youtube.com/@ektar-technologies"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
          </div>
        </div>

        <div className="fbot">
          <span>© Ektar 2022–2026. All rights reserved.</span>
          <span>
            <Link href="/termsofuse">Terms of Use</Link>
            {" · "}
            <Link href="/privacy-policy">Privacy Policy</Link>
          </span>
        </div>

        <div className="foffices">
          {OFFICES.map((office) => (
            <div className="office" key={office.name}>
              <h5>{office.name}</h5>
              <Image
                className="mark"
                src={office.image}
                alt={`Ektar ${office.name} office`}
                width={160}
                height={56}
              />
              <p>{office.address}</p>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
