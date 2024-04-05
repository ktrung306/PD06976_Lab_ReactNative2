// file PokemonScreen.tsx
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useGetPokemonByNameQuery, useLazyGetPokemonByNameQuery } from './pokemon';

const PokemonScreen = () => {
  const [pokemonName, setPokemonName] = useState('');
  const { data, error, isLoading } = useGetPokemonByNameQuery(pokemonName);
  const [getPokemonByName] = useLazyGetPokemonByNameQuery();

  const handleSearch = () => {
    if (pokemonName) {
      getPokemonByName(pokemonName);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={pokemonName}
        onChangeText={setPokemonName}
        placeholder="Enter Pokemon Name"
      />
      <Button title="Search" onPress={handleSearch} />
      {isLoading && <Text>Loading...</Text>}
      {data && (
        <View>
          <Text>Name: {data.name}</Text>
          <Text>Height: {data.height}</Text>
          <Text>Weight: {data.weight}</Text>
        </View>
      )}
      {error && <Text></Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});

export default PokemonScreen;
