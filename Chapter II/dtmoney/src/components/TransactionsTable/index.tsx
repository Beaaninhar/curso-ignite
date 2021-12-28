import * as S from './styles'

export function TransactionsTable() {

    return (
        <S.Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td >Desenvolvimento de WebSite</td>
                        <td className='deposit'>
                            R$12.000,00
                        </td>
                        <td>Desenvolvimento</td>
                        <td>
                            20/04/2000
                        </td>
                    </tr>
                    
                    <tr>
                        <td >Financiamento</td>
                        <td className='withdraw'>
                            - R$5.000,00
                        </td>
                        <td>Casa</td>
                        <td>
                            12/03/2019
                        </td>
                    </tr>
                </tbody>
            </table>
        </S.Container>
    )
}