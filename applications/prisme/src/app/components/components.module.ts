import { NgModule } from '@angular/core';
import { ActionsModule } from './actions/actions.module';
import { FeedbackModule } from './feedback/feedback.module';
import { FormModule } from './form/form.module';
import { OverlaysModule } from './overlays/overlays.module';
import { LayoutModule } from './layout/layout.module';
import { ListingsModule } from './listings/listings.module';
import { LoadersModule } from './loaders/loaders.module';
import { MiscModule } from './misc/misc.module';
import { NavigationModule } from './navigation/navigation.module';
import { TemplatesModule } from './templates/templates.module';
import { TextModule } from './text/text.module';
import { ComponentsRoutingModule } from './components.router';
import { MainModule } from '../main';
import { UserModule } from './user';

@NgModule({
	imports: [
		ActionsModule,
		FeedbackModule,
		FormModule,
		LayoutModule,
		ListingsModule,
		LoadersModule,
		MiscModule,
		NavigationModule,
		OverlaysModule,
		TemplatesModule,
		TextModule,
		UserModule,

		ComponentsRoutingModule,
		MainModule,
	]
})
export class ComponentsModule { }
