import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors';

const ProductListItem = ({product}) => {
    return (<View style={styles.container}>
     <Image
         source={{ uri: product.image }}
         style={styles.image}
         resizeMode="contain"
       />
       <Text style={styles.title}>{product.name}</Text>
       <Text style={styles.price}>$ {product.price}</Text>
     </View>)}

export default ProductListItem

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    overflow: 'hidden',
},

  image: {
    width: '50%',
    aspectRatio: 1,
    alignSelf: 'center',
  },
  title: {
    fontWeight: '600',
    fontSize: 18,
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: 'bold',
    marginTop: 'auto',
  },
});



