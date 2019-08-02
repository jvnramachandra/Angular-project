import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  price = 0;
  comps;
  constructor(private searchService: SearchService) {}

  ngOnInit() {
    this.comps = this.searchService.getComps();
  }

  public search(comp: string): void {
    alert(this.searchService.search(comp));
    this.price = this.searchService.search(comp);
  }
}
