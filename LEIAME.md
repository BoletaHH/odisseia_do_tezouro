# Tia Sónia e a Odisseia do Tezouro

App de caça ao tesouro em níveis. PWA, pensada primeiro para iPhone. Funciona só online.

## Ficheiros

| Ficheiro | Para que serve |
|---|---|
| `index.html` | A app toda: o motor e os dados dos níveis. É aqui que se mexe. |
| `manifest.webmanifest` | Nome, ícone e cores da app quando instalada. |
| `sw.js` | Service worker mínimo. Não guarda nada; só torna a app instalável. |
| `icons/` | Ícones do ecrã principal. |
| `assets/` | Logo, mapa e o papagaio Bacalhau. |

## Pôr online no GitHub Pages

1. Em github.com, **New repository**. Nome: `odisseia-tezouro`. Visibilidade **Public** (o Pages gratuito exige repositório público). Criar.
2. No repositório, **Add file → Upload files**. Arrastar os ficheiros e as pastas `icons/` e `assets/` para dentro. **Commit changes**.
3. **Settings → Pages**. Em *Build and deployment*, Source: **Deploy from a branch**. Branch: **main**, pasta **/ (root)**. **Save**.
4. Esperar 1 a 2 minutos. O endereço aparece no topo dessa mesma página:
   `https://<o-teu-utilizador>.github.io/odisseia-tezouro/`

## Instalar no iPhone

Abrir o endereço **no Safari** (não no Chrome nem dentro do Instagram ou WhatsApp), tocar em **Partilhar**, **Adicionar ao ecrã principal**, **Adicionar**.

## Atualizar a app todos os meses

Editar `index.html` no GitHub (ícone do lápis) ou voltar a carregar o ficheiro por cima, e **Commit changes**. Quem já tem a app instalada recebe a versão nova ao abrir, sem reinstalar nada. Às vezes é preciso fechar a app e voltar a abrir.

## Onde se mexe no conteúdo

Dentro do `index.html`, no bloco **DADOS DO JOGO**, logo a seguir a `<script>`. Tudo o que é jogo está lá: páginas, textos, perguntas, respostas e palavras passe. O resto do ficheiro é o motor e não precisa de ser tocado para acrescentar conteúdo.

### Identificação das páginas

`00` é a capa. Depois é `nível_fase`: `00_01` é o nível 0, fase 1; `01_01` é o nível 1, fase 1; `01_02` é a fase 2. O `rotulo` é o que aparece na barra de baixo.

### Peças já disponíveis

- `capa` — logo, subtítulo e botões.
- `nivel` — cabeçalho, regras, papagaio com falas, caixa de pista com resposta.
- `blocos` — página montada por peças: `nome`, `instalar`, `aviso`, `escolha`, `escala`, `vf`, `obvio`, `afirmacao`, `titulo`, `adivinha`, `reset`.
- `aviso` — página com um título só.

### Palavra passe num botão

No botão da capa, acrescentar um bloco `fechadura` com a password em `respostas` e os textos dos dois pop-ups. Serve em qualquer botão.

### Nome do jogador

Escrever `{nome}` em qualquer texto dos dados. A app troca pelo nome que o jogador guardou.

### Respostas

A validação ignora maiúsculas, acentos, espaços a mais e pontuação. `Z`, `z` e ` z. ` são a mesma coisa.

## O que fica guardado no telemóvel

Nome do jogador, perguntas já acertadas e a página onde ia. É isto que o botão `reset_` apaga. Nada disto sai do telemóvel: cada jogador tem o seu progresso e não há servidor nem contas.

## Limitação a saber

As respostas e as palavras passe estão dentro do `index.html`, que qualquer visitante pode ler no browser. Para um jogo de família não é problema; só não convém partilhar o repositório com quem vai jogar. Se um dia isto for mesmo importante, a única solução a sério é validar as respostas num servidor.
