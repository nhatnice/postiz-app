export const dynamic = 'force-dynamic';
import { TermsOfService } from '@gitroom/frontend/components/legal/terms-of-service.component';
import { Metadata } from 'next';
import { isGeneralServerSide } from '@gitroom/helpers/utils/is.general.server.side';

export const metadata: Metadata = {
  title: `${isGeneralServerSide() ? 'JEMMIA POSTIZ' : 'Gitroom'} - Terms of Service`,
  description: 'Terms of Service for JEMMIA POSTIZ',
};

export default async function TermsOfServicePage() {
  return <TermsOfService />;
}
