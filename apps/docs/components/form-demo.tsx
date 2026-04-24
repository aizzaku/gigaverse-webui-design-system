'use client'

import { useForm } from 'react-hook-form'
import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@gigaverse/ui'

interface HandleFormValues {
  handle: string
}

export function FormDemo() {
  const form = useForm<HandleFormValues>({ defaultValues: { handle: '' } })

  const onSubmit = form.handleSubmit((values) => {
    alert(`Claimed ${values.handle || '(empty)'}`)
  })

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="grid max-w-md gap-4">
        <FormField
          control={form.control}
          name="handle"
          rules={{
            required: 'Handle is required.',
            minLength: { value: 3, message: 'At least 3 characters.' },
          }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>HANDLE</FormLabel>
              <FormControl>
                <Input placeholder="G1G4CH4D" {...field} />
              </FormControl>
              <FormDescription>This becomes your Gigaverse tag.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant="primary">
          CLAIM HANDLE
        </Button>
      </form>
    </Form>
  )
}
