import { API_login } from '@/apis/login';
import { loginAtom } from '@/atoms/login';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import Loading from './loading';
export default function Redirect() {
  const router = useRouter();
  const code = router.query.code;

  const [myInfo, setMyInfo] = useRecoilState(loginAtom);

  const { isLoading, refetch } = useQuery('login', () => API_login(code), {
    onSuccess(data) {
      // 미가입자일 때
      if (data.data.nickname == '' || data.data.nickname == null) {
        setMyInfo({
          ...myInfo,
          id: data.data.memberId,
          accessToken: data.data.accessToken,
        });
        router.push('signup');
      }
      // 가입자일 때
      else {
        console.log('데이터', data.data);

        setMyInfo({
          ...myInfo,
          id: data.data.memberId,
          accessToken: data.data.accessToken,
          avatarId: data.data.avatarId,
          nickname: data.data.nickname,
        });
        router.push('/square/');
      }
    },
    onError(err) {
      console.log('에러', err);
    },
    enabled: false,
  });
  useEffect(() => {
    if (typeof code === 'string') refetch();
  }, [code, refetch]);
  return <Loading />;
}
