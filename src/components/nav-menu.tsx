import type { ComponentProps } from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../components/ui/navigation-menu";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export const NavMenu = (props: ComponentProps<typeof NavigationMenu>) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className="space-x-4 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:justify-start">
      <NavigationMenuItem>
        <a href="/#hero">
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Accueil
          </NavigationMenuLink>
        </a>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <a href="/#services">
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Services
          </NavigationMenuLink>
        </a>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link to="/projects">
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Mes Projets
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <a href="/#about">
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            À Propos
          </NavigationMenuLink>
        </a>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <a href="/#contact">
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Contact
          </NavigationMenuLink>
        </a>
      </NavigationMenuItem>

      <a href="/#contact">
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          <Button className="rounded-full md:hidden">
            Contacter Moi
          </Button>
        </NavigationMenuLink>
      </a>
    </NavigationMenuList>
  </NavigationMenu>
);
