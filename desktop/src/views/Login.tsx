import React from 'react';
import axios from  'axios';
import { FormLabel, Input,  Stack, FormControl, Container, Button } from "@chakra-ui/react";

export function LoginView () {
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const processInput = (inp: string, type: string) => {
        switch(type) {
            case 'username':
                setUsername(inp)
                break;
            case 'email':
                setEmail(inp)
                break;
            case 'password': 
                setPassword(inp)
                break;
            default:
                break;
        }
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        let newUser = {
            username: username,
            email: email,
            password: password,  // await axios.post('some route', password)
            login: true
        }

        console.log(newUser);

        // let createUser = await axios.post('some route', newUser);
    }

    return (
        <Container maxW={'full'} maxH={'full'} bg='#9B94FF'>
            <FormControl 
                style={{
                    padding: '20px'
                }}
                maxW={'full'} maxH={'full'}
            >    
                <Stack spacing={2} bg=''>
                    <FormLabel>Username</FormLabel> 
                    <Input type='text' onChange={(e: any) => { processInput(e.value, 'username') }} />
                    <FormLabel>Email</FormLabel> 
                    <Input type='email' onChange={(e: any) => { processInput(e.value, 'email') }} />
                    <FormLabel>Password</FormLabel> 
                    <Input type='password' onChange={(e: any) => { processInput(e.value, 'password') }} />
                    <Button onClick={handleSubmit} >Login</Button>
                </Stack>
            </FormControl>
        </Container>
        
    )
}