export const dynamic = 'force-dynamic';
import { Metadata } from 'next';
import { isGeneralServerSide } from '@gitroom/helpers/utils/is.general.server.side';
import { AboutPage } from '@gitroom/frontend/components/about/about.page';

export const metadata: Metadata = {
  title: `${isGeneralServerSide() ? 'JEMMIA POSTIZ' : 'Gitroom'} - Giới thiệu`,
  description:
    'JEMMIA POSTIZ - Nền tảng quản lý và lên lịch nội dung social media. Lên lịch đăng bài, quản lý đa nền tảng, phân tích hiệu suất và nhiều hơn nữa.',
};

export default async function About() {
  return <AboutPage />;
}
