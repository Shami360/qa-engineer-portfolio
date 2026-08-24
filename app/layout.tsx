import './globals.css';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://muhammad-ehtisham-portfolio.netlify.app'),
  title: 'Muhammad Ehtisham | Software Quality Assurance Engineer',
  description:
    'Portfolio of Muhammad Ehtisham, a Software Quality Assurance Engineer specializing in Manual Testing, Automation Testing, and API Testing using Selenium, Python, Postman, and JMeter.',
  keywords: [
    'Muhammad Ehtisham',
    'QA Engineer',
    'Software Testing',
    'Selenium',
    'Automation Testing',
    'Manual Testing',
    'API Testing',
    'Postman',
    'JMeter',
    'Python',
    'Pytest',
    'Quality Assurance',
  ],
  authors: [{ name: 'Muhammad Ehtisham' }],
  openGraph: {
    title: 'Muhammad Ehtisham | Software Quality Assurance Engineer',
    description:
      'Software Quality Assurance Engineer specializing in Manual Testing, Automation Testing, and API Testing.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Ehtisham | Software Quality Assurance Engineer',
    description:
      'Software Quality Assurance Engineer specializing in Manual Testing, Automation Testing, and API Testing.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
