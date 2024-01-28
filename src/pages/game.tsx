import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TextInputComponent,
  TextInputProps,
  TouchableOpacity,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {createRef, useEffect, useRef, useState} from 'react';
import allWords from '@/assets/dizi.json';

const Game = () => {
  const [word, setword] = useState<string>('');
  const [words, setwords] = useState<string[]>([]);
  const [answerCount, setanswerCount] = useState(0);

  const [answer, setanswer] = useState('');
  let random = 0;

  useEffect(() => {
    random = Math.floor(Math.random() * allWords.length);
    setwords([]);
    setanswer(allWords[random]);
  }, []);

  return (
    <SafeAreaView className="flex flex-1 bg-white dark:bg-[#1D1F25]">
      <View className=" h-14 justify-center items-center flex-row w-full mt-48">
        <View className="items-center">
          <Text>
            {5 - answerCount >= 1
              ? 5 - answerCount + ' denemeden sonra tekrar deneyebilirsiniz.'
              : ''}
            {/* {5 - answerCount} denemeden sonra tekrar yeni kelime alabilirsiniz. */}
          </Text>
        </View>
        {answerCount > 4 ? (
          <TouchableOpacity
            className="bg-blue-500 p-2.5 rounded-3xl"
            onPress={() => {
              //@ts-ignore
              alert('Cevap: ' + answer);
              setanswerCount(0);
              setwords([]);
              setanswer(
                allWords[
                  (random = Math.floor(Math.random() * allWords.length))
                ],
              );
            }}>
            <Text className="text-white">Tekrar dene</Text>
          </TouchableOpacity>
        ) : null}
      </View>
      <View className=" h-14 justify-center items-center flex-row w-full mt-2">
        <TextInput
          placeholder="Kelimeyi giriniz..."
          keyboardType="web-search"
          className="h-10 w-52 p-2 border-2 rounded-2xl"
          value={word}
          onChangeText={e => setword(e)}
        />
        <TouchableOpacity
          className="bg-green-500 p-2 rounded-2xl ml-2"
          onPress={() => {
            if (word.length == 5) {
              setword('');
              setwords([word, ...words]);
              if (answer !== word) {
                setanswerCount(answerCount + 1);
              }
            } else {
              //@ts-ignore
              alert('5 harfli bir kelime giriniz.');
            }
          }}>
          <Text>Kontrol Et</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={words}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => (
          <View className=" justify-center items-center">
            <View className="flex-row mb-4 ml-2">
              {item.split('').map((items, i) => {
                if (answer[i] === items.toLowerCase()) {
                  return (
                    <View
                      className={`rounded-xl mr-2 bg-green-500 p-5`}
                      key={i}>
                      <Text className="">{items.toLowerCase()}</Text>
                    </View>
                  );
                } else if (
                  answer.toLowerCase().indexOf(items.toLowerCase()) !== -1
                ) {
                  return (
                    <View
                      className={`rounded-xl mr-2  bg-yellow-200 p-5`}
                      key={i}>
                      <Text className="">{items.toLowerCase()}</Text>
                    </View>
                  );
                } else {
                  return (
                    <View className={`rounded-xl mr-2 bg-gray-400 p-5`} key={i}>
                      <Text className="">{items.toLowerCase()}</Text>
                    </View>
                  );
                }
              })}
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Game;
