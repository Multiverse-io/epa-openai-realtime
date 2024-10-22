import { KSBListItem, practiceStatus } from '../components/EPAPracticeList';

const ksbList: KSBListItem[] = [
  {
    id: 'K5',
    name: 'Data',
    definition: '',
    status: practiceStatus.notStarted,
  },
  {
    id: 'B6',
    name: 'Resilience',
    definition: '',
    status: practiceStatus.notStarted,
  },
  {
    id: 'R1',
    name: 'Open AI Realtime API',
    definition: '',
    status: practiceStatus.distinction,
  },
];

export { ksbList };
