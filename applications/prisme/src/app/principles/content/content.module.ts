import { NgModule } from '@angular/core';

import { CommonModule } from '@prisme/common';
import { TypographicRulesModule } from './typographic-rules';
import { VocabularyModule } from './vocabulary';
import { VoiceModule } from './voice';
import { NumberFormattingModule } from './number-formatting';

@NgModule({
	imports: [
		CommonModule,
		TypographicRulesModule,
		VocabularyModule,
		VoiceModule,
		NumberFormattingModule,
	],
})
export class ContentModule { }
