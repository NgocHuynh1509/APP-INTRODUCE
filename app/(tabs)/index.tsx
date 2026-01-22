import React from 'react';
import { StyleSheet, Image, Platform } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

/**
 * Trang Homepage giới thiệu bản thân.
 * Đây là trang chính của ứng dụng sau khi qua màn hình Intro.
 */
export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/home.jpg')}
          style={styles.reactLogo}
          resizeMode="cover"
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">
          Welcome to my app!!
        </ThemedText>
      </ThemedView>


      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Giới thiệu bản thân</ThemedText>
        <ThemedText>
          Xin chào, em tên Huỳnh Gia Dễm Ngọc. Em đang cố gắng để trở thành một lập trình viên trong
          tương lai. Mong mọi người giúp đỡ em trong quá trình này.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Kỹ năng</ThemedText>
        <ThemedText>
          • React Native & Expo{"\n"}
          • TypeScript / JavaScript{"\n"}
          • UI/UX Design{"\n"}
          • Web Development
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Sở thích</ThemedText>
        <ThemedText>
          Coi phim, nghe nhạc, lướt tiktok.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    width: '100%',
    height: '100%',
  }

});
