# Aust Mídia — HTML funcional baseado na arte aprovada

Abra `index.html`. O site é estático, sem dependências de instalação ou etapa de compilação.

## Estrutura
- `index.html`: textos e elementos reais da página, clientes e projetos.
- `styles.css`: aparência e adaptação para celular.
- `script.js`: menu e reprodução de vídeos em janela modal.
- `assets/`: marca, imagens e vídeos locais.
- `logos/`: arquivos individuais de marcas disponíveis no projeto original.

Não utiliza a imagem da página como fundo nem um mapa de recortes. Os painéis, timeline, botões e títulos são elementos independentes em HTML/CSS.

## Funcionalidades
- Menu com navegação por seções e versão móvel.
- Cards de serviços abrem os exemplos diretamente, sem seção extra de portfólio.
- Vídeos locais com controles; vídeo do YouTube reaproveitado do repositório original.
- Janela de vídeo com fechamento por botão ou Escape e retorno do foco ao botão original.
- E-mail abre o aplicativo de correio; Instagram abre o perfil original. Não há formulário com envio fictício.

## Antes de publicar
Os dez clientes sem arquivo de marca individual estão identificados por seus nomes em texto; não foram inventados logotipos. Para fidelidade final dessas marcas, substitua pelos arquivos oficiais. A ordem aprovada está mantida.

O YouTube depende de internet e pode exigir abertura direta quando usado por arquivo local. O site fornece esse link alternativo. Os vídeos locais funcionam sem internet.

Os contatos vieram do repositório `laistimes/Aust-Midia-Web-Site`: lais.times@austmidia.art e instagram.com/amidiapoa. Revise antes de publicar.

## Substituir o site no GitHub

1. Extraia o ZIP no computador.
2. Abra https://github.com/laistimes/Aust-Midia-Web-Site e selecione a branch usada pelo GitHub Pages (atualmente main).
3. Em Add file → Upload files, envie o conteúdo extraído diretamente na raiz: index.html, styles.css, script.js, favicon.svg, CNAME, robots.txt e as pastas assets e logos. Não envie apenas o ZIP nem coloque o site dentro de outra pasta.
4. Confirme a substituição dos arquivos existentes e conclua em Commit changes.
5. Aguarde a publicação do GitHub Pages e confira https://austmidia.art. Se aparecer a versão antiga, atualize com Ctrl+F5.

O CNAME incluído mantém o domínio austmidia.art, conferido no repositório em 01/10/2026. Preserve as configurações existentes de Pages e DNS. Arquivos antigos com outros nomes podem permanecer: a nova página usa somente os arquivos deste pacote. A pasta .github e outros arquivos de configuração do repositório não precisam ser apagados.

Pacote baseado na versão aprovada, sem a seção Em cena, com contraste da Prohub ajustado e contatos confirmados. Nenhuma alteração remota ou publicação foi feita nesta entrega.
