import '@testing-library/jest-dom'

// Mock Next.js router
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  }),
  usePathname: () => '/',
  useParams: () => ({}),
}))

// Mock window
Object.defineProperty(window, '__TRANSLATIONS__', {
  writable: true,
  value: {
    common: {
      nav: {
        docs: 'Documentation',
        skills: 'Skills',
        community: 'Community',
      },
    },
  },
})
