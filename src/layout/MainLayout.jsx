import Header from '@components/Header';
import Nav from '@common/Nav';
import { useAuth } from '@hooks/useAuth';

export default function MainLayout({ children }) {
  const auth = useAuth();
  return (
    <>
      <div className="min-h-full">
        {auth.user && <Header />}
        <Nav />
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6">{children}</div>
        </main>
      </div>
    </>
  );
}
