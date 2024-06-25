import { Text, View, TextInput, TouchableOpacity, FlatList, Alert} from 'react-native';
import { styles } from './styles';
import Participant from '../components/Participant';
import { useState } from 'react';

export default function Home() {
    const [inputValue, setInputValue] = useState('');
    const [participants, setParticipants] = useState<string[]>([])

    function handleParticipantAdd(){
        if(participants.includes(inputValue)){
            return Alert.alert('Já existe', 'Este participante já existe na lista de presença')
        }
        setParticipants(prevState => [inputValue, ...prevState])
        setInputValue('');
    }

    function handleParticipantRemove(index: number){
        Alert.alert('Excluir participante', `Confirma a exclusão do participante ${participants[index]} ?`, [
            {
                text: 'Sim',
                onPress: () => {
                    setParticipants((prevState) => prevState.filter((parti, i) => i !== index))
                }
            },
            {
                text: 'Não',
                style: 'destructive'
            }
    
        ])

    }
    // Para referências futuras
    const handleInputChange = (text: string) => {
        setInputValue(text);
    };
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Evento</Text>
        <Text style={styles.subtitle}>Terça, 25 de Junho de 2024</Text>

        <View style={styles.form}>
            <TextInput 
            value={inputValue}
            onChangeText={setInputValue}
            placeholder='Nome do participante'
            placeholderTextColor='#6b6b6b'
            keyboardType='default'
            style={styles.input}/>

            <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                <Text style={styles.buttonText}>
                    +
                </Text>
            </TouchableOpacity>
        </View>

    
        <FlatList 
        data={participants}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({item, index}) => (
            <Participant name={item} onRemove={() => handleParticipantRemove(index)} key={index}/>
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
            <Text style={styles.subtitle}>Ninguém foi adicionado</Text>
        )}
        />        



    </View>
  );
}