# Tia Sónia e a Odisseia do Tezouro

App de caça ao tesouro em níveis. PWA, pensada primeiro para iPhone. Funciona só online.

## Ficheiros

| Ficheiro | Para que serve |
|---|---|
| `index.html` | A app toda: o motor e os dados do jogo. É aqui que se mexe. |
| `manifest.webmanifest` | Nome, ícone e cores da app quando instalada. |
| `sw.js` | Service worker mínimo. Não guarda nada; só torna a app instalável. |
| `icons/` | Ícones do ecrã principal. |
| `assets/` | Logo, mapa, o papagaio Bacalhau e os bilhetes. |

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

## Páginas atuais

| Página | O que é |
|---|---|
| `00` | Capa com o logo e os botões Nível 0 e Nível 1 (este com palavra passe) |
| `00_01` | Nível 0 — "Antes de Zarpar!": reset, instalação e 20 adivinhas de treino |
| `01_01` | Nível 1 — o Bacalhau, o bilhete do camarote e o Código de Piratas |
| `01_02` | Ilha 1 — Encontro com o Bacalhau (Adivinha 1) |
| `01_03` | A resposta do Bacalhau e o Bilhete 1 |
| `01_04` | Ilha 2 — Ilha do Mago Trapalhão (Adivinha 2) |
| `01_05` | Ilha 3 — Ilha do Baile de Máscaras (Adivinha 3) |
| `01_06` | Ilha 4 — Ilha do Escrivão Desconfiado (Adivinha 4) |
| `01_07` | Ilha 5 — Ilha do Camarote Arrumado (Adivinha 5) |
| `01_08` | Ilha 6 — Ilha da Rosa dos Ventos (Adivinha 6) |
| `01_09` | Ilha 7 — Ilha do Telégrafo Naufragado (Adivinha 7) |
| `01_10` | Fim provisório: "OBRAS NO MAR" |

## Onde se mexe no conteúdo

Dentro do `index.html`, no bloco **DADOS DO JOGO**, a seguir ao primeiro `<script>`. Tudo o que é jogo está lá: páginas, textos, adivinhas, respostas e palavras passe. O resto é o motor e não precisa de ser tocado para acrescentar conteúdo.

### Identificação das páginas

`00` é a capa. Depois é `nível_fase`: `00_01` é o nível 0; `01_01` em diante são as cenas do nível 1. O `rotulo` é o que aparece na barra de baixo.

### Peças de página disponíveis

`cabecalho`, `texto`, `fala`, `papagaio`, `imagem`, `regras`, `pista`, `bilhete`, `avancar`, `botoes`, `adivinha`, `instalar`, `aviso`, `titulo`, `reset`.

Uma ilha nova é uma página nova com `cabecalho`, `texto`, `fala` e `pista`. Não é preciso código novo.

### Campos de uma `pista`

- `selo` e `sub`: o título e a linha pequena da caixa
- `enigma`: o enunciado
- `passos`: lista numerada (Ilha 6)
- `codigo` e `codigoLongo`: texto a decifrar em destaque (Ilhas 4 e 7)
- `instrucao`: a nota em moldura tracejada
- `pergaminho` e `pergaminhoAssinatura`: mensagem do Çparrow (Ilha 2)
- `fotos`: botões de imagens a comparar (Ilha 5)
- `respostas`: lista de respostas aceites
- `certo.bilhete`: faz o pop-up de acerto mostrar o botão do bilhete
- `destino`: a página seguinte

### Nome do jogador

Escrever `{nome}` em qualquer texto. A app troca pelo nome guardado.

### Respostas

A validação ignora maiúsculas, acentos, espaços a mais e pontuação.

## O que falta

- As duas fotografias da Ilha 5 (01_07). Os botões "Foto 1" e "Foto 2" mostram avisos até lá.
- O bloco do nome do jogador não está em nenhuma página, por isso o "Bem vindo de volta" nunca aparece.

## O que fica guardado no telemóvel

Nome do jogador, adivinhas já acertadas e a página onde ia. É isto que o botão `reset_` do nível 0 apaga. Nada sai do telemóvel: cada jogador tem o seu progresso e não há servidor nem contas.

## Limitação a saber

As respostas e as palavras passe estão dentro do `index.html`, que qualquer visitante pode ler no browser. Para um jogo de família não é problema; só não convém partilhar o repositório com quem vai jogar, apenas o endereço do site.
