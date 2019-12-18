import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'format'
})
export class FormatPipe implements PipeTransform {

  transform(value: string): string {
    if(value.length > 25) {
      return value.substr(0, 25) + '...';
    }

    return value;
  }

}
