import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { ButtonModule } from 'primeng/button';

import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,DialogModule,ButtonModule,FormsModule],
  template: `<router-outlet></router-outlet>
  <p-dialog header="Edit Profile" [modal]="true" [(visible)]="visibleUpdate" [style]="{ width: '25rem' }">
    <span class="p-text-secondary block mb-8">بروزرسانی برنامه.</span>
   آپدیت جدید در دسترس است! آیا مایل به بروزرسانی هستید؟
    <div class="flex justify-end gap-2">
    <p-button label="خیر" severity="secondary" (click)="visibleUpdate = false" />

        <p-button label="بله" (click)="handleUpdateApp()" />
    </div>
</p-dialog>
  `,

})
export class AppComponent implements OnInit {
  appUpdate = inject(SwUpdate)
  visibleUpdate:boolean = false
  title = 'router-practice';


  async ngOnInit(): Promise<void> {
    const hasupdate =  await this.appUpdate.checkForUpdate();
    if(hasupdate){
      this.handleUpdateApp();
    }
  }


  handleUpdateApp(){
    document.location.reload();

  }



}
