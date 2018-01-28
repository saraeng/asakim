import { Lecture } from './../../../../@shared/models/lecture';
import { Component, OnInit, Input } from '@angular/core';
import { ConsultantService } from '../../../../@shared/models/consultantService';
@Component({
    selector: 'package-details',
    templateUrl: 'details.html',
})
export class PackageDetails implements OnInit {

    @Input() package: ConsultantService;
    ngOnInit(): void {

    }
}
