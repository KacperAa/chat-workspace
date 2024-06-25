import { Pipe, PipeTransform } from '@angular/core';

import { TextCloudColor } from '../../../../../../../../../../ui/src/lib/molecules/text-cloud/models/text-cloud-color.model';

@Pipe({
  name: 'cloudColor',
  standalone: true,
})
export class CloudColorPipe implements PipeTransform {
  transform(isCurrentUser: boolean): TextCloudColor {
    return isCurrentUser ? 'green' : 'darkgray';
  }
}
