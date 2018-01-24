import { TabStatus } from "./tabs/tab-status";


export class Fund {
    public status: TabStatus;
    public title: string;
    public created: Date | string;
    public fundType: string;
    public miktze: string;
    public dischargeTable: { path:string, name:string};
    public loanRepaymentReason: string;
    public loanRepaymentEnabled: boolean;
}