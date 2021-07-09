import { Component, OnInit, ViewChild } from '@angular/core';
import { AareService } from './aare-service.service';
import { Aare } from './aare.model';
import {ElementRef} from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('answerDiv') answerElement:ElementRef;
  @ViewChild('loadingDiv') loadingElement:ElementRef;

  aareData: Aare;
  answer: string;
  currentTime = Date.now()

  

  constructor(private aareService: AareService) { }

  ngOnInit(): void {
    this.aareService.getCurrentAareData().subscribe(data => {
      this.aareData = data;
      this.aareData.aare.temperature = 18.9
      this.aareData.aare.flow=200
      console.log(this.aareData);
      this.writeAnswer();
      setTimeout(() => {
        this.loadingElement.nativeElement.style.display = "block";
      }, 2000)
      setTimeout(() => {
        this.loadingElement.nativeElement.style.display = "none";
        this.answerElement.nativeElement.style.display = "block";
      }, 4000)
    })
  }

  writeAnswer(){
    if(this.aareData.aare.flow < 350){
      if(this.aareData.aare.temperature >= 20){
        this.answer = `fiiix! wenn d aare ${this.aareData.aare.temperature}° C isch de läbi dert inne`
      }else if(this.aareData.aare.temperature < 20 && this.aareData.aare.temperature >= 19){
        this.answer = `Bi ${this.aareData.aare.temperature}° C bruchsch gueti argument für mi z überzüge. Aber d hoffnig stirbt z letscht. Unger vorbehalt bini derbi`
      }else{
        this.answer = `Spinnsch? Bi ${this.aareData.aare.temperature}° C, da gfriertmer ja mi arsch ab!`
      }
    } else{
      this.answer = `Nei Sorry. Es ziehtmer z fescht. Bi ${this.aareData.aare.flow} m³/s chasch 1x Blinzle und scho bisch ir Schwelle`;
    }
    
  }
}
