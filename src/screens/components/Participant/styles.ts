import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',   
        marginBottom: 10  
        

    },
    name: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        flex: 1,
        marginLeft: 16,
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
        backgroundColor: '#e23c44',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    
  })