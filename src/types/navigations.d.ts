import {NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackScreenProps} from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  Game: undefined;
};

export type ProfileProps = NativeStackScreenProps<RootStackParamList>;
