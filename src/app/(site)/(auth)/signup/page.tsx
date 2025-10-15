import SignUp from '@/app/components/Auth/SignUp';
import Breadcrumb from '@/app/components/Common/Breadcrumb';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign Up | Property',
};

function SignupPage() {
  return (
    <>
      <Breadcrumb pageName="Sign Up Page" />

      <SignUp />
    </>
  );
}

export default SignupPage;
