import axios from "axios";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

const ApiComponent = () => {
  const [searchableBooks, setSearchableBooks] = useState([]);
  const [nonSearchableBooks, setNonSearchableBooks] = useState([]);

  useEffect(() => {
    axios
      .get('http://139.59.177.72/api/books?page=1')
      .then((response) => {
        const { data } = response.data;
        const searchable = data.filter((book) => book.bookType === 'UNICODE');
        const nonSearchable = data.filter((book) => book.bookType == 'PDF');
        setSearchableBooks(searchable);
        setNonSearchableBooks(nonSearchable);
      })
      .catch((error) => {
        console.error('API Error:', error);
      });
       
  }, []);
  return data = [searchableBooks, nonSearchableBooks] ;
};

export default ApiComponent;