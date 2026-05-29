'use client';

import { useEffect } from 'react';

export default function DevotionGroupInviteClient({ code }: { code: string }) {
  const cleanCode = code.replace(/\s+/g, '');
  const appLink = `honara7ty://devotion-group-invite?code=${encodeURIComponent(cleanCode)}`;
  const playStoreUrl =
    'https://play.google.com/store/apps/details?id=com.honara7ty.app';

  useEffect(() => {
    if (!cleanCode) return;

    const isAndroid = /Android/i.test(window.navigator.userAgent);
    let didLeavePage = false;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        didLeavePage = true;
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    window.location.href = appLink;

    const fallbackTimer = window.setTimeout(() => {
      if (!didLeavePage && isAndroid) {
        window.location.href = playStoreUrl;
      }
    }, 1600);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.clearTimeout(fallbackTimer);
    };
  }, [appLink, cleanCode, playStoreUrl]);

  return (
    <main
      dir="rtl"
      style={{
        minHeight: '100vh',
        margin: 0,
        padding: 24,
        display: 'grid',
        placeItems: 'center',
        background:
          'radial-gradient(circle at top, #FFF8E5 0, #F2F4F8 38%, #E9EDF5 100%)',
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        color: '#0A1124',
      }}
    >
      <section
        style={{
          width: '100%',
          maxWidth: 430,
          background: '#FFFFFF',
          border: '1px solid rgba(10,17,36,0.08)',
          borderRadius: 24,
          padding: 24,
          boxShadow: '0 18px 45px rgba(10,17,36,0.12)',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            width: 74,
            height: 74,
            borderRadius: 24,
            margin: '0 auto 16px',
            display: 'grid',
            placeItems: 'center',
            background: '#FFF4D6',
            color: '#C9A84C',
            fontSize: 34,
            fontWeight: 900,
          }}
        >
          ✚
        </div>

        <h1 style={{ margin: '0 0 8px', fontSize: 24, lineHeight: 1.35 }}>
          دعوة لمجموعة الخلوة
        </h1>

        <p
          style={{
            margin: '0 auto 18px',
            maxWidth: 330,
            color: '#5F6874',
            fontSize: 15,
            lineHeight: 1.7,
          }}
        >
          اتدعيت تدخل مجموعة خلوة على هنار حتي. افتح التطبيق عشان تشوف الدعوة
          وتقرر تنضم أو لا.
        </p>

        {cleanCode ? (
          <div
            style={{
              marginBottom: 16,
              padding: '10px 14px',
              borderRadius: 999,
              background: '#F6F8FC',
              border: '1px solid rgba(10,17,36,0.08)',
              fontWeight: 900,
              letterSpacing: 1,
            }}
          >
            {cleanCode}
          </div>
        ) : null}

        <a
          href={appLink}
          style={{
            minHeight: 48,
            borderRadius: 14,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#0A1124',
            color: '#FFFFFF',
            textDecoration: 'none',
            fontSize: 15,
            fontWeight: 900,
          }}
        >
          فتح التطبيق
        </a>

        <a
          href={playStoreUrl}
          style={{
            marginTop: 10,
            minHeight: 44,
            borderRadius: 14,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#EEF2F8',
            color: '#0A1124',
            textDecoration: 'none',
            fontSize: 14,
            fontWeight: 900,
          }}
        >
          تحميل التطبيق من Google Play
        </a>

        <p
          style={{
            margin: '14px 0 0',
            color: '#7A818B',
            fontSize: 13,
            lineHeight: 1.6,
          }}
        >
          لو التطبيق متسطب، هيفتح تلقائيًا خلال لحظات. لو مش متسطب على
          أندرويد، هتتحول لصفحة Google Play.
        </p>
      </section>
    </main>
  );
}
