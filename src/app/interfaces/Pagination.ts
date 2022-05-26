export class Pagination {
  constructor(private _page:number,private _size:number){

  }
  public get page(){
    return this._page;
  }

  public get size(){
    return this._size;
  }
}
