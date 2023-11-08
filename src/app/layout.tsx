import './globals.css';
import type { Metadata } from 'next';
import AuthProvider from './contexts/AuthProvider';
import Header from './components/Header';
import SidebarNav from './components/SidebarNav';
import { options } from './api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth/next';

export const metadata: Metadata = {
  title: 'Victor Gomes',
  description: 'Controle de estoque',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(options);

  return (
    <html lang="pt-br">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </head>
      <body>
        <>
          <AuthProvider>
            <header>
              <Header />
            </header>
            {session ? (
              <nav className="float-left">
                <SidebarNav />
              </nav>
            ) : (
              ' '
            )}
            <main>
              <div className=" bg-purple-500 rounded-full w-40 h-60 opacity-50 blur-2xl float-right"></div>
              <div className=" bg-purple-500 rounded-full w-40 h-60 opacity-50 blur-2xl float-left"></div>
              {children}
            </main>
          </AuthProvider>
        </>
      </body>
    </html>
  );
}
