import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const DetailScreen = ({ route }) => {
  const { book } = route.params;

  return (
    <View style = {styles.main}>
      
      <Image source={{uri: 'http://139.59.177.72/' + book.coverPhotoUri}} style = {styles.image}/>
      <Text style = {styles.title}>Title: {book.title}</Text>
      <Text>Author: {book.author.name}</Text>
      <Text>Chapters: {book.chapters}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    main:{
        flex: 1,
        alignItems: 'center',
        marginTop: 50,
        padding: 10
    },
    image:{
        width: 200,
        height: 300
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})

export default DetailScreen;