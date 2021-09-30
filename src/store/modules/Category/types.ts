export enum CategoryStore {
  ID_STORE = 'CATEGORY',
}

export enum CategoryTypes {
  LIST_CATEGORIES = 'LIST_CATEGORIES',
}

export type CategoryAction = {
  idStore: CategoryStore.ID_STORE;
  type: CategoryTypes;
  categories?: ICategory[];
};

export interface CategoryState {
  categories: ICategory[];
}

export interface ICategory {
  id: string;
  name: string;
}
