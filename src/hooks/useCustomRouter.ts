import { useRouter, useSearchParams } from "next/navigation";

export const useCustomRouter = () => {
  const router = useRouter();
  const searchParams = useSearchParams(); // 현재 URL에서 쿼리 매개변수를 가져오는 역할을 한다

  // 경로만 전달하는 함수
  const navigateTo = (path: string) => {
    router.push(path);
  };

  // 쿼리를 전달하는 함수
  const navigateParams = (path: string, params: Record<string, any>) => {
    // 기존 쿼리를 유지하고, 새로운 쿼리 매개변수를 추가하기 위해 URLSearchParams을 사용한다
    // 쿼리 매개변수는 URL에 포함될 때 문자열 형식만 가능하므로 문자열로 변환해야 한다.
    const newParams = new URLSearchParams(searchParams.toString());

    // 쿼리 매개변수의 키-값을 newParams에 추가
    Object.entries(params).forEach(([key, value]) => {
      newParams.set(key, value);
    });

    router.push(`${path}?${newParams.toString()}`);
  };

  return { navigateTo, navigateParams };
};
