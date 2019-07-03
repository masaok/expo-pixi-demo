import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  View,
} from 'react-native';

// import Expo from 'expo';
import { GLView } from 'expo-gl';
import { PIXI } from 'expo-pixi';

export default function DemoScreen() {
  return (
    <GLView
      style={{ flex: 1 }}
      onContextCreate={async context => {
        const app = new PIXI.Application({ context });
        const sprite = await PIXI.Sprite.fromExpoAsync(
          'http://i.imgur.com/uwrbErh.png',
        );
        app.stage.addChild(sprite);
      }}
    />
  );
}

DemoScreen.navigationOptions = {
  header: null,
};
