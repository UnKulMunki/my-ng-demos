import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MatNativeDateModule } from "@angular/material/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material-module";
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from "@angular/material/form-field";

// import { AppComponent } from "./app.component";
import { DisplayExamples, UserProfileDialog } from "./display-examples";
import { SideNavContent } from "./sidenav-component/sidenav-content";

// Default MatFormField appearance to 'fill' as that is the new recommended approach and the
// `legacy` and `standard` appearances are scheduled for deprecation in version 10.
// This makes the examples that use MatFormField render the same in StackBlitz as on the docs site.
@NgModule({
  declarations: [DisplayExamples, SideNavContent, UserProfileDialog],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  entryComponents: [DisplayExamples, SideNavContent, UserProfileDialog],
  bootstrap: [DisplayExamples],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: "fill" }
    }
  ]
})
export class AppModule {}
