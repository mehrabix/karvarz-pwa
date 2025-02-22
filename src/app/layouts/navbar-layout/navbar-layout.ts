import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'navbar-layout',
    templateUrl: 'navbar-layout.html',
    imports:[RouterOutlet,RouterLink]
})

export class NavbarLayoutComponent implements OnDestroy  {
    ngOnDestroy(): void {
       debugger
    }
    router = inject(Router);


    onClickSearch(){
        this.router.navigate(['/explorer'])
    }
}