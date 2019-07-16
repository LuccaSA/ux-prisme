import { Routes } from '@angular/router';
import { ressourcesPage } from './ressources';
import { principlesPage } from './principles';
import { componentsPage } from './components';
import { IPage } from '@prisme/common';

const routes = [
	{ path: 'home', loadChildren: () => import('./home').then(m => m.HomeModule) },
	{ ...ressourcesPage.toRoute(), loadChildren: () => import('./ressources').then(m => m.RessourcesModule) },
	{ ...componentsPage.toRoute(), loadChildren: () => import('./components').then(m => m.ComponentsModule) },
	{ ...principlesPage.toRoute(), loadChildren: () => import('./principles').then(m => m.PrinciplesModule) },
];
export const searchableIndex: IPage[] = [
	...componentsPage.toIndex(),
	...principlesPage.toIndex(),
	...ressourcesPage.toIndex(),
];

export const appRoutes: Routes = [
	...routes,
	{ path: '**', redirectTo: '/home', pathMatch: 'full' }
] as Routes;
