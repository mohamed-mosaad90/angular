import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { WebComponent } from './component/web/web.component';
import { MobileComponent } from './component/mobile/mobile.component';
import { SubComponent } from './component/sub/sub.component';
import { HeroComponent } from './component/hero/hero.component';
import { FooterComponent } from './component/footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [


    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    { path: 'home', component: HomeComponent, title: 'home' },
    {
        path: 'about', component: AboutComponent, title: 'about', children: [
            { path: 'web', component: WebComponent },
            { path: 'mobile', component: MobileComponent },
            { path: 'sub', component: SubComponent },
        ]
    },
    { path: 'hero', component: HeroComponent, title: 'hero' },
    { path: 'footer', component: FooterComponent, title: 'footer' },
    { path: '**', component: NotfoundComponent, title: 'NOtfound' },

];
