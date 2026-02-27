import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RenderTopicComponent } from './render-topic/render-topic.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ShowUsuarioComponent } from './usuario/show-usuario/show-usuario.component';
import { ListUsuarioComponent } from './usuario/list-usuario/list-usuario.component';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { ObservableComponent } from './observable/observable.component';
import { SignalsComponent } from './signals/signals.component';
import { HeroPageComponent } from './hero-page/hero-page.component';
import { DragonballComponent } from './dragonball/dragonball.component';
import { DragonballSuperComponent } from './dragonball-super/dragonball-super.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: HomeComponent },
  { path: 'render', component: RenderTopicComponent },
  { path: 'observer', component: ObservableComponent },
  { path: 'pipe', component: PipeExampleComponent },
  { path: 'signal', component: SignalsComponent },
  { path: 'hero', component: HeroPageComponent },
  { path: 'dragonball', component: DragonballComponent },
  { path: 'dragonball-super', component: DragonballSuperComponent },
  { path: 'user', component: UsuarioComponent, children: [
    { path: '', component: ListUsuarioComponent },
    { path: 'show/:id', component: ShowUsuarioComponent }
  ] },
  { path: '**', component: HomeComponent },
  //{ path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];
