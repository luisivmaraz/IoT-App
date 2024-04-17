import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Button, TextInput, Text, Card } from 'react-native-paper';
import { insertTicket } from '../api';

const ProductFormScreen = ({ navigation }) => {
  const [product, setProduct] = useState({
    barcode: "",
    origen: "",
    destino: "",
    price: 0,
    exit: "",
    line: "",
    seat: 0,
  });

  const handleChange = (name, value) => setProduct({ ...product, [name]: value });

  const handleEnviarFormulario = async () => {
    const res = await insertTicket(product);
    console.log(JSON.stringify(product));
    navigation.navigate('Tus Boletos Aqui');
  };

  return (
    <ScrollView style={styles.container} >
      

        <Card style={styles.card} > 
      <View style={styles.inputContainer}>
      
      <TextInput
        right={<TextInput.Icon icon="ticket-confirmation" />}
        label="Boleto"
        value={product.barcode}
        onChangeText={(text) => handleChange('barcode', text)}
      />
      </View>

      <View style={styles.inputContainer}>
      <TextInput
        right={<TextInput.Icon icon="bus-stop" />}
        label="Origen" 
        value={product.origen}
        onChangeText={(text) => handleChange('origen', text)}
        
      />
      </View>

      <View style={styles.inputContainer}>
      <TextInput
        right={<TextInput.Icon icon="bus-marker" />}
        label="Destino"
        value={product.destino}
        onChangeText={(text) => handleChange('destino', text)}
      /></View>

      <View style={styles.inputContainer}> 
      <TextInput
      right={<TextInput.Icon icon="bus-clock" />}
        label="Salida"
        value={product.exit}
        onChangeText={(text) => handleChange('exit', text)}
      /></View>

      <View style={styles.inputContainer}>
      <TextInput
      right={<TextInput.Icon icon="bus-side" />}
        label="Linea"
        value={product.line}
        onChangeText={(text) => handleChange('line', text)}
      /></View>

      <View style={styles.inputContainer}>
      <TextInput
       right={<TextInput.Icon icon="car-seat" />}
        label="Asiento"
        value={product.seat !== 0 ? product.seat.toString() : ''} 
        onChangeText={(text) => handleChange('seat', text !== '' ? parseInt(text) : 0)}
      /></View>


      <View style={styles.inputContainer}> 
      <TextInput
        right={<TextInput.Icon icon="cash" />}
        label="Precio"
        value={product.price !== 0 ? product.price.toString() : ''} 
        onChangeText={(text) => handleChange('price', text !== '' ? parseInt(text) : 0)}
      /></View>

      <Button icon="cash-register" mode="contained" onPress={handleEnviarFormulario} style={styles.button}> 
        Comprar
      </Button>
      </Card>
    </ScrollView >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F2E9FC',
  },
  inputContainer: {
    marginBottom: 16,
    marginLeft: 20,
    marginRight: 20
   
  },
  button: {
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  card: {
    marginBottom: 20,
    marginLeft: 20, 
    marginRight: 20,
    marginTop: 15, // Espacio entre cada tarjeta paranno juntar todas
    
  },
  inputContainer: {
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10
   
  }
});

export default ProductFormScreen;
