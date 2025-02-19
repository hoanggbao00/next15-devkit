import { buttonVariants } from "@/components/ui/button";
import { NotFound } from "@/components/ui/icons";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Not Found",
  description: "Page not found",
};

function NotFoundPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <NotFound />
        <h1 className="text-2xl font-bold">Oops! Page not found</h1>
        <Link href="/" className={buttonVariants()} prefetch={false}>
          Go back to Home
        </Link>
      </div>
    </main>
  );
}

export default NotFoundPage;
