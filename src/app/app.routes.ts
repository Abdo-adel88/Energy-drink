import { Routes } from '@angular/router';
import { DrinkHomeComponent } from './components/drink-home/drink-home.component';
import { NitroCanComponent } from './components/nitro-can/nitro-can.component';
import { AllCanComponent } from './components/all-can/all-can.component';
import { DateCanComponent } from './components/date-can/date-can.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    {
      path: '',
      component: DrinkHomeComponent, // الصفحة الرئيسية
    },
    {
      path: 'DrinkHome',
      component: DrinkHomeComponent, 
    },
    {
      path: 'NitroCan',
      component: NitroCanComponent, 
    },
    {
      path: 'AllCan',
      component: AllCanComponent, 
    },
    {
      path: 'DateCan',
      component: DateCanComponent, 
    },
    {
      path: 'contact',
      component: ContactComponent
    }
    ,
    
  {
    path: '**',
    redirectTo: 'DrinkHomeComponent', // لو دخل مسار مش معروف
  },
];
