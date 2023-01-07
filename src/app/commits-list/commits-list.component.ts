import { Component, Input, OnInit } from '@angular/core';
import { CommitsService } from '../services/commits.service';
import { Commit } from '../interfaces/commit.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-commits-list',
  templateUrl: './commits-list.component.html',
  styleUrls: ['./commits-list.component.css']
})
export class CommitsListComponent implements OnInit {

  commits: Commit[] = []; 
  constructor(private commitsService: CommitsService, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadCommits();
  }

  //Loading the result from the API
  loadCommits(): void {
    this.commitsService.getCommit().subscribe(
      response => {
        this.commits = response;
      }
    );
  }

}
