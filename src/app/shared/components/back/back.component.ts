import { Component, OnInit, HostListener, Input, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ws-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.sass'],
})
export class BackComponent implements OnInit {
  private backUrl: string;
  @Input() default: Array<any>;

  @HostBinding('class.ws-back') hostClass = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.backUrl = this.route.snapshot.queryParams['backUrl'];
  }

  @HostListener('click') onclick() {
    /**
     * 如果路由有backUrl参数则返回至该路由
     * 否则返回至default路由。若不存在返回至上层路由
     **/

    if (this.backUrl) {
      this.router.navigateByUrl(this.backUrl);
    } else if (this.default) {
      this.router.navigate(this.default);
    } else {
      this.router.navigate(['..'], { relativeTo: this.route });
    }
  }

}
