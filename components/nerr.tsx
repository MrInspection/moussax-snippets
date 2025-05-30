"use client"

import {Button} from "@/components/ui/button";

type ErrorProps = {
  error: Error
  reset: () => void
}

export default function ErrorPage(props: ErrorProps) {
  return (
    <main className="border rounded-lx p-4 space-y-4">
      <p>Sorry, something went wrong. Please try again later.</p>
      <Button onClick={props.reset}>Try again</Button>
    </main>
  )
}
