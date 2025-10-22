import { GoogleAnalytics } from '@next/third-parties/google';

export default function GoogleAnalyticsScript() {
  return process.env.NEXT_PUBLIC_MODE === 'production' ? (
    <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ?? ''} />
  ) : null;
}
