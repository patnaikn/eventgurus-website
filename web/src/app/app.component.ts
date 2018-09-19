// import * as $ from 'jquery';
import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgwWowService } from 'ngx-wow';
import { Subscription }   from 'rxjs/Subscription';
import { filter } from 'rxjs/operators';
// import { magnificPopup } from 'magnific-popup';
// import {ImageModal} from 'angular2-image-popup/directives/angular2-image-popup/image-modal-popup';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 
export class AppComponent implements OnInit, OnDestroy, AfterViewInit{
  title = 'web';
  private wowSubscription: Subscription;

  constructor(private router: Router, private wowService: NgwWowService){
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
      // Reload WoW animations when done navigating to page,
      // but you are free to call it whenever/wherever you like
      this.wowService.init();
      
    });
  
  }
 
  ngOnInit() {
    // you can subscribe to WOW observable to react when an element is revealed
    this.wowSubscription = this.wowService.itemRevealed$.subscribe(
      (item:HTMLElement) => {
        // do whatever you want with revealed element
      });
  }
 
  ngOnDestroy() {
    // unsubscribe (if necessary) to WOW observable to prevent memory leaks
    this.wowSubscription.unsubscribe();
  }
  ngAfterViewInit(): void {
    
    
  }
  
}
