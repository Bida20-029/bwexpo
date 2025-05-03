//dropdown menu

function toggleDropdown() {
  const menu = document.getElementById("dropdownMenu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

// Speakers Section

  document.querySelectorAll('.speaker-card').forEach(card => {
    card.addEventListener('click', () => {
      const bio = card.querySelector('.speaker-bio');
      bio.style.display = bio.style.display === 'block' ? 'none' : 'block';
    });
  });

  //Agenda cards

  function toggleAgenda(card) {
    // Close other cards
    document.querySelectorAll('.agenda-card').forEach(c => {
      if (c !== card) c.classList.remove('active');
    });
    // Toggle the clicked card
    card.classList.toggle('active');
  }




