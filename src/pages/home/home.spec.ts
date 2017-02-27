import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { HomePage } from './home';
import { NavController } from 'ionic-angular';

let comp: HomePage;
let fixture: ComponentFixture<HomePage>;
let de: DebugElement;
let el: HTMLElement;

describe('HomePage Component', () => {

	beforeEach(async(() => {

		TestBed.configureTestingModule({

			declarations: [MyApp, HomePage],
			
			providers: [
				NavController
			],

			imports: [
				IonicModule.forRoot(MyApp)
			]

		}).compileComponents();

	}));

	beforeEach(() => {

		fixture = TestBed.createComponent(HomePage);
		comp 	= fixture.componentInstance;

	});

	afterEach(() => {
		fixture.destroy();
		comp = null;
		de = null;
		el = null;
	});

	it('is created', () => {

		expect(fixture).toBeTruthy();
		expect(comp).toBeTruthy();

	});

	it('initialises with a value of My Current Data', () => {
		expect(comp['customData']).toEqual('My Current Data');
	});

	it('can set customData to a new value', () => {

		comp.changeData('My New Data');
		fixture.detectChanges();
		expect(comp['customData']).toEqual('My New Data');
		
	});

});