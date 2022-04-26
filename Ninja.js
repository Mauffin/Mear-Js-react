class Ninja{
    constructor(nombre,salud,velocidad,fuerza){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = velocidad;
        this.fuerza =fuerza ;
    
    }


    ninja(){
        this.fuerza +=3;
        this.velocidad +=3;
    }
    sayName(){
        console.log(`Nombre: ${this.nombre}`);
    }
    showStats(){
        console.log(`Salud: ${ this.salud }, velocidad: ${this.velocidad}, fuerza: ${this.fuerza}.`);
    }

    drinkSake(){
        this.salud += 10;
        console.log(`Ninja tomando Sake: ${ this.salud }`);
    }
}

const ninja1 = new Ninja("Hyabusa",0,0,0);

ninja1.ninja();
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

console.log("\n");

class Sensei extends Ninja{
    constructor(nombre,salud,velocidad,fuerza,sabiduria){
        super("Master Splinter",210,10,10);
        this.sabiduria=10;
    }

    speakWisdom(){
        this.sabiduria;
        console.log(`Sabiduria +  ${ this.sabiduria }`);
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    }
    
    
    showStats(){
        console.log(`Nombre: ${ this.nombre }, Salud: ${ this.salud }, Velocidad: ${this.velocidad}, Fuerza: ${this.fuerza}.`);
        
    }
    
}

const superSensei = new Sensei();

superSensei.speakWisdom();
superSensei.showStats();