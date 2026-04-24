'use client'

import { Button, Toaster, toast } from '@gigaverse/ui'

export function ToastDemo() {
  return (
    <>
      <Button
        variant="secondary"
        onClick={() =>
          toast.success('FACTION JOINED', { description: 'Welcome to the Crusader.' })
        }
      >
        FIRE TOAST
      </Button>
      <Toaster />
    </>
  )
}
