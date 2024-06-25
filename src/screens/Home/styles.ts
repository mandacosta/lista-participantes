import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      backgroundColor: '#131016',
      flex: 1,
      padding: 24
    },
    title: {
      color: '#fff',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop:20
    },
    subtitle:{
      color: '#6b6b6b',
      fontSize: 16,
    },
    input: {
        backgroundColor: '#1F1E25',
        height: 56,
        borderRadius: 5,
        padding: 16,
        fontSize: 16,
        color: '#fff',
        flex: 1,
        marginRight: 10
    },
    buttonText:{
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    button: {
        height: 56,
        width: 56,
        fontSize: 16,
        backgroundColor: '#31cf67',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 30,
        marginBottom: 40
    }
    
  })