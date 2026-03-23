import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs'

if (!existsSync('dist')) {
  throw new Error('dist folder not found. Run vite build first.')
}

if (existsSync('docs')) {
  rmSync('docs', { recursive: true, force: true })
}

mkdirSync('docs', { recursive: true })
cpSync('dist', 'docs', { recursive: true })

const staticPages = ['about.html', 'projects.html', 'resume.html']

for (const page of staticPages) {
  if (existsSync(page)) {
    cpSync(page, `docs/${page}`)
  }
}

console.log('Copied dist -> docs for GitHub Pages')
