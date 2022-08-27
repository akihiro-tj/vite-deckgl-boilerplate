import { Logo } from './components/Logo';

export const LOGO: { [key: string]: Logo } = {
  vite: {
    href: 'https://vitejs.dev',
    src: 'vite.svg',
    alt: 'Vite Logo',
    shadowColor: 'var(--color-vite-logo)',
  },
  react: {
    href: 'https://reactjs.org',
    src: 'react.svg',
    alt: 'React Logo',
    shadowColor: 'var(--color-react-logo)',
    isRotating: true,
  },
};
