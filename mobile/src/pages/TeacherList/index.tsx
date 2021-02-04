import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';


import styles from './styles';

function TeacherList(){
    return (
    <View style={styles.container}>
        <PageHeader title="Proffys disponiveis"/>
        <ScrollView style={styles.teacherList} 
        contentContainerStyle={{
            
        }}
        > 
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        </ScrollView>
    </View>);
}

export default TeacherList;