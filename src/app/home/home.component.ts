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
      // this.aareData.aare.temperature = 180.9
      // this.aareData.aare.flow=400
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
    if(this.aareData.aare.flow < 280){
      console.log(randomAnswers.warm[0])
      if(this.aareData.aare.temperature >= 20){
        this.answer = this.getRandomAnswer(randomAnswers.warm);
      }else if(this.aareData.aare.temperature < 20 && this.aareData.aare.temperature >= 19){
        this.answer = this.getRandomAnswer(randomAnswers.medium);
      }else{
        this.answer = this.getRandomAnswer(randomAnswers.cold);
      }
    } else{
      this.answer = this.getRandomAnswer(randomAnswers.flow);
    }
  }

  getRandomAnswer(answers){
    return answers[Math.floor(answers.length * Math.random())];
  }
}

export const randomAnswers = {
  warm: [`fiiix! wenn d aare {temp}° C isch de läbi dert inne`, 
  `Jede cha mache waser wott. aaaber i empfileder bi {temp}° C wermstens id aare z cho.`,
  '{temp}° C, Herrläch! Weni nid grad am Schäfli zeuä bi chumi ganz sicher'],
  medium: [`Bi {temp}° C bruchsch gueti argument für mi z überzüge. Aber d hoffnig stirbt z letscht. Unger vorbehalt bini derbi`, 
  '{temp}° C isch e gränzfall. Aber gränze si ja da zum überschrite. Odr so. Vilech bini derbi',
  'Weisch was der ungerschied zwüschemne Zug und ere Wöschmaschine isch? (Beträffend der Aafrag: Si isch in bearbeitig. D erfolgschance stöh bi {temp}° C ni schlächt si aber scho besser gsi.)'],
  cold: [`Spinnsch? Bi {temp}° C, da gfriertmer ja mi arsch ab!`, '{temp}° C, es isch e Schand dasde di derfür hesch gha die website z öffne.'],
  flow: [`Nei Sorry. Es ziehtmer z fescht. Bi {flow} m³/s chasch 1x Blinzle und scho bisch ir Schwelle`]
}