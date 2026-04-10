// CI/CD Demo (Lesson 10)
// Simple pipeline examples for GitHub Actions, GitLab CI, and Bitbucket Pipelines

const tabs = [
  {
    id: 'github',
    label: 'GitHub Actions',
    file: '.github/workflows/ci.yml',
    color: 'bg-gray-900',
    code: `name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-and-test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm test -- --run

      - name: Build
        run: npm run build`,
  },
  {
    id: 'gitlab',
    label: 'GitLab CI',
    file: '.gitlab-ci.yml',
    color: 'bg-gray-900',
    code: `stages:
  - test
  - build

variables:
  NODE_VERSION: "20"

test:
  stage: test
  image: node:\${NODE_VERSION}
  cache:
    paths:
      - node_modules/
  script:
    - npm ci
    - npm test -- --run

build:
  stage: build
  image: node:\${NODE_VERSION}
  cache:
    paths:
      - node_modules/
  script:
    - npm ci
    - npm run build
  only:
    - main`,
  },
  {
    id: 'bitbucket',
    label: 'Bitbucket Pipelines',
    file: 'bitbucket-pipelines.yml',
    color: 'bg-gray-900',
    code: `image: node:20

pipelines:
  default:
    - step:
        name: Test
        caches:
          - node
        script:
          - npm ci
          - npm test -- --run

  branches:
    main:
      - step:
          name: Test
          caches:
            - node
          script:
            - npm ci
            - npm test -- --run
      - step:
          name: Build
          caches:
            - node
          script:
            - npm ci
            - npm run build`,
  },
]

export default function CicdDemoPage() {
  return (
    <div className="px-6 py-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">CI/CD</h1>
      <p className="text-gray-500 mb-10">Simple pipeline examples for popular Git platforms</p>

      {/* What is CI/CD */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">What is CI/CD?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { title: 'Continuous Integration (CI)', desc: 'Automatically run tests and checks on every push or pull request to catch issues early.' },
            { title: 'Continuous Delivery (CD)', desc: 'Automatically build and deploy the app after tests pass, reducing manual steps.' },
          ].map(({ title, desc }) => (
            <div key={title} className="border rounded-lg p-4">
              <h3 className="font-semibold text-blue-600 mb-1">{title}</h3>
              <p className="text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pipeline steps */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Typical Pipeline Steps</h2>
        <ol className="list-decimal list-inside space-y-1 text-gray-700 text-sm">
          <li>Push code to a branch</li>
          <li>Pipeline triggers automatically</li>
          <li>Install dependencies</li>
          <li>Run tests</li>
          <li>Build the app</li>
          <li>Deploy (on merge to main)</li>
        </ol>
      </section>

      {/* Pipeline examples */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-6">Pipeline Examples</h2>
        <div className="space-y-8">
          {tabs.map(({ label, file, code }) => (
            <div key={label}>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-semibold">{label}</h3>
                <span className="text-xs text-gray-400 font-mono bg-gray-100 px-2 py-0.5 rounded">{file}</span>
              </div>
              <pre className="bg-gray-900 text-green-400 text-sm rounded-lg p-4 overflow-x-auto">
                {code}
              </pre>
            </div>
          ))}
        </div>
      </section>

      {/* Tips */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Tips</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
          <li>Use <code className="bg-gray-100 px-1 rounded">npm ci</code> instead of <code className="bg-gray-100 px-1 rounded">npm install</code> for reproducible installs</li>
          <li>Cache <code className="bg-gray-100 px-1 rounded">node_modules</code> to speed up pipeline runs</li>
          <li>Run tests before the build step — no point building broken code</li>
          <li>Only deploy on the <code className="bg-gray-100 px-1 rounded">main</code> branch</li>
        </ul>
      </section>
    </div>
  )
}
