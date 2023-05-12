import { loginAtom } from '@/atoms/login';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  letterBoxAtom,
  myBirdAtom,
  openAlarmAtom,
  openMyPageAtom,
  openSearchAtom,
  openTagAtom,
  openShopAtom,
  newBirdAtom,
  createArticleAtom,
  squareModalAtom
} from '@/atoms/modal';
import Notice from '@/components/navbar/Notice';
import Tag from '@/components/navbar/Tag';
import SearchFriend from '@/components/common/SearchFriend';
import MyPage from '@/components/churest/MyPage';
import ModalBlackBg from './ModalBlackBg';
import LetterBox from '../churest/LetterBox';
import MyBird from '../churest/MyBird';
import ItemShop from '@/components/navbar/ItemShop';
import NewBird from '../churest/NewBird';
import CreateArticle from '../churest/CreateArticle';
import CreateBoox from '../churest/CreateBoox';
import SquareDonate from '../square/SquareDonate';

export default function Modals() {
  const id = useRecoilValue(loginAtom).id;
  const [isAlarmOpen, setIsAlarmOpen] = useRecoilState(openAlarmAtom);
  const [isTagOpen, setIsTagOpen] = useRecoilState(openTagAtom);
  const [isSearchOpen, setIsSearchOpen] = useRecoilState(openSearchAtom);
  const [isMyPageOpen, setIsMyPageOpen] = useRecoilState(openMyPageAtom);
  const [isLetterOpen, setIsLetterOpen] = useRecoilState(letterBoxAtom);
  const [isMyBirdOpen, setIsMyBirdOpen] = useRecoilState(myBirdAtom);
  const [isShopOpen, setIsShopOpen] = useRecoilState(openShopAtom);
  const [isNewBirdOpen, setIsNewBirdOpen] = useRecoilState(newBirdAtom);
  const [isCreate, setIsCreate] = useRecoilState(createArticleAtom);
  const [isDonateOpen, setIsDonateOpen] = useRecoilState(squareModalAtom);

  return (
    <div>
      {isShopOpen.isModal && (
        <ModalBlackBg
          modal={<ItemShop memberId={id} />}
          closeModal={() => setIsShopOpen({ isModal: false })}
        />
      )}

      {/* {isAlarmOpen.isModal && <Notice memberId={id} />} */}
      {isAlarmOpen.isModal && (
        <ModalBlackBg
          modal={<Notice memberId={id} />}
          closeModal={() => setIsAlarmOpen({ isModal: false })}
        />
      )}
      {/* 태그 모아보기 모달 */}
      {/* {isTagOpen.isModal && <Tag memberId={id} />} */}
      {isTagOpen.isModal && (
        <ModalBlackBg
          modal={<Tag memberId={id} />}
          closeModal={() => setIsTagOpen({ isModal: false })}
        />
      )}
      {/* 친구 검색 모달 */}
      {/* {isSearchOpen.isModal && <SearchFriend />} */}
      {isSearchOpen.isModal && (
        <ModalBlackBg
          modal={<SearchFriend />}
          closeModal={() => setIsSearchOpen({ isModal: false })}
        />
      )}
      {/* 마이페이지 모달 */}
      {/* {isMyPageOpen.isModal && <MyPage />} */}
      {isMyPageOpen.isModal && (
        <ModalBlackBg
          modal={<MyPage />}
          closeModal={() => setIsMyPageOpen({ isModal: false })}
        />
      )}
      {/* 우체통 모달 */}
      {isLetterOpen.isModal && (
        <ModalBlackBg
          modal={<LetterBox />}
          closeModal={() => setIsLetterOpen({ isModal: false })}
        />
      )}
      {/* 나의 새 모달 */}
      {isMyBirdOpen.isModal && (
        <ModalBlackBg
          modal={<MyBird />}
          closeModal={() => setIsMyBirdOpen({ isModal: false })}
        />
      )}
      {isNewBirdOpen.isModal && (
        <ModalBlackBg
          modal={<NewBird />}
          closeModal={() =>
            setIsNewBirdOpen({ ...isNewBirdOpen, isModal: false })
          }
        />
      )}

      {isCreate.isModal && (
        <ModalBlackBg
          closeModal={() => {
            setIsCreate({ ...isCreate, isModal: false });
          }}
          modal={<CreateBoox />}
        />
      )}

{isDonateOpen.isModal && (
        <ModalBlackBg
          modal={<SquareDonate memberId={id} />}
          closeModal={() => setIsDonateOpen({ isModal: false })}
        />
      )}
    </div>
  );
}
