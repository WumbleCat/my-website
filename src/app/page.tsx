import { Hero } from "@/components/home/Hero";
import { SelectedWork } from "@/components/home/SelectedWork";
import { WeeklyNote } from "@/components/home/WeeklyNote";
import { PageShell } from "@/components/layout/PageShell";
import { Rule } from "@/components/ui/Rule";

export default function HomePage() {
  return (
    <PageShell>
      <Hero />
      <Rule className="mb-11" />
      <SelectedWork />
      <WeeklyNote />
    </PageShell>
  );
}
