"use client";

import { useSearchParams } from "next/navigation";
import HeaderWithBreadcrumb from "./header-with-breadcrumb";
import HeaderWithSearch from "./header-with-search";

export default function Header() {
  const searchParams = useSearchParams();
  const flags = searchParams.get("flags");

  return !flags?.includes("header2") ? (
    <HeaderWithBreadcrumb />
  ) : (
    <HeaderWithSearch />
  );
}

Header.displayName = "Header";
