interface Days {
  fullDate: string;
  date: number;
  day: number;
  isToday: boolean;
  isSelected: boolean;
  isThisWeek: boolean;
  isCurrMonth: boolean;
}

interface Task {
  text: string;
  checked: boolean;
}

interface Tasks {
  date: string;
  task: Task[] | null;
}
