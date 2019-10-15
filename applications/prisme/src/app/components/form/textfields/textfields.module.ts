import { NgModule } from '@angular/core';
import { CommonModule } from '@prisme/common';
import { TextfieldsFeature } from './textfields.feature';
import { BasicExampleComponent } from './basic/basic.example';
import { StylesExampleComponent } from './styles/styles.example';
import { SizesExampleComponent } from './sizes/sizes.example';
import { MessagesExampleComponent } from './messages/messages.example';
import { ValidationExampleComponent } from './validation/validation.example';
import { SuffixExampleComponent } from './suffix/suffix.example';
import { StatusExampleComponent } from './status/status.example';
import { RadioExampleComponent } from './radio/radio.example';
import { TextareaExampleComponent } from './textarea/textarea.example';
import { InvertedExample } from './inverted/inverted.example';
import { ClearExample } from './clear/clear.example';
import { FilterExample } from './filter/filter.example';

@NgModule({
	imports: [CommonModule],
	declarations: [
		TextfieldsFeature,
		BasicExampleComponent,
		StylesExampleComponent,
		SizesExampleComponent,
		MessagesExampleComponent,
		ValidationExampleComponent,
		SuffixExampleComponent,
		StatusExampleComponent,
		RadioExampleComponent,
		TextareaExampleComponent,
		InvertedExample,
		ClearExample,
		FilterExample,
	],
	entryComponents: [
		BasicExampleComponent,
		StylesExampleComponent,
		SizesExampleComponent,
		MessagesExampleComponent,
		ValidationExampleComponent,
		SuffixExampleComponent,
		StatusExampleComponent,
		RadioExampleComponent,
		TextareaExampleComponent,
		InvertedExample,
		ClearExample,
		FilterExample,
	]
})
export class TextfieldsModule { }
