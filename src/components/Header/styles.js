import { StyleSheet } from "react-native";

export const styles = StyleSheet.create ({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 15,
      paddingVertical: 10,
    },
    containerCenter: {
      flex: 1,
      alignItems: 'center',
      marginLeft: 20, 
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#000000'
    },
   
    avata: {
        width: 40,
        height: 40
    }
  });