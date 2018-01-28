import { TabStatus } from "./tabs/tab-status";
import { ContactDetails } from "./contactDetails";


export class Consultant {
    id: string;
    rate: number = 0;
    // open: boolean = false;
    chosen: boolean = false;
    packNum: number;
    hoursPerPack: number;
    name: string;
    dueDate: string | Date ;
    specialization: string;
    subSpecialization: string;
    contactDetails:ContactDetails;    
}