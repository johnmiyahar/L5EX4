import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, SectionList, Button, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4e5854',
  },
  button: {
    margin: 10,
    padding: 10,
  },
  opacityStyle: {
    borderWidth: 1,
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'lightgray',
    borderRadius: 10,
  },
  textStyle: {
    fontSize: 15,
    margin: 10,
    textAlign: 'left',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 2
  },
  headerText: {
    fontSize: 20,
    marginLeft: 10,
    fontWeight: 'bold',
    color: '#0',
  },
  imageStyle: {
    width: 100,
    height: 100,
    margin: 10,
  },
  appTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: 'black',
    color: 'white',
    borderWidth: 30
  }
});

const datasource = [
  {
    title: 'Productivity',
    bgColor: 'yellow',
    iconColor: 'black',
    iconName: 'clipboard',
    data: [
      {
        key: 'Notes',
        imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-apple-notes-icon-download-in-svg-png-gif-file-formats--logo-note-apps-pack-user-interface-icons-493153.png?f=webp&w=256',
      },
      {
        key: 'LEO 2.0',
        imageUrl: 'https://play-lh.googleusercontent.com/O19i1_Efn3svsDE5X9dUCVMFsVm0V27xeYbnptl-h_qY-QqTcl6jcnAJWwoKpe4mfmU',
      },
    ],
  },
  {
    title: 'Entertainment',
    bgColor: 'red',
    iconColor: 'black',
    iconName: 'play',
    data: [
      {
        key: 'YouTube',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/1384/1384060.png',
      },
      {
        key: 'TikTok',
        imageUrl: 'https://static.vecteezy.com/system/resources/previews/031/737/216/non_2x/tiktok-logo-tiktok-app-social-media-icons-free-png.png',
      },
    ],
  },
  {
    title: 'Social Media',
    bgColor: 'blue',
    iconColor: 'black',
    iconName: 'user',
    data: [
      {
        key: 'Instagram',
        imageUrl: 'https://e7.pngegg.com/pngimages/866/916/png-clipart-logo-computer-icons-instagram-instagram-application-logo-text-trademark.png',
      },
      {
        key: 'X',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/X_icon_2.svg/2048px-X_icon_2.svg.png',
      },
    ],
  },
  {
    title: 'Games',
    bgColor: 'green',
    iconColor: 'black',
    iconName: 'football',
    data: [
      {
        key: 'Brawl Stars',
        imageUrl: 'https://tiermaker.com/images/media/hero_images/2024/15338675/brawl-stars-app-icons-15338675/153386751704775215.png',
      },
      {
        key: 'Mobile Legends',
        imageUrl: 'https://cdn6.aptoide.com/imgs/e/9/f/e9fe49928d5ac18a5058a0725e354466_icon.png',
      },
    ],
  },
];

const renderItem = ({item}) => {
  return (
      <TouchableOpacity style={styles.opacityStyle}>
        <Text style={styles.textStyle}>{item.key}</Text>
        <Image source={{uri: item.imageUrl}} style={styles.imageStyle} />
      </TouchableOpacity>
  );
};

const App = () => {
  return (
      <View style={styles.container}>
        <Text style={styles.appTitle}>My Most Used Apps!</Text>
        <Button style={styles.button} title="Add Apps" onPress={() => {}} />
        <SectionList
            sections={datasource}
            renderItem={renderItem}
            renderSectionHeader={({section: {title, bgColor, iconColor, iconName}}) => (
                <View style={[styles.headerContainer, {backgroundColor: bgColor}]}>
                  <Icon name={iconName} size={20} color={iconColor} />
                  <Text style={styles.headerText}>{title}</Text>
                </View>
            )}
            keyExtractor={(item) => item.key}
        />
      </View>
  );
};

export default App;
