## JuegoGato

- Configuración del entorno: Se utilizó Vite, una herramienta de construcción y desarrollo rápida para aplicaciones web, para crear un nuevo proyecto de React con el siguiente comando: 
```
npm create vite@latest
```

- Diseño del tablero del juego: Se crearon componentes de React para representar el tablero del juego, que consta de 9 celdas en un arreglo de 3x3. Se utilizó el hook useState para mantener el estado del juego, como el estado del tablero, el jugador actual (X o O), y si el juego ha terminado o no.

- Gestión del estado del juego: Se utilizó el hook useState para actualizar y gestionar el estado del juego. Cuando un jugador hace clic en una celda del tablero, se actualiza el estado del tablero con la marca del jugador actual (X o O), y se verifica si alguien ha ganado o si el juego ha terminado en empate.

- Reutilización de componentes: Se crearon componentes de React reutilizables, como el componente de celda del tablero, que se utiliza para representar cada celda en el tablero del juego. Este componente se puede reutilizar en todo el tablero y se actualiza dinámicamente según el estado del juego.

- Almacenamiento en localStorage: Se utilizó el localStorage del navegador para almacenar el estado del juego, como el tablero, el jugador actual y si el juego ha terminado o no. Esto permite que el juego persista incluso si el usuario actualiza la página o cierra y vuelve a abrir el navegador.

- Gestión del turno del jugador: Se implementó la lógica para alternar el turno de los jugadores (X y O) en cada movimiento, utilizando el estado del juego y el hook useState. También se verificó si alguien ha ganado o si el juego ha terminado en empate después de cada movimiento.

- Lógica de final de juego: Se implementó la lógica para determinar si alguien ha ganado el juego, verificando todas las posibles combinaciones de tres celdas en línea (horizontal, vertical y diagonal) en el tablero. También se verificó si el juego ha terminado en empate cuando no hay más movimientos posibles.

- Estilos y presentación: Se aplicaron estilos CSS para darle una apariencia atractiva al juego del gato, incluyendo el diseño del tablero, las celdas y los mensajes de ganador o empate.

- En resumen, se desarrolló el juego del gato utilizando JavaScript, React, Vite y algunas características como useState, reutilización de componentes y localStorage. Se implementó la lógica del juego, la gestión del estado, la alternancia de turnos, la lógica de final de juego y los estilos para darle una apariencia atractiva. Además, se utilizó localStorage para almacenar el estado del juego y permitir que el juego persista en el navegador.

Link live demo https://elgato.netlify.app
