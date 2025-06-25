document.getElementById("animeForm").addEventListener("submit", function (e) {
    e.preventDefault(); 
  
    const query = document.getElementById("searchInput").value.trim();
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = ""; 
  
    if (query === "") {
      resultsContainer.innerHTML = "<p>Masukkan kata kunci anime.</p>";
      return;
    }
  
    const apiUrl = `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(query)}&limit=12`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const animes = data.data;
  
        if (animes.length === 0) {
          resultsContainer.innerHTML = "<p>Isi yg betul.</p>";
          return;
        }
  
        animes.forEach(anime => {
          const card = document.createElement("div");
          card.className = "anime-card";
  
          card.innerHTML = `
            <img src="${anime.images.jpg.image_url}" alt="${anime.title}" />
            <h3>${anime.title}</h3>
            <p><strong>Skor:</strong> ${anime.score || "N/A"}</p>
            <p><strong>Tahun:</strong> ${anime.year || "?"}</p>
          `;
  
          resultsContainer.appendChild(card);
        });
      })
      .catch(error => {
        console.error("Gagal fetch data:", error);
        resultsContainer.innerHTML = "<p>Terjadi kesalahan. Coba lagi nanti.</p>";
      });
  });
  