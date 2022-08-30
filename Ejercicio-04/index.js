const nombre = "Jorge";
const apellido = "Guillén";
const estudiante = nombre + " " + apellido;
const estudianteMayus = estudiante.toUpperCase();
const estudianteMinus = estudiante.toLowerCase();
const numLetras = estudiante.length;
const primeraLetra = nombre.charAt(0);
const ultimaLetra = apellido.charAt(apellido.length - 1);
const estudianteSinEspacios = estudiante.replace(" ", "");
const validarNombre = estudiante.includes(nombre);

console.log(`
Nombre: ${nombre}
Apellido: ${apellido}
Estudiante: ${estudiante}
Estudiante en mayúsculas: ${estudianteMayus}
Estudiante en minúsculas: ${estudianteMinus}
Número de letras: ${numLetras}
Primera letra del nombre: ${primeraLetra}
Última letra del apellido: ${ultimaLetra}
Estudiante sin espacios: ${estudianteSinEspacios}
Validar nombre: ${validarNombre}
`);
