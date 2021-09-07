import { Pipe, PipeTransform } from '@angular/core';
import { Aare } from './home/aare.model';

@Pipe({
  name: 'answer'
})
export class AnswerPipe implements PipeTransform {

  transform(answer: String, aare: Aare, ...args: unknown[]): String {
        answer = answer.replace('{flow}', `${aare.aare.flow}`);

        return answer.replace('{temp}', `${aare.aare.temperature}`);


  }

}

