import {
  Button,
  HeadphonesIcon,
  SpeakerIcon,
} from '@multiverse-io/stardust-react';
import { Speaker } from 'react-feather';

const IntroScreen = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="bg-[#F5F7FF] px-5 py-4 h-[100%] overflow-y-scroll">
      <div className="h-[200px]"></div>
      <header className="text-2xl leading-tight font-semibold text-[#212223] pb-5">
        Let's practice for your interview!
      </header>
      <p className="text-s leading-normal font-regular max-w-4xl">
        Your interviewer will check your skill across all the KSBs you covered.
        <br />
        <br />
        While we don't know the exact format of your interviewer's questions,
        you can prepare by practicing speaking about your projects and their
        KSBs in them. We'll ask you questions your interviewer is likely to ask
        and give feedback on how to improve your response.
        <br />
        <br />
        No one can see your practice interview content except you.
      </p>

      <div className="text-s leading-normal font-bold flex flex-col gap-1 py-5">
        <span className="flex items-center gap-1">
          <SpeakerIcon />
          Turn your audio on
        </span>
        <span className="flex items-center gap-1">
          <HeadphonesIcon />
          Put your headphones in (if needed)
        </span>
      </div>

      <Button variant="primary" onClick={onClick}>
        Start
      </Button>
    </div>
  );
};

export default IntroScreen;
