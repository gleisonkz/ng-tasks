import {
  AfterViewInit,
  Directive,
  Input,
  OnDestroy,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Directive({
  selector: '[ngIfRoute]',
})
export class NgIfRouteDirective implements AfterViewInit, OnDestroy {
  @Input('ngIfRoute') routes: string[];
  private subscription = new Subscription();
  constructor(
    private templateRef: TemplateRef<unknown>,
    private viewContainer: ViewContainerRef,
    private router: Router
  ) {}

  ngAfterViewInit(): void {
    this.subscription.add(
      this.router.events
        .pipe(filter((event) => event instanceof NavigationEnd))
        .subscribe((c: NavigationEnd) => {
          const currentUrl = c.url.replace('/', '');
          const shouldHide = this.routes.includes(currentUrl);
          if (shouldHide) {
            this.viewContainer.clear();
          } else {
            this.viewContainer.createEmbeddedView(this.templateRef);
          }
        })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
