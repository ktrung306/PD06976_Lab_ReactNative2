import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { styles } from './styles';

const Header = ({
    title,
    iconLeft,
    iconRight,
    onPressRight,
    onPressLeft,
    leftComponent,
    centerComponent,
    rightComponent,
    iconLeftColor,
    iconRightColor,
    leftIconSize,
    rightIconSize,
    numberOfLines,
    Navigator
}) => {
    const renderLeft = () => {
        return (
            leftComponent || (
                <View>
                    {iconLeft ? (
                        <Pressable hitSlop={15} onPress={onPressLeft}>
                            <Image style={styles.back} source={iconLeft} tintColor={iconLeftColor} />
                        </Pressable>
                    ) : (
                        <View style={{ width: leftIconSize, height: leftIconSize }} />
                    )}
                </View>
            )
        );
    };

    const renderCenter = () => {
        return (
            centerComponent || (
                <View style={styles.containerCenter}>
                    <Text style={styles.title} numberOfLines={numberOfLines}>
                        {title}
                    </Text>
                </View>
            )
        );
    };

    const renderRight = () => {
        return (
            rightComponent || (
                <View style={styles.containerRight}>
                    {iconRight ? (
                        <Pressable hitSlop={15} onPress={onPressRight}>
                            <Image style={styles.avata} source={iconRight} tintColor={iconRightColor} />
                        </Pressable>
                    ) : (
                        <View style={{ width: rightIconSize, height: rightIconSize }} />
                    )}
                </View>
            )
        );
    };

    return (
        <View style={[styles.container]}>
            {renderLeft()}
            {renderCenter()}
            {renderRight()}
        </View>
    );
};

export default Header;
