# Tia Sónia e a Odisseia do Tezouro

App de caça ao tesouro em níveis. PWA, pensada primeiro para iPhone. Funciona só online.

## Ficheiros

| Ficheiro | Para que serve |
|---|---|
| `index.html` | A app toda: o motor e os dados do jogo. É aqui que se mexe. |
| `manifest.webmanifest` | Nome, ícone e cores da app quando instalada. |
| `sw.js` | Service worker mínimo. Não guarda nada; só torna a app instalável. |
| `icons/` | Ícones do ecrã principal. |
| `assets/` | Logo, papagaio, bilhetes, cartazes e os dois desenhos em vetor (baú e chave). |

## Pôr online no GitHub Pages

1. Em github.com, **New repository**. Nome: `odisseia-tezouro`. Visibilidade **Public** (o Pages gratuito exige repositório público). Criar.
2. No repositório, **Add file → Upload files**. Arrastar os ficheiros e as pastas `icons/` e `assets/`. **Commit changes**.
3. **Settings → Pages**. Source: **Deploy from a branch**. Branch: **main**, pasta **/ (root)**. **Save**.
4. Esperar 1 a 2 minutos. O endereço aparece no topo dessa página:
   `https://<o-teu-utilizador>.github.io/odisseia-tezouro/`

## Instalar no iPhone

Abrir o endereço **no Safari** (não no Chrome nem dentro do Instagram ou WhatsApp), tocar em **Partilhar**, **Adicionar ao ecrã principal**, **Adicionar**.

## Atualizar a app

Editar `index.html` no GitHub (ícone do lápis) ou voltar a carregar o ficheiro por cima, e **Commit changes**. Quem já tem a app instalada recebe a versão nova ao abrir. Às vezes é preciso fechar a app e voltar a abrir.

## Páginas

| Página | O que é |
|---|---|
| `00` | Capa. Botão Nível 0 e botão Nível 1 (palavra passe: **bacalhau voador**) |
| `00_01` | Nível 0 — "Antes de Zarpar!": reset, instalação e 20 adivinhas de treino |
| `01_01` | O Bacalhau, o bilhete do camarote e o Código de Piratas |
| `01_02` | Ilha 1 — Encontro com o Bacalhau · Adivinha 1 |
| `01_03` | A resposta do Bacalhau e o Bilhete 1 |
| `01_04` | Ilha 2 — Mago Trapalhão · Adivinha 2 |
| `01_05` | Ilha 3 — Baile de Máscaras · Adivinha 3 |
| `01_06` | Ilha 4 — Escrivão Desconfiado · Adivinha 4 |
| `01_07` | Ilha 5 — Camarote Arrumado · Adivinha 5 |
| `01_08` | Ilha 6 — Rosa dos Ventos · Adivinha 6 |
| `01_09` | Ilha 7 — Telégrafo Naufragado · Adivinha 7 |
| `01_10` | Ilha 8 — Rádio Çparrow FM · Adivinha 8 |
| `01_11` | Ilha 9 — Cartazes Rasgados · Adivinha 9 |
| `01_12` | Ilha 10 — Navegador Perdido · Adivinha 10 |
| `01_13` | Ilha 11 — Poeta Preso · Adivinha 11 |
| `01_14` | Ilha 12 — Pergaminho Secreto · Adivinha 12 |
| `01_15` | Ilha 13 — Telemóvel Encalhado · Adivinha 13 |
| `01_16` | Ilha 14 — Naufrágio dos Cartógrafos · Adivinha 14 |
| `01_17` | Ilha 15 — Sereias Cantoras · Adivinha 15 |
| `01_18` | A Última Adivinha · a palavra do cadeado |
| `01_19` | O baú encontrado e a carta final |
| `01_20` | A confissão do Bacalhau |
| `01_21` | Fim do nível 1, a chave dourada, volta à capa |

## Onde se mexe no conteúdo

Dentro do `index.html`, no bloco **DADOS DO JOGO**, a seguir ao segundo `<script>`. Tudo o que é jogo está lá: páginas, textos, adivinhas, respostas e palavras passe. O resto é o motor e não precisa de ser tocado para acrescentar conteúdo.

### Identificação das páginas

`00` é a capa. Depois é `nível_fase`. O `rotulo` é o que aparece na barra de baixo.

### Peças de página disponíveis

`cabecalho`, `texto`, `fala`, `papagaio`, `imagem`, `enfeites`, `regras`, `pista`, `bilhete`, `avancar`, `botoes`, `adivinha`, `instalar`, `aviso`, `titulo`, `nome`, `reset`.

Uma ilha nova é uma página nova com `cabecalho`, `texto`, `fala` e `pista`. Não é preciso código novo.

### Campos de uma `pista`

- `selo` e `sub`: o título e a linha pequena da caixa
- `enigma`: o enunciado
- `poemas`: um ou mais poemas em pergaminho (Ilhas 11 e 15)
- `folhas`: páginas soltas de um diário (Ilha 10)
- `passos`: lista numerada de alíneas (Ilhas 6 e final)
- `coordenadas` e `coordenadasTitulo`: grelha de coordenadas (Ilha 14)
- `codigo` e `codigoLongo`: texto a decifrar em destaque (Ilhas 4, 7, 13, 14)
- `imagemEnigma`: imagem que é o próprio enigma, abre em ecrã cheio (Ilha 12)
- `fotos`: botões de imagens a comparar (Ilha 5)
- `pergaminho` e `pergaminhoAssinatura`: mensagem do Çparrow (Ilha 2)
- `instrucao`: a nota em moldura tracejada
- `respostas`: lista de respostas aceites
- `certo.bilhete`: faz o pop-up de acerto mostrar o botão do bilhete
- `destino`: a página seguinte

### Decoração temática

Cada página de ilha tem `marca` (motivo grande e ténue ao fundo) e blocos `enfeites` (filas de três motivos). Os 32 motivos estão desenhados no topo do `index.html`, dentro de `<svg class="repertorio">`. Para usar um, basta o nome sem o prefixo `m-`.

### Nome do jogador

Escrever `{nome}` em qualquer texto. A app troca pelo nome guardado.

### Respostas

A validação ignora maiúsculas, acentos, espaços a mais e pontuação.

## O que falta

- **Ilha 5 (01_07):** as duas fotografias do camarote. Os botões "Foto 1" e "Foto 2" mostram avisos até lá.
- **Ilha 14 (01_16):** a grelha 8×8 não tem solução única. Falta saber qual é o oitavo algarismo e a data que a diagonal deve dar, para gerar pistas que fechem.
- **Ilha 15 (01_17):** as respostas não aceitam um "e" entre os dois títulos.
- O bloco do nome do jogador não está em nenhuma página, por isso o "Bem vindo de volta" nunca aparece.
- O baú e a chave são desenhos em vetor, à espera de imagens no estilo das restantes, se quiseres.

## O que fica guardado no telemóvel

Nome do jogador, adivinhas já acertadas e a página onde ia. É isto que o botão `reset_` do nível 0 apaga. Nada sai do telemóvel: cada jogador tem o seu progresso e não há servidor nem contas.

## Limitação a saber

As respostas e as palavras passe estão dentro do `index.html`, que qualquer visitante pode ler no browser. Para um jogo de família não é problema; só não convém partilhar o repositório com quem vai jogar, apenas o endereço do site.
