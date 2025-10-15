import NotFound from '@/app/components/NotFound';
import HeroSub from '@/app/components/SharedComponent/HeroSub';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 Page | Venus ',
};

const ErrorPage = () => {
  return (
    <>
      <HeroSub title="404" />
      <NotFound />
    </>
  );
};

export default ErrorPage;
