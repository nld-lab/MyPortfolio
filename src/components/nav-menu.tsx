import type { ComponentProps } from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../components/ui/navigation-menu";
import { Button } from "./ui/button";

export const NavMenu = (props: ComponentProps<typeof NavigationMenu>) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className="space-x-4 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:justify-start">
      <NavigationMenuItem>
        <a href="#hero">
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Accueil
          </NavigationMenuLink>
        </a>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <a href="#projects">
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Mes Projets
          </NavigationMenuLink>
        </a>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <a href="#about">
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            À Propos
          </NavigationMenuLink>
        </a>
      </NavigationMenuItem>

      <a href="https://wa.me/22897310889?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20vos%20produits." target="_blank" rel="noopener noreferrer">
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          <Button className="rounded-full md:hidden hover:bg-green-500">
            Contacter Moi
          </Button>
        </NavigationMenuLink>
      </a>
    </NavigationMenuList>
  </NavigationMenu>
);
