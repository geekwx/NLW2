import React from 'react';
import { Image, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

function TeacherItem(){
    return (
        <View  style={styles.container}>
            <View style={styles.profile} >
                <Image 
                style={styles.avatar}
                source={{uri: 'https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/250px-001Bulbasaur.png'}}
                />
                <View  style={styles.profileInfo}>
                    <Text style={styles.name}> Prof Bulbasauro</Text>
                    <Text style={styles.subject}>Matematica</Text>
                </View>
            </View>
            <Text style={styles.bio}>
                Bulba saaaauu, bulba, bulbaaaa, bulba sauuuurr
            </Text>
            <View  style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora { '   '}
                    <Text style={styles.priceValue}> R$ 20,00</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        {/* <Image source={heartOutlineIcon} /> */}
                        <Image source={unfavoriteIcon} />
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
}

export default TeacherItem;