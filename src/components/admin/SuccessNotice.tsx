import Alert from "./Alert";

const VERBS: Record<string, string> = { created: "created", updated: "updated", deleted: "deleted" };

/** Banner driven by the ?success=created|updated|deleted flag set after a form/delete redirect. */
export default function SuccessNotice({ code, noun }: { code?: string; noun: string }) {
  if (!code || !VERBS[code]) return null;
  return <Alert type="success">{`${noun} ${VERBS[code]} successfully.`}</Alert>;
}
