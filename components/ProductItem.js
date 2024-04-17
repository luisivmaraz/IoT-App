import { View,StyleSheet,TouchableOpacity} from 'react-native'
import { Avatar, Button, Card } from 'react-native-paper';
import React from 'react'



const LeftContent = props => <Avatar.Icon {...props} icon="bus-side" />
const ProductItem = ({item,deleteProd,navigation}) => {
 
  return (
    <Card style={styles.card}>

    <Card.Title title= {`Linea: ${item.line}`} subtitle={`Boleto: ${item.barcode}`} left={LeftContent} />

    <Card.Content>
  <View style={styles.buttonsContainer}>
    <Button icon="bus-stop">Origen: {item.origen}</Button>
    <Button icon="bus-marker">Destino: {item.destino}</Button>
    <Button icon="bus-clock">Salida: {item.exit}</Button>
    <Button icon="car-seat">Asiento: {item.seat}</Button>
    <Button icon="cash">Costo: $ {item.price}.00</Button>
  </View>
</Card.Content>
    <Card.Actions>
      <Button  icon="note-edit-outline"  mode="contained-tonal" onPress={() => {navigation.navigate('Editar',{item:item})}}>Actualizar</Button>
      <Button icon="delete" onPress={()=> deleteProd(item.barcode)}>Eliminar</Button>
    </Card.Actions>


  </Card>
  )
}


const styles = StyleSheet.create({ 
    buttonsContainer: {
      flexDirection: 'column', // alineado de todos los datos en vertical
      alignItems: 'flex-start', // alineado de todos lod elementos a la izquierda
    },
    card: {
      marginBottom: 20, // Espacio entre cada tarjeta paranno juntar todas
    },
 

  });
export default ProductItem
