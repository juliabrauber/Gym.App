import React from "react";
import { Box, Heading, Image, Pressable } from "native-base";
import { useNavigation } from '@react-navigation/native';

export default function AgendAluno({data}){
  const navigation = useNavigation();

  const handleIconClick = () => {
    navigation.navigate('CheckInAluno');
  };

  return (
    <Box flex={1} padding={1}>
      <Pressable onPress={handleIconClick}>
        <Box style={{ alignItems: 'center' }}>
          <Image
            source={{ uri: data.avatarUrl }}
            width={16}
            height={16}
            borderRadius={32}
            alt="Avatar url"
          />
          <Heading size="sm">
            {data.fullName}
          </Heading>
        </Box>
      </Pressable>
    </Box>
  );
}
