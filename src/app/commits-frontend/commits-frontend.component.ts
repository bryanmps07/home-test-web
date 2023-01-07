import { Component, OnInit } from '@angular/core';
import { Commit } from '../interfaces/commit.interface';
import { CommitsService } from '../services/commits.service';

const repositoryWeb = 'home-test-web';

@Component({
  selector: 'app-commits-frontend',
  templateUrl: './commits-frontend.component.html',
  styleUrls: ['./commits-frontend.component.css']
})
export class CommitsFrontendComponent implements OnInit {

  commits: Commit[] = []; 
  constructor(private commitsService: CommitsService) { }

  ngOnInit(): void {
    this.loadCommits();
  }

  //Loading the result from the API
  loadCommits(): void {
    this.commitsService.getCommit(repositoryWeb).subscribe(
      response => {
        this.commits = response;
      }
    );
  }

}
