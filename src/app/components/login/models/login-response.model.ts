import { UserModel } from "../../../core/user/model/user.model";

export class LoginResponseModel {
  user: UserModel;
  token: string;
}
