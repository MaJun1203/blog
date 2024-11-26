<template>
    <div>
      <audio-player :audio="audio" />
    </div>
  </template>
  
  <script>
  import AudioPlayer from 'vue-audio-player'
  
  export default {
    components: {
      AudioPlayer
    },
    data() {
      return {
        audio: [
          {
            name: 'My Song',        // 歌曲名称
            artist: 'Artist Name',  // 歌手
            src: '/path/to/your/music.mp3', // 音频文件路径
            cover: '/path/to/cover.jpg',    // 可选封面图
          }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  /* 可根据需求自定义样式 */
  </style>
  