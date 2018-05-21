import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { Routes } from '@angular/router';

import { TicketComponent } from './ticket/ticket.component';

export const HomeRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: ':store_id/:tag_id',
                // path: 'ticket;storeid=ABC;tagid=XYZ',
                component: TicketComponent,
                data: {
                    breadcrumb: 'Waiting Number'
                }
            },
            {
                path: 'detail',
                component: TicketDetailComponent,
                data: {
                    breadcrumb: 'Waiting Number Detail'
                }
            }
        ]
    }
];
