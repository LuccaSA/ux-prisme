import { NgModule } from '@angular/core';
import { TypographyModule } from './typography/typography.module';
import { VisionModule } from './vision/vision.module';
import { AccessibilityModule } from './accessibility/accessibility.module';
import { ActionsModule } from './actions/actions.module';
import { FormModule } from './form/form.module';
import { OverlayModule } from './overlay/overlay.module';

@NgModule({
	imports: [
		VisionModule,
		AccessibilityModule,
		TypographyModule,
		ActionsModule,
		FormModule,
		OverlayModule
	]
})
export class GeneralPrinciplesModule { }
