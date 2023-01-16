import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { IConfig } from 'ngx-mask/lib/config';
import { SharedModule } from 'src/app/shared/shared.module';
import { DatePickerComponent } from './components/datepicker/datepicker.component';
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};

@NgModule({
  declarations: [InputComponent,DatePickerComponent, SelectComponent],
  imports: [
    FormsModule,
    SharedModule,
    NgxMaskModule.forRoot(maskConfigFunction),
  ],
  exports: [InputComponent,DatePickerComponent, SelectComponent],
})
export class FormElementsModule {}
