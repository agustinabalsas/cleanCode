(() => {
  type Gender = "M" | "F";

  interface PersonProps {
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class Person {
    public name: string;
    public gender: Gender;
    public birthdate: Date;

    constructor({ name, gender, birthdate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  interface UserProps {
    email: string;
    role: string;
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class User extends Person {
    public lastAccess: Date;
    public email: string;
    public role: string;
    constructor({ email, role, name, gender, birthdate }: UserProps) {
      super({ name, gender, birthdate });
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface UserSettingsProps {
    workingDirectory: string;
    lastFolder: string;
    email: string;
    role: string;
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class UserSettings extends User {
    public workingDirectory :string;
    public lastFolder :string;
    constructor({
      workingDirectory,
      lastFolder,
      email,
      role,
      name,
      gender,
      birthdate,
    }: UserSettingsProps) {
      super({email, role, name, gender, birthdate} );
      this.workingDirectory = workingDirectory;
      this.lastFolder = lastFolder;
    }
  }

  const userSettings = new UserSettings(
{   workingDirectory : '/user/f100408',
    lastFolder : '/home',
    email : 'agustinabalsasm@outlook.com',
    role: 'Admin',
    name : 'Agustina',
    gender: 'F',
    birthdate : new Date(2000 - 9 - 28)}
  );

  console.log(userSettings);
  
})();
