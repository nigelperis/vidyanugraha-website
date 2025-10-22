import NotFound from '~/app/components/NotFound';
import HeroSub from '~/app/components/SharedComponent/HeroSub';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 Page | Venus ',
};

function ErrorPage() {
  return (
    <>
      <HeroSub title="404" />
      <NotFound />
    </>
  );
}

export default ErrorPage;
