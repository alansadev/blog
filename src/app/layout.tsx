import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The blog - Este é um blog com nextjs',
  description: 'Essa seria a descrição dessa página',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang='pt-BR'>
      <body>{children}</body>
    </html>
  );
}
