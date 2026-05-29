// app/devotion-group-invite/DevotionGroupInviteClient.tsx
'use client';

import { useEffect } from 'react';

export default function DevotionGroupInviteClient({ code }: { code: string }) {
  const cleanCode = code.replace(/\s+/g, '');
  const appLink = `honara7ty://devotion-group-invite?code=${encodeURIComponent(cleanCode)}`;

  useEffect(() => {
    if (!cleanCode) return;

    const timer = window.setTimeout(() => {
      window.location.href = appLink;
    }, 250);

    return () => window.clearTimeout(timer);
  }, [appLink, cleanCode]);

  return (
    <main style={{ padding: 24, textAlign: 'center' }}>
      <h1>دعوة جروب الخلوة</h1>
      <p>اضغط فتح التطبيق للانضمام للجروب.</p>
      <a href={appLink}>فتح التطبيق</a>
    </main>
  );
}
