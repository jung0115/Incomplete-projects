import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default class Day_and_Cal extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            dday: new Date("March 1, 2021 16:18:24")
        }
    }
    
    dday_Cal() {
        const distance = new Date().getTime() - this.state.dday.getTime();
        const remain = Math.floor(distance/(1000*60*60*24));
        if(remain < 0) {
            return 'D'+remain;
        } else if(remain>0) {
            return 'D+'+remain;
        } else if(remain === 0) {
            return 'D-day';
        }
    }

    render() {
        return (
            <View style = {styles.container}>
                <View style = {styles.cutflex1}>
                    <Text style = {styles.dayFont}>
                        {this.dday_Cal()}
                    </Text>
                </View>
                <View style = {styles.cutflex2}>
                    <Ionicons
                        size = {50}
                        name = "calendar-sharp"
                        color = "black"
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row"
    },
    cutflex1: {
        flex: 1,
        alignItems: "flex-start",
        padding: 10
    },
    cutflex2: {
        flex: 1,
        alignItems: "flex-end",
        padding: 5
    },
    dayFont: {
        fontSize: 40
    }
});