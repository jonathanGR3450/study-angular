import { Pipe, PipeTransform } from '@angular/core';
import * as en from '../../assets/translate/en.json';

@Pipe({
  name: 'customTranslations'
})
export class CustomTranslationsPipe implements PipeTransform {

  transform(value: string): unknown {
    const data: any = (en as any);
    return data[value]
  }

}
