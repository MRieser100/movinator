import { Component, OnInit, Input } from '@angular/core';
import { EsriMapService } from '../_services/esri-map.service';

@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.scss']
})
export class JobSearchComponent implements OnInit {
  @Input() jobDescription: string;
  @Input() jobLocation: string;

  constructor(private esriMapService: EsriMapService) { }

  ngOnInit() {
  }

  searchJobs() {
    console.log('searchJobs()');
    this.esriMapService.updateJobLayer(this.jobDescription, this.jobLocation);      
  }
}
