import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const IsAdmin = this.usersRepository.findById(user_id);

    if (!IsAdmin.admin) {
      throw new Error("User not exists");
    }

    const user = this.usersRepository.list();

    return user;
  }
}

export { ListAllUsersUseCase };
