import {
	Component,
	QueryList,
	ViewChildren,
	Input,
	ViewChild,
	ViewContainerRef,
	AfterViewInit,
	ComponentFactoryResolver,
	ChangeDetectorRef,
	ChangeDetectionStrategy} from '@angular/core';
import { CodeTabComponent } from './code-tab.component';
import { IExample } from '../example.model';

@Component({
	selector: 'pri-code-tabs',
	templateUrl: './code-tabs.component.html',
	styleUrls: ['./code-tabs.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush

})
export class CodeTabsComponent implements AfterViewInit {

	@ViewChildren(CodeTabComponent) tabsQL: QueryList<CodeTabComponent>;
	@ViewChild('display', {read: ViewContainerRef}) display: ViewContainerRef;
	@Input()
	set example(example: IExample) {
		this._example = example;
		this.code = this._example.code;
		this.tsCode = this._example.tsCode;
		this.mod = example.mod ? `mod-${example.mod}` : '';
		this.renderComponent();
	}
	isSplitView: boolean;
	code: string;
	tsCode: string;
	mod: string;

	private _example: IExample;
	private activeTab: CodeTabComponent;
	constructor(private cd: ChangeDetectorRef, private cfr: ComponentFactoryResolver) {}

	ngAfterViewInit() {
		this.tabsQL.changes.subscribe(() => this.cd.detectChanges());
		this.activeTab = this.tabsQL.first;
		this.cd.detectChanges();
	}

	renderComponent() {
		const componentFactory = this.cfr.resolveComponentFactory(this._example.component);
		this.display.clear();
		this.display.createComponent(componentFactory);
	}

	public selectTab(selectedTab: CodeTabComponent) {
		this.tabsQL.forEach(tab => tab.active = false);
		selectedTab.active = true;
		this.activeTab = selectedTab;
		this.isSplitView = false;
	}

	public toggleSplitView() {
		if (!this.isSplitView) {
			this.tabsQL.forEach(tab => tab.active = true);
			this.isSplitView = true;
		} else {
			this.selectTab(this.activeTab);
		}
	}

}
