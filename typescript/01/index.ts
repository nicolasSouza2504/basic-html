let message: string = 'Hello, TypeScript!';

console.log(message);

//1. O que é TypeScript e quais são suas principais vantagens em relação ao
// JavaScript? Cite pelo menos duas vantagens.
// 2. Analise o seguinte código em TypeScript e explique qual é a diferença
// em relação ao equivalente em JavaScript:
// 3. Quais os passos necessários para instalar o TypeScript e configurar um
// novo projeto? Liste pelo menos três etapas.
// 4. O que é o arquivo tsconfig.json e qual a sua importância na
// configuração do TypeScript? Cite pelo menos duas configurações que
// podem ser definidas nesse arquivo.
// 5. Depois de criar um arquivo TypeScript (index.ts), quais comandos
// você deve executar para compilar e rodar o código? Descreva
// brevemente o que acontece em cada etapa.


// 1. TypeScript é uma linguagem de programação que adiciona tipagem estática ao javascript
// 2. A diferença é que o código no typescript é tipado, e aceita apenas variaveis do tipo number como param. Caso receba uma string como no exemplo, gerará um erro de compilação no código.
// 3. npm install -g typescript(comando de instalação do typescript do node packager manager), tsc --init cria um arquivo de configuração do typescript, e tsc index.ts compila o arquivo typescript para javascript
// 4. O arquivo tsconfig.json é um arquivo de configuração do typescript, onde é possível definir configurações como o target, que define a versão do javascript que será gerada, e o outDir, que define o diretório de saída dos arquivos gerados.
// 5. tsc fileToCompile.ts este comando compila o arquivo typescript para javascript, e node fileToCompile.js executa o arquivo javascript gerado.
