import { NgModule } from '@angular/core';

import { CommonModule } from '@prisme/common';
import { FormatModule } from './format';
import { TypographicRulesModule } from './typographic-rules';
import { VocabularyModule } from './vocabulary';
import { VoiceModule } from './voice';

@NgModule({
	imports: [
		CommonModule,
		FormatModule,
		TypographicRulesModule,
		VocabularyModule,
		VoiceModule,
	],
})
export class ContentModule { }
