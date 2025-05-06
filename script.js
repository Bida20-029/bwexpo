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

function openTab(evt, tabName) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
      }
      document.getElementById(tabName).style.display = "block";
      evt.currentTarget.classList.add("active");
    }



