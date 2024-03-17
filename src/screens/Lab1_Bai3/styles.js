import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        alignItems: "center",
      },
      inputContainer: {
        marginBottom: 20,
        width: "80%",
      },
      inputTitle: {
        marginBottom: 5,
        color: "#000",
        fontWeight: "bold",
      },
      textInputContainer: {
        flexDirection: "row",
        alignItems: "center",
        height: 40,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        paddingHorizontal: 10,
      },
      validTextInputContainer: {
        borderColor: "lightgreen",
      },
      errorTextInputContainer: {
        borderColor: "red",
      },
      textInput: {
        flex: 1,
        color: "#000",
        backgroundColor: "#fff",
        paddingHorizontal: 10,
      },
      errorText: {
        color: "red",
        marginTop: 5,
      },
      submitButton: {
        backgroundColor: "blue",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
      },
      submitButtonText: {
        color: "#fff",
        fontWeight: "bold",
      },
});