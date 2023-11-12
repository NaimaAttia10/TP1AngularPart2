import { ToastrService } from 'ngx-toastr';
import {Component, inject, Input} from "@angular/core";
import { Cv } from "../model/cv";
import { CvService } from "src/app/cv.service";
import { Observable } from "rxjs";
import { EmbaucheService } from "src/app/embauche.service";
import {Router} from "@angular/router";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent {
  cv$: Observable<Cv>;
  constructor(private cvService: CvService, private embaucheService: EmbaucheService,private toastr: ToastrService) {
    this.cv$ = this.cvService.selectCv$;
  }
  router=inject(Router);
  embaucherCv(cv: Cv) {
   // toast thing
    if(!this.embaucheService.embaucher(cv)){
      this.toastr.error('Ce cv est déjà sélectionné');

      }
  }
  redirect(id:number){
    this.router.navigate(['cv',id]);
  }

}
