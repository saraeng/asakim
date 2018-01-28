import { TabStatus } from "./tabs/tab-status";
import { ContactDetails } from "./contactDetails";


export class ConsultantService {
    public status: TabStatus;
    public packName: string;
    public dueDate: Date | string;
    public contactDetails: ContactDetails;
}