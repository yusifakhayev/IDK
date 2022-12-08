import React from 'react'
import {Box, Text} from 'ink'
import SyntaxHighlight from 'ink-syntax-highlight'

export const Directories = ({file}: {file: string}): JSX.Element => {

    return <>
         <Box
             justifyContent='flex-end'
             alignItems='center'
             width='40%'
             height='60%'
         >
                 <Text
                    wrap='truncate'
                    italic
                 >
                     <SyntaxHighlight
                        code={file}
                        theme='dracula'
                     />
                 </Text>
         </Box>
    </>
}

