import { BaseModel } from './AbstractBaseModel';

export class Comment extends BaseModel {
    public content?: string;
    public userId?: number;
    public postId?: number;
    public parentCommentId?: number;
}
