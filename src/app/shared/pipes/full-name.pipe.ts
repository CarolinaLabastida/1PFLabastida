import { Pipe, PipeTransform } from '@angular/core';
import { student } from 'src/app/pages/Student/index/index.component';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(value: student, ...args: unknown[]): unknown {
    const fullName = `${value.name} ${value.lastName}`;
    return fullName;
  }

}
