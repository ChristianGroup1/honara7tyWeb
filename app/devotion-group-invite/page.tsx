import DevotionGroupInviteClient from './DevotionGroupInviteClient';

export default async function DevotionGroupInvitePage({
  searchParams,
}: {
  searchParams: Promise<{ code?: string }>;
}) {
  const { code = '' } = await searchParams;

  return <DevotionGroupInviteClient code={code} />;
}
