import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  treeshake: true,
  target: 'es2022',
  splitting: false,
  onSuccess: 'node scripts/prepend-use-client.mjs',
})
