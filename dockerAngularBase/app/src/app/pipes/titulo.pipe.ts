import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titulo'
})
export class TituloPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return '';
    }

    if (value.length > 11) {
      return value.substring(0, 11) + '...'
    }

    return value
  }

}
