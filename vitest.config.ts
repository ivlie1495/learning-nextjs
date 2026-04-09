import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Use describe, it, expect without imports
    environment: 'jsdom', // For React/DOM testing
    setupFiles: './vitest.setup.ts', // Setup file for shared config
  },
})
