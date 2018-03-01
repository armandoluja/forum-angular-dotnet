import { BaseModel } from './AbstractBaseModel';

export class User extends BaseModel {
    public username?: string;
    public created?: Date;
}
