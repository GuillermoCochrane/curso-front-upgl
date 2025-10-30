El secreto para que el modal funcione es el botón que lo abrre tiene que tener  el atributo: 

    data-bs-toggle="modal"

y un elemento con el atributo:

    data-bs-target="#idDelModal"

Donde en data-bs-target va el id del modal que queres abrir.

En este caso el botón es:

<button class="btn btn-outline-primary px-4" data-bs-toggle="modal" data-bs-target="#modalEmpresa"></button>

con el data-bs-target: "#modalEmpresa"

El modal que abre es:

<div class="modal fade modal-empresa" id="modalEmpresa" tabindex="-1">

con el id: "modalEmpresa"