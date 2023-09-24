import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
} from "@nextui-org/navbar";

import NextLink from "next/link";
import { ThemeSwitch } from "./theme-switch";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-1 max-w-fit">
          <NextLink
            className="flex justify-start items-center gap-1"
            href="https://revistadofrio.com.br/sergio-fernandes-uma-vida-dedicada-a-refrigeracao/"
          >
            <p className="font-bold text-cyan-500 dark:text-cyan-300">
              Sérgio Fernandes
            </p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
      <ThemeSwitch />
    </NextUINavbar>
  );
};
