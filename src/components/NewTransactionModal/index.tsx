import * as Dialog from '@radix-ui/react-dialog'; 
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styled';
import * as z from 'zod'; 
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller} from 'react-hook-form';
import { api } from '../../lib/axios';

const newTransactionFormSchema = z.object({
    description: z.string(), 
    price: z.number(),
    category: z.string(), 
    type: z.enum(['income', 'outcome']),
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>; 

export function NewTransactionModal(){

    const {
        control, 
        register, 
        handleSubmit,
        reset, 

    } = useForm<NewTransactionFormInputs>({
        resolver: zodResolver(newTransactionFormSchema), 

        }) 

    async function handleCrateNewTransaction(data: NewTransactionFormInputs) {
      const { description, price, category, type} = data; 
     
    await api.post('transactions', {
        description, 
        price, 
        category, 
        type, 
        createdAt: new Date(), 
     })

     reset(); 

    }



    return (
        <Dialog.Portal> 
        <Overlay />
        
         <Content>
           <Dialog.Title>Nova Transação</Dialog.Title>
           
           <CloseButton>
            <X size={24}/> 

           </CloseButton>

           <form onSubmit={handleSubmit(handleCrateNewTransaction)}>
            <input 
            type="text" 
            placeholder="Descrição" 
            required
            {...register('description')} 
            />

            <input 
            type="number" 
            placeholder="Preço" 
            required
            {...register('price', {valueAsNumber: true})} 
            />

            <input 
            type="text" 
            placeholder="Categoria" 
            required
            {...register('category')} />

            <Controller
              control = {control}
              name ="type"
              render = {({ field }) => {
                return (    
            <TransactionType 
              onValueChange={field.onChange} 
              value={field.value}> 
            
              <TransactionTypeButton variant='income' value="income"> 
              <ArrowCircleUp size={24} />
                 Entrada 
              </TransactionTypeButton>


               <TransactionTypeButton variant='outcome' value="outcome" > 
               <ArrowCircleDown size={24} />
                  Saída
               </TransactionTypeButton>
            </TransactionType>
                 )

              }}
            
            /> 

            <button type="submit"> 
                Cadastrar
            </button>
            </form>

         </Content>
        </Dialog.Portal>

    )
}