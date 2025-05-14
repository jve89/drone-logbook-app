const dashboardTiles = (user) => [
  {
    title: 'Flight Summary',
    stats: [
      { label: 'Total Flights', value: 123 },
      { label: 'Total Hours', value: '456h' },
      { label: 'Average Duration', value: '1.5h' },
    ],
  },
  {
    title: 'Inventory Summary',
    stats: [
      { label: 'Total Items', value: 12 },
      { label: 'Critical', value: 2 },
    ],
  },
  {
    title: 'Licenses Summary',
    stats: [
      { label: 'Valid Licenses', value: 3 },
      { label: 'Expired', value: 1 },
    ],
  },
  {
    title: 'Training Summary',
    stats: [
      { label: 'Completed', value: 5 },
      { label: 'Due Soon', value: 1 },
    ],
  },
];

export default dashboardTiles;
