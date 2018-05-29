# Pizza Delivery CLI
## ¿Qué debes hacer?
1. Clona este repositorio `git clone https://github.com/CodeRoomMX/pizza-delivery.git`

2. En la terminal ve a la carpeta clonada, y usando el comando `npm install`, instala las bibliotecas de código necesarias:
  * [**mongoose**](https://www.npmjs.com/package/mongoose)
  * [**commander**](https://www.npmjs.com/package/commander)
  * [**colors**](https://www.npmjs.com/package/colors)

3. Antes de comenzar asegúrate de iniciar tu motor de base de datos de MongoDB ejecutando en una nueva ventana de terminal `mongod`.

4. Hay algo de código predefinido que en sesiones futuras podrás ver a detalle, por el momento lo único que necesitas tomar en consideración es que usarás dos métodos de `mongoose`: `Pizza.create()` para insertar una pizza en la base de datos y `Pizza.find().then(function(pizzas){})` para obtener la lista de pizzas guardadas en la base de datos.

5. Basado en la documentación de commander, debes lograr que el comando `order` guarde la pizza en la base de datos con los datos sabor(flavour), tamaño(size) y si se va a pagar en efectivo(--cash) o llevar a domicilio(--delivery).

6. Una vez que has insertado pizzas, debes crear otro comando `list` ue muestre las pizzas que se han ordenado hasta el momento.

**En este reto cuenta mucho el como se ve la información reflejada(usando colores o estilos de texto) y que tan fácil es entender la lista mostrada.**

## Bonus!!!
Si ya terminaste y deseas un bonus, agrega al comando `list` la opción `--date`(para ordenar las pizzas por fecha en orden ascendente) y el argumento `<size>`que nos permita filtrar las pizzas por tamaño.