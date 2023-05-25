(() => {
    function getMovieById( id: string ) {
        console.log({ id });
    }

    function getMovieCast( idMovie: string ) {
        console.log({ idMovie });
    }

    function getActorBioById( actorId: string ) {
        console.log({ actorId });
    }

    interface createMovieOptions {
        title : string;
        description : string;
        rating : string;
        cast: string[];
    }

    function createMovie({title, description, rating, cast} : createMovieOptions) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ): boolean {
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        
    }

    //Contuniación

    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }):number => {
        let result;
        if ( isDead )  result = 1500;

        if ( isSeparated )  result = 2500;
        
        return  (isRetired) ? 3000 : 4000;
    }

})();




