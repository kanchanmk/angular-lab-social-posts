import { Component, OnInit } from "@angular/core";
import { Post } from "../interfaces/post";
@Component({
	selector: "app-social-posts",
	templateUrl: "./social-posts.component.html",
	styleUrls: ["./social-posts.component.css"],
})
export class SocialPostsComponent implements OnInit {
	myThoughts: Post[] = [
		{
			title: "Angular",
			thought: "Angular is cool",
			votes: -3,
		},
		{
			title: "Corona",
			thought: "Corona is aweful",
			votes: 3,
		},
		{
			title: "Life",
			thought: "Life is beautiful",
			votes: 10,
		},
	];
	showFormFlag: boolean = false;

	constructor() {}

	onSubmit(sharableThought: Post) {
		this.myThoughts.unshift(sharableThought);
		this.showFormFlag = false;
	}

	onDelete(index: number) {
		this.myThoughts.splice(index, 1);
	}

	onUpVote(index: number) {
		this.myThoughts[index].votes++;
	}

	onShowForm() {
		this.showFormFlag = true;
	}

	ngOnInit(): void {}
}
