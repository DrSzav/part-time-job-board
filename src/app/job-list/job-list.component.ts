import { Component } from '@angular/core';
import { joblist } from '../joblist';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'job-list',
    templateUrl: 'job-list.component.html',
    styleUrls: ['job-list.component.scss'],
    animations:[
      trigger('openClose', [
        state('true', style({ opacity: '1' })),
        state('false', style({ opacity: '0' })),
        transition('false <=> true', animate(500))
    ])
    ]
})
export class JobListComponent {
  joblist = joblist;

  constructor(){
    this.hydrateJoblist();
  }
  apply() {
    window.alert('!');
  }

  toggleCard(job: { name: string, text: string, shown: boolean }) {
    this.joblist.map((l) => {
      if (l.name === job.name) {
        l.shown = !l.shown;
      } else {
        l.shown = false;
      }
    })
  }


}
