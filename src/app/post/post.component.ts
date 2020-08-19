import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Post } from "../interfaces/post";

@Component({
	selector: "app-post",
	templateUrl: "./post.component.html",
	styleUrls: ["./post.component.css"],
})
export class PostComponent implements OnInit {
	@Input() thoughtRef: Post;
	@Output() deleted = new EventEmitter<void>();
	@Output() upVoted = new EventEmitter<number>();
	constructor() {}

	deletePost() {
		this.deleted.emit();
	}

	upVotePost() {
		this.upVoted.emit();
	}

	ngOnInit(): void {}
}
