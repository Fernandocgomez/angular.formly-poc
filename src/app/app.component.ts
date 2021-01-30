import { slider } from './animations/route-animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ slider ]
})
export class AppComponent implements OnInit{

  public animationState!: number;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() { }

  onActivate($event: any) {
    this.animationState = this.route.firstChild!.snapshot.data['routeIdx'];
  }

  
}
