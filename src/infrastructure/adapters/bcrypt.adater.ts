import bcrypt from "bcryptjs";

import { ICryptographyRepository } from "@/domain/entities/contracts/cryptography.repository";

export class BcryptAdapter implements ICryptographyRepository {
  async hash(plaintext: string): Promise<string> {
    return bcrypt.hash(plaintext, 10);
  }
}
