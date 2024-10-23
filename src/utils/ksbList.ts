import { KSBListItem, practiceStatus } from '../components/EPAPracticeList';

const ksbList: KSBListItem[] = [
  {
    id: 'K5',
    name: 'Structured and Unstructured data',
    definition:
      'Explains the differences between Structured and Unstructured data.',
    status: practiceStatus.notStarted,
  },
  {
    id: 'B6',
    name: 'Resilience',
    definition:
      'Demonstrates resilience by viewing obstacles as challenges and learning from failure.',
    status: practiceStatus.notStarted,
  },
  // {
  //   id: 'R1',
  //   name: 'Open AI Realtime API',
  //   definition: '',
  //   status: practiceStatus.distinction,
  // },
];

export { ksbList };
