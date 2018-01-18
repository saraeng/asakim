import { TabStatus } from './../@shared/models/tabs/tab-status';
export class Fund {
    public status: TabStatus;
    public title: string;
    public created: Date | string;
    public fundType: string;
    public miktze: string;
    public dischargeTable: string;
    public loanRepayment: string;
}