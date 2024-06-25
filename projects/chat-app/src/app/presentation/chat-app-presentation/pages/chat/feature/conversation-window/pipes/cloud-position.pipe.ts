import { Pipe, PipeTransform } from '@angular/core';

import { TextCloudPosition } from '../../../../../../../../../../ui/src/lib/molecules/text-cloud/models/text-cloud-position.model';

@Pipe({
  name: 'cloudPosition',
  standalone: true,
})
export class CloudPositionPipe implements PipeTransform {
  transform(isCurrentUser: boolean): TextCloudPosition {
    return isCurrentUser ? 'right' : 'left';
  }
}
