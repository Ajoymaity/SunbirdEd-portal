import { DialCodeSearchRoutingModule } from './dial-code-search.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelemetryModule } from '@sunbird/telemetry';
import { CoreModule } from '@sunbird/core';
import { SharedModule } from '@sunbird/shared';
import { NgInviewModule } from 'angular-inport';
import { SuiSelectModule, SuiModalModule, SuiAccordionModule, SuiPopupModule, SuiDropdownModule, SuiProgressModule,
  SuiRatingModule, SuiCollapseModule } from 'ng2-semantic-ui';
import { GetComponent, DialCodeComponent, DialCodeCardComponent } from './components';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { PlayerHelperModule } from '@sunbird/player-helper';

@NgModule({
  imports: [
    CommonModule,
    TelemetryModule,
    CoreModule,
    SharedModule,
    NgInviewModule,
    DialCodeSearchRoutingModule,
    SuiSelectModule, SuiModalModule, SuiAccordionModule, SuiPopupModule, SuiDropdownModule, SuiProgressModule,
    SuiRatingModule, SuiCollapseModule,
    FormsModule,
    InfiniteScrollModule,
    PlayerHelperModule
  ],
  declarations: [ GetComponent, DialCodeComponent, DialCodeCardComponent]
})
export class DialCodeSearchModule { }
