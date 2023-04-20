Este projeto consiste em uma aplicação web que oferece funcionalidades de autenticação com e-mail e senha, recuperação de senha e upload de um arquivo CSV contendo documento e saldo para usuários. Os dados são salvos em uma tabela com documento, saldo e data e, caso o CSV contenha mais de uma linha para um mesmo usuário, a aplicação somará os saldos.

Além disso, caso um novo CSV seja enviado no mesmo dia, a aplicação excluirá logicamente os saldos anteriores (usando um campo deletedAt) e criará novos registros. 

Para utilizar a aplicação, basta realizar o login com suas credenciais, depois de cadastrado, e acessar a tela de upload de arquivos, onde é possível verificar todos os uploads realizados em dias diferentes e os valores de saldo correspondentes.

Caso tenha esquecido sua senha, utilize a funcionalidade de recuperação de senha para redefini-la(integração ainda não realizada) estão prontos para integração). Esta aplicação foi desenvolvida utilizando tecnologias como React e está quase pronta para ser utilizada em produção. Para executar a aplicação em sua máquina local, basta fazer o download do repositório e na pasta do diretório.
npm i

depois de instalados os pacotes, é possível utilizar a linha de comando npm start.

existe outro repositório no meu perfil onde está localizada a API.