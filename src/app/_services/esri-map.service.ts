import { Injectable } from '@angular/core';
import { loadModules } from 'esri-loader';
import esri = __esri; // Esri TypeScript Types

import { JobResult } from '../_models/job-result';
import { IndeedService } from './indeed.service';

@Injectable({
  providedIn: 'root'
})
export class EsriMapService {

  map: esri.Map;
  jobData: JobResult[];

  constructor(
    private indeedService: IndeedService
  ) { }

  async initializeMap(container: string, center: Array<number>, basemap: string, zoom: number) {
    try {

      // Load the modules for the ArcGIS API for JavaScript
      const [EsriMap, EsriMapView, TileLayer] = await loadModules([
        'esri/Map',
        'esri/views/MapView',
        'esri/layers/TileLayer' // Required for Layers - SEE: https://developers.arcgis.com/javascript/latest/sample-code/intro-layers/index.html
      ]);

      // Configure the Map
      const mapProperties: esri.MapProperties = {
        basemap: basemap
      };

      // Define Layers - SEE: https://developers.arcgis.com/javascript/latest/sample-code/intro-layers/index.html
      
      // TODO: create FeatureLayer from Indeed API job results

      // *NOTE: kept for reference
      // var transportationLayer = new TileLayer({
      //   url: "https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer"
      // });
  
      // var housingLayer = new TileLayer({
      //   url: "https://tiles.arcgis.com/tiles/nGt4QxSblgDfeJn9/arcgis/rest/services/New_York_Housing_Density/MapServer"
      // }); 

      // Instantiate EsriMap obj
      this.map = new EsriMap(mapProperties);

      // // Add Layers to EsriMap obj
      // map.add(housingLayer);          
      // this.map.add(transportationLayer);
      
      // Initalize the MapView
      const mapViewProperties: esri.MapViewProperties = {
        // container: this.mapViewEl.nativeElement,
        container: container, // id || div.nativeElement that holds EsriMapView object
        center: center,
        zoom: zoom,
        map: this.map        
      };                 
      
      return new EsriMapView(mapViewProperties);
    } catch (error) {
      console.log('EsriLoader: ', error);
    }    
  }

  updateJobLayer(jobDescription: string, jobLocation: string) {
    
    // *TODO: SEE https://github.com/Esri/esri-loader/issues/124 for means of encapsulating/sharing Esri modules in a service
    //      : ALSO SEE => Evernote "Angular - Shared Module"
    // Load the modules for the ArcGIS API for JavaScript
    loadModules([
      'esri/layers/TileLayer' // Required for Layers - SEE: https://developers.arcgis.com/javascript/latest/sample-code/intro-layers/index.html
    ]).then(([TileLayer]) => {
      
      this.indeedService.getJobData(jobDescription, jobLocation)
        .subscribe( (data) => console.log(data) );
        // .subscribe( (data) => this.jobData = data);

      var transportationLayer = new TileLayer({
        url: "https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer"
      });   

      this.map.add(transportationLayer);
    })         
  }
}
