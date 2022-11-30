import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from "./styles";

import { Participant } from "../../components/Participant";

export default function Home() {
  
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');  
  
  function handleParticipantAdd() {
        if(participants.includes(participantName)) {
          return Alert.alert("Participante Existe", "Já existe um participante com este nome.")
        }

        setParticipants(prevState => [...prevState, participantName])
        setParticipantName('')
    }

    function handleParticipantRemove(name: string) {
      Alert.alert("Remover", "Deseja remover o participante " + name + "?", [
        {
          text: 'não',
          style: "cancel"
        },
        {
          text: 'sim',
          onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
        }, 
      ])
    }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>4 de novembro</Text>
      <View style={styles.form}>
        <TextInput 
            style={styles.input} 
            placeholder="Nome Do Participante"
            placeholderTextColor="#6b6b6b"
            onChangeText={text => setParticipantName(text)}
            value={participantName}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
            <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <Participant 
            key={item} 
            name={item} 
            onRemove={() => handleParticipantRemove(item)} 
          />          
        )}
        ListEmptyComponent={() => (
          <>
          <Text style={styles.listEmptyText}>Ninguém chegou no evento ainda?</Text>
          <Text style={styles.listEmptyText}>Adicione participantes a sua lista de presença.</Text>
          </>
        )}
      />

      {/* <ScrollView showsVerticalScrollIndicator={false}>
        {
          participants.map( participant => (
            <Participant 
              key={participant} 
              name={participant} 
              onRemove={() => handleParticipantRemove(participant)} 
            /> 
          ))
        }
      </ScrollView> */}
    </View>
  )
}