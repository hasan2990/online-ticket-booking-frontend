import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { SelectedBusesResponse } from '../Models/SelectedBusesResponse.model';
@Component({
  selector: 'app-userbusinfo',
  templateUrl: './userbusinfo.component.html',
  styleUrls: ['./userbusinfo.component.scss'] 
})
export class UserbusinfoComponent {
  UserObj: Busesinfo;

  constructor(private http: HttpClient, private router: Router, private auth: AuthService) {
    this.UserObj = new Busesinfo();
  }

//   onSearchOption() {
//     // debugger;
//     this.auth.GetBusesByUser(this.UserObj).subscribe((response: any) => {
//       console.log(this.UserObj.source_id + "  " + this.UserObj.destination_id+"   "+response.isSuccess + "  " + response.serviceGetBuses.length);
//       console.log(response.statusMessage);
//       if (response.isSuccess === true) {
//         if (response.ServiceGetBuses != null && response.ServiceGetBuses.Count > 0){
//           alert("Success!");
//           console.log(response.serviceGetBuses); 
//         }
//         else{
//           alert("No Buses Available");
//         }
//       } else {
//         alert("Unable to retrieve bus details");
//       }
//     }, error => {
//       console.error('Error:', error);
//       alert("An error occurred while retrieving bus details");
//     });
//   }
// }  
onSearchOption() {
  // debugger;
  this.auth.GetBusesByUser(this.UserObj).subscribe((response: SelectedBusesResponse) => {
    console.log(this.UserObj.source_id + "  " + this.UserObj.destination_id + "   " + response.isSuccess + "  " + response.ServiceGetBuses.length);
    console.log(response.statusMessage);
    if (response.isSuccess === true) {
      if (response.ServiceGetBuses != null && response.ServiceGetBuses.length > 0) {
        alert("Success!");
        console.log(response.ServiceGetBuses);
      }
      else {
        alert("No Buses Available");
      }
    } else {
      alert("Unable to retrieve bus details");
    }
  }, error => {
    console.error('Error:', error);
    alert("An error occurred while retrieving bus details");
  });
}
}
export class Busesinfo {
  source_id: number;
  destination_id: number;

  constructor() {
    this.source_id = 0;
    this.destination_id = 0;
  }
}

