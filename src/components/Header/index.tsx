import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import * as Dialog from '@radix-ui/react-dialog'; 

import logoImg from '../../assets/Logo (1).svg'

export function Header() {
    return (

   <HeaderContainer>
    <HeaderContent>

        <img src={logoImg} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>
        </Dialog.Root>

    </HeaderContent>
   </HeaderContainer>

    )

}