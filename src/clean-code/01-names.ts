//FUNCIÓN ANÓNIMA AUTOINVOCADA
(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const filesToEvaluate = [
        { id: 1, flagged: false },
        { id: 2, flagged: false },
        { id: 3, flagged: true },
        { id: 4, flagged: false },
        { id: 5, flagged: false },
        { id: 7, flagged: true },
    ]; 

//    CTRL+ALT : marca para abajo
//    ALT+SHIFT+UP OR DOWN : replica la linea 
//    ALT+UP OR DOWN : mueve la linea
    
    // Archivos marcados para borrar - files to delete
    const arhivos = filesToEvaluate.map( fileToDelete => fileToDelete.flagged );
    
    //malos nombres
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };

    // Todo: Tarea
        
    // día de hoy - today
    const today = new Date();
    
    // días transcurridos - elapsed time in days
    const daysPassed: number = 23;
    
    // número de archivos en un directorio - number of files in directory
    const countOfDirectoryArchives = 33;
    
    // primer nombre - first name
    const firstName = 'Agus';
    
    // primer apellido - last name
    const lastName = 'Balsas';

    // días desde la última modificación - days since modification
    const daysSinceModification = 12;
    
    // cantidad máxima de clases por estudiante - max classes per student
    const maxClassesPerStudent = 6;

})();