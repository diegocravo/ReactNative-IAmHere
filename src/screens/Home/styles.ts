import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
      backgroundColor: '#131016',
      flex: 1,
      padding: 24
    },
    eventName: {
      color: '#FFF',
      fontSize: 24,
      marginTop: 48,
      fontWeight: "bold"
    },
    eventDate: {
      color: '#6b6b6b', 
      fontSize: 16
    },
    input: {
        height: 56, 
        flex: 1,
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        color: '#FFF',
        padding: 16,
        fontSize: 16,
        marginRight: 12,
    }, 
    buttonText: {
        color: '#fff',
        fontSize: 24
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#31cf67',
        alignItems: "center",
        justifyContent: "center"
    },
    form: {
        width: '100%',
        flexDirection: "row",
        marginTop: 36,
        marginBottom: 42
    },
    listEmptyText: {
      color: '#fff',
      fontSize: 14,
      textAlign: "center"
    }
  })