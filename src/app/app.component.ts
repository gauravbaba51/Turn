import { Component } from '@angular/core';
// import { SortEvent } from './sortable/sortable-list.directive';
import { DroppableEvent } from './droeble/dropeble.service';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';
import { ExcelService } from './excel.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'grh';
    public chartType:string = 'line';
    public chartType2:string = 'bar';
    public chartType3:string = 'polarArea';





data: any = [{
eid: 'e101',
ename: 'ravi',
esal: 1000
},{
eid: 'e102',
ename: 'ram',
esal: 2000
},{
eid: 'e103',
ename: 'rajesh',
esal: 3000
}];





constructor(private excelService:ExcelService){
}





exportAsXLSX():void {
   this.excelService.exportAsExcelFile(this.data, 'sample');
}



   

































    public chartDatasets:Array<any> = [
        {data: [65, 59, 80, 81, 56, 55, 40], label: 'My First dataset'},
        {data: [28, 48, 40, 19, 86, 27, 90], label: 'My Second dataset'}
    ];

    public chartLabels:Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

    public chartColors:Array<any> = [
        {
            backgroundColor: 'rgba(220,220,220,0.2)',
            borderColor: 'rgba(220,220,220,1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(220,220,220,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(220,220,220,1)'
        },
        {
            backgroundColor: 'rgba(151,187,205,0.2)',
            borderColor: 'rgba(151,187,205,1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(151,187,205,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(151,187,205,1)'
        }
    ];

    public chartOptions:any = {
        responsive: true
    };
    public chartClicked(e: any): void { }
    public chartHovered(e: any): void { }

    sourceList: any[] = [
        {label: 'hello'},
        {label: 'Waiting'},
        {label: 'Bye'}
      ];
    
      dropZones: any[] = [
        { id: 'zone-1', title: 'Dropzone', items: [] }
      ];
    
      dropped(event: DroppableEvent, zone: any): void {
        zone.items.push(event.data);
        event.data.selected = true;
      }
}