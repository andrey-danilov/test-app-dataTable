import {isUndefined} from 'util';


export class FilterModel {
 filter: FilterItemModel[];

 constructor(arrayFilter?: FilterItemModel[]) {
   this.filter = !isUndefined(arrayFilter) ? arrayFilter : new Array<FilterItemModel>();
 }
}


export class FilterItemModel {
  id: number;
  name: string;
  value: boolean;
  filterValue: string;
  constructor(
    id?: number,
    name?: string,
    value?: boolean,
    filterValue?: string
  ) {
    this.id = id ? id : null;
    this.name = name ? name : null;
    this.value = !isUndefined(value) ? value : null;
    this.filterValue = filterValue ? filterValue : null;
  }
}
