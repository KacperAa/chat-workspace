import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstName',
  standalone: true,
})
export class FirstNamePipe implements PipeTransform {
  transform(value: string): string {
    return value.split(' ')[0];
  }
}
