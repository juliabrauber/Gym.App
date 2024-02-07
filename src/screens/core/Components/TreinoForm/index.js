import React, { useState } from 'react';
import {Modal, View } from 'react-native';
import { Button, Input, Text } from '@rneui/themed';
import RNPickerSelect from 'react-native-picker-select';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import DateTimePicker from '@react-native-community/datetimepicker';
import { AntDesign } from '@expo/vector-icons';

const TreinoForm = ({ navigation }) => {
  const [diaSemana, setDiaSemana] = useState('');
  const [aparelho, setAparelho] = useState('');
  const [serie, setSerie] = useState('1');
  const [repeticoes, setRepeticoes] = useState('1');
  const [tempoCardio, setTempoCardio] = useState('5');
  const [treinos, setTreinos] = useState([]);
  const [editandoIndex, setEditandoIndex] = useState(null);

  const diasSemana = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'];
  const aparelhosMusculacao = ['Supino', 'Leg Press', 'Agachamento', 'Remada', 'Puxada Alta', 'Rosca Direta', 'Tríceps Pulley', 'Elevação Lateral', 'Desenvolvimento'];
  const aparelhosCardio = ['Esteira', 'Bicicleta Ergométrica', 'Elíptico', 'Transport', 'Remo'];

  const adicionarTreino = () => {
    if (editandoIndex !== null) {
      const novosTreinos = [...treinos];
      novosTreinos[editandoIndex] = { diaSemana, aparelho, serie, repeticoes, tempoCardio };
      setTreinos(novosTreinos);
      setEditandoIndex(null);
    } else {
      setTreinos([...treinos, { diaSemana, aparelho, serie, repeticoes, tempoCardio }]);
    }
    resetForm();
  };

  const editarTreino = (index) => {
    const treino = treinos[index];
    setDiaSemana(treino.diaSemana);
    setAparelho(treino.aparelho);
    setSerie(treino.serie);
    setRepeticoes(treino.repeticoes);
    setTempoCardio(treino.tempoCardio);
    setEditandoIndex(index);
  };

  const salvarTreinoEditado = () => {
    adicionarTreino();
    setEditandoIndex(null);
  };

  const removerTreino = (index) => {
    const novosTreinos = [...treinos];
    novosTreinos.splice(index, 1);
    setTreinos(novosTreinos);
  };

  const resetForm = () => {
    setDiaSemana('');
    setAparelho('');
    setSerie('1');
    setRepeticoes('1');
    setTempoCardio('5');
  };

  const [mensagemSucesso, setMensagemSucesso] = useState(false);
  const salvarTreino = () => {
    console.log('Treinos salvos:', treinos);
    setMensagemSucesso(true);
  };

  const [showHourPicker, setShowHourPicker] = useState(false);
  const [showMinutePicker, setShowMinutePicker] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedHour, setSelectedHour] = useState(null);
  const [selectedMinute, setSelectedMinute] = useState(null);

  const handleTimeChange = (event, selectedDate) => {
    setShowHourPicker(false);
    setShowMinutePicker(false);
    if (selectedDate) {
      const hour = selectedDate.getHours();
      const minute = selectedDate.getMinutes();
      setSelectedTime(selectedDate);
      setSelectedHour(hour);
      setSelectedMinute(minute);
    }
  };

  const handleHourSelection = () => {
    setShowHourPicker(true);
  };

  const handleMinuteSelection = () => {
    setShowMinutePicker(true);
  };


  return (
    <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 20, paddingTop: 40 }}>
      <Button
          onPress={() => { navigation.navigate("Home"); }}
          containerStyle={{ width: '50%', marginTop: 10, paddingBottom:2, alignItems:'flex-start' }}
          buttonStyle={{ borderColor: 'transparent', borderRadius: 30, backgroundColor: "#1CA69E" }}
          icon={<AntDesign name="arrowleft" size={20} color="white" />}
          type="outline"
        />
      <Text style={{ fontSize: 23, textAlign: 'center', paddingBottom: 10, fontWeight: 'bold' }}>Cadastro de treino</Text>
      <Text style={{ fontSize: 18, textAlign: 'center', paddingBottom: 10, fontWeight: 'bold' }}>Aluno:</Text>

      <Text style={{ fontSize: 18, paddingTop:20, }}>Horário do treino:</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Button title="Hora" onPress={handleHourSelection} containerStyle={{ marginTop: 5}} buttonStyle={{ borderColor: 'transparent', borderRadius: 5, backgroundColor: "#1CA69E"}}titleStyle={{ color: '#ffffff', fontSize:15 }} />
        <Text>{selectedHour !== null ? `Hora: ${selectedHour}` : 'Nenhuma hora selecionada'}</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Button title="Minuto" onPress={handleMinuteSelection} containerStyle={{ marginTop: 5}} buttonStyle={{ borderColor: 'transparent', borderRadius: 5, backgroundColor: "#1CA69E"}}titleStyle={{ color: '#ffffff', fontSize:15 }}/>
        <Text>{selectedMinute !== null ? `Minuto: ${selectedMinute}` : 'Nenhum minuto selecionado'}</Text>
      </View>

      {showHourPicker && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={showHourPicker}
        >
          <View style={{ flex: 1, justifyContent: 'flex-end' }}>
            <View style={{ backgroundColor: '#7FD9D2', padding: 20 }}>
              <DateTimePicker
                value={selectedTime || new Date()}
                mode="time"
                is24Hour={true}
                display="default"
                onChange={handleTimeChange}
              />
            </View>
          </View>
        </Modal>
      )}

      {showMinutePicker && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={showMinutePicker}
        >
          <View style={{ flex: 1, justifyContent: 'flex-end' }}>
            <View style={{ backgroundColor: '#7FD9D2', padding: 30 }}>
              <DateTimePicker
                value={selectedTime || new Date()}
                mode="time"
                is24Hour={true}
                display="default"
                onChange={handleTimeChange}
                minuteInterval={1}
              />
            </View>
          </View>
        </Modal>
      )}

      <Text style={{ paddingTop: 20, fontSize:18 }}>Dia da Semana:</Text>
      <RNPickerSelect
        placeholder={{ label: 'Selecione o dia da semana', value: null }}
        items={diasSemana.map((dia, index) => ({ label: dia, value: dia }))}
        onValueChange={(value) => setDiaSemana(value)}
        value={diaSemana}
      />
      <Text style={{ paddingTop: 3, fontSize:18 }}>Aparelho:</Text>
      <RNPickerSelect
        placeholder={{ label: 'Selecione o aparelho', value: null }}
        items={[
          { label: '--- Aparelhos de Musculação ---', value: null, disabled: true },
          ...aparelhosMusculacao.map((aparelho, index) => ({ label: aparelho, value: aparelho })),
          { label: '--- Aparelhos de Cardio ---', value: null, disabled: true },
          ...aparelhosCardio.map((aparelho, index) => ({ label: aparelho, value: aparelho })),
        ]}
        onValueChange={(value) => setAparelho(value)}
        value={aparelho}
      />
      {aparelhosCardio.includes(aparelho) && (
        <>
          <Text style={{ paddingTop: 3, fontSize:18 }}>Tempo (minutos):</Text>
          <RNPickerSelect
            placeholder={{ label: 'Selecione o tempo', value: null }}
            items={[5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60].map((minutos, index) => ({ label: `${minutos} min`, value: `${minutos}` }))}
            onValueChange={(value) => setTempoCardio(value)}
            value={tempoCardio}
          />
        </>
      )}
      <Text style={{ paddingTop: 3, fontSize:18 }}>Série:</Text>
      <RNPickerSelect
        placeholder={{ label: 'Selecione a série', value: null }}
        items={[...Array(10)].map((_, index) => ({ label: `${index + 1}`, value: `${index + 1}` }))}
        onValueChange={(value) => setSerie(value)}
        value={serie}
      />
      <Text style={{ paddingTop: 3, fontSize:18 }}>Repetições:</Text>
      <RNPickerSelect
        placeholder={{ label: 'Selecione o número de repetições', value: null }}
        items={[...Array(50)].map((_, index) => ({ label: `${index + 1}`, value: `${index + 1}` }))}
        onValueChange={(value) => setRepeticoes(value)}
        value={repeticoes}
      />
      {editandoIndex !== null ? (
        <Button title="Salvar Treino Editado" onPress={salvarTreinoEditado} buttonStyle={{ borderColor: 'transparent', borderRadius: 5, backgroundColor: "#1CA69E", height:35, }} containerStyle={{ marginTop: 20, width: '50%', paddingVertical: 20 }} titleStyle={{ color: '#ffffff', fontSize:17,  textAlign:'center' }}/>
      ) : (
        <Button title="Adicionar Treino" onPress={adicionarTreino} buttonStyle={{ borderColor: 'transparent', borderRadius: 5, backgroundColor: "#1CA69E", height:35, }} containerStyle={{ marginTop: 20, width: '50%', paddingVertical: 20 }} titleStyle={{ color: '#ffffff', fontSize:17,  textAlign:'center' }} />
      )}

      {treinos.map((treino, index) => (
        <View key={index} style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View>
            <Text style={{ fontSize: 15 }}>Dia da Semana: {treino.diaSemana}</Text>
            <Text style={{ fontSize: 15 }}>Aparelho: {treino.aparelho}</Text>
            {aparelhosCardio.includes(treino.aparelho) && (
              <Text style={{ fontSize: 15 }}>Tempo: {treino.tempoCardio} min</Text>
            )}
            <Text style={{ fontSize: 15 }}>Série: {treino.serie}</Text>
            <Text style={{ fontSize: 15 }}>Repetições: {treino.repeticoes}</Text>
          </View>
          <View style={{ flexDirection: 'row', marginLeft: 5 }}>
            <Button title="Editar" onPress={() => editarTreino(index)} containerStyle={{ marginRight: 5}} buttonStyle={{ borderColor: 'transparent', borderRadius: 5, backgroundColor: "#1CA69E"}}titleStyle={{ color: '#ffffff', fontSize:15 }} />
            <Button title="Remover" onPress={() => removerTreino(index)} containerStyle={{ marginRight: 5}} buttonStyle={{ borderColor: 'transparent', borderRadius: 5, backgroundColor: "#1CA69E"}}titleStyle={{ color: '#ffffff', fontSize:15 }} />
          </View>
        </View>
      ))}
      <View style={{ paddingTop: 40, alignItems:'center' }}>
        <Input
          containerStyle={{ width: '100%' }}
          style={{ color: 'black', fontSize: 15 }}
          placeholder='Observação para realização de treino'
          onChangeText={(text) => console.log(text)}
          maxLength={1000}
          multiline
          numberOfLines={8}
        />
        <Button onPress={() => { salvarTreino(); setTimeout(() => setMensagemSucesso(false), 2000); }}
          containerStyle={{ width: '70%', marginTop: 15, paddingBottom:20 }}
          buttonStyle={{ borderColor: 'transparent', borderRadius: 30, backgroundColor: "#1CA69E" }}
          titleStyle={{ color: '#ffffff' }}
          title="Salvar treino"
          type="outline"
        />
        {mensagemSucesso && (
        <Text style={{ fontSize: 17, color: 'green', textAlign: 'center', marginTop: 5, marginBottom:15 }}>
          Treino salvo com sucesso!
        </Text>
         )}

      </View>
    </KeyboardAwareScrollView>
  );
};

export default TreinoForm;
