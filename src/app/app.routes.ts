import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'shared',
        title: 'shared',
        loadChildren: () =>
          import('modules/shared/src/lib/lib.routes').then(
            (m) => m.sharedRoutes,
          ),
      },
];
