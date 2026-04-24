// Pattern: login-modal
// Registry deps: button, input, label, separator, landing-modal-shell
'use client'

import {
  Button,
  Input,
  LandingModalShell,
  Label,
  Separator,
} from '@gigaverse/ui'

interface LoginModalProps {
  onConnect?: () => void
  onEmailSubmit?: (email: string) => void
}

export function LoginModal({ onConnect, onEmailSubmit }: LoginModalProps) {
  return (
    <LandingModalShell
      accent="teal"
      size="sm"
      title="ENTER THE GIGAVERSE"
      trigger={
        <Button variant="primary" size="lg">
          PLAY NOW
        </Button>
      }
    >
      <p className="font-m5x7 text-[17px] leading-[1.35] text-giga-muted">
        Connect a wallet or sign in with email. Each account picks one faction — forever.
      </p>

      <div className="mt-6 flex flex-col gap-3">
        <Button variant="primary" onClick={onConnect}>
          CONNECT WALLET
        </Button>
        <div className="relative py-2">
          <Separator />
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-giga-panel px-2 text-[12px] uppercase tracking-[3px] text-giga-muted">
            OR
          </span>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            const fd = new FormData(e.currentTarget)
            onEmailSubmit?.(String(fd.get('email') ?? ''))
          }}
          className="flex flex-col gap-2"
        >
          <Label htmlFor="login-email">EMAIL</Label>
          <Input id="login-email" name="email" type="email" placeholder="YOU@DOMAIN.COM" />
          <Button type="submit" variant="acceptPill" className="mt-2">
            CONTINUE WITH EMAIL
          </Button>
        </form>
      </div>

      <div className="mt-6 flex justify-end">
        <Button variant="ghost">NEED HELP?</Button>
      </div>
    </LandingModalShell>
  )
}
