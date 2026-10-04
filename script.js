const artists = [
  {
    id: 'kishlak',
    name: 'Кишлак',
    title: 'Сквозь шум и тишину',
    description:
      'Кишла́к (настоящее имя — Макси́м Серге́евич Фисе́нко; род. 14 декабря 1998, Североморск) — российский музыкантДо проекта «Кишлак» Фисенко успел создать и закрыть много других проектов: «Автостопом по фазе сна», «Bisexual From The Village», «Солнечный Муслим», «Русалочье урочище», «писък» и другие малоизвестные',
    image:
      'https://i.pinimg.com/736x/dc/31/3d/dc313d867538a32b693d0af292995c78.jpg',
    genre: 'Хип-Хоп / альтернативный рэп',
    era: '2020 — настоящее время',
    mood: 'мрачный · агрессивный · атмосферный',
    tracks: ['Потолок', 'Город в пламени', 'Свет в окне']
  },
  {
    id: 'madk1d',
    name: 'Madk1d',
    title: 'Сквозь рваный темп',
    description:
      'Серков Марк Робертович (родился 11 апреля 2002 года в Томске) — российский музыкальный исполнитель. Карьеру музыканта начал в 2020 году, первую аудиторию обрёл после фита с LILCAK3 на треке «КАТЮХА».',
    image:
      'https://i.pinimg.com/736x/2b/33/81/2b3381d6ad1a6082ba41de7ebaedb78f.jpg',
    genre: 'Рэп / клубный бит',
    era: '2019 — настоящее время',
    mood: 'холодный · дерзкий · быстрый',
    tracks: ['Силы на нуле', 'Под холодным светом', 'Внутри лома', 'Мой темп']
  },
  {
    id: 'dark-prince',
    name: 'Тёмный принц',
    title: 'Король ночного настроения',
    description:
      'Российский рэп-исполнитель и продюсер. Свою деятельность под ником тёмный принц начал весной 2024 года. Подписант лейбла TRV. Также он имеет альтер эго ashleyrossmith.',
    image:
      'https://i.pinimg.com/736x/1b/f6/94/1bf6948ff8d71fc5d691eb3a58fb36d3.jpg',
    genre: 'Тёмный хип-хоп / мрачная атмосфера',
    era: '2018 — настоящее время',
    mood: 'тёмный · атмосферный · мощный',
    tracks: ['Ночь без сна', 'Король теней', 'Серый день', 'Внутри костра']
  },
  {
    id: 'villian',
    name: 'Villian',
    title: 'Резкая энергия',
    description:
      'Villian — это образ резкого, уверенного и агрессивного звучания. В его музыке ощущение движения и бескомпромиссной линии остаётся с собой надолго.',
    image:
      'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=900&q=80',
    genre: 'Рэп / тёмная энергия',
    era: '2021 — настоящее время',
    mood: 'жесткий · мрачный · мощный',
    tracks: ['Ненастье', 'Без фона', 'Острый взгляд', 'Темный маршрут']
  },
  {
    id: 'cupsize',
    name: 'Cupsize',
    title: 'Лирика и образ',
    description:
      'Cupsize — музыка о настроении, форме и ритмическом внутреннем рисунке. Его исполнение заметно своей особенной подачей и артистической глубиной.',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
    genre: 'Современный рэп / эмоциональный стиль',
    era: '2020 — настоящее время',
    mood: 'эмоциональный · насыщенный · стильный',
    tracks: ['Мигает свет', 'Тонкая грань', 'Снова ночь', 'Тени в лобби']
  }
];

function renderArtistCards() {
  const grid = document.getElementById('artistGrid');
  if (!grid) return;

  grid.innerHTML = artists
    .map(
      (artist) => `
        <a class="artist-card" href="artist.html?artist=${artist.id}" aria-label="Открыть страницу ${artist.name}">
          <img src="${artist.image}" alt="${artist.name}" />
          <div class="artist-card-content">
            <h3>${artist.name}</h3>
            <p>${artist.title}</p>
          </div>
        </a>
      `
    )
    .join('');
}

function renderArtistPage() {
  const bodyPage = document.body.dataset.page;
  if (bodyPage !== 'artist') return;

  const params = new URLSearchParams(window.location.search);
  const artistId = params.get('artist');
  const artist = artists.find((item) => item.id === artistId) || artists[0];

  const nameEl = document.getElementById('artistName');
  const titleEl = document.getElementById('artistTitle');
  const descEl = document.getElementById('artistDescription');
  const imageEl = document.getElementById('artistImage');
  const genreEl = document.getElementById('artistGenre');
  const eraEl = document.getElementById('artistEra');
  const moodEl = document.getElementById('artistMood');
  const tracksEl = document.getElementById('artistTracks');

  if (!nameEl || !titleEl || !descEl || !imageEl || !genreEl || !eraEl || !moodEl || !tracksEl) return;

  nameEl.textContent = artist.name;
  titleEl.textContent = artist.title;
  descEl.textContent = artist.description;
  imageEl.src = artist.image;
  imageEl.alt = artist.name;
  genreEl.textContent = artist.genre;
  eraEl.textContent = artist.era;
  moodEl.textContent = artist.mood;
  tracksEl.innerHTML = artist.tracks.map((track) => `<li>${track}</li>`).join('');
}

renderArtistCards();
renderArtistPage();
