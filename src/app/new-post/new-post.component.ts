import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
	selector: "app-new-post",
	templateUrl: "./new-post.component.html",
	styleUrls: ["./new-post.component.css"],
})
export class NewPostComponent implements OnInit {
	@Output() addClicked = new EventEmitter<void>();
	constructor() {}

	showForm() {
		this.addClicked.emit();
	}

	ngOnInit(): void {}
}
