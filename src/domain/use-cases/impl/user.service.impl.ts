import { AddUserParams, UserEntity } from "@/domain/entities/user.entity";
import { IUserService } from "@/domain/use-cases/contracts/user.service";
import { IUserRepository } from "@/domain/entities/contracts/user.repository";
import { ICryptographyRepository } from "@/domain/entities/contracts/cryptography.repository";

export class UserServiceImpl implements IUserService {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly cryptographyRepository: ICryptographyRepository
  ) {}

  async findByUsername(username: string): Promise<UserEntity> {
    return this.userRepository.findByUsername(username);
  }

  async findByEmail(email: string): Promise<UserEntity> {
    return this.userRepository.findByEmail(email);
  }

  async create(user: AddUserParams): Promise<void> {
    const { password } = user;
    const hashPassword = await this.cryptographyRepository.hash(password);

    return this.userRepository.create({ ...user, password: hashPassword });
  }

  async update(user: UserEntity): Promise<void> {
    return this.userRepository.update(user);
  }

  async delete(id: number): Promise<void> {
    return this.userRepository.delete(id);
  }
}
