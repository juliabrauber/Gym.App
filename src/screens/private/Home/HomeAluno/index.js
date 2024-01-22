import React, { useState } from 'react'
import { SearchBar, Text } from '@rneui/themed';
import { View } from 'react-native';

import styles from './style';

const HomeAluno = () => { 


const [search, setSearch] = useState("");

const updateSearch = (search) => {
  setSearch(search);
};

return (
  <View style={{ flex: 1 }}>
    
        <View style={styles.olaTexto}>
          <Text style={styles.textOla}>Olá,</Text>
        </View>
        <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold', marginTop: 33, marginLeft: 20, marginBottom: 15 }}> Meu espaço </Text>

        <SearchBar
          placeholder="Pesquisar..."
          onChangeText={updateSearch}
          value={search}
          containerStyle={{
            backgroundColor: 'transparent', borderBottomColor: 'transparent', borderTopColor: 'transparent', borderWidth: 0, borderRadius: 15, marginLeft: 15
          }}
          inputContainerStyle={{ backgroundColor: '#e0e0e0', borderRadius: 15, height: 8, width: 320 }}
          inputStyle={{ color: 'black' }}
        />

        <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold', marginTop: 40, marginLeft: 20, }}> Sugestões </Text>

        <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold', marginTop: 40, marginLeft: 20, }}> Próximos a mim </Text>

        <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold', marginTop: 40, marginLeft: 20, }}> Minha evolução </Text>
  </View>
);
};

export default HomeAluno;