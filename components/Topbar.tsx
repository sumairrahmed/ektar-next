"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { toggleTheme } from "@/lib/theme";

type DropItem = { href: string; label: string; role: string };
type NavItem = {
  href: string;
  label: string;
  role: string;
  line: string;
  dropdown?: DropItem[];
};

const NAV: NavItem[] = [
  {
    href: "/",
    label: "Home",
    role: "Home",
    line: "The full trust suite — seven products across three surfaces.",
  },
  {
    href: "/protect-the-user",
    label: "Protect the User",
    role: "Protect the User",
    line: "A login that can't be phished, copied, or intercepted.",
    dropdown: [
      { href: "/ekshield", label: "ekShield", role: "Authentication" },
      { href: "/ekkey", label: "ekKey", role: "Passkeys" },
      { href: "/eksign", label: "ekSign", role: "Document signing" },
      { href: "/ekpulse", label: "ekPulse", role: "Behavioural biometrics" },
    ],
  },
  {
    href: "/protect-the-device",
    label: "Protect the Device",
    role: "Protect the Device",
    line: "Proof it is still the customer's own phone and number.",
    dropdown: [
      { href: "/ekbind", label: "ekBind", role: "SIM & network trust" },
      { href: "/ekprotect", label: "ekProtect", role: "Device integrity" },
      { href: "/ekshield", label: "ekShield", role: "Authentication" },
    ],
  },
  {
    href: "/protect-the-app",
    label: "Protect the App",
    role: "Protect the App",
    line: "Malware, overlays and tampering, caught inside the app.",
    dropdown: [
      { href: "/ekprotect", label: "ekProtect", role: "Runtime & app integrity" },
      { href: "/ekpulse", label: "ekPulse", role: "Behavioural signals" },
    ],
  },
  {
    href: "/about",
    label: "About",
    role: "About",
    line: "Founded 2022 by three ex-bankers. Dubai · Singapore · Chennai.",
  },
];

const DEFAULT_ROLE = "Seven products";
const DEFAULT_LINE = "One decision engine — ekRules weighs every signal the three surfaces emit.";

const STATUS_BY_PATH: Record<string, string> = {
  "/": "Systems live",
  "/ekshield": "Session secured",
  "/ekprotect": "Device & app secured",
  "/ekbind": "SIM verified",
  "/eksign": "Signatures valid",
  "/eksell": "Founding platform",
  "/about": "Since 2022",
  "/investors": "Since 2022",
  "/blog": "Notes",
  "/career": "Since 2022",
  "/career/apply": "Application open",
  "/investors/contact": "Channel open",
  "/contact": "Channel open",
};

