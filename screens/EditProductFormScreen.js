import React, { useState, useEffect } from 'react';
import { View,  StyleSheet,Switch, } from 'react-native';
import { Button, TextInput, Text, Card } from 'react-native-paper';
import { updateTicket } from '../api';

const EditProductFormScreen = ({ navigation, route }) => {
  const { item } = route.params;
  const [product, setProduct] = useState(item);

  const handleActualizarFormulario = async () => {
    const res = await updateTicket(product, item.barcode);
    console.log(JSON.stringify(product));
    navigation.navigate('Tus Boletos Aqui');
  };

  const handleChange = (name, value) => {
    setProduct(prevState => ({
      ...prevState,
      [name]: value
    }));
  };



  return (

    
    <View style={styles.container}>
      <Card style={styles.card}> 

      <Card.Content> 
      


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
        right={<TextInput.Icon icon="cash" />}
        label="Precio"
        value={product.price !== 0 ? product.price.toString() : ''} 
        onChangeText={(text) => handleChange('price', text !== '' ? parseInt(text) : 0)}
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
       </Card.Content>
       <Card.Actions> 
      <Button icon="cash-register" mode="contained" onPress={handleActualizarFormulario} style={styles.button}> 
        Actualizar
      </Button>
      </Card.Actions> 
      </Card>
    </View>
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
    marginLeft: 10,
    marginRight: 10
   
  },
  button: {
    marginRight: 20
  },
});




export default EditProductFormScreen;
