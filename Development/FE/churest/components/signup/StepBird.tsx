import BirdList from './BirdList';
import NextBtn from './NextBtn';

type Props = {
  handlePickedBird(i: any): void;
  pickedBird: string;
  plusPage(): void;
};
export default function StepBirdt({
  handlePickedBird,
  pickedBird,
  plusPage,
}: Props) {
  return (
    <>
      <div className="bird-container">
        <h1 className="center font-bold">원하는 새를 선택해주세요</h1>
        <div className="center">
          <BirdList
            handlePickedBird={handlePickedBird}
            pickedBird={pickedBird}
          />
        </div>
        <div className="center">
          <NextBtn
            comment={'NEXT'}
            type={pickedBird ? 'show' : 'hidden'}
            logic={plusPage}
          />
        </div>
      </div>
      <style jsx>{`
        .bird-container {
          padding-top: 30px;
          padding-bottom: 30px;
        }
      `}</style>
    </>
  );
}
