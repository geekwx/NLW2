import React from 'react';
import { View } from 'react-native';
import PageHeader from '../../components/PageHeader';
import TeacertItem from '../../components/TeacherItem';


import styles from './styles';

function TeacherList(){
    return (
    <View style={styles.container}>
        <PageHeader title="Proffys disponiveis"/>

        <TeacertItem />
    </View>);
}

export default TeacherList;