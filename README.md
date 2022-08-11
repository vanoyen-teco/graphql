# Desafío: GraphQl
## Alumno: Juan Manuel Rodriguez Van Oyen

Desafío: GraphQl.

Crear un .env en base al .env_example 

Códigos de prueba: 


Crear un Producto:
```
mutation create {
  create(nombre: "Producto de Prueba", descripcion: "Detalle del producto", precio: 5000) {
    id
    nombre
    descripcion
    precio
  }
}
```

Consultar todos los productos: 
```
query getAll {
  getAll {
    id
    nombre
    descripcion
  }
}
```

Actualizar un producto:
```
mutation update {
  update(
    id: "62f56110d460c5b5db44d14d",
    nombre: "Producto v2",
    descripcion: "Producto editado",
    precio: 3500){
      id
      nombre
      descripcion
      precio
  }
}
```

Eliminar un producto:
```
mutation delete {
  delete(
    id: "62f56110d460c5b5db44d14d"
    ){
      id
      nombre
      descripcion
      precio
  }
}
```