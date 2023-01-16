import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxMaskModule } from 'ngx-mask';
import { IConfig } from 'ngx-mask/lib/config';
import { SharedModule } from 'src/app/shared/shared.module';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { DatePickerComponent } from './components/datepicker/datepicker.component';
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};

@NgModule({
  declarations: [
    InputComponent,
    DatePickerComponent,
    AutocompleteComponent,
    SelectComponent,
  ],
  imports: [
    MatNativeDateModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    SharedModule,
    NgxMaskModule.forRoot(maskConfigFunction),
  ],
  exports: [
    InputComponent,
    DatePickerComponent,
    AutocompleteComponent,
    SelectComponent,
  ],
})
export class FormElementsModule {}
