import { Button } from "../components/ui/button";
import { NavMenu } from "../components/nav-menu";
import { NavigationSheet } from "../components/navigation-sheet";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";

const Navbar = () => {
  return (
    <nav className="fixed inset-x-4 top-6 mx-auto h-16 max-w-(--breakpoint-xl) rounded-full border bg-background/25 backdrop-blur-lg px-6 z-50">
      <div className="mx-auto flex h-full items-center justify-between px-4">
        {/* <Logo /> */}
        <a href="#hero">
          <span className="font-bold text-xl">Nico le <span className="text-primary">Dev</span></span>
        </a>

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          <a href="#contact">
            <Button className="hidden rounded-full lg:py-5 sm:inline-flex lg:px-6">
              Contacter Moi
            </Button>
          </a>
          {/* <ModeToggle /> */}
          <AnimatedThemeToggler/>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
