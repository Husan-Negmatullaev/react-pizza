export enum SortTypeEnum {
   RATING_DESC = "rating",
   RATING_ASC = "-rating",
   PRICE_DESC = "price",
   PRICE_ASC = "-price",
   TITLE_DESC = "title",
   TITLE_ASC = "-title",
}

export type Sort = {
   label: string;
   sortType: SortTypeEnum;
}

export interface IFilterSliceState {
   searchQuery: string;
   categoryId: number;
   currentPage: number;
   sort: Sort;
}