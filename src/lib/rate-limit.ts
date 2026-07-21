// Rate limit simples em memória — adequado para um único servidor/instância.
// Em produção com múltiplas instâncias (ex: Vercel serverless), troque por um
// serviço compartilhado como Upstash Redis (@upstash/ratelimit).

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;

const requestLog = new Map<string, number[]>();

export function rateLimit(identifier: string): { success: boolean } {
  const now = Date.now();
  const timestamps = (requestLog.get(identifier) ?? []).filter(
    (time) => now - time < WINDOW_MS
  );

  if (timestamps.length >= MAX_REQUESTS) {
    requestLog.set(identifier, timestamps);
    return { success: false };
  }

  timestamps.push(now);
  requestLog.set(identifier, timestamps);
  return { success: true };
}

export function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  return forwardedFor?.split(",")[0]?.trim() ?? "unknown";
}
