"use client";

import { Stack } from "@fluentui/react";
import Link from "next/link";

const links = [
  "",
  "About",
  "Examples",
  "Resume",
];

export default function HorizontalNavigation() {
  return (
    <Stack horizontal gap={10}>
      {...links.map((link, i) => <Link href={`/${link.toLowerCase()}`} key={i}>{(link ? link : "Home")}</Link>)} 
    </Stack>
  );
}