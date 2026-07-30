const id = (new URLSearchParams(location.search).get('id') || 'A001').toUpperCase();
let PET = null;

fetch('pets/' + id + '.json').then(r => r.json()).then(data => {
  PET = data;
  petName.textContent = PET.name;
  petMeta.textContent = `${PET.gender} ${PET.species} • ${PET.born} • NFC ID:${PET.nfcId}`;
  petStatus.textContent = PET.vaccinated ? 'Vaccinated' : 'Not Vaccinated';
  petAllergy.textContent = 'Allergy: ' + PET.allergy;
  petNotes.textContent = 'Notes: ' + PET.notes;
  petOwner.textContent = 'Owner: ' + PET.owner;
  petPhoto.src = PET.photo;
  waButton.href = `https://wa.me/${PET.phone}?text=${encodeURIComponent('Hi, I found ' + PET.name)}`;
  callButton.href = `tel:+${PET.phone}`;
  if (PET.sound) petSound.src = PET.sound;
  if (PET.video) petVideo.src = PET.video;
}).catch(() => document.body.innerHTML = '<h2>Pet profile not found</h2>');

function playSound() {
  if (!PET || !PET.sound) return;
  petSound.currentTime = 0;
  petSound.play();
}

function openVideo() {
  if (!PET || !PET.video) return;
  videoOverlay.classList.add('open');
  petVideo.play();
}

function closeVideo() {
  petVideo.pause();
  petVideo.currentTime = 0;
  videoOverlay.classList.remove('open');
}
