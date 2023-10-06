# 3DAMNA - PGL > UT3 > Counter App

Esta es una aplicación de contador simple desarrollada en Expo. La aplicación muestra un contador y permite al usuario aumentar o disminuir el valor del contador haciendo clic en botones.

## Características

- Muestra un contador en pantalla.
- Permite al usuario aumentar o disminuir el contador haciendo clic en botones.
- La aplicación no utiliza un manejo de estados avanzado, es una versión básica para principiantes.

## Interacción y Componentes

La aplicación utiliza algunos conceptos clave de interacción y componentes en React Native:

- Utiliza botones (`FAB`) de [react-native-elements](https://reactnativeelements.com/) para permitir al usuario interactuar con la aplicación y modificar el contador.
- Los componentes de texto (`Text`) se utilizan para mostrar el valor actual del contador en la pantalla.

Para obtener más información sobre cómo agregar interactividad a las aplicaciones de React Native y aprender sobre los componentes disponibles, consulta la [documentación oficial de react-native-elements](https://reactnativeelements.com/docs/3.4.2/fab).

## Navegación por Pestañas

Si deseas explorar la navegación por pestañas en Expo, puedes consultar la documentación de [Tabs de Expo Router](https://docs.expo.dev/router/advanced/tabs/).

## Ejemplo de Uso

```javascript
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>{count}</Text>
      <Button
        title="Increment"
        onPress={incrementCount}
        buttonStyle={styles.button}
      />
      <Button
        title="Decrement"
        onPress={decrementCount}
        buttonStyle={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue', // Puedes personalizar el color del botón aquí
    width: 150,
  },
});

export default CounterApp;
