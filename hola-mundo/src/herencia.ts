/**
 * * Herencia
 */

/**
 * Producto
 * - name
 * - desc
 * - created_at
 * - created_by
 * - stock
 * - sku
 * 
 * Categoría
 * - name
 * - desc
 * - created_at
 * - created_by
 */

// Clase abstracta, no es necesario hacer objetos de instancia DatosBasicos
abstract class DatosBasicos 
{
    constructor(
        public name: string,
        public desc: string,
        protected created_at: Date,
        protected created_by: number,
    ) {}

    get fullYear()
    {
        return this.created_at.getFullYear()
    }

    get fullDesc(): string
    {
        return `${this.name} ${this.desc}`
    }

    // Métodos abstractos, es necesario implementarlos en las clases que hereden de esta clase
    abstract store(): void
}

class Producto extends DatosBasicos
{
    constructor(
        name: string,
        desc: string,
        created_at: Date,
        created_by: number,
        public stock: number, 
        public sku: number,
    )
    {
        super(name, desc, created_at, created_by)
    }

    // Override methods
    override get fullDesc(): string 
    {
        return `Producto: ${super.fullDesc}`    
    }

    override store(): void {
        console.log('Guardando producto')
    }
}

class Categoria extends DatosBasicos
{
    public productos: Producto[] = []
    constructor(
        name: string,
        desc: string,
        created_at: Date,
        created_by: number,
    )
    {
        super(name, desc, created_at, created_by)
    }

    agregarProducto(producto: Producto)
    {
        this.productos.push(producto)
    }

    // Override methods
    override get fullDesc(): string 
    {
        return `Categoría: ${super.fullDesc}`    
    }

    override store(): void {
        console.log('Guardando categoría')
    }
}

let producto1 = new Producto(
    'IPhone', 
    'Este es un smarthphone',
    new Date(),
    1,
    1,
    1
)

let categoria1 = new Categoria(
    'Tecnología',
    'Categoría de tecnología',
    new Date(),
    1
)

// let datosBasicos = new DatosBasicos()

categoria1.agregarProducto(producto1)

console.log(producto1, categoria1)
console.log(producto1.fullDesc, categoria1.fullDesc)
