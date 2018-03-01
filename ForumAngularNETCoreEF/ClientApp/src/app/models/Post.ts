import { BaseModel } from './AbstractBaseModel';

export class Post extends BaseModel {
    public title?: string;
    public content?: string;
    public userId?: number; // post owner
    public threadId?: number; // parent thread
}