export default function Topbar() {
  const pathname = usePathname();
  const statusLabel = STATUS_BY_PATH[pathname] ?? "Systems live";
  const headerRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const blockRef = useRef<HTMLDivElement>(null);
  const keyRef = useRef<HTMLSpanElement>(null);
  const valRef = useRef<HTMLSpanElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close the mobile menu whenever the route changes, or on Escape.
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // The desktop dropdowns open via :hover/:focus-within on .pitem. Since Topbar
  // lives in the root layout and its nav links persist across client-side
  // navigations, a clicked link stays focused after the route changes — which
  // keeps :focus-within (and the dropdown) stuck open. Clear focus once the
  // route settles so the panel closes like it does on mouseleave.
  useEffect(() => {
    const active = document.activeElement as HTMLElement | null;
    if (active && navRef.current?.contains(active)) active.blur();
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  // While the mobile menu is open, lock the page behind it so touch-scrolling
  // moves the menu (which scrolls itself, see .mobilenav-inner) rather than the
  // content underneath. --topbar-h lets the CSS cap the menu to the space below
  // the header. Also close it if the viewport grows past the mobile breakpoint,
  // where the menu is hidden and the lock would otherwise be left stuck on.
  useEffect(() => {
    if (!mobileOpen) return;
    const header = headerRef.current;
    const mq = window.matchMedia("(min-width: 901px)");
    const prevOverflow = document.body.style.overflow;
    function measure() {
      if (header) header.style.setProperty("--topbar-h", header.offsetHeight + "px");
    }
    function onBreakpoint(e: MediaQueryListEvent) {
      if (e.matches) setMobileOpen(false);
    }
    measure();
    document.body.style.overflow = "hidden";
    window.addEventListener("resize", measure);
    mq.addEventListener("change", onBreakpoint);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("resize", measure);
      mq.removeEventListener("change", onBreakpoint);
    };
  }, [mobileOpen]);

  // Magnetic block — measures/targets top-level items only (a.top), using
  // getBoundingClientRect so it's robust with the nested dropdown layout.
  useEffect(() => {
    const nav = navRef.current;
    const block = blockRef.current;
    if (!nav || !block) return;

    function links() {
      return Array.from(nav!.querySelectorAll<HTMLAnchorElement>("a.top"));
    }
    function current() {
      return links().find((a) => a.getAttribute("aria-current")) ?? null;
    }
    function clear() {
      block!.style.width = "0px";
      block!.style.opacity = "0";
      if (keyRef.current) keyRef.current.textContent = DEFAULT_ROLE;
      if (valRef.current) valRef.current.textContent = DEFAULT_LINE;
    }
    function move(el: HTMLAnchorElement) {
      if (!el.offsetWidth) return;
      const r = el.getBoundingClientRect();
      const nr = nav!.getBoundingClientRect();
      block!.style.opacity = "1";
      block!.style.width = r.width + "px";
      block!.style.transform = "translateX(" + (r.left - nr.left) + "px)";
    }
    function fill(el: HTMLAnchorElement) {
      if (keyRef.current) keyRef.current.textContent = el.dataset.role || "";
      if (valRef.current) {
        valRef.current.textContent = el.dataset.line || "";
        valRef.current.classList.remove("fade");
        void valRef.current.offsetWidth;
        valRef.current.classList.add("fade");
      }
    }
    function settle() {
      const c = current();
      if (!c) {
        clear();
        return;
      }
      move(c);
      fill(c);
    }

    function onOver(e: Event) {
      const a = (e.target as HTMLElement).closest?.("a.top");
      if (a && nav!.contains(a)) {
        move(a as HTMLAnchorElement);
        fill(a as HTMLAnchorElement);
      }
    }
    function onFocusIn(e: Event) {
      const a = (e.target as HTMLElement).closest?.("a.top");
      if (a && nav!.contains(a)) {
        move(a as HTMLAnchorElement);
        fill(a as HTMLAnchorElement);
      }
    }

    nav.addEventListener("mouseover", onOver);
    nav.addEventListener("focusin", onFocusIn);
    nav.addEventListener("mouseleave", settle);
    window.addEventListener("resize", settle);

    let ro: ResizeObserver | undefined;
    if (window.ResizeObserver) {
      ro = new ResizeObserver(settle);
      ro.observe(nav);
    }

    const raf = requestAnimationFrame(settle);
    const t1 = setTimeout(settle, 400);
    const t2 = setTimeout(settle, 1200);
    document.fonts?.ready?.then(settle);

    return () => {
      nav.removeEventListener("mouseover", onOver);
      nav.removeEventListener("focusin", onFocusIn);
      nav.removeEventListener("mouseleave", settle);
      window.removeEventListener("resize", settle);
      ro?.disconnect();
      cancelAnimationFrame(raf);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [pathname]);

  return (
    <>
      <header className="topbar" ref={headerRef}>
        <Link href="/" aria-label="Ektar home">
          <Image src="/ektar-logo.png" alt="Ektar" width={72} height={20} priority />
        </Link>
        <span className="pill">
          <span className="dot" aria-hidden="true" />
          {statusLabel}
        </span>
        <nav className="pnav" ref={navRef} data-default-role={DEFAULT_ROLE} data-default-line={DEFAULT_LINE}>
          <div className="pblock" ref={blockRef} aria-hidden="true" />
          {NAV.map((item) => (
            <div className="pitem" key={item.href}>
              <Link
                href={item.href}
                className="top"
                data-role={item.role}
                data-line={item.line}
                aria-current={pathname === item.href ? "page" : undefined}
                onClick={(e) => e.currentTarget.blur()}
              >
                {item.label}
              </Link>
              {item.dropdown && (
                <div className="pdrop">
                  {item.dropdown.map((d, i) => (
                    <Link key={`${d.href}-${i}`} href={d.href} onClick={(e) => e.currentTarget.blur()}>
                      {d.label}
                      <span>{d.role}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <button type="button" className="themebtn" aria-label="Toggle theme" onClick={() => toggleTheme()}>
          <svg className="sun" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
          </svg>
          <svg className="moon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </button>
        <Link href="/contact" className="btn btn-primary">
          Book a demo
        </Link>
        <button
          type="button"
          className="menubtn"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line className="bar-top" x1="3" y1="6" x2="21" y2="6" />
            <line className="bar-mid" x1="3" y1="12" x2="21" y2="12" />
            <line className="bar-bot" x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        <div id="mobile-nav" className={mobileOpen ? "mobilenav open" : "mobilenav"}>
          <div className="mobilenav-inner">
            <nav className="mobilenav-list">
              {NAV.map((item) => (
                <div key={item.href}>
                  <Link href={item.href} aria-current={pathname === item.href ? "page" : undefined}>
                    {item.label}
                  </Link>
                  {item.dropdown?.map((d, i) => (
                    <Link key={`${d.href}-${i}`} href={d.href} className="mobilenav-sub">
                      {d.label}
                    </Link>
                  ))}
                </div>
              ))}
              <Link href="/contact" className="btn btn-primary">
                Book a demo
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <div className="navstrip">
        <span className="dot" aria-hidden="true" />
        <span className="key" ref={keyRef}>
          {DEFAULT_ROLE}
        </span>
        <span className="sep" aria-hidden="true" />
        <span className="val" ref={valRef}>
          {DEFAULT_LINE}
        </span>
      </div>
    </>
  );
}
