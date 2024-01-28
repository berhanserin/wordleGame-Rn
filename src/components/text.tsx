import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';

const text = ({ref}: {ref: any}) => {
  const [harf, setharf] = useState('');
  return (
    <TextInput
      ref={ref}
      value={harf}
      returnKeyType="next"
      onChangeText={e => setharf(e)}
      className="text-5xl h-16 w-10"
    />
  );
};

export default text;
// <View className="flex-row items-center justify-center">
//   {kelime.split('').map((item, i) => {
//     return (
//       <View
//         key={i}
//         className="h-[100px] w-[80px] bg-green-500 rounded-[30px] items-center justify-center ml-1">
//         <Textinput ref={ref1} />
//       </View>
//     );
//   })}
// </View>;
