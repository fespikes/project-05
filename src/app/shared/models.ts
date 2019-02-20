
export class Pagination {
  page: number;
  size: number;
  total: number;
}

export interface GenericCollection<T> {
  data: T[];
  pagination: Pagination;
}

export class Queue {
  id = 0;
  name = '';
  displayName = '';
  description = '';
  queueType = '';
  admin = '';
  editMode = false;
}
