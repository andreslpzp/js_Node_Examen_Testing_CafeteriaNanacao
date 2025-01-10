Cafetería Nanacao - API REST y Tests con Jest y Supertest

Este proyecto consiste en una API REST para gestionar los cafés de la Cafetería Nanacao. La API permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre los cafés disponibles en la tienda. Además, se han creado pruebas automatizadas utilizando Jest y Supertest para verificar el correcto funcionamiento de las rutas y operaciones.

Descripción
La Cafetería Nanacao está abriendo una nueva sucursal en el centro de la ciudad. Para asegurar la calidad de su sistema de gestión, se han desarrollado pruebas para validar las funcionalidades principales de su API.

Requisitos
Node.js y npm instalados en tu máquina.
Los paquetes de Jest, Supertest y Express están instalados en el proyecto.
Paquetes utilizados:
Express: Framework para la creación de la API REST.
Jest: Framework de pruebas unitarias.
Supertest: Herramienta para realizar solicitudes HTTP y probar la API.
Instalación
Clona este repositorio:
bash
Copy code
git clone <url-del-repositorio>
Navega al directorio del proyecto:
bash
Copy code
cd nombre-del-proyecto
Instala las dependencias:
bash
Copy code
npm install
Inicia el servidor:
bash
Copy code
npm start
El servidor estará corriendo en el puerto 3000.

Rutas de la API
Las siguientes rutas están disponibles para realizar las operaciones CRUD sobre los cafés:

GET /cafes: Obtiene la lista de cafés.
POST /cafes: Crea un nuevo café.
PUT /cafes/:id: Actualiza un café existente.
DELETE /cafes/:id: Elimina un café.
Pruebas Automatizadas
Las pruebas para la API están definidas en el archivo server.spec.js. Para ejecutarlas, simplemente corre:

bash
Copy code
npx jest
Requerimientos de las pruebas
GET /cafes:

Verifica que la ruta GET /cafes devuelva un código de estado 200 y un arreglo con al menos un objeto.
DELETE /cafes/:id:

Verifica que se obtiene un código 404 al intentar eliminar un café con un ID que no existe.
POST /cafes:

Verifica que la ruta POST /cafes agrega un nuevo café y devuelve un código 201.
PUT /cafes/:id:

Verifica que la ruta PUT /cafes/:id devuelva un código 400 si el ID enviado en los parámetros no coincide con el ID dentro del cuerpo del payload.
Estructura del Proyecto
El proyecto tiene la siguiente estructura:

bash
Copy code
/Cafeteria-Nanacao
│
├── /node_modules             # Dependencias del proyecto
├── /tests                    # Archivos de prueba
│   └── server.spec.js        # Pruebas de la API REST
├── /cafes.json               # Datos simulados de los cafés
├── index.js                  # Archivo principal de la API
├── package.json              # Gestión de dependencias
└── README.md                 # Documentación del proyecto
Contribuciones
Las contribuciones a este proyecto son bienvenidas. Si deseas contribuir, por favor sigue estos pasos:

Haz un fork de este repositorio.
Crea una nueva rama (git checkout -b feature-nueva-funcionalidad).
Realiza tus cambios y haz commit (git commit -am 'Agregada nueva funcionalidad').
Haz push a la rama (git push origin feature-nueva-funcionalidad).
Abre un Pull Request.
Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.
