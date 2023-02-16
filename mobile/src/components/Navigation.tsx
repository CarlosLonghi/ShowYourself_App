import { View, Text } from 'react-native'
import Video from '../assets/video-icon.svg'
import Lyric from '../assets/lyric-icon.svg'
import Music from '../assets/music-icon.svg'

export function Navigation(){
  return (
    <View className='w-1/5 flex flex-col justify-end bg-zinc-400'>
      <View className='justify-items-center'>
        <Video/>
        <Text className='text-center text-white text-lg font-extrabold'>2.8</Text>
      </View>

      <View>
        <Lyric/>
        <Text className='text-center text-white text-lg font-extrabold'>4.2</Text>
      </View>

      <View>
        <Music/>
        <Text className='text-center text-white text-lg font-extrabold'>3.3</Text>
      </View>
    </View>
  )
}