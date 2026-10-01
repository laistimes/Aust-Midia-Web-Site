'use strict';
const menu=document.querySelector('.menu-toggle');
const navigation=document.querySelector('#navigation');
function closeMenu(){menu.setAttribute('aria-expanded','false');navigation.classList.remove('open');}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));navigation.classList.toggle('open',open);});
navigation.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});
const dialog=document.querySelector('#video-dialog'),player=document.querySelector('#player'),fallback=document.querySelector('#video-fallback');
let opener;
document.querySelectorAll('[data-video],[data-youtube]').forEach(button=>button.addEventListener('click',e=>{
 e.preventDefault();
 opener=button;player.replaceChildren();fallback.replaceChildren();document.querySelector('#video-title').textContent=button.dataset.title||'Vídeo da Aust Mídia';
 if(button.dataset.video){const video=document.createElement('video');video.src=button.dataset.video;video.controls=true;video.playsInline=true;video.preload='metadata';player.append(video);const a=document.createElement('a');a.href=button.dataset.video;a.textContent='Abrir vídeo em outra aba';a.target='_blank';a.rel='noopener';fallback.append(a);}
 else{const iframe=document.createElement('iframe');iframe.src=`https://www.youtube-nocookie.com/embed/${button.dataset.youtube}?rel=0`;iframe.title='Vídeo da Aust Mídia';iframe.allow='fullscreen; picture-in-picture; encrypted-media';iframe.allowFullscreen=true;iframe.referrerPolicy='strict-origin-when-cross-origin';player.append(iframe);const a=document.createElement('a');a.href=`https://www.youtube.com/watch?v=${button.dataset.youtube}`;a.target='_blank';a.rel='noopener noreferrer';a.textContent='Se preferir, assista diretamente no YouTube ↗';fallback.append(a);}
 dialog.showModal();
}));
document.querySelector('#close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const b=dialog.getBoundingClientRect();if(e.clientX<b.left||e.clientX>b.right||e.clientY<b.top||e.clientY>b.bottom)dialog.close();}});
dialog.addEventListener('close',()=>{player.querySelector('video')?.pause();player.replaceChildren();opener?.focus();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&navigation.classList.contains('open')){closeMenu();menu.focus();}});
