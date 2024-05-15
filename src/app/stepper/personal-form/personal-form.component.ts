import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'cv-personal-form',
	templateUrl: './personal-form.component.html',
	styleUrl: './personal-form.component.scss',
})
export class PersonalFormComponent implements OnInit {
	@Output() public form = new EventEmitter();

	public personalForm!: FormGroup;

	public constructor(private _fb: FormBuilder) {}

	public ngOnInit() {
		this.personalForm = this._fb.group({
			firstName: ['', Validators.required],
			lastName: ['', Validators.required],
			title: ['', Validators.required],
			address: ['', Validators.required],
			email: ['', Validators.required],
			phone: ['', Validators.required],
		});
	}

	public submitForm() {
		this.personalForm.markAsDirty();

		this.form.emit(this.personalForm);
	}
}
