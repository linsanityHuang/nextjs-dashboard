import '@/app/ui/global.css'; // 全局样式表, 一般只在顶级组件(根布局)中引用
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* 通过将 Inter 添加到 <body> 元素，该字体将应用于整个应用程序。
      在这里，您还添加了 Tailwind 抗锯齿类，该类可以平滑字体。
      没有必要使用此类，但它可以为您的字体增添漂亮的感觉。 */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
