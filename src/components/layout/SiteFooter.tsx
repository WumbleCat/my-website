import { Container } from "@/components/ui/Container";
import { TextLink } from "@/components/ui/TextLink";

const elsewhere = [
  { href: "https://github.com/WumbleCat", label: "GitHub" },
  { href: "/rss.xml", label: "RSS" },
  { href: "https://www.linkedin.com/in/kometh-tauch/", label: "LinkedIn" },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-rule">
      <Container className="flex flex-wrap justify-between gap-6 pt-[30px] pb-11 text-meta text-ink/48">
        <span>© {new Date().getFullYear()} Kometh Tauch</span>
        <div className="flex gap-5">
          {elsewhere.map((link) => (
            <TextLink key={link.label} href={link.href}>
              {link.label}
            </TextLink>
          ))}
        </div>
      </Container>
    </footer>
  );
}
