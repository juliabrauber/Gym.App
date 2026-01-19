import React from "react";
import { Box, Heading, Image, Text, VStack } from "native-base";


export default function Feed({ data }) {
    return (
        <Box
            flex={1}
            padding={8}
            flexDirection={'row'}
            backgroundColor={'#e0e0e0'}
            borderRadius={4}
            marginRight={7}
        >
           <VStack style={{ alignItems:'center'  }}>
                <Image
                    source={{ uri: data.avatarUrl }}
                    marginBottom={2}
                    width={10}
                    height={10}
                    borderRadius={4}
                    alt="Avatar url"/>
             
                <Heading size="sm" >
                   {data.fullName}
                </Heading>
                <Text numberOfLine={2}>
                    Próximo a 300 M
                </Text>
                </VStack>
        </Box>
    );
}
