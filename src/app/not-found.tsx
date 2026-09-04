import { PageShell } from "@/components/layout/PageShell";
import { Button } from "@/components/ui/Button";
import { Kicker } from "@/components/ui/Kicker";

export default function NotFound() {
  return (
    <PageShell className="pt-24">
      <Kicker className="mb-[22px]">Error 404</Kicker>
      <h1 className="mb-6 font-heading text-[clamp(36px,7vw,46px)]/[1.06] font-normal tracking-display">
        Nothing at this address
      </h1>
      <p className="mb-8 max-w-[46ch] text-lede text-ink/78 text-pretty">
        The page you asked for is not here. It may have been renamed, or it may
        never have existed — both happen.
      </p>
      <div className="flex flex-wrap gap-2.5">
        <Button variant="primary" href="/">
          Back to the front
        </Button>
        <Button href="/notes">The weekly note</Button>
      </div>
    </PageShell>
  );
}
