// Pattern: settings-sheet
// Registry deps: sheet, switch, slider, label, separator, button
'use client'

import { useState } from 'react'
import {
  Button,
  Label,
  Separator,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Slider,
  Switch,
} from '@gigaverse/ui'

type Settings = {
  master: number
  music: number
  sfx: number
  reduceMotion: boolean
  screenShake: boolean
  damageNumbers: boolean
  colorblind: boolean
  showFps: boolean
  telemetry: boolean
}

const DEFAULTS: Settings = {
  master: 80,
  music: 60,
  sfx: 90,
  reduceMotion: false,
  screenShake: true,
  damageNumbers: true,
  colorblind: false,
  showFps: false,
  telemetry: true,
}

export function SettingsSheet() {
  const [settings, setSettings] = useState<Settings>(DEFAULTS)

  const setSlider = (key: keyof Settings) => (value: number[]) =>
    setSettings((s) => ({ ...s, [key]: value[0] }))

  const setToggle = (key: keyof Settings) => (value: boolean) =>
    setSettings((s) => ({ ...s, [key]: value }))

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary">SETTINGS</Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle>SETTINGS</SheetTitle>
          <SheetDescription>Tune audio, accessibility, and diagnostics.</SheetDescription>
        </SheetHeader>

        <div className="mt-6 space-y-8">
          <section className="space-y-5">
            <h3 className="text-[12px] uppercase tracking-[3px] text-giga-teal">AUDIO</h3>

            <SliderRow
              label="MASTER"
              value={settings.master}
              onChange={setSlider('master')}
            />
            <SliderRow label="MUSIC" value={settings.music} onChange={setSlider('music')} />
            <SliderRow label="SFX" value={settings.sfx} onChange={setSlider('sfx')} />
          </section>

          <Separator />

          <section className="space-y-4">
            <h3 className="text-[12px] uppercase tracking-[3px] text-giga-teal">ACCESSIBILITY</h3>

            <ToggleRow
              id="reduceMotion"
              label="REDUCE MOTION"
              checked={settings.reduceMotion}
              onChange={setToggle('reduceMotion')}
            />
            <ToggleRow
              id="screenShake"
              label="SCREEN SHAKE"
              checked={settings.screenShake}
              onChange={setToggle('screenShake')}
            />
            <ToggleRow
              id="colorblind"
              label="COLORBLIND MODE"
              checked={settings.colorblind}
              onChange={setToggle('colorblind')}
            />
          </section>

          <Separator />

          <section className="space-y-4">
            <h3 className="text-[12px] uppercase tracking-[3px] text-giga-teal">DIAGNOSTICS</h3>

            <ToggleRow
              id="damageNumbers"
              label="DAMAGE NUMBERS"
              checked={settings.damageNumbers}
              onChange={setToggle('damageNumbers')}
            />
            <ToggleRow
              id="showFps"
              label="SHOW FPS"
              checked={settings.showFps}
              onChange={setToggle('showFps')}
            />
            <ToggleRow
              id="telemetry"
              label="ANONYMOUS TELEMETRY"
              checked={settings.telemetry}
              onChange={setToggle('telemetry')}
            />
          </section>
        </div>

        <SheetFooter className="mt-8">
          <Button variant="ghost" onClick={() => setSettings(DEFAULTS)}>
            RESET
          </Button>
          <SheetClose asChild>
            <Button variant="primary">SAVE</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

function SliderRow({
  label,
  value,
  onChange,
}: {
  label: string
  value: number
  onChange: (v: number[]) => void
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <Label className="text-[12px] uppercase tracking-[2px] text-giga-muted">{label}</Label>
        <span className="text-giga-gold text-[13px]">{value}</span>
      </div>
      <Slider value={[value]} onValueChange={onChange} min={0} max={100} step={1} />
    </div>
  )
}

function ToggleRow({
  id,
  label,
  checked,
  onChange,
}: {
  id: string
  label: string
  checked: boolean
  onChange: (v: boolean) => void
}) {
  return (
    <div className="flex items-center justify-between">
      <Label htmlFor={id} className="text-[13px] uppercase tracking-[2px]">
        {label}
      </Label>
      <Switch id={id} checked={checked} onCheckedChange={onChange} />
    </div>
  )
}
