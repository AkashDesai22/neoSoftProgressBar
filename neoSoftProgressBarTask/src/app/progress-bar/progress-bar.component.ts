import { Component} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})

export class ProgressBarComponent  {
  
  progressbar = 0;
  intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(()=> {
      if (this.progressbar < 100) {
        this.progressbar++;
      } else {
        clearInterval(this.intervalId);
      }
    }, 1000); //timeDelay 1 Second,increment progress bar after 1 second before reache the full width of page.

    window.addEventListener('resize',()=> {
      if (this.progressbar >= 100) {
        clearInterval(this.intervalId);
      }
    });
  }; //stop progress bar when met to width of page.
  
}
