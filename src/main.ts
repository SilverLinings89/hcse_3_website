import { importProvidersFrom, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, provideRouter } from '@angular/router';
import { HallmarkDescriptionViewComponent } from './app/hallmark-description-view/hallmark-description-view.component';
import { DictionaryComponent } from './app/dictionary/dictionary.component';
import { SearchComponent } from './app/search/search.component';
import { PaperComponent } from './app/paper/paper.component';
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'hallmarks', component: HallmarkDescriptionViewComponent },
  { path: 'dictionary', component: DictionaryComponent },
  { path: 'search', component: SearchComponent },
  { path: 'article/:pmc', component: PaperComponent },
  { path: '**', component: PageNotFoundComponent }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideHttpClient(),
    importProvidersFrom([BrowserAnimationsModule]),
    provideRouter(appRoutes)
  ]
})
  .catch(err => console.error(err));
