import { slider } from './animations/route-animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Event, NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs/operators"

declare var gtag: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ slider ]
})
export class AppComponent implements OnInit{

  public animationState!: number;
  
  constructor(private route: ActivatedRoute, private router: Router) { 

    const navEndEvents = this.router.events.pipe(
      filter(
        event => event instanceof NavigationEnd
      )
    )
    navEndEvents.subscribe(
      (event: any) => {
        gtag('config', 'UA-188488030-1', {
          page_path: event.urlAfterRedirects,
        });
      }
    );
  }

  ngOnInit() { }

  onActivate($event: any) {
    this.animationState = this.route.firstChild!.snapshot.data['routeIdx'];
  }
  
}
