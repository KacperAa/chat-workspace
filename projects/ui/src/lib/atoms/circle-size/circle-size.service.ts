import { Injectable } from '@angular/core';

import { CirclePresentationSize } from './models/circle-presentation-size.model';

@Injectable()
export class CircleSizeService {
  public setCircleSizeClass(size: CirclePresentationSize): string {
    switch (size) {
      case 'small': {
        return 'circle-sm';
      }
      case 'normal': {
        return 'circle-md';
      }
      case 'large': {
        return 'circle-lg';
      }
      default: {
        let n: never;
        return '';
      }
    }
  }
}
