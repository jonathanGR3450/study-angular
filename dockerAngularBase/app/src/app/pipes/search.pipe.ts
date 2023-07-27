import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args: string) {
    if (!value) {
      return;
    }

    if (!args) {
      return value;
    }
    args = args.toLowerCase();
    return value.filter((element: any) => {
      return JSON.stringify(element).toLowerCase().includes(args);
    });
  }

}
