import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { GraphicCardService } from '../../../../shared/services/graphic-card.service';
import { GraphicCard } from '../../../../shared/interfaces/graphicCard.interface';


@Component({
  selector: 'app-graphic-card-details',
  templateUrl: './graphic-card-details.component.html',
  styleUrls: ['./graphic-card-details.component.scss']
})
export class GraphicCardDetailsComponent implements OnInit {
  graphicCard$: Observable<any> = new Observable()

  constructor(private route:ActivatedRoute, private graphicCardSvc:GraphicCardService, private location:Location) { }

  ngOnInit(): void {
    this.route.params.pipe( take(1)).subscribe((params) => {
      const id = params['id'];
      this.graphicCard$ = this.graphicCardSvc.getDetails(id);
    });
  }

  onGoBack():void{
    this.location.back();
  }

}