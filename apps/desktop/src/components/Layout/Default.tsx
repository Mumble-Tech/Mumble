import {Toolbar} from "../Toolbar";
import { Container } from '@chakra-ui/react';
interface LayoutProps {
  children: React.ReactNode;
}
export const DefaultLayout = ({children}: LayoutProps) => {
  return (
    <div>
      <header>
        <Toolbar />
      </header>
      <main>
        <Container bg='blue.600' className='bg-blue-200'>
          {children}
        </Container>
      </main>
    </div>
  )
};
