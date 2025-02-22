import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'selector-name',
    template: `
        <div class="h-screen bg-blue-300">
        <p>صفحه اعلانات</p>
        </div>
    `
})

export class NotificationPageComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}