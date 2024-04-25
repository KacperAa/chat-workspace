import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AvatarComponent } from '@ui/AvatarComponent';

import { AppNavigationElement } from './models/app-navigation.model';

const MATERIAL_IMPORTS = [
  MatSidenavModule,
  MatButtonModule,
  MatToolbarModule,
  MatListModule,
  MatIconModule,
  AvatarComponent,
  MatTooltipModule,
];

@Component({
  selector: 'kaa-core',
  standalone: true,
  imports: [MATERIAL_IMPORTS],
  templateUrl: './core.component.html',
  styleUrl: './core.component.scss',
})
export class CoreComponent {
  public navigationElements: AppNavigationElement[] = [
    {
      matIconName: 'chat',
    },
    {
      matIconName: 'groups',
    },
    {
      matIconName: 'videocam',
    },
    {
      matIconName: 'settings',
    },
  ];
}
