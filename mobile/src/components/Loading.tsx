import { ActivityIndicator, View } from "react-native";

export function Loading (){

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#121212'}}
    >
      <ActivityIndicator color='#D4CFCF'/>
    </View>
  )
}