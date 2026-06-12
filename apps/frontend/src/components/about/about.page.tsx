'use client';

import Link from 'next/link';
import { LogoTextComponent } from '@gitroom/frontend/components/ui/logo-text.component';

const features = [
  {
    title: 'Lên lịch đăng bài',
    description:
      'Lên lịch trước cho bài viết trên nhiều nền tảng cùng lúc, tiết kiệm thời gian và tối ưu thời điểm đăng.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <path
          d="M8 2v4M16 2v4M3.5 9.09h17M21 8.5V17c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.99 13.7c-.74 0-1.34-.6-1.34-1.34s.6-1.34 1.34-1.34 1.34.6 1.34 1.34-.6 1.34-1.34 1.34Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Quản lý đa nền tảng',
    description:
      'Kết nối và quản lý hơn 28 kênh social media (X, Instagram, Facebook, LinkedIn, TikTok, YouTube...) từ một bảng điều khiển duy nhất.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <path
          d="M21 16.5c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-9c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v9Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 9.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM2.5 12.5h7M21.5 12.5h-3"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Phân tích & Báo cáo',
    description:
      'Theo dõi hiệu suất nội dung, tương tác và tăng trưởng theo thời gian thực với các báo cáo trực quan chi tiết.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <path
          d="M3 3v18h18M7 17l4-4 4 4 5-6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Làm việc nhóm',
    description:
      'Quản lý team, phân quyền thành viên và quy trình phê duyệt nội dung giúp team marketing vận hành trơn tru.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <path
          d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM17 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM2 20c0-3 3-5 7-5s7 2 7 5M16 20c0-2 2-4 5-4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Thư viện Media',
    description:
      'Lưu trữ, tổ chức và quản lý hình ảnh, video tập trung. Tích hợp sẵn công cụ thiết kế Polotno để tạo nội dung nhanh chóng.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <path
          d="M3 6.5A2.5 2.5 0 0 1 5.5 4h13A2.5 2.5 0 0 1 21 6.5v11A2.5 2.5 0 0 1 18.5 20h-13A2.5 2.5 0 0 1 3 17.5v-11Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m4 16 4-4 3 3 4-5 5 6M9.5 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'AI Assistant',
    description:
      'Trợ lý AI gợi ý ý tưởng nội dung, tối ưu caption và hỗ trợ sáng tạo nhanh chóng ngay trong trình soạn thảo.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <path
          d="M12 3v2M12 19v2M5 12H3M21 12h-2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
];

export const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top nav */}
      <header className="w-full border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/about" className="flex items-center">
            <LogoTextComponent />
          </Link>
          <nav className="flex items-center gap-3">
            <Link
              href="/auth/login"
              className="text-sm font-medium text-white/80 hover:text-white px-4 py-2 rounded-lg transition-colors"
            >
              Đăng nhập
            </Link>
            <Link
              href="/auth"
              className="text-sm font-medium bg-white text-black hover:bg-white/90 px-4 py-2 rounded-lg transition-colors"
            >
              Đăng ký miễn phí
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="flex-1">
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FC69FF]" />
            Nền tảng quản lý & lên lịch social media
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
            Quản lý và lên lịch nội dung
            <br />
            <span className="text-[#FC69FF]">social media</span> mọi lúc, mọi nơi
          </h1>
          <p className="mt-6 text-lg text-white/60 max-w-2xl mx-auto">
            JEMMIA POSTIZ giúp bạn lên lịch đăng bài, quản lý đa nền tảng, phân
            tích hiệu suất và làm việc nhóm trên hơn 28 kênh mạng xã hội — tất cả
            từ một bảng điều khiển duy nhất.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/auth"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-black hover:bg-white/90 font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Bắt đầu miễn phí
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-4 h-4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/auth/login"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/15 text-white hover:bg-white/5 font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Đăng nhập
            </Link>
          </div>
          <p className="mt-4 text-sm text-white/40">
            Đã có tài khoản?{' '}
            <Link
              href="/auth/login"
              className="text-white/70 hover:text-white underline underline-offset-2"
            >
              Đăng nhập ngay
            </Link>
          </p>
        </div>

        {/* Features */}
        <div className="max-w-6xl mx-auto px-6 pb-24">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Tính năng nổi bật
            </h2>
            <p className="mt-3 text-white/60 max-w-xl mx-auto">
              Mọi thứ bạn cần để vận hành social media chuyên nghiệp và hiệu quả.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-white/20 hover:bg-white/[0.05] transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FC69FF]/10 text-[#FC69FF] flex items-center justify-center mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="text-white/40 text-sm">
              © {new Date().getFullYear()} JEMMIA POSTIZ. All rights reserved.
            </div>
          </div>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/60">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/auth/login"
              className="hover:text-white transition-colors"
            >
              Đăng nhập
            </Link>
            <Link
              href="/auth"
              className="hover:text-white transition-colors"
            >
              Đăng ký
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
};
