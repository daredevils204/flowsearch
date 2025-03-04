'use client'

import { cn } from '@/lib/utils'

function IconLogo({ className, ...props }: React.ComponentProps<'h1'>) {
  return (
    <h1 className="ml-2 font-bold tracking-tight text-xl">fl<span className="text-fuchsia-400">.</span></h1>
  )
}

export { IconLogo }
