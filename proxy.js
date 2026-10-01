import { NextResponse } from 'next/server';

export function proxy(request) {
  const { hostname, searchParams, pathname } = request.nextUrl;

  // Always allow Next.js system internals
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname === '/icon.jpeg' ||
    pathname === '/favicon.ico' ||
    pathname === '/robots.txt'
  ) {
    return NextResponse.next();
  }

  // Check if running on localhost or 127.0.0.1 or dev mode
  const isLocal =
    hostname === 'localhost' ||
    hostname === '127.0.0.1' ||
    hostname.endsWith('.local') ||
    process.env.NODE_ENV === 'development';

  // Secret bypass key for the owner: ?preview=fairfax2026
  const hasPreviewParam = searchParams.get('preview') === 'fairfax2026';
  const hasPreviewCookie = request.cookies.get('preview_access')?.value === 'true';

  if (isLocal || hasPreviewParam || hasPreviewCookie) {
    const response = NextResponse.next();
    if (hasPreviewParam) {
      response.cookies.set('preview_access', 'true', {
        path: '/',
        maxAge: 60 * 60 * 24 * 30, // 30 days
        httpOnly: false,
        sameSite: 'lax',
      });
    }
    return response;
  }

  // For live production visitors: return a completely blank empty page
  return new NextResponse(
    '<!DOCTYPE html><html><head><meta name="robots" content="noindex, nofollow" /><title></title></head><body style="background-color: #FFFFFF; margin: 0; padding: 0;"></body></html>',
    {
      status: 200,
      headers: {
        'content-type': 'text/html; charset=utf-8',
        'x-robots-tag': 'noindex, nofollow',
        'cache-control': 'no-store, no-cache, must-revalidate',
      },
    }
  );
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
