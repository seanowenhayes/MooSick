import { View, StyleSheet, } from 'react-native';
import { Link, Stack } from 'expo-router'

export default function NotFound() {
    return (
        <>
            <Stack.Screen options={{ title: 'Ooops not found' }} />
            <View style={styles.container}>
                <Link href="/" style={styles.button}>
                    Go back to Home screen
                </Link>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    button: {
        fontSize: 20,
        textDecorationLine: "underline",
        color: "#fff",
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#25292e",
    }
});