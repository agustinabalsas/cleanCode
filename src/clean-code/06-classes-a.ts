/*
Se declara una función anónima dentro de paréntesis (). No tiene nombre y puede o no tener parámetros.
Después de la definición de la función, se colocan paréntesis () para invocarla inmediatamente.
El código que se desea ejecutar se coloca dentro de las llaves {} de la función.
Los paréntesis finales () al final de la expresión son necesarios para invocar la función inmediatamente después de su definición.

(function (param1, param2) {
  // Código a ejecutar con los parámetros
})(value1, value2);
*/

(() => {

  //No aplicando el principio de responsabilidad única

  type Gender = "M" | "F";

  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date
    ) {}
  }

//  const persona = new Person('Agustina', 'F', new Date('2000-09-28'));

  class User extends Person {
    public lastAccess : Date;
    constructor(
      public email : string,
      public role: string,
      name: string,
      gender: Gender,
      birthdate : Date,
    ){
      super(name, gender, birthdate);
      this.lastAccess = new Date();
    }

    checkCredentials(){
      return true;
    }
  }

  class UserSettings extends User{
    constructor(
      public workingDirectory : string,
      public lastFolder:string,
      email : string,
      role: string,
      name: string,
      gender: Gender,
      birthdate : Date,
    ){
      super(email, role, name, gender, birthdate);
    }
  }

  const userSettings = new UserSettings(
    '/user/f100408',
    '/home',
    'agustinabalsasm@outlook.com',
    'Admin',
    'Agustina',
    'F',
    new Date(2000-9-28)
  );

  console.log({userSettings, areCredentialsValid: userSettings.checkCredentials()});

})();