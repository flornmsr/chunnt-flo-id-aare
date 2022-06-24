import { Component, OnInit, ViewChild } from '@angular/core';
import { AareService } from './aare-service.service';
import { Aare } from './aare.model';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('answerDiv') answerElement: ElementRef;
  @ViewChild('loadingDiv') loadingElement: ElementRef;

  aareData: Aare;
  answer: string;
  currentTime = Date.now()



  constructor(private aareService: AareService) { }

  ngOnInit(): void {
    this.aareService.getCurrentAareData().subscribe(data => {
      this.aareData = data;
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

  writeAnswer() {
    if (this.aareData.aare.flow < 280) {
      console.log(randomAnswers.warm[0])
      if (this.aareData.aare.temperature >= 20) {
        this.answer = this.getRandomAnswer(randomAnswers.warm);
      } else if (this.aareData.aare.temperature < 20 && this.aareData.aare.temperature >= 18) {
        this.answer = this.getRandomAnswer(randomAnswers.medium);
      } else {
        this.answer = this.getRandomAnswer(randomAnswers.cold);
      }
    } else {
      this.answer = this.getRandomAnswer(randomAnswers.flow);
    }
  }

  getRandomAnswer(answers) {
    return answers[Math.floor(answers.length * Math.random())];
  }
}

export const randomAnswers = {
  warm: [
    `fiiix! wenn d aare {temp}° C isch de läbi dert inne`,
    `Jede cha mache wasser wott. aaaber i empfileder bi {temp}° C wermstens id aare z cho.`,
    '{temp}° C, Herrläch! Weni nid grad am Schäfli zeuä bi chumi ganz sicher', 
    `Stig iiii! Es isch {temp}° C`,
    `Bi {temp}° C sägi nur: <br><div><img src="/assets/yeah-boy.gif" width="300" height="150"></div>`
  ],
  medium: [`D Aare isch {temp}° C. Hmmm. <a href="https://g.co/kgs/f4SZct" target="_blank">Wirf doch e Münzä</a>, bi Zahl bini derbi`,
    `Bi {temp}° C bruchsch gueti argument für mi z überzüge. Aber d hoffnig stirbt z letscht. Unger vorbehalt bini derbi`,
    '{temp}° C isch e gränzfall. Aber gränze si ja da zum überschrite. Odr so. Vilech bini derbi',
    'Weisch was der ungerschied zwüschemne Zug und ere Wöschmaschine isch? (Beträffend der Aafrag: Si isch in bearbeitig. D erfolgschance stöh bi {temp}° C ni schlächt si aber scho besser gsi.)'],
  cold: [`Spinnsch? Bi {temp}° C, da gfriertmer ja mi arsch ab!`,
    '{temp}° C, es isch e Schand dasde di derfür hesch gha die website z öffne.',
    'Brrr. {temp}° C: Definitiv Winterpouse',
    'Bi {temp}° C tueni lieber Iisfische',
    'Hallo!? D Aare isch {temp}° C! Gsehni us aus würdi zur 365-Tag-Aare-Schwumm-Community ghöre?',
    'Sorry. Mi Neopren isch grad ir chemische Reinigung. Bi {temp}° C muesch nid mir mir rächne.',
    '{temp}° C ischmer ds chalt. Variante 1)<br> Dr Temperatursensor manipuliere. <br> Variante 2)<br> Ohni mi gah'],
  flow: [`Nei Sorry. Es ziehtmer z fescht. Bi {flow} m³/s chasch 1x Blinzle und scho bisch ir Schwelle`]
}