import { Component, Input, OnInit } from '@angular/core';
import { CommitsService } from '../services/commits.service';
import { Commit } from '../interfaces/commit.interface';

const repositoryApi = 'home-test-backend';

@Component({
  selector: 'app-commits-backend',
  templateUrl: './commits-backend.component.html',
  styleUrls: ['./commits-backend.component.css']
})
export class CommitsBackendComponent implements OnInit {

  commits: Commit[] = []; 
  constructor(private commitsService: CommitsService) { }

  ngOnInit(): void {
    this.loadCommits();
  }

  //Loading the result from the API
  loadCommits(): void {
    this.commitsService.getCommit(repositoryApi).subscribe(
      response => {
        this.commits = response;
      }
    );
  }

}
