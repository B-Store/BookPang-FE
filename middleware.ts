import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export const middleware = (request: NextRequest) => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken");

  //로그인이 필요한 경로
  const withOutLoginPaths: string[] = ["/mypage"];
  const isPublicPath = withOutLoginPaths.some(path =>
    request.nextUrl.pathname.startsWith(path)
  );

  if (!accessToken && !isPublicPath) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
};

// 적힌 경로에선 미들웨어가 실행되지 않도록하기 위해
// export const config = {
//   matcher: ['/((?!api|_next/static|_next/image|.png).*)'],
// };
