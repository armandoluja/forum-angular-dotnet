import { BaseModel } from './AbstractBaseModel';
import { User } from './User';

export class Thread extends BaseModel {
    public title?: string;
    public userId?: number;
}
