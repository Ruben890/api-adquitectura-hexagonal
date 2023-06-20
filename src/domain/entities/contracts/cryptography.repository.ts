export interface ICryptographyRepository {
  hash: (plaintext: string) => Promise<string>;
}
