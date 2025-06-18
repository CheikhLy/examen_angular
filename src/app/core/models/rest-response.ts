export interface RestResponseModel<T> {
    status: number,
    data: T,
    pages? : number[],
    totalPages?: number,
    currentPage?: number,
    isFirst?: boolean,
    isLast?: boolean,
    type: string,
   
  }