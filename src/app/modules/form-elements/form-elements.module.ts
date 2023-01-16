import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { IConfig } from 'ngx-mask/lib/config';
import { SharedModule } from 'src/app/shared/shared.module';
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};

@NgModule({
  declarations: [InputComponent, SelectComponent],
  imports: [
    FormsModule,
    SharedModule,
    NgxMaskModule.forRoot(maskConfigFunction),
  ],
  exports: [InputComponent, SelectComponent],
})
export class FormElementsModule {}
