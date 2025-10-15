import Signin from '@/app/components/Auth/SignIn';
import Breadcrumb from '@/app/components/Common/Breadcrumb';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign In | Property',
};

function SigninPage() {
  return (
    <>
      <Breadcrumb pageName="Sign In Page" />

      <Signin />
    </>
  );
}

export default SigninPage;
