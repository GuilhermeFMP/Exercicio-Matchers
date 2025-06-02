# 🧪 Exercícios com Jest: Matchers e Cobertura de Código

Este repositório contém **10 exercícios práticos** para treinar testes automatizados com o **Jest**, focando nos **Matchers** e na **cobertura de código**.

---

## ✅ Instalação

1. Clone o repositório ou copie os arquivos:
   ```bash
   git clone https://github.com/seu-usuario/exercicios-jest.git
   cd exercicios-jest

📚 Enunciados dos Exercícios
1. Soma de números (Matchers básicos)
Implemente testes para a função soma(a, b):

Verifique se soma(2, 3) retorna 5

Verifique se soma(-1, 1) retorna 0

2. Comparação de objetos
A função criarUsuario(nome, idade) retorna um objeto com esses valores. Teste se:

O objeto retornado é igual ao esperado usando toEqual.

3. Null, defined e undefined
A função retornaNada() deve ser:

null

definida

não indefinida

Use os matchers toBeNull, toBeDefined, not.toBeUndefined.

4. Valores truthy e falsy
A função ehVazio(valor) retorna true se o valor for considerado "falsy". Teste com:

0, null, undefined, '' (devem retornar true)

Valores como 'texto' (devem retornar false)

5. Expressões regulares e strings
A função contémPalavra(frase, palavra) verifica se uma palavra está contida na frase.

Teste frases que contenham e não contenham a palavra.

6. Classificação por idade (cobertura condicional)
A função classificaIdade(idade) retorna:

'criança' se idade < 12

'adolescente' se idade < 18

'adulto' caso contrário

Crie testes cobrindo todas as condições.

7. Tratamento de exceções
A função dividir(a, b) deve:

Retornar a divisão de a / b

Lançar um erro "Divisão por zero" se b === 0

Crie testes cobrindo os dois casos.

8. Filtro de números pares
A função filtrarNumerosPares(lista) retorna um novo array com apenas os números pares. Teste:

Lista com pares e ímpares

Lista vazia

Lista com somente ímpares

9. Tradução de dias com switch
A função traduzDia(numero) retorna o nome do dia da semana com base em:

1: Domingo, 2: Segunda, ..., 7: Sábado

Caso contrário, deve retornar "Dia inválido"

Crie testes para todos os dias e para casos inválidos (ex: 0, 8, -1).

10. Função mockada
A função enviarMensagem(usuario, enviar) chama enviar(email, mensagem) com os valores:

usuario.email

A string 'Olá'

Use um mock do Jest para verificar se a função foi chamada com os argumentos corretos.