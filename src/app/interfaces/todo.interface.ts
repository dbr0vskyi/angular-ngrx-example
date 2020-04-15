export interface ITodo {
  id: string;
  title: string;
  description: string;
  labels: string[];
  alertDate: Date;
  done: boolean;
}
