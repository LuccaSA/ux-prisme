import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeContentPipe } from './safe-content.pipe';

@NgModule({
	imports: [ CommonModule ],
	declarations: [SafeContentPipe],
	exports: [SafeContentPipe],
})
export class SafeContentModule {}
