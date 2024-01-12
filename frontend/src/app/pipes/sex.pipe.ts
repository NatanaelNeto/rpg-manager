import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sex'
})
export class SexPipe implements PipeTransform {

  transform(value: any, unified: boolean = true): string {
    return unified ?
      value == 'F' ? 'A' : 'O'
      : value == 'F' ? 'Uma' : 'Um';
  }

}
