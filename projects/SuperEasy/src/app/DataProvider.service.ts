import { Injectable } from '@angular/core';
import { Transaction } from './Transaction';

@Injectable({
    providedIn: 'root',
})

export class DataProvider {

    constructor() { }

    transactions: Transaction[] = [
        { id: 1001, worker: 'Worker1', status: 'Delivered', dateReceived: new Date('Jan 5, 2019'), dateDelivered: new Date('Jan 6, 2019') },
        { id: 1005, worker: 'Worker2', status: 'Delivered', dateReceived: new Date('Jan 5, 2019'), dateDelivered: new Date('Jan 6, 2019') },
        { id: 1004, worker: 'Worker1', status: 'On The Way', dateReceived: new Date('Jan 5, 2019'), dateDelivered: new Date('Jan 6, 2019') },
        { id: 1007, worker: 'Worker2', status: 'Delivered', dateReceived: new Date('Jan 5, 2019'), dateDelivered: new Date('Jan 6, 2019') },
        { id: 1011, worker: 'Worker6', status: 'Delivered', dateReceived: new Date('Jan 5, 2019'), dateDelivered: new Date('Jan 6, 2019') },
        { id: 2005, worker: 'Worker6', status: 'Not Delivered', dateReceived: new Date('Jan 5, 2019'), dateDelivered: new Date('Jan 6, 2019') },
        { id: 2101, worker: 'Worker8', status: 'Received', dateReceived: new Date('Jan 5, 2019'), dateDelivered: new Date('Jan 6, 2019') },
        { id: 1315, worker: 'Worker12', status: 'Delivered', dateReceived: new Date('Jan 5, 2019'), dateDelivered: new Date('Jan 6, 2019') }

    ]




}
