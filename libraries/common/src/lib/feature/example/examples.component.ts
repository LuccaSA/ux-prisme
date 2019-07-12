import { Component, Input, OnInit } from '@angular/core';
import { IExample } from './example.model';
import { ExampleService } from './example.service';

@Component({
	selector: 'pri-examples',
	templateUrl: './examples.component.html',
	styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit {
	@Input() examples: Array<IExample>;
	selectedExample: IExample;

	constructor(private exService: ExampleService) {}

	ngOnInit() {
		this.selectedExample = this.exService.getCurrentExample(this.examples);
	}

	onModelChange() {
		this.exService.setCurrentExample(this.selectedExample);
	}



}
