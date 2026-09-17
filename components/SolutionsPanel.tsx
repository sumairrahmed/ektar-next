import Link from "next/link";

type Product = { num: string; name: string; role: string; description: string; href: string };

// Flat, numbered product list — same .solpanel/.sol pattern used on the
// surface pages. As of v4 the homepage no longer groups these by tier
// (DESIGN.md §6) — don't reintroduce tier headers here.
export default function SolutionsPanel({ products }: { products: Product[] }) {
  return (
    <div className="solpanel">
      {products.map((p) => (
        <Link key={p.href} href={p.href} className="sol">
          <span className="num mono">{p.num}</span>
          <span className="nm">{p.name}</span>
          <span className="role">{p.role}</span>
          <p className="d">{p.description}</p>
        </Link>
      ))}
    </div>
  );
}
