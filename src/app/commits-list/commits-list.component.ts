import { Component, OnInit } from '@angular/core';
import { CommitsService } from '../services/commits.service';
import { Commit } from '../interfaces/commit.interface';

@Component({
  selector: 'app-commits-list',
  templateUrl: './commits-list.component.html',
  styleUrls: ['./commits-list.component.css']
})
export class CommitsListComponent implements OnInit {

  commits: Commit[] = []; 
  constructor(private commitsService: CommitsService) { }

  ngOnInit(): void {
    this.loadCommits();
  }

  loadCommits(): void {
    this.commitsService.getCommit().subscribe(
      response => {
        console.log(response);
        this.commits = response;
      }
    );
  }

}
