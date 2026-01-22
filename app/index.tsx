import { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Intro() {
  const router = useRouter();

  useEffect(() => {
    const t = setTimeout(() => {
      router.replace('/(tabs)');
    }, 10000);
    return () => clearTimeout(t);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MY APP</Text>
      <Text>Vui lòng đợi 1 xíu ạ...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 28, fontWeight: 'bold' },
});
