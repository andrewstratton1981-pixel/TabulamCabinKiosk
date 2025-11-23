
window.viewerImages = [];

function openViewer(index){
  if(!window.viewerImages || !window.viewerImages.length) return;
  const img = document.getElementById('viewer-image');
  if(!img) return;
  img.src = window.viewerImages[index];
  const backdrop = document.getElementById('viewer-backdrop');
  if(backdrop){
    backdrop.classList.add('active');
  }
}

function closeViewer(){
  const backdrop = document.getElementById('viewer-backdrop');
  if(backdrop){
    backdrop.classList.remove('active');
  }
}
