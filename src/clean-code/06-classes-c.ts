(() => {
  //Se aplica principio de responsabilidad única
  //Priorizar composición frente a la herencia

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
  }

  class User {
    public email: string;
    public lastAccess: Date;
    public role: string;

    constructor({ email, role }: UserProps) {
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface SettingsProps {
    workingDirectory: string;
    lastFolder: string;
  }

  class Settings {
    public workingDirectory: string;
    public lastFolder: string;

    constructor({ workingDirectory, lastFolder }: SettingsProps) {
      this.workingDirectory = workingDirectory;
      this.lastFolder = lastFolder;
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

  class UserSettings {
    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({
      name,
      gender,
      birthdate,
      email,
      role,
      lastFolder,
      workingDirectory,
    }: UserSettingsProps) {
      this.person = new Person({ name, gender, birthdate });
      this.user = new User({ email, role });
      this.settings = new Settings({ lastFolder, workingDirectory });
    }
  }

  const userSettings = new UserSettings({
    workingDirectory: "/user/f100408",
    lastFolder: "/home",
    email: "agustinabalsasm@outlook.com",
    role: "Admin",
    name: "Agustina",
    gender: "F",
    birthdate: new Date(2000 - 9 - 28),
  });

  console.log(userSettings);
})();
