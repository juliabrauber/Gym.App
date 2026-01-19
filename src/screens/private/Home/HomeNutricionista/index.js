import React, { useState } from 'react'
import { Button, SearchBar, Text } from '@rneui/themed';
import { View } from 'react-native';
import { Avatar, Box, FlatList, Pressable } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import styles from './style';
import Storys from '../../../core/Components/Storys';
import TreinoAluno from '../../../core/Components/treinoAluno';


const HomeNutricionista = () => { 
  const data = [{
    id:'1',
    fullName:'Steve',
    timeStamp:'12:00 PM',
    recentText:'Good Day',
    avatarUrl:'https://sujeitoprogramador.com/steve.png',
  },{
    id:'2',
    fullName:'Jobs',
    timeStamp:'12:05 PM',
    recentText:'Good',
    avatarUrl:'https://sujeitoprogramador.com/steve.png',
  },
  ]
  
  const [search, setSearch] = useState("");
  
  const updateSearch = (search) => {
    setSearch(search);
  };
  
  return (
    <KeyboardAwareScrollView>
        <View style={{ flex: 1 }}>
  
          <View style={styles.container}>
            <View style={styles.olaTexto}>
            <Text style={styles.textOla}>Olá,</Text>
                <Pressable style={styles.avatarContainer}>
                <Avatar
                  source={{ uri: "https://sujeitoprogramador.com/steve.png" }}
                  height={12}
                  width={12}/>
              </Pressable>
              </View>
          </View>
  
            <Box paddingX={4}  marginTop={5} marginBottom={5}>
              <FlatList
              horizontal={true}
              data={data}
              renderItem={({ item}) => <Storys data={item}/>}
              showsHorizontalScrollIndicator={false} />
            </Box>
  
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
  
          <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold', marginTop: 40, marginLeft: 20, }}> Realizar novas avaliações </Text>
  
          <Box paddingX={4}  marginTop={2}>
              <FlatList
              horizontal={true}
              data={data}
              renderItem={({ item}) => <TreinoAluno data={item}/>}
              showsHorizontalScrollIndicator={false}
              />
            </Box>
  
          <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold', marginTop: 20, marginLeft: 20, }}> Próximos clientes </Text>
          
          <Box paddingX={4}  marginTop={2}>
              <FlatList
              horizontal={true}
              data={data}
              renderItem={({ item}) => <TreinoAluno data={item}/>}
              showsHorizontalScrollIndicator={false}
              />
            </Box>
          
  
          <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold', marginTop: 40, marginLeft: 20, }}> Dados Gerais </Text>

          <View style={{  marginTop: 40, marginLeft: 20, flexDirection:'row' }}>
          <Button 
       containerStyle={{width:"40%", marginTop:5, marginLeft: 20, paddingBottom: 20}}
        buttonStyle={{ borderColor:'transparent',  borderRadius: 15, backgroundColor:"#1CA69E"  }}
        titleStyle={{ color: "#ffffff", fontSize:15 }}
        title="Financeiro" 
        type="outline" />

        <Button 
       containerStyle={{width:"40%", marginTop:5, marginLeft: 20, paddingBottom: 20}}
        buttonStyle={{ borderColor:'transparent',  borderRadius: 15, backgroundColor:"#1CA69E"  }}
        titleStyle={{ color: "#ffffff", fontSize:15 }}
        title="Alunos" 
        type="outline" />
          </View>
  
       </View>
    </KeyboardAwareScrollView>
  );
  };
export default HomeNutricionista;