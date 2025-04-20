import Link from "next/link";
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex flex-col min-h-screen justify-center">
      <div className="container mx-auto max-w-md px-4 text-center">
        <p className="text-sm mb-4">404</p>
        <h3 className="text-3xl md:text-4xl font-extrabold mb-4">Page Not Found</h3>
        <p className="text-muted-foreground mb-6">
          Sorry, we couldn't find the page you're looking for.
          This is perhaps a temporary issue, so please try again later.
        </p>
        <Link href="/" className={cn(buttonVariants())}>
          Go back home
        </Link>
      </div>
    </main>
  )
}
