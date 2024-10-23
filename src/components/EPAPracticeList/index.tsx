import {
  AchievementIcon,
  Button,
  CheckIcon,
  CloseIcon,
  RecordingIcon,
  SpeakerIcon,
  StarIcon,
} from '@multiverse-io/stardust-react';
import { Link } from 'react-router-dom'; // Import Link
import PortifolioBanner from '../PortifolioBanner';

export enum practiceStatus {
  notStarted = 'not-started',
  pass = 'pass',
  fail = 'fail',
  merit = 'merit',
  distinction = 'distinction',
}

export type KSBListItem = {
  id: string;
  name: string;
  definition: string;
  status: practiceStatus;
};

interface EPAPracticeListProps {
  ksbList: KSBListItem[];
}

const EPAPracticeList = ({ ksbList }: EPAPracticeListProps) => {
  return (
    <>
      <div className="px-10 py-2 text-[#212223]">
        <PortifolioBanner />
      </div>
      <div className="px-10 text-[#212223]">
        <header className="pb-2">
          <h2 className="text-m leading-tight font-medium">
            Practice your interviews by KSB
          </h2>
        </header>

        <div className="max-w-xl">
          <ul className="list-none p-0 m-0 flex gap-2 flex-col">
            {ksbList.map((el) => {
              return (
                <li
                  key={el.id}
                  className="list-none p-0 m-0 flex items-center justify-between"
                >
                  <span className="rounded-full border border-gray-100 shadow-sm py-1 px-2 text-s font-medium flex items-center justify-center gap-1">
                    <RecordingIcon size="small" variant="action" />
                    {el.name}
                  </span>
                  <div className="flex items-center gap-1 justify-items-end">
                    <Link to={`/practice/${el.id}`}>
                      <Button
                        iconPosition="left"
                        Icon={<SpeakerIcon size="small" variant="action" />}
                        variant="tertiary"
                        className="border border-[#4A5FF7]"
                        size="small"
                      >
                        Start practicing
                      </Button>
                    </Link>
                    <PracticeIcon status={el.status} />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default EPAPracticeList;

const PracticeIcon = ({ status }: { status: practiceStatus }) => {
  let icon;
  switch (status) {
    case practiceStatus.pass:
      icon = <CheckIcon variant="success" />;
      break;
    case practiceStatus.fail:
      icon = <CloseIcon variant="negative" />;
      break;
    case practiceStatus.merit:
      icon = <AchievementIcon variant="action" />;
      break;
    case practiceStatus.distinction:
      icon = <StarIcon variant="warning" />;
      break;
    default:
      icon = (
        <div className="opacity-0" aria-hidden>
          <CheckIcon variant="white" />
        </div>
      );
  }

  return <div>{icon}</div>;
};
