// app/devotion-group-invite/page.tsx
'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function DevotionGroupInvitePage() {
  const searchParams = useSearchParams();
  const code = (searchParams.get('code') || '').replace(/\s+/g, '');
  const appLink = `honara7ty://devotion-group-invite?code=${encodeURIComponent(code)}`;

  useEffect(() => {
    if (!code) return;

    const timer = window.setTimeout(() => {
      window.location.href = appLink;
    }, 250);

    return () => window.clearTimeout(timer);
  }, [appLink, code]);

  return (
    <main style={{ padding: 24, textAlign: 'center' }}>
      <h1>دعوة جروب الخلوة</h1>
      <p>اضغط فتح التطبيق للانضمام للجروب.</p>
      <a href={appLink}>فتح التطبيق</a>
    </main>
  );
}
