export const dynamic = 'force-dynamic';
import { PrivacyPolicy } from '@gitroom/frontend/components/legal/privacy-policy.component';
import { Metadata } from 'next';
import { isGeneralServerSide } from '@gitroom/helpers/utils/is.general.server.side';

export const metadata: Metadata = {
  title: `${isGeneralServerSide() ? 'JEMMIA POSTIZ' : 'Gitroom'} - Privacy Policy`,
  description: 'Privacy Policy for JEMMIA POSTIZ',
};

export default async function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
