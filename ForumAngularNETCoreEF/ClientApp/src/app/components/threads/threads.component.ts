import { Component, OnInit } from '@angular/core';
import { Thread } from '../../models/Thread';
import { ThreadService } from '../../services/thread.service';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.css']
})
export class ThreadsComponent implements OnInit {

  public threads: Thread[];
  public threadToCreate: Thread;

  constructor(private threadService: ThreadService) {
    this.threadToCreate = {};
   }

  ngOnInit() {
    this.threadService.get().subscribe(result => {
      this.threads = result;
    }, error => console.log(error));
  }

  public createThread(): void {
    this.threadService.post(this.threadToCreate).subscribe(result => {
      this.threads.push(result);
    }, error => console.log(error));
  }

}
