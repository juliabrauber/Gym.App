import { Box, Image } from "native-base"
import React from "react"

export default function Storys({data}){
    return(
        <Box flex={1} padding={1}>
            <Box>
                <Image
                source={{uri: data.avatarUrl}}
                width={16}
                height={16}
                borderRadius={32}
                alt="Avatar url"
                />
            </Box>
        </Box>
    )
}
