import { Pipe, PipeTransform } from '@angular/core';

import { StatusDot } from '../../../../../../../../../../../ui/src/lib/molecules/avatar-with-status/models/status-dot.model';

@Pipe({
  name: 'status',
  standalone: true,
})
export class StatusPipe implements PipeTransform {
  transform(value: boolean): StatusDot {
    return value ? 'online' : 'offline';
  }
}
