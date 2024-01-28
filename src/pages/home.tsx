import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {Ref, createRef, useEffect, useRef, useState} from 'react';
import words from '@/assets/dizi.json';
import {ProfileProps, RootStackParamList} from '@/types/navigations';

const Home = ({navigation}: ProfileProps) => {
  const [kelime, setkelime] = useState<String>('');

  const screenWidth = Dimensions.get('window').width - 40;
  const numColumns = 5;
  const gap = 5;

  const availableSpace = screenWidth - (numColumns - 1) * gap;
  const itemSize = availableSpace / numColumns;

  const wordRandom = () => {
    const random = Math.floor(Math.random() * words.length);

    setTimeout(() => {
      setTimeout(() => {
        setkelime(words[random].slice(0, 1));
        setTimeout(() => {
          setkelime(words[random].slice(0, 2));
          setTimeout(() => {
            setkelime(words[random].slice(0, 3));
            setTimeout(() => {
              setkelime(words[random].slice(0, 4));
              setTimeout(() => {
                setkelime(words[random].slice(0, 5));
                setTimeout(() => {
                  wordRandom();
                }, 500);
              }, 500);
            }, 500);
          }, 500);
        }, 500);
      }, 500);
    }, 1500);
  };

  useEffect(() => {
    wordRandom();
  }, []);

  const renderItem = ({item}: any) => {
    return (
      <View
        className={`rounded-xl  items-center justify-center ${
          kelime[item.id] ? 'bg-green-500' : 'bg-[#A3A3AE]'
        }`}
        style={{
          height: itemSize,
          width: itemSize,
        }}>
        <Text className="text-4xl">{kelime[item.id]}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView className="flex flex-1 bg-white dark:bg-[#1D1F25] justify-center ">
      <View className="items-center justify-center bg-blue-500">
        <Text className="text-2xl">Rastgele Kelime bulma</Text>
        <View className="h-24 items-center justify-center">
          <Text>5 Harfli kelimeyi tahmin etme oyununa hoşgeldiniz.</Text>
        </View>
        <View className="mb-4">
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Game');
            }}>
            <Text>Başla</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="mt-5 items-center">
        <FlatList
          renderItem={renderItem}
          data={[{id: 0}, {id: 1}, {id: 2}, {id: 3}, {id: 4}]}
          numColumns={numColumns}
          contentContainerStyle={{gap}}
          columnWrapperStyle={{gap}}
          key={numColumns}
        />
        {/* {kelime.split('').map((item, i) => {
          return <View className="h-2 w-2 bg-green-500"></View>;
        })} */}
      </View>
    </SafeAreaView>
  );
};

export default Home;
