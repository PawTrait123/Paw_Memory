const id=(new URLSearchParams(location.search).get('id')||'A001').toUpperCase();
fetch('pets/'+id+'.json').then(r=>r.json()).then(PET=>{
petName.textContent=PET.name;
petMeta.textContent=`${PET.gender} ${PET.species} • ${PET.born} • NFC ID:${PET.nfcId}`;
petAllergy.textContent='Allergy: '+PET.allergy;
petNotes.textContent='Notes: '+PET.notes;
petOwner.textContent='Owner: '+PET.owner;
petPhoto.src=PET.photo;
waButton.href=`https://wa.me/${PET.phone}?text=${encodeURIComponent('Hi, I found '+PET.name)}`;
callButton.href=`tel:+${PET.phone}`;
}).catch(()=>document.body.innerHTML='<h2>Pet profile not found</h2>');
