import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

/*
 * TODO OPTIONAL ROUTING
 * Add a route to the route array.
 * The required fields are:
 * path: part of the url, can be used in the code or as an address to navigate to the component
 * component: name of the component to add to the router-outlet in our app.component.html << has to be imported
 */

/*
 * If you want to display a new component generate yourself one!
 * execute the following in the command line interface of your choice in project level
 * ng generate component planet-overview
 *
 * This will create a new component and declare it in the app-module.
 * In it's html you could display all the planet images.
 */
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
