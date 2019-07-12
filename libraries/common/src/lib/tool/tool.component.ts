import { Component, Input } from '@angular/core';
import { ITool } from './tool.model';

@Component({
	selector: 'pri-tool',
	templateUrl: './tool.component.html',
	styleUrls: ['./tool.component.scss']
})
export class ToolComponent {
	@Input() tool: ITool;
}
