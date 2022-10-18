import './titlebar.css';

import settingsIcon from '../../assets/setting_Titlebar.svg';
import nodeViewIcon from '../../assets/Graph_Titlebar.svg';
import { UniversalButton } from '../resuable/UniversalButton';
import { Button, Stack } from '@chakra-ui/react';

export function Titlebar () {
    return (
        <div data-tauri-drag-region className="titlebar">
            <Stack direction='row' spacing={4} align='right'>
                <Button colorScheme='teal'>
                    File
                </Button>
                <Button colorScheme='teal'>
                    Window
                </Button>
                <Button colorScheme='teal'>
                    Node Graph
                </Button>
                <Button colorScheme='teal'>
                    Settings
                </Button>
            </Stack>
        </div>
    )
}