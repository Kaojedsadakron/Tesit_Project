import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SubmitComponent } from './submit/submit.component';
import { TrackingComponent } from './tracking/tracking.component';
import { ConclusionComponent } from './conclusion/conclusion.component';
import { TopBarComponent } from '../app/top-bar/top-bar.component';

import { CrudService } from './service/crud.service';
import { FormsModule } from '@angular/forms';

import { getAnalytics } from "firebase/analytics";
import { LogService }
    from './shared/log.service';
import { LogTestComponent }
    from './log-test/log-test.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SubmitComponent,
    TrackingComponent,
    ConclusionComponent,
    TopBarComponent,
    LogTestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideAuth(() => getAuth()),
    // provideFirestore(() => getFirestore()),
  ],
  providers: [LogService,CrudService,AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
