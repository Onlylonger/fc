import { Button } from "fc/components";
import { HomeIcon } from "fc/icons";

export default function Home() {
  return (
    <div className="">
      <header className="border-border bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 h-14 w-full border-b backdrop-blur">
        <div className="flex h-full w-full items-center justify-between px-5">
          <div className="flex items-center gap-2">
            <HomeIcon />
            <span>Barry</span>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" className="w-full justify-start">
              Components
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Hooks
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Utils
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Icons
            </Button>
          </div>
        </div>
      </header>
      <Button>nihao</Button>
    </div>
  );
}
