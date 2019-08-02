import { Injectable } from '@angular/core';
import { Stock } from '../classes/stock';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor() {}

  private comps: Stock[] = [
    {
      _comp: 'infosys',
      _price: 20
    },
    {
      _comp: 'ibm',
      _price: 30
    },
    {
      _comp: 'intel',
      _price: 40
    },
    {
      _comp: 'faceprop',
      _price: 50
    },
    {
      _comp: 'hcl',
      _price: 70
    },
    {
      _comp: 'tcs',
      _price: 80
    }
  ];
  public search(query: string): number {
    const result = this.comps.filter(
      x => x._comp === query.toLowerCase()
    );
    return result.length !== 0 ? result[0]._price : 0;
  }
  public getComps(): Stock[] {
    return this.comps;
  }
}
