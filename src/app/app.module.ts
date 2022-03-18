import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SocketIoModule } from 'ngx-socket-io';
import { ToastrModule } from 'ngx-toastr';

import { environment } from '@env/environment';
import { SharedModule } from '@app/shared/shared.module';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { ServerInterceptor } from '@app/common/interceptors/server.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    SharedModule,
    SocketIoModule.forRoot({
      url: `${environment.server_endpoint}/chat`,
      options: {
        autoConnect: true,
        reconnection: true,
        withCredentials: true,
      },
    }),
    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 5000,
      extendedTimeOut: 2000,
      progressBar: true,
      positionClass: 'toast-top-right',
      tapToDismiss: true,
      onActivateTick: true,
      maxOpened: 3,
      autoDismiss: true,
      preventDuplicates: true,
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
