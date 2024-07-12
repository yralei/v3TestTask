export const statusMap = {
  opened: {
    status: '0',
    title: 'Opened',
    accent: 'bg-primary'
  },
  inProgress: {
    status: '1',
    title: 'In Progress',
    accent: 'bg-warning'
  },
  done: {
    status: '2',
    title: 'Done',
    accent: 'bg-success'
  },
  closed: {
    status: '3',
    title: 'Closed',
    accent: 'bg-secondary'
  }
}

export const transitionsMap = {
  0: [statusMap.opened, statusMap.inProgress, statusMap.closed],
  1: Object.values(statusMap),
  2: [statusMap.done, statusMap.closed],
  3: [statusMap.closed, statusMap.opened]
}
