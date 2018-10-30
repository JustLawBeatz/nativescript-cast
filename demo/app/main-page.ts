//import * as application from 'tns-core-modules/application';
import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
import { MainViewModel } from './main-view-model';

// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
  // Get the event sender
  let page = <pages.Page>args.object;

  if (!page.bindingContext) {
    page.bindingContext = new MainViewModel();
  }

  //const mMediaRouteButton = page.getViewById<layout.StackLayout>('cast');
  //mMediaRouteButton.visibility = mMediaRouteButton.visibility === 'visible' ? 'collapsed' : 'visible';
}
